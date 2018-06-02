package poly.soft.project2.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import poly.soft.project2.entity.Kho;
import poly.soft.project2.service.KhoService;

@RestController
@RequestMapping("/kho")
@CrossOrigin(origins="*")
public class KhoController {
	
	@Autowired
	KhoService khoService;

	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> getListKho(){
		List<Kho> list = khoService.findAll();
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
}
