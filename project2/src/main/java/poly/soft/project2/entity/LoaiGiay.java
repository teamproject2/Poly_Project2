package poly.soft.project2.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="LOAI_GIAY")
public class LoaiGiay {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="LOAI_GIAY")
	private int id;
	
	@Column(name="TEN_LOAI")
	private String tenLoai;
	
	@Column(name="GIOI_TINH")
	private String gioiTinh;
	
	@OneToMany(mappedBy="loaiGiay",fetch= FetchType.LAZY)
	private List<SanPham> sanPham;
	
	@ManyToMany(mappedBy="loaiGiay",fetch = FetchType.LAZY)
	private List<NhaSanXuat> nhaSanXuat;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTenLoai() {
		return tenLoai;
	}
	public void setTenLoai(String tenLoai) {
		this.tenLoai = tenLoai;
	}
	public String getGioiTinh() {
		return gioiTinh;
	}
	public void setGioiTinh(String gioiTinh) {
		this.gioiTinh = gioiTinh;
	}
	public List<SanPham> getSanPham() {
		return sanPham;
	}
	public void setSanPham(List<SanPham> sanPham) {
		this.sanPham = sanPham;
	}
	public List<NhaSanXuat> getNhaSanXuat() {
		return nhaSanXuat;
	}
	public void setNhaSanXuat(List<NhaSanXuat> nhaSanXuat) {
		this.nhaSanXuat = nhaSanXuat;
	}
	
	
	
}
