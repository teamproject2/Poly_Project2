package poly.soft.project2.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="MAU_SAC")
public class MauSac {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private int id;
	
	@Column(name="TEN_MAU_SAC")
	private String tenMauSac;
	
	@ManyToMany(mappedBy="mauSac",fetch=FetchType.LAZY)
	private List<SanPham> sanPham;
	
	



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTenMauSac() {
		return tenMauSac;
	}

	public void setTenMauSac(String tenMauSac) {
		this.tenMauSac = tenMauSac;
	}
	
	public List<SanPham> getSanPham() {
		return sanPham;
	}

	public void setSanPham(List<SanPham> sanPham) {
		this.sanPham = sanPham;
	}
	
	
}
