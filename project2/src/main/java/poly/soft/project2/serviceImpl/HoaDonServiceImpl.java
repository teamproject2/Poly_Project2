package poly.soft.project2.serviceImpl;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import poly.soft.project2.dto.ChiTietHoaDonDTO;
import poly.soft.project2.dto.HoaDonAdminDTO;
import poly.soft.project2.entity.ChiTietHoaDon;
import poly.soft.project2.entity.HangTrongKho;
import poly.soft.project2.entity.HoaDon;
import poly.soft.project2.entity.KichThuoc;
import poly.soft.project2.entity.SanPham;
import poly.soft.project2.enumeration.HDTrangThaiEnum;
import poly.soft.project2.enumeration.ThanhToanEnum;
import poly.soft.project2.repository.ChiTietHoaDonRepository;
import poly.soft.project2.repository.HangTrongKhoRepository;
import poly.soft.project2.repository.HoaDonRepository;
import poly.soft.project2.repository.KhachHangRepository;
import poly.soft.project2.repository.KichThuocRepository;
import poly.soft.project2.repository.SanPhamRepository;
import poly.soft.project2.service.HoaDonService;

@Service
@Transactional
public class HoaDonServiceImpl implements HoaDonService {

	private SimpleDateFormat timeformat = new SimpleDateFormat("dd/MM/yyyy");

	@Autowired
	HoaDonRepository hoaDonRepository;
	
	@Autowired
	KhachHangRepository khachHangRepository;
	
	@Autowired
	SanPhamRepository sanPhamRepository;
	
	@Autowired
	ChiTietHoaDonRepository chiTietHoaDonRepository;

	@Autowired
	HangTrongKhoRepository hangTrongKhoRepository;
	
	@Autowired
	KichThuocRepository kichThuocRepository;
	
	@Override
	public List<HoaDon> findAll() {
		return hoaDonRepository.findAll();
	}

	@Override
	public List<HoaDonAdminDTO> getListHoaDon() throws ParseException {
		List<Object[]> list = hoaDonRepository.getListHoaDon();
		List<HoaDonAdminDTO> listHDAdmin = new ArrayList<>();
		for (Object[] arr : list) {
			HoaDonAdminDTO hd = new HoaDonAdminDTO();
			hd.setId(Integer.parseInt(String.valueOf(arr[0])));
			hd.setNgay(timeformat.format(new Date(Timestamp.valueOf(String.valueOf(arr[1])).getTime())));
			hd.setTenKhachHang(String.valueOf(arr[2]));
			hd.setTenNhanVien(String.valueOf(arr[3]));
			HDTrangThaiEnum[] enums = HDTrangThaiEnum.values();
			int code = Integer.parseInt(String.valueOf(arr[4]));
			for (HDTrangThaiEnum en : enums) {
				if (en.getCode() == code) {
					hd.setTrangThai(en.getState());
					break;
				}
			}
			hd.setTongTien(Double.parseDouble(String.valueOf(arr[5])));
			int codeTT = Integer.parseInt(String.valueOf(arr[6]));
			ThanhToanEnum[] enumsTT = ThanhToanEnum.values();
			for (ThanhToanEnum en : enumsTT) {
				if (en.getCode() == codeTT) {
					hd.setThanhToan(en.getType());
					break;
				}
			}
			hd.setGhiChu(String.valueOf(arr[7]));
			listHDAdmin.add(hd);
		}
		return listHDAdmin;
	}

	@Override
	public HoaDon findById(int id) {
		Optional<HoaDon> hoaDon = hoaDonRepository.findById(id);
		return hoaDon.orElse(null);
	}

	@Override
	public HoaDon save(HoaDon hoaDon) {
		HoaDon hd = hoaDonRepository.save(hoaDon);
		return hd;
	}

	@Override
	public boolean delete(int id) {
		HoaDon hd = findById(id);
		if (hd == null || hd.getTrangThai().getState().equalsIgnoreCase("Hoàn thành")) {
			return false;
		} else {	
			List<ChiTietHoaDon> listCTHD = hd.getChiTietHoaDon();
			listCTHD.forEach(p -> {
				KichThuoc kt = kichThuocRepository.findByTenKichThuoc(p.getTenKichThuoc());
				HangTrongKho htk = hangTrongKhoRepository.findBySanPhamAndKichThuoc(p.getSanPham(), kt);
				if(htk == null) {
					HangTrongKho htkNew = new HangTrongKho();
					htkNew.setKichThuoc(kichThuocRepository.findByTenKichThuoc(p.getTenKichThuoc()));
					htkNew.setSanPham(sanPhamRepository.getOne(p.getSanPham().getId()));
					htkNew.setSoLuong(p.getSoLuong());
					hangTrongKhoRepository.save(htkNew);
				}else {
					htk.setSoLuong(htk.getSoLuong() + p.getSoLuong());					
					hangTrongKhoRepository.save(htk);
				}
				chiTietHoaDonRepository.deleteById(p.getId());
			});
			hoaDonRepository.deleteById(id);
			return true;
		}
	}

	@Override
	public HoaDon update(HoaDon hoaDon) {

		return null;
	}
	
	@Override
	public void createHoaDon(String ghiChu, int idKhachHang, double tongTien, List<ChiTietHoaDonDTO> list) {
		HoaDon hoaDon = new HoaDon();
		Date date = new Date();
		hoaDon.setNgay(date);
		hoaDon.setThanhToan(ThanhToanEnum.TIỀN_MẶT);
		hoaDon.setTrangThai(HDTrangThaiEnum.IN_PROGRESS);
		hoaDon.setGhiChu(ghiChu);
		hoaDon.setKhachHang(khachHangRepository.findById(idKhachHang).orElse(null));
		hoaDon.setTongTien(tongTien);
		HoaDon hd = hoaDonRepository.save(hoaDon);
		
		list.forEach(p -> {
			ChiTietHoaDon cthd = new ChiTietHoaDon();
			SanPham sp = sanPhamRepository.findById(p.getSanPhamId()).orElse(null);
			KichThuoc kt = kichThuocRepository.findByTenKichThuoc(p.getTenKichThuoc());
			cthd.setSanPham(sp);
			cthd.setSoLuong(p.getSoLuong());
			cthd.setTenKichThuoc(p.getTenKichThuoc());
			cthd.setThanhTien(p.getThanhTien());
			cthd.setHoaDon(hd);
			chiTietHoaDonRepository.save(cthd);
			
			HangTrongKho htk = hangTrongKhoRepository.findBySanPhamAndKichThuoc(sp, kt);
			if(htk.getSoLuong() > p.getSoLuong()) {
				htk.setSoLuong(htk.getSoLuong() - p.getSoLuong());
				hangTrongKhoRepository.save(htk);
			}else if(htk.getSoLuong() == p.getSoLuong()) {
				hangTrongKhoRepository.delete(htk);
			}
		});
	}

	@Override
	public void changeState(int id) {
		HoaDon hd = hoaDonRepository.findById(id).orElse(null);
		if(hd != null) {
			hd.setTrangThai(HDTrangThaiEnum.DONE);
			hd.setNgay(new Date());
		}
	}

}
