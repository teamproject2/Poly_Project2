package poly.soft.project2.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import poly.soft.project2.dto.SanPhamHomePageDTO;
import poly.soft.project2.entity.SanPham;
import poly.soft.project2.service.SanPhamService;

@RestController
@RequestMapping("/sanpham")
@CrossOrigin(origins="*")
public class SanPhamController {
	
	@Autowired
	SanPhamService sanPhamService;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> getListSanPham(){
		List<SanPham> list = sanPhamService.findAll();
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	//Get products for homepage
	@RequestMapping(value="/homepage/{tenLoai}",method=RequestMethod.GET)
	public ResponseEntity<?> getListSanPhamHomePage(@PathVariable("tenLoai") String tenLoai){
		List<SanPhamHomePageDTO> list = sanPhamService.getListSanPhamHomePage(tenLoai, 3);
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	//Get products by category
	@RequestMapping(value="/name/{tenLoai}",method=RequestMethod.GET)
	public ResponseEntity<?> getListSanPhamByCategory(@PathVariable("tenLoai") String tenLoai){
		List<SanPhamHomePageDTO> list = sanPhamService.getListSanPhamByCategory(tenLoai);
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public ResponseEntity<?> getSanPhamById(@PathVariable("id") int id){
		SanPham sp = sanPhamService.findById(id);
		if(sp == null) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<SanPham>(sp,HttpStatus.OK);
	}
}
