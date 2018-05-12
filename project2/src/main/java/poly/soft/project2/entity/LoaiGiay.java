package poly.soft.project2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	private String goiTinh;
	
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
	public String getGoiTinh() {
		return goiTinh;
	}
	public void setGoiTinh(String goiTinh) {
		this.goiTinh = goiTinh;
	}
	
	
}
