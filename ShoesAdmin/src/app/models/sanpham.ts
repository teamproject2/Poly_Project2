import {Kichthuoc} from './kichthuoc';
export class Sanpham{
    public id: string;
    public tenSanPham: string;
    public chiTiet: string;
    public hinhSanPham: string;
    public kichThuoc: Kichthuoc;
    public loaiGiay: string;

    constructor(tenSanPham: string, chiTiet: string, hinhSanPham:string, kichThuoc:Kichthuoc, loaiGiay:string){
        this.tenSanPham = tenSanPham;
        this.chiTiet = chiTiet;
        this.hinhSanPham = hinhSanPham;
        this.kichThuoc = kichThuoc;
        this.loaiGiay = loaiGiay;
    }
}