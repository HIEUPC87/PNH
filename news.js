/**
 * PNH LAW – Dữ liệu tin tức
 * ============================================================
 * Để THÊM bài viết mới:
 *   1. Copy một block { id:..., ... } ở dưới
 *   2. Tăng id lên 1 (ví dụ: id tiếp theo là 4)
 *   3. Điền đầy đủ các trường
 *   4. Thêm vào ĐẦU mảng (để bài mới nhất hiện trước)
 *   5. Lưu file → mở lại trang web là thấy ngay
 *
 * Nội dung bài (trường "content"):
 *   - Dòng bắt đầu bằng "## " → thành tiêu đề đoạn
 *   - Dòng bình thường        → thành đoạn văn
 * ============================================================
 */

const NEWS_DATA = [
  {
    id: 3,
    slug: "luat-doanh-nghiep-sua-doi-2025",
    date: "2026-05-01",
    title: "Những điểm mới quan trọng của Luật Doanh nghiệp sửa đổi năm 2025",
    summary: "Luật Doanh nghiệp sửa đổi có hiệu lực từ đầu năm 2025 mang lại nhiều thay đổi đáng kể về quản trị công ty, quyền cổ đông và thủ tục tái cơ cấu. Doanh nghiệp cần rà soát lại điều lệ và quy chế nội bộ để đảm bảo tuân thủ.",
    tag: "Pháp lý Doanh nghiệp",
    image: "images/news-3.jpg",
    author: "Luật sư Phan Công Viên",
    content: [
      "## Bối cảnh sửa đổi",
      "Luật Doanh nghiệp sửa đổi được Quốc hội thông qua nhằm khắc phục những bất cập trong thực tiễn áp dụng, đặc biệt trong bối cảnh thị trường vốn và hoạt động M&A ngày càng sôi động tại Việt Nam.",
      "## Những thay đổi chính cần lưu ý",
      "Thứ nhất, về quyền triệu tập họp Đại hội đồng cổ đông: ngưỡng cổ phần tối thiểu để cổ đông có quyền triệu tập họp đã được điều chỉnh, tạo điều kiện thuận lợi hơn cho cổ đông thiểu số bảo vệ quyền lợi.",
      "Thứ hai, về giao dịch với bên liên quan: quy định được siết chặt hơn, yêu cầu công bố thông tin minh bạch hơn đối với các giao dịch có giá trị lớn giữa công ty và các bên có liên quan.",
      "Thứ ba, về thủ tục tái cơ cấu doanh nghiệp: quy trình chia, tách, hợp nhất, sáp nhập được đơn giản hóa nhưng đồng thời yêu cầu chặt chẽ hơn về bảo vệ quyền lợi chủ nợ.",
      "## Khuyến nghị cho doanh nghiệp",
      "Các doanh nghiệp, đặc biệt là công ty cổ phần và công ty có vốn đầu tư nước ngoài, cần nhanh chóng rà soát lại Điều lệ, Quy chế quản trị nội bộ, các hợp đồng với bên liên quan để đảm bảo phù hợp với quy định mới.",
      "PNH LAW sẵn sàng hỗ trợ doanh nghiệp trong việc rà soát pháp lý, sửa đổi tài liệu quản trị và tư vấn triển khai các quy định mới. Liên hệ với chúng tôi để được tư vấn cụ thể."
    ]
  },
  {
    id: 2,
    slug: "tranh-chap-lao-dong-2025",
    date: "2026-04-01",
    title: "Giải quyết tranh chấp lao động: Xu hướng và kinh nghiệm thực tiễn 2025",
    summary: "Số lượng tranh chấp lao động tại Việt Nam tiếp tục gia tăng trong năm 2025, đặc biệt trong lĩnh vực chấm dứt hợp đồng và tiền lương. Bài viết chia sẻ kinh nghiệm thực tiễn từ đội ngũ PNH LAW trong việc xử lý các vụ việc phức tạp.",
    tag: "Lao động & Nhân sự",
    image: "images/news-2.png",
    author: "Luật sư Nguyễn Thị Thu Trang",
    content: [
      "## Thực trạng tranh chấp lao động năm 2025",
      "Theo số liệu từ Tòa án nhân dân tối cao, số vụ án lao động được thụ lý trong năm 2025 tăng khoảng 18% so với năm trước. Nguyên nhân chủ yếu đến từ việc cắt giảm nhân sự hậu đại dịch, tái cơ cấu doanh nghiệp và tranh chấp về khoản thưởng, phụ cấp.",
      "## Các loại tranh chấp phổ biến nhất",
      "Loại tranh chấp phổ biến nhất là về chấm dứt hợp đồng lao động, chiếm khoảng 45% tổng số vụ. Tiếp theo là tranh chấp về tiền lương, phụ cấp (28%) và tranh chấp liên quan đến bảo hiểm xã hội (15%). Phần còn lại liên quan đến điều kiện làm việc, kỷ luật lao động và phân biệt đối xử.",
      "## Kinh nghiệm xử lý từ PNH LAW",
      "Qua nhiều vụ việc thực tế, chúng tôi nhận thấy phần lớn tranh chấp lao động có thể được ngăn ngừa nếu doanh nghiệp xây dựng đầy đủ hệ thống tài liệu nội bộ: nội quy lao động rõ ràng, hợp đồng lao động chặt chẽ, biên bản họp và cảnh cáo đúng quy trình.",
      "Khi tranh chấp xảy ra, bước đầu tiên và quan trọng nhất là thu thập đầy đủ bằng chứng: email, tin nhắn, biên bản, bảng chấm công, phiếu lương. Chứng cứ đầy đủ quyết định 70% kết quả vụ việc.",
      "## Lời khuyên thực tiễn",
      "Doanh nghiệp nên thực hiện kiểm tra pháp lý lao động định kỳ ít nhất 1 năm/lần, đặc biệt khi có thay đổi về quy mô nhân sự hoặc cơ cấu tổ chức. PNH LAW cung cấp dịch vụ rà soát hệ thống tài liệu lao động toàn diện, giúp doanh nghiệp chủ động phòng ngừa rủi ro."
    ]
  },
  {
    id: 1,
    slug: "ma-dau-tu-nuoc-ngoai-viet-nam",
    date: "2026-03-01",
    title: "M&A và đầu tư nước ngoài vào Việt Nam: Cơ hội và những lưu ý pháp lý",
    summary: "Việt Nam tiếp tục là điểm đến hấp dẫn cho làn sóng M&A và đầu tư trực tiếp nước ngoài. Bài viết phân tích khung pháp lý hiện hành và những vấn đề pháp lý các nhà đầu tư nước ngoài thường gặp khi tiến hành giao dịch tại Việt Nam.",
    tag: "M&A & Đầu tư",
    image: "images/news-1.png",
    author: "Luật sư Nguyễn Minh Hòa",
    content: [
      "## Bức tranh M&A Việt Nam hiện nay",
      "Việt Nam ghi nhận tổng giá trị giao dịch M&A đạt hơn 4,5 tỷ USD trong năm 2025, với sự tham gia mạnh mẽ của nhà đầu tư đến từ Nhật Bản, Hàn Quốc, Singapore và ngày càng nhiều từ Mỹ và châu Âu. Các lĩnh vực sôi động nhất bao gồm bất động sản, tiêu dùng, công nghệ và năng lượng tái tạo.",
      "## Khung pháp lý điều chỉnh M&A có vốn nước ngoài",
      "Giao dịch M&A liên quan đến nhà đầu tư nước ngoài tại Việt Nam chịu sự điều chỉnh của nhiều văn bản pháp luật đan xen: Luật Đầu tư, Luật Doanh nghiệp, Luật Chứng khoán (đối với công ty đại chúng), Luật Cạnh tranh và các điều ước quốc tế mà Việt Nam là thành viên.",
      "## Những vấn đề pháp lý thường gặp",
      "Một là, xác định tỷ lệ sở hữu nước ngoài tối đa: đây là bước đầu tiên và cốt lõi, phụ thuộc vào ngành nghề kinh doanh. Nhiều nhà đầu tư nước ngoài bỏ qua bước này dẫn đến giao dịch phải hủy hoặc cơ cấu lại tốn kém.",
      "Hai là, thủ tục chấp thuận của cơ quan nhà nước: tùy giá trị và lĩnh vực giao dịch, có thể cần chấp thuận của Bộ Kế hoạch và Đầu tư, Ủy ban Chứng khoán Nhà nước hoặc thậm chí Thủ tướng Chính phủ.",
      "Ba là, vấn đề thuế trong giao dịch chuyển nhượng vốn: cơ chế tính và nộp thuế thu nhập từ chuyển nhượng vốn có nhiều điểm phức tạp, đặc biệt khi giao dịch thực hiện qua cấu trúc offshore.",
      "## Vai trò của tư vấn pháp lý trong M&A",
      "Kinh nghiệm của PNH LAW từ nhiều giao dịch M&A cho thấy: thuê tư vấn pháp lý ngay từ giai đoạn cơ cấu giao dịch (không phải chỉ khi ký hợp đồng) giúp tiết kiệm đáng kể thời gian và chi phí. Chúng tôi cung cấp dịch vụ tư vấn M&A toàn diện từ thẩm định pháp lý (legal due diligence), cơ cấu giao dịch đến đàm phán và hoàn tất thủ tục."
    ]
  }
];
