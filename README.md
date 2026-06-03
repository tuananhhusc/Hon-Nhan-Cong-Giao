# Thần học và Mục vụ về Hôn nhân Công giáo — Web Report chuyên sâu

Chào mừng bạn đến với **hncg-web**, một trang web báo cáo nghiên cứu thần học chuyên sâu và hiện đại về Bí tích Hôn phối Công giáo. Dự án được phát triển bằng **Next.js 16 (App Router)** và **Tailwind CSS v4**, kết hợp các hiệu ứng chuyển động mượt mà của **Framer Motion** để tạo nên một không gian đọc học thuật vô cùng sang trọng, tôn nghiêm và tối ưu trải nghiệm người dùng.

---

## ☩ Điểm nổi bật của Dự án

### 1. Giao diện Liturgical & Giáo đường Cao cấp
- **Visual cực chất:** Hiệu ứng Cathedral Glow (Ánh sáng giáo đường), hoa văn Stained Glass Rosette (Cửa sổ hoa hồng kính màu) tự động xoay nhẹ nhàng, dấu thánh giá đập nhẹ và các đường phân cách hoa văn biểu tượng Công giáo.
- **Bảng màu trang nhã:** Sử dụng các tông màu đỏ rượu vang (Burgundy), vàng kim (Gold), xanh biển sâu (Navy) và kem giấy da (Parchment/Ivory) tạo nên một không gian đọc đậm chất phụng vụ cổ điển và trang nghiêm.

### 2. Bộ Tùy chỉnh Giao diện Đọc Học thuật (Reading Settings)
Nằm ở góc trên bên phải màn hình dưới biểu tượng `Aa` cổ điển, cho phép người đọc:
- **Tùy chỉnh màu nền:** Chọn giữa 3 chủ đề: **Sáng (Light)**, **Giấy da cổ (Parchment)** và **Tối (Dark Mode)** giúp đọc lâu không bị mỏi mắt.
- **Tùy chỉnh cỡ chữ:** 4 cấp độ tăng giảm size chữ linh hoạt.
- **Bộ chuyển đổi Phông chữ (Font Family Switcher):**
  - *Học thuật:* Phông chữ có chân chân phương `Noto Serif` tối ưu hiển thị dấu tiếng Việt.
  - *Cổ điển:* Phông chữ nghệ thuật `Playfair Display` bay bổng.
  - *Hiện đại:* Phông chữ không chân `Inter` tinh gọn, sắc sảo.
*Lưu ý: Tất cả các cài đặt này được lưu tự động vào `localStorage` của trình duyệt.*

### 3. Hệ thống Chú thích & Trích dẫn chuẩn APA Đánh số
- **In-text Citations:** 31 điểm neo chú thích dạng số mũ `<sup>[X]</sup>` trên khắp bài viết. Khi click vào số này, trang web sẽ cuộn mượt mà xuống đúng mục nguồn tham khảo tương ứng ở cuối trang.
- **Danh mục tài liệu chuẩn APA:** Danh sách 31 nguồn tài liệu học thuật ở cuối trang được sắp xếp chuẩn theo thứ tự bảng chữ cái của tác giả, định dạng thụt lề dòng thứ hai (Hanging Indent) chuẩn chỉnh.
- **Bộ tạo trích dẫn nhanh (Citation Generator):** Cho phép các học giả sao chép nhanh cách trích dẫn trang web này theo 3 định dạng phổ biến nhất: **APA**, **MLA** và **Chicago**.
- **Khung chú giải thuật ngữ (Glossary Tooltip):** Khi rê chuột qua các thuật ngữ tiếng Latinh hoặc thuật ngữ mục vụ khó hiểu (như *Bonum conjugum*, *Sacramentum Magnum*, *Plane Compertum Est*), một khung popover tự động hiện lên giải thích chi tiết ý nghĩa và nguồn gốc của thuật ngữ đó. Khung này tự động đổi giao diện sáng/tối đồng bộ với trang.

### 4. Tương thích Thiết bị Di động hoàn hảo
- **Mục lục động di động (Mobile Bottom Sheet):** Mục lục phẳng tinh tế ở sidebar bên trái trên desktop sẽ tự động thu gọn thành một nút mục lục bay ở góc dưới bên phải trên mobile. Khi mở ra, nó sẽ trượt lên dưới dạng bottom-sheet thanh lịch.
- **Nút cuộn lên đầu trang (Back to Top):** Tích hợp mượt mà và tự động xuất hiện khi người dùng cuộn qua trang giới thiệu.
- **Không có lỗi đè giao diện:** Vị trí các nút bấm ở các góc màn hình được đo đạc chính xác, đảm bảo không có nút nào bị đè lên nhau trên mọi kích thước màn hình.

---

## 🛠 Hướng dẫn Cài đặt & Chạy trên máy cá nhân

### Yêu cầu hệ thống
- **Node.js** phiên bản `18.x` trở lên.
- **npm** hoặc **yarn/pnpm**.

### Các bước thực hiện

1. **Tải dự án hoặc Clone từ GitHub:**
   ```bash
   git clone <URL-KHO-CHUA-CUA-BAN>
   cd hncg-web
   ```

2. **Cài đặt các thư viện phụ thuộc:**
   ```bash
   npm install
   ```

3. **Chạy máy chủ phát triển (Development):**
   ```bash
   npm run dev
   ```
   *Mở trình duyệt truy cập địa chỉ `http://localhost:3000` để xem kết quả.*

4. **Đóng gói sản phẩm (Production Build):**
   ```bash
   npm run build
   ```
   *Lệnh này sẽ biên dịch mã nguồn, kiểm tra toàn bộ kiểu dữ liệu TypeScript, kiểm tra chuẩn ESLint và xuất ra thư mục tĩnh `.next` đã tối ưu hóa hiệu suất.*

5. **Chạy thử bản đã đóng gói:**
   ```bash
   npm run start
   ```

---

## 📂 Cấu trúc thư mục Dự án

```text
hncg-web/
├── app/
│   ├── globals.css         # Chứa biến theme, phong cách bài viết (.prose-catholic) & hoạt ảnh
│   ├── layout.tsx          # Cấu hình phông chữ Google Fonts, SEO Metadata, Open Graph
│   └── page.tsx            # Nội dung nghiên cứu chính cùng liên kết chú thích
├── components/
│   ├── AcademicReferences.tsx # Danh mục 31 nguồn tham khảo chuẩn APA xếp theo bảng chữ cái
│   ├── AcademicTable.tsx      # Component hiển thị bảng chương trình & chuyên đề mục vụ
│   ├── BackToTop.tsx          # Nút cuộn mượt mà lên đầu trang
│   ├── Blockquote.tsx         # Thiết kế khung trích dẫn Kinh Thánh / Huấn quyền
│   ├── CitationGenerator.tsx  # Bộ sinh trích dẫn nhanh APA/MLA/Chicago cho học giả
│   ├── Footer.tsx             # Chân trang tôn nghiêm mang màu sắc phụng vụ
│   ├── GlossaryTooltip.tsx    # Chú giải thuật ngữ thần học dạng popover thông minh
│   ├── HeroSection.tsx        # Phần đầu trang cuốn hút với Rosette SVG và hiệu ứng ánh sáng
│   ├── ReadingProgressBar.tsx # Thanh tiến trình đọc trên đầu trang
│   ├── ReadingSettings.tsx    # Bảng tùy chỉnh giao diện màu nền, cỡ chữ và phông chữ
│   ├── Section.tsx            # Wrapper chuẩn cho các phân đoạn bài viết
│   └── TableOfContents.tsx    # Mục lục động hai chế độ (Desktop sidebar / Mobile bottom-sheet)
├── public/                    # Chứa favicon và các tệp tài nguyên tĩnh khác
├── next.config.ts             # Cấu hình Next.js (đã tắt Dev Indicator để giao diện sạch)
├── tailwind.config.ts         # Định nghĩa các tùy biến Tailwind CSS v4
├── tsconfig.json              # Cấu hình TypeScript cho dự án
└── package.json               # Quản lý script chạy lệnh và phiên bản thư viện
```

---

## 🚀 Hướng dẫn Triển khai (Deployment) lên Internet

Dự án này cực kỳ dễ dàng đưa lên internet miễn phí bằng **Vercel** chỉ với vài cú click chuột:

1. Đưa toàn bộ mã nguồn lên một kho lưu trữ (Repository) trên **GitHub**.
2. Truy cập [Vercel](https://vercel.com) và đăng nhập bằng tài khoản GitHub của bạn.
3. Chọn **Import Project** và chọn kho chứa `hncg-web`.
4. Nhấn **Deploy**. Vercel sẽ tự động cài đặt thư viện, build dự án và cung cấp cho bạn một đường dẫn (URL) chính thức chạy online.

*Lưu ý: Sau khi có đường dẫn chính thức từ Vercel, hãy vào tệp [layout.tsx](file:///d:/HNCG/hncg-web/app/layout.tsx) dòng 44 để cập nhật lại `metadata.openGraph.url` trùng với link thật của bạn giúp tăng hiệu quả SEO và tối ưu hóa tính năng chia sẻ liên kết mạng xã hội.*

---

## ☩ Tài liệu Học thuật Tham khảo
Nội dung nghiên cứu và mục vụ trong dự án này được đối chiếu trực tiếp từ các văn kiện và giáo huấn chính thức của Giáo hội:
- **Công đồng Vatican II:** Hiến chế Mục vụ *Gaudium et Spes* (1965).
- **Thánh Giáo hoàng Gioan Phaolô II:** Tông huấn *Familiaris Consortio* (1981) và Loạt giáo lý *Thần học về Thân xác* (1979-1984).
- **Đức Thánh Cha Phanxicô:** Tông huấn *Amoris Laetitia* (2016).
- **Hội đồng Giám mục Việt Nam:** Quyết nghị về Lễ nghi Tôn kính Tổ tiên (1974) và Hướng dẫn việc Tôn kính Tổ tiên (2025).

Chúc bạn có những trải nghiệm nghiên cứu và lập trình tuyệt vời cùng dự án!
