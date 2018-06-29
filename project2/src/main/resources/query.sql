select hd.id, sp.ten_san_pham, cthd.so_luong, htk.don_gia, htk.chiet_khau
from poly_project2.hoa_don hd join poly_project2.chi_tiet_hoa_don cthd on hd.id = cthd.hoa_don_id
	join poly_project2.san_pham sp on sp.id = cthd.san_pham_id
    join poly_project2.hang_trong_kho htk on sp.id = htk.san_pham_id
where hd.id = 1

--Get list products for page management of product detail by type of product
select hd.id, sp.ten_san_pham, cthd.so_luong, htk.don_gia, htk.chiet_khau, hsp.hinh
from poly_project2.hoa_don hd join poly_project2.chi_tiet_hoa_don cthd on hd.id = cthd.hoa_don_id
	join poly_project2.san_pham sp on sp.id = cthd.san_pham_id
    join poly_project2.hang_trong_kho htk on sp.id = htk.san_pham_id
    join poly_project2.hinh_san_pham hsp on sp.id = hsp.san_pham_id
where hd.id = 1
group by sp.ten_san_pham

--Get list products for page index by type of product
select SP.id, SP.ten_san_pham, HTK.don_gia, HTK.chiet_khau, HSP.hinh
from poly_project2.san_pham SP join poly_project2.loai_giay LG on SP.loai_giay_id = LG.id
    join poly_project2.hang_trong_kho HTK on SP.id = HTK.san_pham_id
    join poly_project2.hinh_san_pham HSP on SP.id = HSP.san_pham_id
where LG.ten_loai = 'Adidas'
group by sp.ten_san_pham

--Select tongtien trong hoadon
select hd.id, sum(htk.don_gia*(1-htk.chiet_khau)*cthd.so_luong)
from poly_project2.san_pham sp 
join poly_project2.chi_tiet_hoa_don cthd on sp.id = cthd.san_pham_id 
join poly_project2.hang_trong_kho htk on sp.id = htk.san_pham_id 
join poly_project2.hoa_don hd on hd.id = cthd.hoa_don_id
group by hd.id 
order by hd.id;
