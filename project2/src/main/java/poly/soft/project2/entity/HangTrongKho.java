package poly.soft.project2.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "HANG_TRONG_KHO")
@JsonInclude(value = Include.NON_NULL)
@JsonIgnoreProperties(value = { "sanPham", "kho" }, ignoreUnknown = true)
public class HangTrongKho implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;

	@ManyToOne
	@JoinColumn(name = "SAN_PHAM_ID")
	private SanPham sanPham;

	@ManyToOne
	@JoinColumn(name = "KHO_ID")
	private Kho kho;

	@Column(name = "SO_LUONG")
	private int soLuong;

	@Column(name = "DON_GIA")
	private double donGia;

	@Column(name = "CHIET_KHAU")
	private double chietKhau;

	@JsonGetter(value = "sanPhamID")
	private int getSanPhamId() {
		return sanPham.getId();
	}

	@JsonProperty(value = "khoSanPham")
	public Kho getKhoSP() {
		return new Kho(kho.getId(), kho.getTenKho());
	}

	public String getTenSanPham() {
		return sanPham.getTenSanPham();
	}

	public String getHinhSanPham() {
		return sanPham.getHinhSanPham().get(0).getHinh();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public SanPham getSanPham() {
		return sanPham;
	}

	public void setSanPham(SanPham sanPham) {
		this.sanPham = sanPham;
	}

	public Kho getKho() {
		return kho;
	}

	public void setKho(Kho kho) {
		this.kho = kho;
	}

	public int getSoLuong() {
		return soLuong;
	}

	public void setSoLuong(int soLuong) {
		this.soLuong = soLuong;
	}

	public double getDonGia() {
		return donGia;
	}

	public void setDonGia(double donGia) {
		this.donGia = donGia;
	}

	public double getChietKhau() {
		return chietKhau;
	}

	public void setChietKhau(double chietKhau) {
		this.chietKhau = chietKhau;
	}

}
