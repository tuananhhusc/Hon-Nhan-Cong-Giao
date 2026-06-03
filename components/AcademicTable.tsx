export interface AcademicTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export default function AcademicTable({
  headers,
  rows,
  caption,
}: AcademicTableProps) {
  return (
    <div className="my-12 overflow-x-auto select-none">
      <table className="w-full border-collapse text-sm font-serif border-t-2 border-b-2 border-[var(--reader-border)]/60">
        {caption && (
          <caption className="caption-top text-xs font-sans text-[var(--reader-heading)] font-bold uppercase tracking-[0.2em] py-3.5 px-1 text-left">
            {caption}
          </caption>
        )}

        <thead className="border-b border-[var(--reader-border)]/35 text-[var(--reader-heading)] bg-[var(--reader-border)]/5">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left font-bold text-xs tracking-wider uppercase"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-[var(--reader-border)]/15">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`
                transition-colors duration-250
                hover:bg-[var(--reader-border)]/10
                ${rowIndex % 2 === 1 ? "bg-[var(--reader-bg-card)]/30" : "bg-transparent"}
              `}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`
                    px-4 py-3.5 text-[var(--reader-text-main)]/90 leading-relaxed text-xs md:text-sm
                    ${cellIndex === 0 ? "font-bold text-[var(--reader-heading-secondary)]" : ""}
                  `}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

