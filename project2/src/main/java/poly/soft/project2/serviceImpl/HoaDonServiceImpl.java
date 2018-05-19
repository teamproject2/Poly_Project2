package poly.soft.project2.serviceImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import poly.soft.project2.entity.HoaDon;
import poly.soft.project2.repository.HoaDonRepository;
import poly.soft.project2.service.HoaDonService;

@Service
@Transactional
public class HoaDonServiceImpl implements HoaDonService{

	@Autowired
	HoaDonRepository hoaDonRepository;
	
	@Override
	public List<HoaDon> findAll() {
		return hoaDonRepository.findAll();
	}

	@Override
	public HoaDon findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public HoaDon save(HoaDon hoaDon) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
	
	
}
