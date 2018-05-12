package poly.soft.project2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
	
	
}
