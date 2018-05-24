import { ImageProduct } from "./image-product";

export interface DetailProducts {
    id: number;
    tenSanPham: string;
    chiTiet: string;
    hinhSanPham: ImageProduct[];
    kichThuoc: string[];
    loaiGiay: Object;
    hangTrongKho: any[];
    chiTietHoaDon: any[];
}