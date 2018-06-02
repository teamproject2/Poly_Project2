package poly.soft.project2.service;


import java.text.ParseException;
import java.util.List;

import poly.soft.project2.dto.HoaDonAdminDTO;
import poly.soft.project2.entity.HoaDon;

public interface HoaDonService {

	List<HoaDon> findAll();
	
	List<HoaDonAdminDTO> getListHoaDon() throws ParseException;
	
	HoaDon findById(int id);
	
	HoaDon save(HoaDon hoaDon);
	
	HoaDon update(HoaDon hoaDon);
	
	boolean delete(int id);
		
	
}
