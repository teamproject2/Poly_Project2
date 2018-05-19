package poly.soft.project2.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="SAN_PHAM")
public class SanPham {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private int id;
	
	@Column(name="TEN_SAN_PHAM")
	private String tenSanPham;
	
	@Column(name="CHI_TIET")
	private String chiTiet;
	
	
	@OneToMany(mappedBy="sanPham",fetch=FetchType.LAZY)
	private List<HinhSanPham> hinhSanPham;
	

	
	
	@ManyToMany
	@JoinTable(name="KICH_THUOC_SP"
				,joinColumns=@JoinColumn(name="SAN_PHAM_ID")
				,inverseJoinColumns=@JoinColumn(name="KICH_THUOC_ID"))
	private List<KichThuoc> kichThuoc;
	
	
	@ManyToOne
	@JoinColumn(name="LOAI_GIAY_ID")
	private LoaiGiay loaiGiay;
	
	@OneToMany(mappedBy="sanPham",fetch = FetchType.LAZY)
	private List<HangTrongKho> hangTrongKho;
	
	@OneToMany(mappedBy="sanPham",fetch= FetchType.LAZY)
	private List<ChiTietHoaDon> chiTietHoaDon;
	
	
	
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


	public List<HinhSanPham> getHinhSanPham() {
		return hinhSanPham;
	}

	public void setHinhSanPham(List<HinhSanPham> hinhSanPham) {
		this.hinhSanPham = hinhSanPham;
	}



	public List<KichThuoc> getKichThuoc() {
		return kichThuoc;
	}

	public void setKichThuoc(List<KichThuoc> kichThuoc) {
		this.kichThuoc = kichThuoc;
	}

	public LoaiGiay getLoaiGiay() {
		return loaiGiay;
	}

	public void setLoaiGiay(LoaiGiay loaiGiay) {
		this.loaiGiay = loaiGiay;
	}

	public List<ChiTietHoaDon> getChiTietHoaDon() {
		return chiTietHoaDon;
	}

	public void setChiTietHoaDon(List<ChiTietHoaDon> chiTietHoaDon) {
		this.chiTietHoaDon = chiTietHoaDon;
	}
	
	
}
