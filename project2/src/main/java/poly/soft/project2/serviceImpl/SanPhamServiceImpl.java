package poly.soft.project2.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import poly.soft.project2.entity.SanPham;
import poly.soft.project2.service.SanPhamService;

@Service
@Transactional
public class SanPhamServiceImpl  implements SanPhamService{

	@Override
	public List<SanPham> findAll() {
		// TODO Auto-generated method stub
		return null;
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
