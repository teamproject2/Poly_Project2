package poly.soft.project2.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="NHA_SAN_XUAT")
public class NhaSanXuat implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private int id;
	
	@Column(name="TEN_NHA_SAN_XUAT")
	private String tenNhaSanXuat;
	
	@ManyToMany
	@JoinTable(name="LOAI_GIAY_NSX",joinColumns=@JoinColumn(name="NSX_ID"),inverseJoinColumns=@JoinColumn(name="LOAI_GIAY_ID"))
	private List<LoaiGiay> loaiGiay;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTenNhaSanXuat() {
		return tenNhaSanXuat;
	}

	public void setTenNhaSanXuat(String tenNhaSanXuat) {
		this.tenNhaSanXuat = tenNhaSanXuat;
	}

	public List<LoaiGiay> getLoaiGiay() {
		return loaiGiay;
	}

	public void setLoaiGiay(List<LoaiGiay> loaiGiay) {
		this.loaiGiay = loaiGiay;
	}
	
	
}
