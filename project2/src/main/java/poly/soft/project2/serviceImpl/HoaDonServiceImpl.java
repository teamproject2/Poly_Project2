package poly.soft.project2.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import poly.soft.project2.entity.HoaDon;
import poly.soft.project2.repository.HoaDonRepository;
import poly.soft.project2.service.HoaDonService;

@Service
public class HoaDonServiceImpl implements HoaDonService{

	@Autowired
	HoaDonRepository hoaDonRepository;
	
	@Override
	public List<HoaDon> findAll() {
		return hoaDonRepository.findAll();
	}
	
}
