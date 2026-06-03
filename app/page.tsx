import HeroSection from "@/components/HeroSection";
import TableOfContents from "@/components/TableOfContents";
import Section from "@/components/Section";
import { Blockquote } from "@/components/Blockquote";
import AcademicTable from "@/components/AcademicTable";
import Footer from "@/components/Footer";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import BackToTop from "@/components/BackToTop";
import { TocItem } from "@/components/TableOfContents";
import ReadingSettings from "@/components/ReadingSettings";
import GlossaryTooltip from "@/components/GlossaryTooltip";
import CitationGenerator from "@/components/CitationGenerator";
import AcademicReferences from "@/components/AcademicReferences";

const tocItems: TocItem[] = [
  { id: "ban-chat", title: "Bản chất và Nền tảng Giáo luật", level: 2 },
  { id: "khai-niem", title: "Khái niệm, Nguồn gốc và Chiều kích Bí tích", level: 3 },
  { id: "muc-dich-kep", title: "Mục đích Kép và Đặc tính Cốt lõi", level: 3 },
  { id: "ve-dep-than-hoc", title: "Vẻ đẹp Thần học và Chiều sâu Tâm linh", level: 2 },
  { id: "than-hoc-than-xac", title: "Thần học về Thân xác", level: 3 },
  { id: "mau-nhiem", title: "Mầu nhiệm Cao cả (Sacramentum Magnum)", level: 3 },
  { id: "nhan-hoc", title: "Nhân học Kitô giáo", level: 3 },
  { id: "huan-quyen", title: "Sự Tiến triển của Huấn quyền", level: 2 },
  { id: "gaudium", title: "Gaudium et Spes", level: 3 },
  { id: "familiaris", title: "Familiaris Consortio", level: 3 },
  { id: "amoris", title: "Amoris Laetitia", level: 3 },
  { id: "viet-nam", title: "Đào tạo và Chuẩn bị tại Việt Nam", level: 2 },
  { id: "giao-ly-12-bai", title: "Khung Chương trình 12 Bài", level: 3 },
  { id: "dong-hanh", title: "Mục vụ Đồng hành Gia đình Trẻ", level: 3 },
  { id: "hoi-nhap", title: "Hội nhập Văn hóa: Lễ nghi Tôn kính Tổ tiên", level: 2 },
  { id: "lich-su-hoi-nhap", title: "Lịch sử Tiến trình Hội nhập", level: 3 },
  { id: "le-gia-tien", title: "Quy định về Lễ Gia Tiên", level: 3 },
  { id: "phan-dinh", title: "Khôn ngoan Phân định Liên Tôn", level: 3 },
  { id: "ket-luan", title: "Kết luận", level: 2 },
  { id: "nguon-trich-dan", title: "Nguồn trích dẫn", level: 2 },
];

export default function Home() {
  return (
    <main className="min-h-screen relative bg-ivory transition-colors duration-500">
      <ReadingProgressBar />
      <BackToTop />
      <div className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50">
        <ReadingSettings />
      </div>
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content Layout: 2-column on desktop (lg+), 1-column on mobile */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-24 py-12 lg:py-16 max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 items-start justify-center">

          {/* Table of Contents: sticky sidebar on desktop (Left side) */}
          <aside className="hidden lg:block w-[320px] shrink-0 sticky top-32 self-start">
            <TableOfContents items={tocItems} />
          </aside>
          
          {/* Article & Mobile TOC wrapper */}
          <div className="flex-1 w-full max-w-[960px]">
            {/* Mobile TOC: visible only on smaller screens */}
            <div className="lg:hidden w-full mb-8">
              <TableOfContents items={tocItems} />
            </div>

            {/* Article content: flexible width, high legibility */}
            <article className="prose-catholic min-w-0 w-full">

            {/* ===== PHẦN 1: BẢN CHẤT ===== */}
            <Section id="ban-chat">
              <h2>Bản chất, Định nghĩa và Nền tảng Giáo luật của Bí tích Hôn Phối</h2>
            </Section>

            <Section id="khai-niem">
              <h3>Khái niệm, Nguồn gốc và Chiều kích Bí tích</h3>
              <p className="drop-cap-catholic">
                Theo nguyên ngữ, khái niệm &quot;hôn nhân&quot; bắt nguồn từ sự kết hợp sâu xa giữa hai cá thể. Phân tích từ nguyên học cho thấy &quot;nhân&quot; có gốc Hán mang nghĩa là gả, và &quot;phối&quot; mang ý nghĩa là sự kết hợp; do đó, hôn phối là việc một người nam và một người nữ chính thức kết hợp với nhau để làm thành một cộng đồng vợ chồng. Dưới lăng kính Công giáo, <strong>Bí tích Hôn phối là một giao ước thiêng liêng</strong>, qua đó một người nam và một người nữ đã lãnh nhận phép Thánh tẩy tự do kết ước với nhau thành vợ chồng trước mặt Thiên Chúa và cộng đoàn Hội Thánh. Khác với các thỏa thuận dân sự có thể bị hủy bỏ khi các điều kiện không còn được đáp ứng, giao ước này tạo nên một <strong>cộng đồng đích thực của sự sống và tình yêu</strong>, vốn được thiết lập và cấu trúc theo các quy luật do chính Đấng Tạo Hóa ban hành, nhằm hướng tới lợi ích nội tại của đôi phối ngẫu cũng như việc sinh sản và giáo dục con cái.
              </p>
              <p>
                Giáo lý Công giáo phân loại Hôn phối thuộc về nhóm &quot;bí tích kẻ sống&quot;, tức là những bí tích đòi hỏi người lãnh nhận phải đang ở trong tình trạng ân sủng (không mắc tội trọng) và có thể được lãnh nhận nhiều lần (trong trường hợp người phối ngẫu qua đời). Khác với phần lớn các bí tích khác do các thừa tác viên có chức thánh (giám mục, linh mục, phó tế) cử hành, trong Bí tích Hôn phối, <strong>chính đôi nam nữ là những thừa tác viên ân sủng của Chúa Kitô</strong>. Họ trực tiếp ban bí tích cho nhau và nhận bí tích của nhau khi tự do và công khai nói lên lời ưng thuận kết hôn trước sự chứng giám của vị đại diện Giáo hội và cộng đoàn. Vị linh mục hay phó tế hiện diện không phải là người &quot;ban&quot; bí tích, mà đóng vai trò là nhân chứng hợp pháp của Hội Thánh, thực hiện bổn phận điều tra ngăn trở hôn phối và chứng hôn để đảm bảo tính hữu hiệu của bí tích theo luật định. <sup><a href="#ref-8" className="text-[var(--reader-text-link)] hover:underline font-bold">[8, 21]</a></sup>
              </p>

              <Blockquote source="St 2,21-24" variant="scripture">
                Người ta sẽ lìa cha mẹ mà gắn bó với vợ mình, và cả hai sẽ thành một xương một thịt.
              </Blockquote>

              <p>
                Nguồn gốc của định chế hôn nhân không phải là một sản phẩm do con người tự định ra hay một cấu trúc xã hội thuần túy, mà được chính Thiên Chúa thiết lập từ thưở sáng thế. Giao ước tự nhiên này, vốn đã bị tổn thương bởi tội lỗi nguyên tổ, sau đó đã được Chúa Giêsu Kitô khôi phục lại giá trị nguyên thủy và nâng lên hàng bí tích trong thời Tân Ước. Sự hiện diện mang tính biểu tượng và cứu độ của Người tại tiệc cưới Cana (Ga 2,1-12), cùng với những giáo huấn rõ ràng của Người về tính bất khả phân ly của hôn nhân, minh chứng cho việc tình yêu phu thê được thăng hoa, trở thành một dấu chỉ hữu hình mang lại ân sủng vô hình nhằm thánh hóa đời sống gia đình. <sup><a href="#ref-6" className="text-[var(--reader-text-link)] hover:underline font-bold">[6]</a></sup>
              </p>

              <Blockquote source="Mt 19,5-7" variant="scripture">
                Sự gì Thiên Chúa đã phối hợp, loài người không được phân ly.
              </Blockquote>
            </Section>

            <div className="divider-ornate"><span>✝</span></div>

            <Section id="muc-dich-kep">
              <h3>Mục đích Kép và Đặc tính Cốt lõi của Hôn nhân Công giáo</h3>
              <p>
                Hôn nhân Công giáo được xây dựng trên một nền tảng <strong>mục đích kép</strong> mang tính bản thể và không thể tách rời: <em>sự thiện ích của đôi bạn</em> và <em>sự hướng đến việc truyền sinh</em>.
              </p>
              <p>
                <strong>Thứ nhất, ích lợi tinh thần và thể xác của đôi bạn (<GlossaryTooltip termId="bonum-conjugum">Bonum conjugum</GlossaryTooltip>).</strong> Hôn nhân hướng đến việc giúp hai cá nhân phát triển tình yêu, tương trợ, bổ túc và hoàn thiện lẫn nhau trên mọi phương diện của đời sống, từ bình diện thiêng liêng, tâm lý, đến thể lý, mà chủ yếu và đặc biệt là trong đời sống tính dục. Sự trao hiến thân xác giữa hai vợ chồng được Giáo hội nhìn nhận không phải là một sự thỏa mãn bản năng hạ đẳng, mà chỉ đạt đến ý nghĩa đích thực và thánh thiêng khi nó là biểu hiện của sự tự hiến toàn diện chính bản thân mình vì tình yêu. Hôn nhân đòi hỏi hai người phải ý thức rằng tình yêu của họ phát xuất từ chính nguồn mạch tình yêu của Thiên Chúa, và bước vào đời sống hôn nhân là một hành trình nên thánh chung. <sup><a href="#ref-11" className="text-[var(--reader-text-link)] hover:underline font-bold">[11]</a></sup>
              </p>
              <p>
                <strong>Thứ hai, truyền sinh và giáo dục con cái (<GlossaryTooltip termId="bonum-prolis">Bonum prolis</GlossaryTooltip>).</strong> Sự kết hợp phu thê tự bản chất mang tính cởi mở và hướng chiều về việc trao ban sự sống mới. Giáo huấn Công giáo khẳng định con cái là quà tặng tuyệt vời nhất của Thiên Chúa, là niềm vui cho cha mẹ và là vương miện của tình yêu lứa đôi. Mặc dù thần học hiện đại đã phát triển để nhìn nhận rằng truyền sinh không còn là chủ đích &quot;duy nhất và bắt buộc&quot; của mọi hành vi vợ chồng, đặc biệt trong các trường hợp hôn nhân của người lớn tuổi, hiếm muộn hay son sẻ, nhưng thái độ căn bản của đôi bạn khi lãnh nhận bí tích phải luôn là sự mở ngỏ cho việc sinh sản và sẵn sàng giáo dục con cái theo tinh thần Kitô giáo. <sup><a href="#ref-27" className="text-[var(--reader-text-link)] hover:underline font-bold">[27]</a></sup>
              </p>
              <p>
                Song song với mục đích kép, tình yêu phu thê Công giáo bị chi phối bởi hai đặc tính nền tảng:
              </p>
              <p>
                <strong>Sự đơn nhất (Đơn hôn):</strong> Hôn nhân là sự kết hợp duy nhất, độc quyền và trọn vẹn giữa một người nam và một người nữ, loại trừ hoàn toàn chế độ đa thê hay đa phu. Tự bản chất, tình yêu vợ chồng đòi hỏi sự đơn nhất tuyệt đối, biểu thị qua chân lý &quot;họ không còn phải là hai, nhưng là một xương một thịt&quot; (Mt 19,6). Đặc tính này bảo vệ sự bình đẳng tuyệt đối giữa vợ và chồng trong tình tương thân tương ái. <sup><a href="#ref-11" className="text-[var(--reader-text-link)] hover:underline font-bold">[11]</a></sup>
              </p>
              <p>
                <strong>Tính bất khả phân ly (Vĩnh hôn):</strong> Giao ước hôn nhân mang giá trị vĩnh viễn và trọn đời, không thể bị tháo gỡ bởi bất kỳ quyền lực trần gian nào. Dây hôn phối (<em>vinculum matrimoniale</em>) được hình thành từ sự ưng thuận hợp pháp sẽ chỉ bị chấm dứt khi một trong hai người qua đời. Lập trường kiên quyết này không dựa trên sự ép buộc pháp lý máy móc, mà bắt nguồn từ lý do sâu xa nhất của thần học giao ước: sự trung tín vĩnh cửu của Thiên Chúa với dân Người và của Đức Kitô với Hội Thánh. <sup><a href="#ref-1" className="text-[var(--reader-text-link)] hover:underline font-bold">[1, 11]</a></sup>
              </p>
              <p>
                Để đảm bảo tính hữu hiệu của bí tích, luật pháp Giáo hội quy định một số điều kiện và ngăn trở tiêu hôn khắt khe. Hai người nam nữ phải hoàn toàn tự do khi kết hôn, không bị ép buộc, và không bị vướng mắc bởi luật tự nhiên hay luật thực định của Giáo hội. Các ngăn trở làm cho hôn phối vô hiệu ngay từ đầu bao gồm: có chức thánh, đã tuyên khấn trọn đời trong dòng tu, ngăn trở do mưu sát người phối ngẫu, ngăn trở do huyết hệ hoặc dưỡng hệ, và ngăn trở về công hạnh. <sup><a href="#ref-27" className="text-[var(--reader-text-link)] hover:underline font-bold">[27]</a></sup>
              </p>
            </Section>

            <div className="divider-ornate"><span>✝</span></div>

            {/* ===== PHẦN 2: VẺ ĐẸP THẦN HỌC ===== */}
            <Section id="ve-dep-than-hoc">
              <h2>Vẻ đẹp Thần học và Chiều sâu Tâm linh của Đời sống Phu thê</h2>
              <p className="drop-cap-catholic">
                Trong lịch sử phát triển tư tưởng và thực hành của người Công giáo, đã từng có những khuynh hướng thần học hoặc tâm lý bình dân xem nhẹ ơn gọi hôn nhân, coi đó là một bậc sống thấp kém hơn so với ơn gọi thánh hiến (linh mục, tu sĩ). Định kiến này cho rằng bậc sống tu trì là con đường độc quyền để đạt tới sự trọn lành, trong khi hôn nhân chỉ là một giải pháp nhằm nhượng bộ cho những yếu đuối của bản tính con người. Tuy nhiên, <strong>thần học đương đại, đặc biệt từ sau Công đồng Vatican II, đã khôi phục lại vị thế cao trọng và vẻ đẹp tráng lệ của đời sống lứa đôi.</strong> Hôn nhân không chỉ là một cấu trúc trần thế mà là một ơn gọi nên thánh thực sự, một mầu nhiệm phản chiếu ánh quang Nước Trời. <sup><a href="#ref-2" className="text-[var(--reader-text-link)] hover:underline font-bold">[2]</a></sup>
              </p>
            </Section>

            <Section id="than-hoc-than-xac">
              <h3>Thần học về Thân xác và Sự Hiệp thông Ngôi vị</h3>
              <p>
                Nền tảng thần học sâu sắc và mang tính cách mạng nhất về hôn nhân trong thời hiện đại được Đức Thánh Giáo hoàng Gioan Phaolô II phác họa qua loạt bài giáo lý vào thứ Tư hàng tuần, được biết đến dưới tên gọi <GlossaryTooltip termId="than-hoc-than-xac"><strong>&quot;Thần học về Thân xác&quot; (Theology of the Body)</strong></GlossaryTooltip> <sup><a href="#ref-19" className="text-[var(--reader-text-link)] hover:underline font-bold">[19]</a></sup>. Giáo huấn này đã thay đổi hoàn toàn cách nhìn tiêu cực về tính dục và thân xác. Thân xác con người, mang giới tính nam hoặc nữ, không phải là một thực thể sinh học thuần túy hay một cỗ máy vật lý, mà mang <strong>&quot;ý nghĩa phu thê&quot; (spousal meaning)</strong> ngay trong cấu trúc nội tại của nó.
              </p>
              <p>
                Đức Gioan Phaolô II lập luận rằng, con người trở thành &quot;hình ảnh và họa ảnh&quot; của Thiên Chúa không chỉ bởi vì họ có lý trí hay tự do cá nhân, mà sâu xa hơn, nhờ vào <strong>sự hiệp thông ngôi vị (<em>communio personarum</em>)</strong> giữa người nam và người nữ ngay từ thưở ban đầu. Thân xác đóng vai trò là &quot;dấu chỉ hữu hình của một thực tại vô hình, thần linh và siêu việt&quot;. Qua dấu chỉ thân xác này, Thiên Chúa tự hiến ban chính mình cho con người, và con người tự trao hiến cho nhau. <sup><a href="#ref-19" className="text-[var(--reader-text-link)] hover:underline font-bold">[19]</a></sup>
              </p>
            </Section>

            <Section id="mau-nhiem">
              <h3><GlossaryTooltip termId="sacramentum-magnum">Mầu nhiệm Cao cả (<em>Sacramentum Magnum</em>)</GlossaryTooltip> qua lăng kính Thư Êphêsô</h3>
              <p>
                Chiều sâu tâm linh của hôn nhân Công giáo được khắc họa rõ nét và thần học hóa mạnh mẽ nhất qua Thư gửi tín hữu Êphêsô (Ep 5, 25-32). Tác giả Thánh thư đã thiết lập một <strong>phép loại suy thần học vĩ đại</strong>, trình bày tình yêu giữa Đức Kitô và Hội Thánh như một khuôn mẫu tuyệt đối và nguyên mẫu cho đời sống vợ chồng.
              </p>
              <p>
                Trong sự kết hợp này, tình yêu của Đức Kitô dành cho Hội Thánh là tình yêu hiến mạng, Người hiến ban chính mình để thanh tẩy, thánh hóa và biến Hội Thánh thành một hiền thê lộng lẫy, tinh tuyền không tỳ ố. Mối quan hệ loại suy này có tính tương hỗ sâu sắc, soi sáng cho nhau. Một mặt, tương quan phu thê giữa con người giúp nhân loại lờ mờ thấu hiểu được tình yêu vô hạn, &quot;ẩn kín từ muôn thuở trong Thiên Chúa&quot; của Đức Kitô dành cho Giáo hội. Mặt khác, và quan trọng hơn, hình ảnh này mạc khải sự thật cốt yếu về hôn nhân: chỉ khi các cặp vợ chồng nỗ lực rập khuôn tình yêu của họ theo mẫu gương hiến mình của Đức Kitô, hôn nhân của họ mới thực sự trở thành ơn gọi Kitô giáo. <sup><a href="#ref-26" className="text-[var(--reader-text-link)] hover:underline font-bold">[26]</a></sup>
              </p>

              <Blockquote source="Ep 5,25-32" variant="scripture">
                Người làm chồng hãy yêu thương vợ mình, như chính Đức Kitô đã yêu thương Hội Thánh và hiến mình vì Hội Thánh.
              </Blockquote>

              <p>
                Lời khuyên &quot;Người làm vợ hãy tùng phục chồng&quot; thường bị hiểu lầm trong bối cảnh văn hóa hiện đại như một sự áp bức phong kiến. Tuy nhiên, thần học Công giáo diễn giải sự &quot;tùng phục&quot; này không mang tính đàn áp, mà đặt trong bối cảnh Hội Thánh tùng phục Đức Kitô, mang ý nghĩa là người vợ mở lòng để &quot;hưởng nếm tình yêu&quot; hiến thân vô cầu từ người chồng, người được kêu gọi yêu vợ &quot;như yêu chính thân thể mình&quot; và sẵn sàng hy sinh mạng sống vì vợ. Sự trao đổi tình yêu dâng hiến và đón nhận này dẫn đến một sự hợp nhất về mặt luân lý và tâm linh sâu sắc, nơi cái &quot;Tôi&quot; trở thành &quot;Em&quot; và &quot;Em&quot; trở thành &quot;Tôi&quot;, thiết lập một cộng đồng yêu thương không thể phân ly. <sup><a href="#ref-26" className="text-[var(--reader-text-link)] hover:underline font-bold">[26]</a></sup>
              </p>
            </Section>

            <Section id="nhan-hoc">
              <h3>Nhân học Kitô giáo: Tự do, Chung thủy và Đau khổ trong Tình yêu</h3>
              <p>
                Dưới cái nhìn của nhân học Kitô giáo, tình yêu con người tuôn chảy từ thượng nguồn tình yêu Thiên Chúa. Giao ước hôn nhân được so sánh với giao ước giữa Thiên Chúa và Dân Ngài, một giao ước &quot;không thời hạn&quot;, đòi hỏi sự trung thành vĩnh viễn. Thiên Chúa thì trung thành tuyệt đối, trong khi con người thường xuyên mong manh, mỏng giòn và bất trung. Sự hữu hạn này làm cho tình yêu con người dễ rạn nứt. <strong>Điểm tựa duy nhất để con người có thể ở lại với nhau đến cùng chính là nhờ ân sủng của Thiên Chúa nâng đỡ</strong>, mời gọi họ hướng về tình yêu thượng nguồn. <sup><a href="#ref-26" className="text-[var(--reader-text-link)] hover:underline font-bold">[26, 30]</a></sup>
              </p>
              <p>
                Trung thành trong đời sống vợ chồng và tự do cá nhân dường như là hai khía cạnh đối chọi nhau trong tư duy thế tục. Tuy nhiên, nhân học Công giáo khẳng định rằng nếu sự trung thành là yếu tính của tình yêu vợ chồng, thì việc không tôn trọng tự do của người bạn đời là xem thường tình yêu đó. <strong>Tự do làm phát triển nhân vị, và một cam kết trung thành đích thực phải là một lựa chọn tự do mỗi ngày.</strong>
              </p>
              <p>
                Hơn nữa, con đường hôn nhân không miễn trừ đau khổ. Tín hữu không đi tìm đau khổ nhưng cũng không né tránh nó; thay vào đó, họ dùng tự do để đón nhận đau khổ bằng con tim yêu thương. Đau khổ trong yêu thương là &quot;đau khổ được cứu chuộc&quot;, và sự chung thủy đích thực chính là khả năng &quot;biết bắt đầu lại sau những lần bất trung&quot; dựa trên lòng thương xót và ơn tha thứ. <sup><a href="#ref-5" className="text-[var(--reader-text-link)] hover:underline font-bold">[5]</a></sup>
              </p>
            </Section>

            <div className="divider-ornate"><span>✝</span></div>

            {/* ===== PHẦN 3: HUẤN QUYỀN ===== */}
            <Section id="huan-quyen">
              <h2>Sự Tiến triển của <GlossaryTooltip termId="magisterium">Huấn quyền</GlossaryTooltip> về Mục vụ Gia đình</h2>
              <p className="drop-cap-catholic">
                Trước sự suy thoái của các giá trị gia đình do tác động của trào lưu thế tục hóa và nền văn hóa tiêu thụ, Giáo hội Công giáo đã liên tục đưa ra các định hướng mục vụ nhằm bảo vệ, canh tân và nâng đỡ đời sống hôn nhân. Lộ trình mục vụ này trải dài từ việc củng cố nền tảng giáo lý truyền thống trong Công đồng Vatican II, đến việc hệ thống hóa quy trình chuẩn bị dưới thời Đức Gioan Phaolô II, và cuối cùng là sự uyển chuyển, hội nhập đầy lòng thương xót dưới triều đại Đức Thánh Cha Phanxicô. <sup><a href="#ref-29" className="text-[var(--reader-text-link)] hover:underline font-bold">[29]</a></sup>
              </p>
            </Section>

            <Section id="gaudium">
              <h3>Gaudium et Spes: Đề cao Phẩm giá và Nhận diện Khủng hoảng</h3>
              <p>
                Hiến chế Mục vụ <em>Gaudium et Spes</em> (Vui mừng và Hy vọng) được ban hành trong Công đồng Vatican II (1965) đã đánh dấu một bước ngoặt mang tính lịch sử khi định nghĩa lại hôn nhân. Bỏ lại đằng sau lối tiếp cận nặng về pháp lý, Hiến chế đã mô tả hôn nhân như một <strong>&quot;cộng đồng mật thiết của sự sống và tình yêu&quot;</strong>, một sự tự hiến trọn vẹn. <sup><a href="#ref-3" className="text-[var(--reader-text-link)] hover:underline font-bold">[3]</a></sup>
              </p>

              <Blockquote variant="magisterium" source="Gaudium et Spes, số 47-52">
                Phẩm giá của hôn nhân đang bị lu mờ bởi sự xuất hiện và lây lan của chế độ đa thê, nạn ly dị, thứ tình yêu được gọi là tự do luyến ái, tư duy duy khoái lạc vị kỷ và những lạm dụng bất hợp pháp trong việc hạn chế sinh sản nhân tạo.
              </Blockquote>

              <p>
                Sự xói mòn các giá trị gia đình tại nhiều quốc gia, đặc biệt là các nước phát triển, thể hiện qua việc giới trẻ kết hôn muộn hơn, ngại cam kết, và tỷ lệ ly hôn tăng cao ngay cả trong những năm đầu chung sống, đã trở thành mối bận tâm đè nặng lên tâm trí Giáo hội. Việc bảo vệ sự thánh thiêng của hôn nhân được khẳng định là việc bảo vệ tế bào sống động nhất của cả nhân loại và Dân Thiên Chúa. <sup><a href="#ref-3" className="text-[var(--reader-text-link)] hover:underline font-bold">[3]</a></sup>
              </p>
            </Section>

            <Section id="familiaris">
              <h3>Familiaris Consortio: Quy trình Chuẩn bị Ba Giai đoạn và Sự Kiên định</h3>
              <p>
                Nhằm ứng phó với thực trạng ngày càng nhiều người bước vào hôn nhân trong sự thiếu hiểu biết và thiếu chuẩn bị về mặt thiêng liêng, Tông huấn <GlossaryTooltip termId="familiaris-consortio"><em>Familiaris Consortio</em></GlossaryTooltip> (1981) của Đức Gioan Phaolô II đã đề ra một lộ trình mục vụ liên tục, xuyên suốt và bao quát mọi giai đoạn phát triển của cá nhân. Việc chuẩn bị hôn nhân được phân chia thành <strong>ba cấp độ</strong> rõ rệt: <sup><a href="#ref-18" className="text-[var(--reader-text-link)] hover:underline font-bold">[18]</a></sup>
              </p>
              <p>
                <strong>Chuẩn bị xa:</strong> Giai đoạn này bắt buộc phải được khởi đầu ngay từ thời thơ ấu trong môi trường giáo dục gia đình. Mục tiêu là giúp trẻ em và thanh thiếu niên nhìn nhận cuộc đời như một lời mời gọi đến với tình yêu, thông qua việc giáo dục nhân bản, giáo dục tính dục phù hợp với lứa tuổi, và rèn luyện đức khiết tịnh. <sup><a href="#ref-12" className="text-[var(--reader-text-link)] hover:underline font-bold">[12, 18]</a></sup>
              </p>
              <p>
                <strong>Chuẩn bị gần:</strong> Dành cho lứa tuổi thanh niên và những người bước vào thời kỳ đính hôn. Thông qua các khóa giáo lý chuẩn bị hôn nhân, các bạn trẻ được huấn luyện để phân định ơn gọi, lựa chọn bạn đời phù hợp, và đào sâu các bổn phận luân lý, đạo lý của Hôn nhân Kitô giáo. <sup><a href="#ref-12" className="text-[var(--reader-text-link)] hover:underline font-bold">[12]</a></sup>
              </p>
              <p>
                <strong>Chuẩn bị cấp thời:</strong> Diễn ra trong những tháng ngày cận kề trước khi đôi bạn tiến đến bàn thờ. Giai đoạn này tập trung vào việc đào sâu ý nghĩa mầu nhiệm Chúa Kitô và Hội Thánh, chuẩn bị tâm hồn lãnh nhận ân sủng bí tích và tham dự tích cực vào phụng vụ cử hành hôn phối. <sup><a href="#ref-12" className="text-[var(--reader-text-link)] hover:underline font-bold">[12]</a></sup>
              </p>

              <Blockquote variant="magisterium" source="Familiaris Consortio, 1981">
                Nếu sau mọi nỗ lực mục vụ mà đôi bạn vẫn từ chối một cách rõ ràng những điều Giáo hội muốn thực hiện qua bí tích, vị mục tử có trách nhiệm từ chối cử hành nghi lễ cho họ.
              </Blockquote>

              <p>
                Về mặt kỷ luật đối với các hoàn cảnh khó khăn, <em>Familiaris Consortio</em> duy trì lập trường truyền thống: những người ly dị tái hôn về mặt dân sự không được phép rước lễ (hiệp thông Thánh Thể) vì tình trạng sống của họ mâu thuẫn khách quan với giao ước yêu thương giữa Chúa Kitô và Hội Thánh. Tuy nhiên, họ không bị loại trừ khỏi Hội Thánh và cần được nâng đỡ bằng tình thương. <sup><a href="#ref-22" className="text-[var(--reader-text-link)] hover:underline font-bold">[22]</a></sup>
              </p>
            </Section>

            <Section id="amoris">
              <h3>Amoris Laetitia: Luật Tiệm tiến, Lương tâm và Lòng Thương xót</h3>
              <p>
                Đến Tông huấn <GlossaryTooltip termId="amoris-laetitia"><em>Amoris Laetitia</em></GlossaryTooltip> (Niềm Vui Tình Yêu, 2016), trọng tâm mục vụ của Giáo hội chứng kiến một sự chuyển dịch tinh tế và sâu sắc: từ việc tập trung áp dụng các quy tắc đạo đức một cách cứng nhắc sang việc <strong>đồng hành, phân định và hội nhập dựa trên lòng thương xót</strong>. Đức Thánh Cha Phanxicô mang lại một cái nhìn thực tế, tiệm tiến và đầy nhân từ đối với mọi gia đình, đặc biệt là những người đang sống trong các hoàn cảnh &quot;mỏng giòn&quot; hoặc &quot;trái quy tắc&quot;. <sup><a href="#ref-5" className="text-[var(--reader-text-link)] hover:underline font-bold">[5]</a></sup>
              </p>
              <p>
                Sự canh tân mục vụ này dựa trên ba nguyên tắc nền tảng:
              </p>
              <p>
                <strong>Đề cao vai trò của lương tâm cá nhân:</strong> Lương tâm được tái khẳng định là &quot;cung thánh sâu kín nhất của con người với Thiên Chúa&quot;. Tông huấn cảnh báo xu hướng áp dụng lề luật máy móc mà không cần cố gắng tự xét lương tâm. Giáo hội được mời gọi &quot;để đào tạo các lương tâm chứ không thay thế các lương tâm&quot;. <sup><a href="#ref-5" className="text-[var(--reader-text-link)] hover:underline font-bold">[5]</a></sup>
              </p>
              <p>
                <strong>Luật Tiệm tiến (Law of Gradualness):</strong> Nhận thức rằng đời sống Kitô hữu là một tiến trình phát triển, mục vụ phải chấp nhận &quot;luật tiệm tiến&quot;. Nghĩa là, con người có những mức độ đáp trả khác nhau đối với lề luật của Thiên Chúa tùy theo năng lực và hoàn cảnh hiện tại của họ. <sup><a href="#ref-5" className="text-[var(--reader-text-link)] hover:underline font-bold">[5, 29]</a></sup>
              </p>

              <Blockquote variant="magisterium" source="Amoris Laetitia, 2016">
                Giáo huấn về gia đình phải được biến đổi dưới ánh sáng của sự dịu dàng, nếu không nó chỉ là một &quot;giáo điều lạnh lùng và thiếu sinh khí&quot;.
              </Blockquote>

              <p>
                <strong>Con đường Đức ái (<em>Via Caritatis</em>) và Mục vụ Phân định:</strong> Lòng thương xót không phải là một chiến lược tạm thời mà là &quot;thái độ liên tục của Giáo hội&quot;. Tông huấn kêu gọi một tiến trình phân định mục vụ đầy lòng thương xót để thấu hiểu, tha thứ, đồng hành và hội nhập các tín hữu. Những người ly dị tái hôn cần được hòa nhập sâu rộng vào cộng đoàn chứ không phải bị coi là những người bị vạ tuyệt thông. Các mục tử phải lắng nghe với sự bình tâm, đi vào trọng tâm bi kịch con người để giúp họ tìm ra vị trí của mình trong lòng Giáo hội. <sup><a href="#ref-5" className="text-[var(--reader-text-link)] hover:underline font-bold">[5]</a></sup>
              </p>
            </Section>

            <div className="divider-ornate"><span>✝</span></div>

            {/* ===== PHẦN 4: VIỆT NAM ===== */}
            <Section id="viet-nam">
              <h2>Chương trình Đào tạo và Chuẩn bị Hôn nhân tại Việt Nam</h2>
              <p className="drop-cap-catholic">
                Hội đồng Giám mục Việt Nam (HĐGMVN) đã nỗ lực cụ thể hóa các chỉ thị của Giáo hội hoàn vũ thành những chương trình đào tạo và đồng hành thiết thực, bám sát thực trạng văn hóa và xã hội trong nước. Sự quan tâm này được thể hiện rõ nét qua các khóa Giáo lý Hôn nhân thống nhất trên toàn quốc.
              </p>
            </Section>

            <Section id="giao-ly-12-bai">
              <h3>Khung Chương trình Giáo lý Hôn nhân 12 Bài</h3>
              <p>
                Để đáp ứng yêu cầu chuẩn bị gần cho các đôi bạn trẻ, Ủy ban Giáo lý Đức tin trực thuộc HĐGMVN đã biên soạn một chương trình Giáo lý Hôn nhân chuẩn mực, được khuyến khích áp dụng tại các giáo phận. Chương trình này gồm <strong>12 bài học cốt lõi</strong> (ngoài hai buổi mở đầu và kết thúc), tập trung trang bị kiến thức toàn diện về thần học, tâm lý học, luân lý và kỹ năng sống. Khung chương trình được thiết kế theo tinh thần của Tông huấn <em>Amoris Laetitia</em> nhằm làm cho hôn nhân trở nên &quot;hấp dẫn và đáng khao khát&quot;. <sup><a href="#ref-31" className="text-[var(--reader-text-link)] hover:underline font-bold">[31]</a></sup>
              </p>

              <AcademicTable
                caption="Cấu trúc Chương trình Giáo lý Hôn nhân"
                headers={["Phần", "Bài học / Chuyên đề", "Trọng tâm Thần học và Kỹ năng Mục vụ"]}
                rows={[
                  ["Mở đầu", "Đồng hành gặp gỡ, bắc chung nhịp cầu", "Dựa trên Lời Chúa (Lc 24, 13-35: Hai môn đệ đi Emmaus). Tạo bầu khí yêu thương, làm quen, và chia sẻ niềm mong đợi."],
                  ["Phần I: Ơn gọi Hôn nhân", "Ơn gọi, Giáo luật và Hôn nhân khác tôn giáo", "Khám phá ý định của Thiên Chúa về hôn nhân, các thủ tục pháp lý, sự khác biệt tôn giáo, và ý nghĩa thời kỳ đính hôn."],
                  ["", "Tính dục và Sự khác biệt giới tính", "Thân xác thánh thiêng như ngôn ngữ tuyệt vời của tình yêu, sự khác biệt nam nữ, và sự hòa hợp trong sự tôn trọng."],
                  ["", "Yêu thương và Giải quyết xung đột", "Lắng nghe Lời Chúa (Ga 15, 12-15) để học cách yêu như Đức Kitô. Nhận diện xung đột, thực hành lòng vị tha và kỹ năng hòa giải."],
                  ["Phần II: Gia đình là Hội Thánh tại gia", "Sinh con có trách nhiệm và Giáo dục", "Ý thức sứ mạng cộng tác với Đấng Tạo Hóa, nuôi nấng con cái, đạo hiếu, và nêu gương đạo đức trong gia đình."],
                  ["", "Linh đạo, Bí tích và Liên đới xã hội", "Cầu nguyện chung, đời sống các bí tích để thánh hóa gia đình, và tầm quan trọng của việc liên đới, góp phần xây dựng xã hội."],
                  ["Kết luận", "Cử hành Bí tích Hôn phối", "Hiểu ý nghĩa phụng vụ Hôn phối như một cam kết trọn đời (Giao ước tình yêu), tĩnh tâm cầu nguyện trước ngày cưới."],
                ]}
              />

              <p>
                Tại các trung tâm đô thị lớn như Tổng Giáo phận (TGP) TP.HCM, các giáo xứ đóng vai trò then chốt trong việc triển khai chương trình này. Điển hình như Giáo xứ Đức Mẹ Hằng Cứu Giúp (Dòng Chúa Cứu Thế - Kỳ Đồng) và Giáo xứ Đaminh (Ba Chuông) liên tục tổ chức các khóa học linh hoạt để đáp ứng nhu cầu đa dạng của giới trẻ. Có sự phân chia rõ ràng giữa <strong>khóa dài hạn</strong> (kéo dài khoảng 4,5 tháng) dành cho những người muốn tìm hiểu sâu rộng, và <strong>khóa ngắn hạn</strong> (1,5 tháng với lịch học dày đặc vào cuối tuần) tập trung vào các vấn đề cấp bách trước hôn lễ. Ban giảng huấn thường là sự kết hợp đa ngành giữa các linh mục, bác sĩ, và chuyên gia tâm lý. <sup><a href="#ref-4" className="text-[var(--reader-text-link)] hover:underline font-bold">[4, 10, 23]</a></sup>
              </p>
            </Section>

            <Section id="dong-hanh">
              <h3>Mục vụ Đồng hành cùng Gia đình Trẻ và Hoàn cảnh Phức tạp</h3>
              <p>
                Xác định rằng hoạt động mục vụ không được phép kết thúc ở bàn thờ sau lễ cưới, HĐGMVN liên tục nhấn mạnh việc <strong>đồng hành hậu hôn nhân</strong>. Đặc biệt, trong Thư chung năm 2016 và 2018, Giáo hội Việt Nam đã chỉ định năm 2018 là năm &quot;Đồng hành với các Gia đình trẻ&quot; nhằm nâng đỡ các cặp vợ chồng trong những năm đầu chung sống, giai đoạn được đánh giá là mỏng manh và dễ rạn nứt nhất. <sup><a href="#ref-28" className="text-[var(--reader-text-link)] hover:underline font-bold">[28]</a></sup>
              </p>
              <p>
                Các mục tử được yêu cầu đặt mục vụ gia đình làm trung tâm cốt lõi của giáo xứ, bởi <strong>&quot;gia đình là con đường Hội Thánh phải đi&quot;</strong>. Phương pháp đồng hành được triển khai cụ thể qua 12 đề tài học hỏi, phân bổ cho 12 tháng trong năm: <sup><a href="#ref-28" className="text-[var(--reader-text-link)] hover:underline font-bold">[28]</a></sup>
              </p>

              <AcademicTable
                caption="Đề tài Học hỏi Mục vụ Đồng hành Gia đình Trẻ (2018)"
                headers={["Thời gian", "Đề tài", "Ý nghĩa và Nội dung Trọng tâm"]}
                rows={[
                  ["Tháng 1 & 2", "Chuyện một ngày và một đời / Lời hứa kết hôn", "Đánh thức ý thức về lời thề hứa trọn đời; sự chuyển giao từ nghi lễ ngày cưới sang thực tế phũ phàng của đời sống chung."],
                  ["Tháng 3, 4, 5", "Khi hôn nhân thất bại / Một hôn nhân hạnh phúc / Nguyên nhân sâu xa...", "Trực diện phân tích các khủng hoảng, mổ xẻ nguyên nhân tâm lý/tâm linh của sự rạn nứt, và cách xây dựng lại hạnh phúc từ đổ vỡ."],
                  ["Tháng 6 & 7", "Hôn nhân thực sự là gì? / \"Anh nhận Em làm vợ...\"", "Tái định nghĩa bản chất tình yêu hiến thân; trân trọng người bạn đời như một nhân vị độc nhất, không thể thay thế."],
                  ["Tháng 8 & 9", "Tự do chứ không bị ép buộc / Trước mặt Chúa", "Ý nghĩa của tự do trong cam kết vĩnh viễn và tầm quan trọng của việc đặt sự hiện diện của Thiên Chúa làm trung tâm gia đình."],
                  ["Tháng 10, 11, 12", "Yêu thương và tôn trọng / Đón nhận con cái / Giữ lòng chung thủy", "Thực hành sự bao dung, mở ngỏ với sự sống mới theo thánh ý Chúa, và bảo vệ lòng chung thủy đến hơi thở cuối cùng."],
                ]}
              />

              <p>
                Ngoài ra, TGP Sài Gòn cũng đặc biệt quan tâm đến các trường hợp phức tạp như đồng hành cùng gia đình trẻ ly hôn, khủng hoảng sau kết hôn, và những khó khăn trong đời sống hôn nhân khác đạo. Việc đồng hành này không chỉ dựa vào linh mục quản xứ mà còn kêu gọi sự tương trợ, chia sẻ kinh nghiệm giữa chính các gia đình trong cộng đoàn giáo xứ để lan tỏa giá trị Kitô giáo một cách thực tiễn nhất. <sup><a href="#ref-22" className="text-[var(--reader-text-link)] hover:underline font-bold">[22, 24]</a></sup>
              </p>
            </Section>

            <div className="divider-ornate"><span>✝</span></div>

            {/* ===== PHẦN 5: HỘI NHẬP VĂN HÓA ===== */}
            <Section id="hoi-nhap">
              <h2>Hội nhập Văn hóa: Hôn nhân Công giáo và Lễ nghi Tôn kính Tổ tiên</h2>
              <p className="drop-cap-catholic">
                Một khía cạnh độc đáo, tinh tế và mang tính quyết định của thần học mục vụ tại Việt Nam là việc hội nhập văn hóa, đặc biệt liên quan đến phong tục tôn kính ông bà tổ tiên. Đối với người Việt, &quot;công cha như núi Thái Sơn, nghĩa mẹ như nước trong nguồn chảy ra&quot; không chỉ là ca dao, mà là nền tảng đạo đức cốt lõi. Trong các lễ cưới truyền thống, &quot;Lễ Tổ&quot; hay &quot;Lễ Gia Tiên&quot; là nghi thức không thể thiếu để trình diện và tạ ơn nguồn cội.
              </p>
            </Section>

            <Section id="lich-su-hoi-nhap">
              <h3>Lịch sử Tiến trình Thần học Hội nhập</h3>
              <p>
                Trong lịch sử truyền giáo tại Á Đông, vấn đề thờ cúng tổ tiên từng là một trở ngại khổng lồ, gây ra nhiều tranh cãi gay gắt và bế tắc mục vụ trong suốt nhiều thế kỷ. Các thừa sai phương Tây từng có quan điểm rất khắt khe, coi các nghi lễ này là hành vi thờ cúng thần linh ngoại giáo. Phải đến ngày 08/12/1939, với <strong>Huấn thị <GlossaryTooltip termId="plane-compertum-est"><em>Plane Compertum Est</em></GlossaryTooltip></strong> do Bộ Truyền Giáo ban hành, Giáo hội mới chính thức mở đường cho việc hội nhập văn hóa, xác định rằng theo sự biến đổi của thời gian, nhiều nghi lễ tại Á Đông hiện nay chỉ còn mang ý nghĩa dân sự, biểu lộ lòng biết ơn và sự kính trọng đối với tổ tiên chứ không phải là hành vi thờ phượng thần thánh. <sup><a href="#ref-15" className="text-[var(--reader-text-link)] hover:underline font-bold">[15]</a></sup>
              </p>
              <p>
                Tiếp nối tinh thần cởi mở của Công đồng Vatican II, HĐGM Miền Nam Việt Nam đã ban hành Thông cáo (1965) và Quyết nghị (1974), vạch ra những hướng dẫn hết sức cụ thể nhằm thánh hóa phong tục địa phương, giúp đồng bào lương dân dễ dàng đón nhận Tin Mừng mà không cảm thấy phải chối bỏ cội nguồn văn hóa. <sup><a href="#ref-13" className="text-[var(--reader-text-link)] hover:underline font-bold">[13]</a></sup>
              </p>
            </Section>

            <Section id="le-gia-tien">
              <h3>Quy định Cụ thể về Lễ Gia Tiên trong Hôn phối</h3>
              <p>
                Theo <strong>Quyết nghị 1974</strong>, người Công giáo được phép thực hiện &quot;Lễ Tổ, Lễ Gia Tiên&quot; trong ngày cưới. Những hướng dẫn này quy định rất chi tiết để đảm bảo sự hòa hợp giữa đức tin và văn hóa: <sup><a href="#ref-13" className="text-[var(--reader-text-link)] hover:underline font-bold">[13]</a></sup>
              </p>
              <p>
                <strong>Vị trí Bàn thờ:</strong> Bàn thờ gia tiên dùng để kính nhớ ông bà phải được đặt dưới bàn thờ Chúa trong gia đình. Trên bàn thờ tuyệt đối không được bày biện những vật dụng mang tính mê tín dị đoan. <sup><a href="#ref-13" className="text-[var(--reader-text-link)] hover:underline font-bold">[13, 17]</a></sup>
              </p>
              <p>
                <strong>Cử chỉ Tôn kính:</strong> Đôi dâu rể hoàn toàn được phép thực hiện các cử chỉ như thắp nhang (hương), đốt nến và vái lạy trước bàn thờ hoặc giường thờ tổ tiên. Quyết nghị xác định đây là những cử chỉ mang tính chất thế tục, lịch sự xã giao, nhằm biểu lộ lòng hiếu thảo, trình diện và tưởng nhớ người đã khuất. Việc này hoàn toàn tương hợp với đạo lý Công giáo về nhân đức thảo kính cha mẹ (Giới răn thứ Tư). <sup><a href="#ref-13" className="text-[var(--reader-text-link)] hover:underline font-bold">[13]</a></sup>
              </p>
              <p>
                <strong>Trách nhiệm Giải thích Đức tin:</strong> Mục vụ gia đình đòi hỏi người Công giáo phải có khả năng khéo léo giải thích ý nghĩa của các hành vi này cho những người xung quanh để tránh gây gương mù, hiểu lầm rằng họ đang thờ phượng tổ tiên như những vị thần linh. Giáo hội cũng nhắc nhở rằng người quá cố cần lời cầu nguyện và việc lành phúc đức hơn là các lễ vật vật chất. <sup><a href="#ref-14" className="text-[var(--reader-text-link)] hover:underline font-bold">[14]</a></sup>
              </p>
            </Section>

            <Section id="phan-dinh">
              <h3>Khôn ngoan Phân định trong Hoàn cảnh Phức tạp và Liên Tôn</h3>
              <p>
                Do sự biến đổi không ngừng của xã hội, sự giao thoa văn hóa tạo ra không ít hoàn cảnh bối rối cho các đôi hôn phối khác đạo. Ngày 07/10/2025, HĐGMVN công bố <strong>&quot;Hướng dẫn việc Tôn kính Tổ tiên&quot;</strong>, cung cấp những quy tắc ứng xử cập nhật. Văn kiện này lưu ý rằng, trong những tình huống phức tạp, tín hữu Công giáo được mời gọi áp dụng <strong>&quot;lương tâm bác ái&quot;</strong> để phân định dựa trên bốn tiêu chuẩn cốt lõi: <sup><a href="#ref-14" className="text-[var(--reader-text-link)] hover:underline font-bold">[14]</a></sup>
              </p>
              <p>
                <strong>Tình yêu Thiên Chúa:</strong> Dù tham gia nghi lễ truyền thống, tâm hồn vẫn phải hướng về tình yêu Thiên Chúa trên hết. <sup><a href="#ref-7" className="text-[var(--reader-text-link)] hover:underline font-bold">[7, 14]</a></sup>
              </p>
              <p>
                <strong>Tình yêu Con người:</strong> Nếu hành vi của tín hữu hoàn toàn xuất phát từ tình yêu chân thành đối với ông bà, cha mẹ thì đó chính là thực thi tình yêu Kitô giáo, không giả dối.
              </p>
              <p>
                <strong>Thực tại quan trọng hơn lý tưởng:</strong> Trong hoàn cảnh khó khăn, tín hữu được phép tham dự cách thụ động vào các nghi thức của người khác đạo, miễn là có lương tâm Công giáo ngay thẳng, khôn ngoan. Tín hữu phải &quot;khiêm nhường đón nhận tính bất toàn của thực tại đời sống, so với tính hoàn hảo của lý tưởng đức tin&quot;.
              </p>
              <p>
                <strong>Hiệp nhất vượt thắng xung đột:</strong> Lựa chọn các giải pháp ưu tiên bảo vệ sự hiệp nhất gia đình và làm chứng cho đức ái hơn là tạo ra những cuộc xung đột tôn giáo gay gắt không cần thiết.
              </p>
            </Section>

            <div className="divider-ornate"><span>✝</span></div>

            {/* ===== KẾT LUẬN ===== */}
            <Section id="ket-luan">
              <h2>Kết luận</h2>
              <p className="drop-cap-catholic">
                Hôn nhân Công giáo là một tuyệt tác thần học, một ơn gọi cao quý biến sự kết hợp tự nhiên giữa người nam và người nữ thành một dấu chỉ thánh thiêng. Qua sự tự nguyện trao hiến trọn vẹn, tính đơn nhất độc quyền và đặc tính bất khả phân ly, đời sống phu thê không chỉ duy trì sự sống nhân loại mà còn trở thành phản ảnh trung thực và sống động nhất của tình yêu hiến tế mà Đức Kitô dành cho Giáo hội. <sup><a href="#ref-19" className="text-[var(--reader-text-link)] hover:underline font-bold">[19, 26]</a></sup>
              </p>
              <p>
                Dưới sự dẫn dắt của Huấn quyền qua các văn kiện mang tính bước ngoặt từ <em>Gaudium et Spes</em>, <em>Familiaris Consortio</em> đến <em>Amoris Laetitia</em>, Giáo hội đã xây dựng được một nền tảng thần học nhân học vững chắc, đồng thời định hình một lộ trình mục vụ uyển chuyển. Sự chuyển dịch từ lối tiếp cận thuần túy pháp lý sang sự đồng hành tiệm tiến, đề cao lương tâm và phương dược của lòng thương xót đã giúp Giáo hội trở thành người mẹ ủi an cho những gia đình đang gánh chịu tổn thương trong một thế giới thế tục hóa. <sup><a href="#ref-3" className="text-[var(--reader-text-link)] hover:underline font-bold">[3, 5, 18]</a></sup>
              </p>
              <p>
                Tại Việt Nam, sự nỗ lực đồng hành cùng gia đình trẻ qua các chương trình giáo lý 12 bài, các chiến dịch mục vụ hàng năm, và đặc biệt là sự khôn ngoan trong việc hội nhập văn hóa qua các quy định về lễ Gia Tiên, đã minh chứng cho một sức sống mục vụ năng động, bắt rễ sâu vào thực tại địa phương. <sup><a href="#ref-31" className="text-[var(--reader-text-link)] hover:underline font-bold">[31]</a></sup>
              </p>

              <Blockquote variant="pullquote">
                Giữa những khủng hoảng của thời đại khi mà các cam kết vĩnh viễn bị xem nhẹ, Bí tích Hôn phối không phải là một tàn dư lỗi thời của quá khứ, mà là một lời giải đáp mang tính ngôn sứ. Thông qua ân sủng bí tích, sự nâng đỡ liên lỉ của cộng đoàn và sự thấu cảm sâu sắc của lòng thương xót, các gia đình Công giáo tiếp tục được mời gọi vượt qua những giới hạn mỏng giòn của phận người để trở thành những &quot;Giáo hội tại gia&quot;, thắp lên niềm hy vọng và làm chứng cho một tình yêu trung tín, trọn vẹn và luôn cởi mở với sự sống.
              </Blockquote>
            </Section>

            <div className="divider-ornate"><span>✝</span></div>

            {/* ===== NGUỒN TRÍCH DẪN ===== */}
            <Section id="nguon-trich-dan">
              <h2>Nguồn trích dẫn</h2>
              <CitationGenerator />
              <AcademicReferences />
            </Section>

            </article>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
