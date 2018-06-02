package poly.soft.project2.dto;

import poly.soft.project2.enumeration.HDTrangThaiEnum;

public class HoaDonAdminDTO {

	private int id;
	private String ngay;
	private String tenKhachHang;
	private String tenNhanVien;
	private HDTrangThaiEnum trangThai;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNgay() {
		return ngay;
	}
	public void setNgay(String ngay) {
		this.ngay = ngay;
	}
	public String getTenKhachHang() {
		return tenKhachHang;
	}
	public void setTenKhachHang(String tenKhachHang) {
		this.tenKhachHang = tenKhachHang;
	}
	public String getTenNhanVien() {
		return tenNhanVien;
	}
	public void setTenNhanVien(String tenNhanVien) {
		this.tenNhanVien = tenNhanVien;
	}
	public HDTrangThaiEnum getTrangThai() {
		return trangThai;
	}
	public void setTrangThai(HDTrangThaiEnum trangThai) {
		this.trangThai = trangThai;
	}
	
	
}
