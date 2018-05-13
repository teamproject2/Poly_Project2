package poly.soft.project2.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="KHO")
public class Kho {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private int id;
	
	@Column(name="TEN_KHO")
	private String tenKho;
	
	@Column(name="DIA_CHI")
	private String diaChi;
	
	@OneToMany(mappedBy="kho",fetch = FetchType.LAZY)
	private List<HangTrongKho> hangTrongKho;
	
	
	
	

	public List<HangTrongKho> getHangTrongKho() {
		return hangTrongKho;
	}

	public void setHangTrongKho(List<HangTrongKho> hangTrongKho) {
		this.hangTrongKho = hangTrongKho;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTenKho() {
		return tenKho;
	}

	public void setTenKho(String tenKho) {
		this.tenKho = tenKho;
	}

	public String getDiaChi() {
		return diaChi;
	}

	public void setDiaChi(String diaChi) {
		this.diaChi = diaChi;
	}
	
	
}
