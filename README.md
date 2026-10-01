# Folio DMS

**Mockup tương tác bằng tiếng Việt cho hệ thống quản lý tài liệu nội bộ.**

20 nhóm nghiệp vụ · HTML/CSS/JavaScript thuần · Không cần npm hoặc backend

> Đây là prototype giao diện với dữ liệu mẫu, không phải DMS vận hành thật.
> Không nhập tài liệu nội bộ, mật khẩu, API key hoặc thông tin cá nhân thật.

## Trạng thái đăng tải

README này khởi tạo repository. Bộ mã nguồn demo sẽ được bổ sung tiếp; README không xác nhận website đã được xuất bản.

## Chạy demo sau khi có đủ mã nguồn

Mở `index.html` và giữ thư mục `assets/` bên cạnh, hoặc mở bản độc lập `START-DEMO.html`.

Có thể chạy máy chủ thử nghiệm cục bộ từ thư mục dự án bằng Python 3:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Sau đó mở `http://127.0.0.1:8000/`.

## Các luồng chính

- Tiếp nhận, OCR mô phỏng, phân loại, metadata và xử lý trùng tài liệu.
- Tạo từ mẫu, chỉnh sửa, quản lý phiên bản, trình duyệt và phát hành.
- Tra cứu, phân quyền, chia sẻ, xác nhận đã đọc và truy vết.
- Hồ sơ, chính sách lưu giữ, lưu trữ và đề xuất hủy.
- Báo cáo, người dùng, danh mục, bảo mật, tích hợp và quản trị hệ thống.

Trong demo, mở **Khám phá demo** để xem bản đồ 20 nhóm tính năng và các kịch bản hướng dẫn.

## Giới hạn

OCR, Office, SSO, chữ ký điện tử, email, API, mã hóa, backup và kiểm soát truy cập là mô phỏng. Thay đổi dữ liệu mẫu có thể được lưu bằng `localStorage` trên trình duyệt, không đồng bộ giữa người dùng.

Chủ repository quyết định chính sách cấp phép và sử dụng lại mã nguồn; không tự gán giấy phép nguồn mở trong lần đăng tải này.
