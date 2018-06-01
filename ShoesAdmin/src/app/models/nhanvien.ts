export class Nhanvien{
    public id: string;
    public tenNhanvien: string;
    public gioiTinh: string;
    public ngaySinh: Date;
    public diaChi: string;
    public soDienThoai: number;
    public email: string;

    constructor(tenNhanvien: string, gioiTinh: string, ngaySinh: Date, diaChi: string, soDienThoai: number, email: string){
    	this.tenNhanvien = tenNhanvien;
    	this.gioiTinh = gioiTinh;
    	this.ngaySinh = ngaySinh;
    	this.diaChi = diaChi;
    	this.soDienThoai = soDienThoai;
    	this.email = email;
    }
}