package poly.soft.project2.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import poly.soft.project2.entity.HangTrongKho;
import poly.soft.project2.entity.Kho;
import poly.soft.project2.entity.SanPham;
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
	
	@RequestMapping(value="/{idkho}/{idsanpham}",method=RequestMethod.GET)
	public ResponseEntity<?> getListSPTheoKho(@PathVariable("idkho")int idkho,@PathVariable("idsanpham")int idsanpham){
		Kho kho = khoService.findById(idkho);
		if(kho == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);	
		}
		List<HangTrongKho> listHangTrongKho = kho.getHangTrongKho();
		for(HangTrongKho hangTrongKho: listHangTrongKho) {
			if(hangTrongKho.getSanPham().getId() == idsanpham) {
				return new ResponseEntity<>(hangTrongKho.getSanPham(),HttpStatus.OK);
			}			
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
