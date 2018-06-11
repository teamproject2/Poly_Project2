package poly.soft.project2.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "KICH_THUOC")
@JsonIgnoreProperties({ "sanPham", "kichThuoc" })
public class KichThuoc {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;

	@Column(name = "TEN_KICH_THUOC")
	private String tenKichThuoc;

	@OneToMany(mappedBy = "kichThuoc")
	private List<HangTrongKho> HangTrongKho;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTenKichThuoc() {
		return tenKichThuoc;
	}

	public void setTenKichThuoc(String tenKichThuoc) {
		this.tenKichThuoc = tenKichThuoc;
	}

}
