import { ImageProduct } from "./image-product";
import { SizeProduct } from "../entity/size-product";
import { HomeLoaiGiay } from "./home-loaigiay";
import { StorageProduct } from "./storage-product";
import { BillDetail } from "./bill-detail";

export interface DetailProducts {
    id: number;
    tenSanPham: string;
    chiTiet: string;
    donGia: number;
    hinhSanPham: ImageProduct[];
    kichThuoc: SizeProduct[];
    loaiGiay: HomeLoaiGiay;
    hangTrongKho: StorageProduct[];
    chiTietHoaDon: BillDetail[];
}