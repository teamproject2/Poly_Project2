export class Khohang{
    public id: string;
    public tenSanPham: string;
    public chiTiet: string;
    public hinhSanPham: string;
    public kichThuoc: number;
    public loaiGiay: string;

    constructor(tenSanPham: string, chiTiet: string, hinhSanPham:string, kichThuoc:number, loaiGiay:string){
        this.tenSanPham = tenSanPham;
        this.chiTiet = chiTiet;
        this.hinhSanPham = hinhSanPham;
        this.kichThuoc = kichThuoc;
        this.loaiGiay = loaiGiay;
    }
}