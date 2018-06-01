export class Khachhang{
    public id: string;
    public tenKhachHang: string;
    public diaChi: string;
    public soDienThoai: number;
    public email: string;

    constructor(tenKhachHang: string,diaChi: string, soDienThoai: number, email: string){
    	this.tenKhachHang = tenKhachHang;
    	this.diaChi = diaChi;
    	this.soDienThoai = soDienThoai;
    	this.email = email;
    }
}