package poly.soft.project2.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import poly.soft.project2.dto.SanPhamHomePageDTO;
import poly.soft.project2.entity.SanPham;
import poly.soft.project2.service.SanPhamService;

@RestController
@RequestMapping("/sanpham")
public class SanPhamController {
	
	@Autowired
	SanPhamService sanPhamService;
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<?> getListSanPham(){
		List<SanPham> list = sanPhamService.findAll();
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
	
	@RequestMapping(value="/homepage",method=RequestMethod.GET)
	public ResponseEntity<?> getListSanPhamHomePage(@RequestHeader String tenLoai){
		List<SanPhamHomePageDTO> list = sanPhamService.getListSanPhamHomePage(tenLoai);
		return new ResponseEntity<>(list,HttpStatus.OK);
	}
}
