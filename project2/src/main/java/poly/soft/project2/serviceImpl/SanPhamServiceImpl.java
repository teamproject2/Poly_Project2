package poly.soft.project2.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		// TODO Auto-generated method stub
		return null;
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

		
}
