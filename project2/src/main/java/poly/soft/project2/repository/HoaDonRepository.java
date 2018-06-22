package poly.soft.project2.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import poly.soft.project2.entity.HoaDon;

public interface HoaDonRepository extends JpaRepository<HoaDon, Integer>{
	
	@Query(value="select hd.id, hd.ngay, kh.ten_khach_hang, nv.ten_nhan_vien, hd.trang_thai, hd.tong_tien, hd.thanh_toan, hd.ghi_chu from poly_project2.hoa_don hd " + 
			"join poly_project2.khach_hang kh on hd.khach_hang_id = kh.id " + 
			"join poly_project2.nhan_vien nv on hd.nhan_vien_id = nv.id ", nativeQuery = true)
	public List<Object[]> getListHoaDon();
}
