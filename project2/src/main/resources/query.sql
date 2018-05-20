select hd.id, sp.ten_san_pham, cthd.so_luong, htk.don_gia, htk.chiet_khau
from poly_project2.hoa_don hd join poly_project2.chi_tiet_hoa_don cthd on hd.id = cthd.hoa_don_id
	join poly_project2.san_pham sp on sp.id = cthd.san_pham_id
    join poly_project2.hang_trong_kho htk on sp.id = htk.san_pham_id
where hd.id = 1