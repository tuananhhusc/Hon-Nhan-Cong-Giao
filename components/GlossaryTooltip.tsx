'use client';

import { useState, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const THEOLOGICAL_TERMS: Record<string, { term: string; definition: string; source?: string }> = {
  'bonum-conjugum': {
    term: 'Bonum conjugum',
    definition: 'Ích lợi của đôi bạn phối ngẫu. Là một trong hai mục đích cốt lõi của Hôn nhân Công giáo, hướng đến việc giúp hai cá nhân phát triển tình yêu, tương trợ, bổ túc và hoàn thiện lẫn nhau.',
    source: 'Giáo luật 1055 §1'
  },
  'bonum-prolis': {
    term: 'Bonum prolis',
    definition: 'Ích lợi của con cái. Đặc tính tự nhiên của hôn nhân hướng đến việc truyền sinh và giáo dục con cái trong đức tin Kitô giáo.',
    source: 'Giáo luật 1055 §1'
  },
  'sacramentum-magnum': {
    term: 'Sacramentum Magnum',
    definition: 'Mầu nhiệm cao cả. Khái niệm thần học rút từ Thư Êphêsô (5,32), chỉ việc tình yêu phu thê là dấu chỉ phản chiếu tình yêu hiến tế giữa Đức Kitô và Hội Thánh.',
    source: 'Ep 5, 25-32'
  },
  'magisterium': {
    term: 'Huấn quyền (Magisterium)',
    definition: 'Quyền giảng dạy chính thức của Giáo hội Công giáo, được thực thi bởi Đức Giáo hoàng và các Giám mục hiệp thông với ngài, nhằm bảo vệ và diễn dịch mạc khải thiêng liêng.',
  },
  'than-hoc-than-xac': {
    term: 'Thần học về Thân xác',
    definition: 'Loạt 129 bài giáo lý của Thánh GH Gioan Phaolô II (1979-1984), khẳng định thân xác mang "ý nghĩa phu thê" và là dấu chỉ hữu hình của mầu nhiệm thần linh vô hình.',
  },
  'familiaris-consortio': {
    term: 'Familiaris Consortio',
    definition: 'Tông huấn "Về gia đình Kitô hữu trong thế giới ngày nay" (1981) của Đức Gioan Phaolô II, thiết lập lộ trình chuẩn bị hôn nhân 3 giai đoạn.',
  },
  'amoris-laetitia': {
    term: 'Amoris Laetitia',
    definition: 'Tông huấn "Niềm Vui Tình Yêu" (2016) của Đức Thánh Cha Phanxicô, nhấn mạnh sự đồng hành, luật tiệm tiến và lòng thương xót trong mục vụ gia đình.',
  },
  'plane-compertum-est': {
    term: 'Plane Compertum Est',
    definition: 'Huấn thị ban hành năm 1939 bởi Bộ Truyền Giáo, chính thức cho phép người Công giáo Á Đông tham gia các nghi lễ tôn kính tổ tiên mang tính dân sự và hiếu thảo.',
  }
};

interface GlossaryTooltipProps {
  termId: keyof typeof THEOLOGICAL_TERMS;
  children: ReactNode;
}

export default function GlossaryTooltip({ termId, children }: GlossaryTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const termData = THEOLOGICAL_TERMS[termId];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  if (!termData) return <>{children}</>;

  return (
    <span 
      className="relative inline-block cursor-help group font-body-serif"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="border-b-[1.5px] border-dotted border-gold-500/70 text-[var(--reader-heading-secondary)] font-semibold group-hover:text-[var(--reader-heading)] transition-colors">
        {children}
      </span>

      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-4 text-left bg-[var(--reader-bg-card)]/95 backdrop-blur-xl border border-[var(--reader-border)]/40 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] pointer-events-none block"
          >
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[var(--reader-bg-card)]/95 border-b border-r border-[var(--reader-border)]/40 rotate-45 block" />
            <span className="relative z-10 block">
              <span className="block font-serif font-bold text-[var(--reader-heading)] text-sm mb-1">{termData.term}</span>
              <span className="block font-sans text-xs text-[var(--reader-text-main)]/90 leading-relaxed">
                {termData.definition}
              </span>
              {termData.source && (
                <span className="block mt-2 pt-2 border-t border-[var(--reader-border)]/30 font-sans text-[10px] text-[var(--reader-text-muted)] font-medium uppercase tracking-wider">
                  Nguồn: {termData.source}
                </span>
              )}
            </span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
