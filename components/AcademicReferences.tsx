'use client';

import { motion } from 'framer-motion';

export interface Reference {
  id: number;
  author: string;
  year?: string;
  title: string;
  source?: string;
  link?: string;
}

// Danh sách tài liệu được sắp xếp theo bảng chữ cái tác giả chuẩn APA
export const referencesData: Reference[] = [
  { id: 1, author: 'Báo Thanh Niên', title: 'Tìm hiểu về hôn nhân Công giáo: Bí tích hôn phối có gì khác biệt?', source: 'Thanh Niên Online' },
  { id: 2, author: 'Biết Để Yêu', title: '#13: Vẻ Đẹp Hôn Nhân Công Giáo', source: 'YouTube' },
  { id: 3, author: 'Công đồng Vatican II', year: '1965', title: 'Hiến chế Mục vụ Gaudium et Spes (Vui mừng và Hy vọng)', source: 'Tòa Thánh Vatican' },
  { id: 4, author: 'Dòng Chúa Cứu Thế Việt Nam', title: 'Khai giảng lớp Giáo Lý Hôn Nhân tại DCCT Sài Gòn', source: 'Truyền Thông DCCT VN' },
  { id: 5, author: 'Đức Thánh Cha Phanxicô', year: '2016', title: 'Tông huấn Amoris Laetitia (Niềm Vui Tình Yêu)', source: 'Tòa Thánh Vatican' },
  { id: 6, author: 'Filumena', title: 'Giáo lý hôn nhân Công giáo', source: 'Filumena Catholic Media' },
  { id: 7, author: 'Giám mục Giáo phận Cần Thơ', title: 'Văn Kiện Việc Hướng Dẫn Tôn Kính Tổ Tiên', source: 'Giáo Phận Cần Thơ' },
  { id: 8, author: 'Giáo Phận Đà Lạt', title: 'Bài 21: Bí tích Hôn Phối', source: 'Truyền Thông GP Đà Lạt' },
  { id: 9, author: 'Giáo Phận Đà Lạt', title: 'Giáo Lý Hôn Nhân', source: 'Truyền Thông GP Đà Lạt' },
  { id: 10, author: 'Giáo Xứ Đa Minh (Ba Chuông)', title: 'Lịch Học Các Khóa Giáo Lý Dự Tòng Và Giáo Lý Hôn Nhân (2025-2026)', source: 'TGP Sài Gòn' },
  { id: 11, author: 'Giáo Xứ Việt Nam Paris', title: 'Mục đích và Đặc tính của Hôn nhân', source: 'Gx. VN Paris' },
  { id: 12, author: 'Hội đồng Giáo hoàng về Gia đình', year: '1996', title: 'Tài liệu "Chuẩn bị cho Bí tích Hôn phối"', source: 'Tòa Thánh Vatican' },
  { id: 13, author: 'Hội đồng Giám mục Việt Nam', year: '1974', title: 'Quyết nghị của các Giám mục Việt Nam về Lễ nghi tôn kính Ông Bà Tổ Tiên', source: 'TGP Sài Gòn' },
  { id: 14, author: 'Hội đồng Giám mục Việt Nam', year: '2025', title: 'Hướng dẫn việc Tôn kính Tổ tiên', source: 'Văn Phòng HĐGMVN' },
  { id: 15, author: 'Hội đồng Giám mục Việt Nam', title: 'Tôn kính Tổ tiên (Tags)', source: 'Website HĐGMVN' },
  { id: 16, author: 'Lòng Thương Xót Blog', title: 'Học giáo lý hôn nhân ở đâu trong tổng Giáo phận TP.HCM?', source: 'Lòng Thương Xót' },
  { id: 17, author: 'Phailamgi', title: 'Hướng dẫn của HĐGM Việt Nam trong việc Tôn kính tổ tiên dành cho những đôi hôn nhân khác đạo', source: 'Phailamgi.com' },
  { id: 18, author: 'Thánh Giáo hoàng Gioan Phaolô II', year: '1981', title: 'Tông huấn Familiaris Consortio (Về gia đình Kitô hữu trong thế giới ngày nay)', source: 'Tòa Thánh Vatican' },
  { id: 19, author: 'Thánh Giáo hoàng Gioan Phaolô II', title: 'Thần học về Thân xác (Theology of the Body)', source: 'HĐGMVN' },
  { id: 20, author: 'Tin tức Cưới hỏi', title: 'Học Giáo lý Hôn nhân ở đâu tại TPHCM?', source: 'Tintuccuoihoi.com' },
  { id: 21, author: 'Tổng Giáo Phận Hà Nội', title: 'Bài 21: Bí tích Hôn Phối (Số 01)', source: 'Truyền Thông TGP Hà Nội' },
  { id: 22, author: 'Tổng Giáo phận Sài Gòn', title: 'Đồng hành cùng gia đình trẻ: Ly hôn và chuẩn hôn nhân khác đạo', source: 'Ban Mục vụ Gia đình TGP Sài Gòn' },
  { id: 23, author: 'Tổng Giáo phận Sài Gòn', title: 'Giáo xứ Đức Mẹ Hằng Cứu Giúp', source: 'Ban Truyền Thông TGP Sài Gòn' },
  { id: 24, author: 'Tổng Giáo phận Sài Gòn', title: 'Thư gửi gia đình Tổng Giáo phận', source: 'Ban Mục vụ Gia đình TGP Sài Gòn' },
  { id: 25, author: 'Tổng Giáo phận Sài Gòn', year: '2021', title: 'Thư mục vụ ngày 27-7-2021', source: 'Ban Mục vụ Gia đình TGP Sài Gòn' },
  { id: 26, author: 'Tổng Giáo phận Sài Gòn', title: 'Tình yêu hôn nhân dưới cái nhìn nhân học Kitô giáo', source: 'Ban Mục vụ Gia đình TGP Sài Gòn' },
  { id: 27, author: 'Ủy ban Giáo lý Đức tin - HĐGMVN', title: 'Giáo lý Hôn nhân Gia đình', source: 'HĐGMVN' },
  { id: 28, author: 'Ủy ban Mục vụ Gia đình - HĐGMVN', year: '2018', title: 'Gợi ý Mục vụ năm 2018: Đồng hành với các Gia đình trẻ', source: 'HĐGMVN' },
  { id: 29, author: 'Ủy ban Mục vụ Gia đình - HĐGMVN', title: 'Định hướng Mục vụ Gia đình theo Tông huấn Familiaris Consortio & Amoris Laetitia', source: 'HĐGMVN' },
  { id: 30, author: 'Ủy ban Mục vụ Gia đình - HĐGMVN', title: 'Tài liệu "Gia đình, Hôn nhân và các liên hệ sống chung ngoài hôn nhân"', source: 'HĐGMVN' },
  { id: 31, author: 'Ủy ban Mục vụ Gia đình - HĐGMVN', title: 'Xây dựng Chương trình Giáo lý Hôn nhân theo tinh thần Amoris Laetitia', source: 'HĐGMVN' },
];

export default function AcademicReferences() {
  return (
    <div className="mt-8 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[var(--reader-bg-card)] rounded-xl p-6 md:p-8 border border-[var(--reader-border)] shadow-sm"
      >
        <ul className="space-y-4 text-sm md:text-[15px] leading-relaxed text-[var(--reader-text-main)]">
          {referencesData.map((ref) => (
            <li 
              key={ref.id} 
              id={`ref-${ref.id}`}
              className="pl-8 -indent-8 break-words group" 
              style={{ textIndent: '-2rem', paddingLeft: '2rem' }}
            >
              <span className="font-mono text-[var(--reader-heading)] mr-1 inline-block w-6 font-semibold group-target:text-red-500 transition-colors">[{ref.id}]</span>
              <span className="font-semibold">{ref.author}. </span>
              {ref.year ? <span>({ref.year}). </span> : <span>(n.d.). </span>}
              <span className="italic">{ref.title}. </span>
              {ref.source && <span className="text-[var(--reader-text-muted)]">{ref.source}.</span>}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
