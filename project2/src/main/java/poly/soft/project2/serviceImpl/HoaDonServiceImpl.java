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
import poly.soft.project2.repository.HoaDonRepository;
import poly.soft.project2.service.HoaDonService;

@Service
@Transactional
public class HoaDonServiceImpl implements HoaDonService{
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
		for(Object[] arr : list) {
			HoaDonAdminDTO hd = new HoaDonAdminDTO();
			hd.setId(Integer.parseInt(String.valueOf(arr[0])));
			hd.setNgay(timeformat.format(new Date(Timestamp.valueOf(String.valueOf(arr[1])).getTime())));
			hd.setTenKhachHang(String.valueOf(arr[2]));
			hd.setTenNhanVien(String.valueOf(arr[3]));
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
		
		hoaDonRepository.deleteById(id);
		return false;
	}
	
	
	
}
