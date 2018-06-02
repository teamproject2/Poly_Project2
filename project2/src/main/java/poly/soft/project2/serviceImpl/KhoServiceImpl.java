package poly.soft.project2.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import poly.soft.project2.entity.Kho;
import poly.soft.project2.repository.KhoRepository;
import poly.soft.project2.service.KhoService;

@Service
public class KhoServiceImpl implements KhoService {
	
	@Autowired
	KhoRepository khoRepository;

	@Override
	public List<Kho> findAll() {
		return khoRepository.findAll();
	}

	@Override
	public Kho findById(int id) {
		return khoRepository.findById(id).orElse(null);
	}

	@Override
	public Kho save(Kho kho) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int id) {
		// TODO Auto-generated method stub
		return false;
	}
	
}
