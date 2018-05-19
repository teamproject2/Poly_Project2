package poly.soft.project2.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import poly.soft.project2.entity.NhaSanXuat;

@Service
@Transactional
public interface NhaSanXuatService {
	List<NhaSanXuat> findAll();
	
	NhaSanXuat findById(int id);
	
	NhaSanXuat save(NhaSanXuat nhaSanXuat);
	
	boolean delete(int id);
}
