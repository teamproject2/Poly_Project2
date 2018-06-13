import {Kichthuoc} from './kichthuoc';
export class ChitietSanpham{
    public id: number;
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