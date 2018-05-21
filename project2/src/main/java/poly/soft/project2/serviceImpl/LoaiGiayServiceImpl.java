package poly.soft.project2.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import poly.soft.project2.entity.LoaiGiay;
import poly.soft.project2.repository.LoaiGiayRepository;
import poly.soft.project2.service.LoaiGiayService;

@Service
public class LoaiGiayServiceImpl implements LoaiGiayService {

	@Autowired
	LoaiGiayRepository loaiGiayRepository;
	
	@Override
	public List<LoaiGiay> findAll() {
		return loaiGiayRepository.findAll();
	}

	@Override
	public LoaiGiay findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LoaiGiay save(LoaiGiay loaiGiay) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
