package poly.soft.project2.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import poly.soft.project2.entity.KhachHang;
import poly.soft.project2.service.KhachHangService;

@RestController
@RequestMapping("/khachhang")
@CrossOrigin(origins = "*")
public class KhachHangController {

	@Autowired
	KhachHangService khachHangService;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<?> listAllKhachHang() {
		List<KhachHang> listKhachHang = khachHangService.findAll();
		if (listKhachHang.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);

		}
		return new ResponseEntity<>(listKhachHang, HttpStatus.OK);

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> findKhachHangById(@PathVariable("id") int id) {
		try {
			KhachHang khachhang = khachHangService.findById(id);
			return new ResponseEntity<>(khachhang, HttpStatus.OK);
		} catch (Exception ex) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
	}
	@RequestMapping(method= RequestMethod.POST )
	public ResponseEntity<?> saveKhachHang(@RequestBody KhachHang khachHang) {
		try {
			KhachHang khachhang = khachHangService.save(khachHang); 
			return new ResponseEntity<KhachHang>(khachhang,HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
	}
	@RequestMapping(method= RequestMethod.PUT )
	public ResponseEntity<?> updateKhachHang( @RequestBody KhachHang khachHang) {
		try {
			KhachHang khachhang = khachHangService.save(khachHang); 
			return new ResponseEntity<KhachHang>(khachhang,HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
	}
}
