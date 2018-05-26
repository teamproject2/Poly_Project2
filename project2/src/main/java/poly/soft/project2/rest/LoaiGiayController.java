package poly.soft.project2.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import poly.soft.project2.entity.LoaiGiay;
import poly.soft.project2.service.LoaiGiayService;

@RestController
@RequestMapping("/loaigiay")
@CrossOrigin(origins= {"http://localhost:4200"})
public class LoaiGiayController {
	
	@Autowired
	LoaiGiayService loaiGiayService;

	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> getListLoaiGiay(){
		return new ResponseEntity<List<LoaiGiay>>(loaiGiayService.getLoaiGiay(), HttpStatus.OK);
	}
}
