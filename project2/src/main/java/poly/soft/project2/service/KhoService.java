package poly.soft.project2.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import poly.soft.project2.entity.Kho;
@Service
@Transactional
public interface KhoService {
	List<Kho> findAll();
	
	Kho findById(int id);
	
	Kho save(Kho kho);
	
	boolean delete(int id);
}
