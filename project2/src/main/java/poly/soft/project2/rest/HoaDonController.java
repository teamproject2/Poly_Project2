package poly.soft.project2.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import poly.soft.project2.entity.HoaDon;
import poly.soft.project2.service.HoaDonService;

@RestController
@RequestMapping("/hoadon")
public class HoaDonController {

	@Autowired
	HoaDonService hoaDonService;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> getListHoaDon() {
		//List<HoaDon> list = hoaDonService.findAll();
		List<HoaDon> list = new ArrayList<>();
		HoaDon hd = new HoaDon();
		hd.setId(1);
		list.add(hd);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
