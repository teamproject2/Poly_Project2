package poly.soft.project2.service;


import java.util.List;

import poly.soft.project2.entity.HoaDon;

public interface HoaDonService {

	List<HoaDon> findAll();
	
	HoaDon findById(int id);
	
	HoaDon save(HoaDon hoaDon);
	
	boolean delete(int id);
		
	
}
