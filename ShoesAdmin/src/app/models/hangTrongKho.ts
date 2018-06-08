
export class HangTrongKho {
    public id: string;
    public soLuong: number;
    public donGia: number;
    public chietKhau: number;
    constructor(soLuong: number, donGia: number, chietKhau:number) {
        this.soLuong = soLuong;
        this.donGia = donGia;
        this.chietKhau = chietKhau;
    }
}