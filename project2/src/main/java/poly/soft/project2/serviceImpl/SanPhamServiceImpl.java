package poly.soft.project2.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import poly.soft.project2.dto.SanPhamHomePageDTO;
import poly.soft.project2.entity.SanPham;
import poly.soft.project2.repository.SanPhamRepository;
import poly.soft.project2.service.SanPhamService;

@Service
@Transactional
public class SanPhamServiceImpl  implements SanPhamService{

	@Autowired
	SanPhamRepository sanPhamRepository;
	
	@Override
	public List<SanPham> findAll() {
		return sanPhamRepository.findAll();
	}

	@Override
	public SanPham findById(int id) {
		Optional<SanPham> sp = sanPhamRepository.findById(id);
		return sp.orElse(null);
	}

	@Override
	public SanPham save(SanPham sanPham) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
	@Override
	public List<SanPhamHomePageDTO> getListSanPhamHomePage(String tenLoai) {
		List<Object[]> list = sanPhamRepository.getListSanPhamHomePage(tenLoai);
		List<SanPhamHomePageDTO> listSPHomePage = new ArrayList<>();
		for(Object[] arr : list) {
			SanPhamHomePageDTO sp = new SanPhamHomePageDTO();
			sp.setId(Integer.parseInt(String.valueOf(arr[0])));
			sp.setTenSanPham(String.valueOf(arr[1]));
			sp.setChiTiet(String.valueOf(arr[2]));
			sp.setDonGia(Double.parseDouble(String.valueOf(arr[3])));
			sp.setChietKhau(Double.parseDouble(String.valueOf(arr[4])));
			sp.setHinh(String.valueOf(arr[5]));
			listSPHomePage.add(sp);
		}
		return listSPHomePage;
	}

		
}
