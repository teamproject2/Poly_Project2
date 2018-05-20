--Insert into loai_giay
INSERT INTO poly_project2.loai_giay(ten_loai,gioi_tinh) VALUES ('Adidas', 0);
INSERT INTO poly_project2.loai_giay(ten_loai,gioi_tinh) VALUES ('Nike', 0);

--Insert into kich_thuoc
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('35');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('36');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('37');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('38');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('39');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('40');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('41');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('42');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('43');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('44');
insert into poly_project2.kich_thuoc(ten_kich_thuoc) values('45');

--Insert into san_pham
insert into poly_project2.san_pham(ten_san_pham,chi_tiet,loai_giay_id)
values('Adidas NMD R2 Black and White','Giày Adidas NMD R2 Primeknit - Một trong những phối màu thời trang tươi tắn nhất của dòng giày NMD R2 chính hãng .Với công nghệ Prime knit kết hợp với bộ đế boost êm ái đã tạo ra một tuyệt phẩm NMD siêu hot, hãy ghé shop để là một trong những người sở hữu đôi giày NMD PK Black đầu tiên nhé.',1),
('Adidas NMD R1 Burgundy and Olive','Giày Adidas NMD R1 Burgundy and Olive -Một trong những phối màu thời trang tươi tắn nhất của dòng giày NMD R1 chính hãng.Với công nghệ Prime knit kết hợp với bộ đế boost êm ái đã tạo ra một tuyệt phẩm NMD siêu hot, hãy ghé shop để là một trong những người sở hữu đôi giày NMD đầu tiên nhé.',1),
('Adidas Superstar Bold All White','Mẫu giày classic huyền thoại của Adidas nay đã được độ thêm bộ đế Bold cao cấp. Nhanh ghé shop để rinh ngay nào các bạn.Cam kết giày chính hãng 100% Bao check, bao test!',1);

--insert into kho
insert into poly_project2.kho(ten_kho,dia_chi) values('Kho Lê Lợi','123 Lê Lợi P10, Q1, TP.HCM');

--insert into hang_trong_kho
insert into poly_project2.hang_trong_kho(so_luong,don_gia,chiet_khau,san_pham_id,kho_id)
values(10,3800000,0.1,1,1),(10,3800000,0.1,2,1),(10,2000000,0.1,3,1);

--insert into khach_hang
insert into poly_project2.khach_hang(ten_khach_hang,dia_chi,email,so_dien_thoai)
values('Khoa','123 Hoàng Hoa Thám Q.PN, TP.HCM','conque6@gmail.com','01698307956');

--insert into nhan_vien
insert into poly_project2.nhan_vien(ten_nhan_vien,ngay_sinh,gioi_tinh,dia_chi,email,so_dien_thoai)
values('Nguyễn Vũ Hòa','1995-2-5',0,'12 Điện Biên Phủ Q.Bình Thạnh, TP.HCM','skynguyen79@gmail.com','01657154932');

--insert into hoa_don
insert into poly_project2.hoa_don(ngay,khach_hang_id,nhan_vien_id)
values('2018-5-20',1,1);

--insert into cthd
insert into poly_project2.chi_tiet_hoa_don(so_luong,hoa_don_id,san_pham_id)
values(1,1,1),(1,1,2),(1,1,3);