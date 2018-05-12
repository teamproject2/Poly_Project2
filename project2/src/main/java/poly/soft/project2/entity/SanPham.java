package poly.soft.project2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SAN_PHAM")
public class SanPham {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="SAN_PHAM")
	private int id;
	
	@Column(name="TEN_SAN_PHAM")
	private String tenSanPham;
	
	@Column(name="CHI_TIET")
	private String chiTiet;
	
	@Column(name="LOAI_GIAY_ID")
	private int loaiGiayId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTenSanPham() {
		return tenSanPham;
	}

	public void setTenSanPham(String tenSanPham) {
		this.tenSanPham = tenSanPham;
	}

	public String getChiTiet() {
		return chiTiet;
	}

	public void setChiTiet(String chiTiet) {
		this.chiTiet = chiTiet;
	}

	public int getLoaiGiayId() {
		return loaiGiayId;
	}

	public void setLoaiGiayId(int loaiGiayId) {
		this.loaiGiayId = loaiGiayId;
	}
	
	
}
