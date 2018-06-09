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

import poly.soft.project2.dto.HoaDonAdminDTO;
import poly.soft.project2.entity.HoaDon;
import poly.soft.project2.enumeration.HDTrangThaiEnum;
import poly.soft.project2.enumeration.ThanhToanEnum;
import poly.soft.project2.repository.HoaDonRepository;
import poly.soft.project2.service.HoaDonService;

@Service
@Transactional
public class HoaDonServiceImpl implements HoaDonService {

	private SimpleDateFormat timeformat = new SimpleDateFormat("dd/MM/yyyy");

	@Autowired
	HoaDonRepository hoaDonRepository;

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
		if (hd == null) {
			return false;
		} else {
			hoaDonRepository.deleteById(id);
			return true;
		}
	}

	@Override
	public HoaDon update(HoaDon hoaDon) {

		return null;
	}

}
