export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/15 text-navy-200/80 py-12 mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Gold gradient line */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent mb-8" />

        {/* Cross symbol */}
        <div className="text-gold-400 text-xl mb-4 select-none">✝</div>

        {/* Title */}
        <p className="font-serif text-sm text-navy-200/60">
          Báo cáo Nghiên cứu Chuyên Sâu
        </p>

        {/* Subtitle */}
        <p className="text-xs text-navy-300/40 mt-1">
          Hôn nhân Công giáo: Vẻ đẹp, Bản chất và Những Thách đố Hiện đại
        </p>

        {/* Copyright */}
        <p className="text-xs text-navy-400/30 mt-6">
          © {new Date().getFullYear()} Ad Maiorem Dei Gloriam
        </p>
      </div>
    </footer>
  );
}
