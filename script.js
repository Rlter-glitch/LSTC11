const questions = [
  {
    question: "Câu 1. Lãnh đạo phong trào nông dân Tây Sơn cuối thế kỉ XVIII là",
    options: [
      "A. Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Ánh.",
      "B. Nguyễn Lữ, Nguyễn Ánh, Nguyễn Huệ.",
      "C. Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ.",
      "D. Nguyễn Trãi, Nguyễn Huệ, Nguyễn Ánh."
    ],
    correct: "C"
  },
  {
    question: "Câu 2. Thắng lợi của cuộc khởi nghĩa nào sau đây đã đưa đến sự thành lập vương triều Lê sơ?",
    options: [
      "A. Khởi nghĩa Lý Bí.",
      "B. Khởi nghĩa Lam Sơn.",
      "C. Khởi nghĩa Phùng Hưng.",
      "D. Khởi nghĩa Hai Bà Trưng."
    ],
    correct: "B"
  },
  {
    question: "Câu 3. Lãnh đạo cuộc khởi nghĩa Lam Sơn là",
    options: [
      "A. Nguyễn Trãi.",
      "B. Lê Lợi.",
      "C. Lê Lai.",
      "D. Đinh Liệt."
    ],
    correct: "B"
  },
  {
    question: "Câu 4. Năm 1407, sau khi cuộc kháng chiến của nhà Hồ thất bại, nước ta rơi vào ách thống trị của triều đại phong kiến Trung Quốc nào sau đây?",
    options: [
      "A. Nhà Hán.",
      "B. Nhà Đường.",
      "C. Nhà Minh.",
      "D. Nhà Tống."
    ],
    correct: "C"
  },
  {
    question: "Câu 5. Khởi nghĩa Lam Sơn (1418 - 1427) nổ ra trong bối cảnh nào sau đây?",
    options: [
      "A. Nhà Hồ tiến hành cải cách đất nước thành công.",
      "B. Nhà Trần khủng hoảng, suy yếu trầm trọng.",
      "C. Nhà Minh thi hành chính sách cai trị hà khắc.",
      "D. Nhà Minh lâm vào khủng hoảng, suy yếu."
    ],
    correct: "C"
  },
  {
    question: "Câu 6. Sau khi đánh đổ chính quyền chúa Nguyễn, một nhiệm vụ đặt ra cho phong trào Tây Sơn là",
    options: [
      "A. tiến quân ra Bắc, phối hợp với vua Lê đánh đổ chúa Trịnh.",
      "B. tiến quân ra Bắc tiêu diệt 29 vạn quân Thanh xâm lược.",
      "C. tiến ra Bắc đánh đổ chính quyền Lê - Trịnh, thống nhất đất nước.",
      "D. tiến ra bắc phối hợp với chúa Trịnh lật đổ vua Lê."
    ],
    correct: "C"
  },
  {
    question: "Câu 7. Một trong những đóng góp to lớn của phong trào Tây Sơn (1771-1802) đối với lịch sử dân tộc Việt Nam là",
    options: [
      "A. lật đổ ách đô hộ tàn bạo của nhà Minh ở Việt Nam.",
      "B. thống nhất hoàn toàn đất nước về mặt nhà nước.",
      "C. đánh tan quân xâm lược, bảo vệ nền độc lập dân tộc.",
      "D. ngăn chặn được nguy cơ Pháp xâm lược Việt Nam."
    ],
    correct: "C"
  },
  {
    question: "Câu 8. Sau khi đánh bại quân Thanh xâm lược (1789), chính quyền của vua Quang Trung đã",
    options: [
      "A. đặt kinh đô ở Nghệ An, kiểm soát toàn bộ Đàng Trong và Đàng Ngoài cũ.",
      "B. đánh bại tập đoàn vua Lê – chúa Trịnh ở Đàng Ngoài, thống nhất đất nước.",
      "C. đóng đô ở Phú Xuân, kiểm soát phía bắc Đàng Trong và toàn bộ Đàng Ngoài cũ.",
      "D. xây dựng kinh thành ở Huế, kiểm soát toàn bộ Đàng Trong và Đàng Ngoài."
    ],
    correct: "C"
  },
  {
    question: "Câu 9. Nội dung nào sau đây phản ánh đúng ý nghĩa thắng lợi của khởi nghĩa Lam Sơn?",
    options: [
      "A. Đập tan quân xâm lược Xiêm và Thanh, bảo vệ độc lập dân tộc.",
      "B. Kết thúc 20 năm nhà Minh đô hộ, mở ra thời kì mới của đất nước.",
      "C. Xóa bỏ ranh giới chia cắt đất nước, đặt cơ sở thống nhất quốc gia.",
      "D. Đưa Đại Việt trở thành cường quốc hàng đầu khu vực Đông Nam Á."
    ],
    correct: "B"
  },
  {
    question: "Câu 10. Cuộc khởi nghĩa Lam Sơn (1418-1427) thắng lợi đã",
    options: [
      "A. chấm dứt vĩnh viễn ách đô hộ ngàn năm Bắc thuộc.",
      "B. chấm dứt mọi cuộc chiến tranh xâm lược từ Trung Quốc.",
      "C. mở đầu thời kì độc lập, tự chủ lâu dài cho dân tộc.",
      "D. đập tan âm mưu thủ tiêu văn hóa Đại Việt của Trung Quốc."
    ],
    correct: "D"
  },
  {
    question: "Câu 11. Năm 1400, Hồ Quý Ly buộc vua Trần nhường ngôi và lập ra triều đại",
    options: [
      "A. nhà Lê sơ.",
      "B. nhà Nguyễn.",
      "C. nhà Hồ.",
      "D. nhà Lý."
    ],
    correct: "C"
  },
  {
    question: "Câu 12. Sau khi lên ngôi và lập ra nhà Hồ, Hồ Quý Ly đã tiếp tục",
    options: [
      "A. tổ chức kháng chiến chống quân Xiêm.",
      "B. tổ chức kháng chiến chống quân Thanh.",
      "C. mở rộng lãnh thổ về phía Nam.",
      "D. tiến hành cuộc cải cách sâu rộng."
    ],
    correct: "D"
  },
  {
    question: "Câu 13. Về kinh tế - xã hội, nhằm hạn chế sự phát triển của chế độ sở hữu ruộng đất lớn trong các điền trang, thái ấp của quý tộc, Hồ Quý Ly đã",
    options: [
      "A. cho phát hành tiền giấy.",
      "B. ban hành chính sách hạn điền.",
      "C. cải cách chế độ giáo dục.",
      "D. thống nhất đơn vị đo lường."
    ],
    correct: "B"
  },
  {
    question: "Câu 14. Trong cải cách của Hồ Quý Ly, việc quy định số lượng gia nô được sở hữu của các vương hầu, quý tộc, quan lại được gọi là",
    options: [
      "A. phép hạn gia nô.",
      "B. chính sách hạn điền.",
      "C. chính sách quân điền.",
      "D. bình quân gia nô."
    ],
    correct: "A"
  },
  {
    question: "Câu 15. Xây dựng nhiều thành luỹ kiên cố, chế tạo súng thần cơ, đóng thuyền chiến là nội dung cải cách của Hồ Quý Ly và triều Hồ về",
    options: [
      "A. kinh tế.",
      "B. văn hoá.",
      "C. quân sự.",
      "D. xã hội."
    ],
    correct: "C"
  },
  {
    question: "Câu 16. Hạn chế sự phát triển của Phật giáo, chấn chỉnh lại chế độ thi cử, đề cao chữ Nôm là nội dung cải cách của Hồ Quý Ly và triều Hồ về",
    options: [
      "A. kinh tế, xã hội.",
      "B. văn hoá, giáo dục.",
      "C. chính trị, quân sự.",
      "D. hành chính, pháp luật."
    ],
    correct: "B"
  },
  {
    question: "Câu 17. Cuộc cải cách của Hồ Quý Ly và triều Hồ đã đề cao tư tưởng, tôn giáo nào sau đây?",
    options: [
      "A. Phật giáo.",
      "B. Đạo giáo.",
      "C. Nho giáo.",
      "D. Thiên chúa giáo."
    ],
    correct: "C"
  },
  {
    question: "Câu 18. Trong cải cách về văn hoá, Hồ Quý Ly khuyến khích và đề cao chữ viết nào sau đây?",
    options: [
      "A. Chữ Nôm.",
      "B. Chữ Hán.",
      "C. Chữ Latinh.",
      "D. Chữ Quốc ngữ."
    ],
    correct: "A"
  },
  {
    question: "Câu 19. Trong phương thức tuyển chọn quan lại, Hồ Quý Ly và nhà Hồ tăng cường",
    options: [
      "A. mở các khoa thi.",
      "B. bổ sung tầng lớp quý tộc.",
      "C. Thải hồi những người già yếu.",
      "D. Bổ sung những người khỏe mạnh."
    ],
    correct: "A"
  },
  {
    question: "Câu 20. Nội dung nào sau đây trong cuộc cải cách của Hồ Quý Ly diễn ra trên lĩnh vực kinh tế?",
    options: [
      "A. In và phát hành tiền giấy.",
      "B. Đặt thêm các đơn vị hành chính.",
      "C. Ban hành hình luật mới.",
      "D. Thải hồi những binh sĩ già yếu."
    ],
    correct: "A"
  },
  {
    question: "Câu 21. Một trong những công trình kiến trúc cuối thế kỉ XIV bằng đá độc đáo bậc nhất của Việt Nam và thế giới, được UNESCO ghi danh là",
    options: [
      "A. Luỹ Trường Dực.",
      "B. Luỹ Bán Bích.",
      "C. Thành Nhà Hồ.",
      "D. Kinh thành Huế."
    ],
    correct: "C"
  },
  {
    question: "Câu 22. Dưới triều Hồ, những tôn giáo nào bị suy giảm vai trò và vị trí so với các triều đại trước?",
    options: [
      "A. Nho giáo và đạo giáo.",
      "B. Phật giáo và Đạo giáo.",
      "C. Hin-đu giáo và Hồi giáo.",
      "D. Đạo Thiên chúa và Phật giáo."
    ],
    correct: "B"
  },
  {
    question: "Câu 23. Cuộc cải cách của vua Lê Thánh Tông được tiến hành trong bối cảnh lịch sử nào sau đây?",
    options: [
      "A. Nội bộ triều đình có nhiều mâu thuẫn, biến động.",
      "B. Nền kinh tế sa sút, nạn đói diễn ra thường xuyên.",
      "C. Đất nước đứng trước nguy cơ bị nhà Minh xâm lược.",
      "D. Chế độ phong kiến lâm vào khủng hoảng trầm trọng."
    ],
    correct: "A"
  },
  {
    question: "Câu 24. Công cuộc cải cách của Lê Thánh Tông được tiến hành trên mọi lĩnh vực, nhưng tập trung chủ yếu vào lĩnh vực",
    options: [
      "A. kinh tế.",
      "B. giáo dục.",
      "C. hành chính.",
      "D. văn hóa."
    ],
    correct: "C"
  },
  {
    question: "Câu 25. Để quản lý đất nước, vua Lê Thánh Tông đã cho ban hành bộ luật nào sau đây?",
    options: [
      "A. Hình thư.",
      "B. Quốc triều hình luật.",
      "C. Hình luật.",
      "D. Hoàng Việt luật lệ."
    ],
    correct: "B"
  },
  {
    question: "Câu 26. Trong lĩnh vực văn hóa, Lê Thánh Tông đặc biệt đề cao hệ tư tưởng",
    options: [
      "A. Phật giáo.",
      "B. Đạo giáo.",
      "C. Nho giáo.",
      "D. Thiên chúa giáo."
    ],
    correct: "C"
  },
  {
    question: "Câu 27. Ban cấp ruộng đất cho quý tộc, quan lại cao cấp từ nhất phẩm đến tứ phẩm là nội dung chủ yếu của chính sách cải cách nào sau đây của vua Lê Thánh Tông?",
    options: [
      "A. Quân điền.",
      "B. Hạn điền.",
      "C. Hạn nô.",
      "D. Lộc điền."
    ],
    correct: "D"
  },
  {
    question: "Câu 28. Một trong những điểm mới và tiến bộ của bộ luật Quốc triều hình luật là",
    options: [
      "A. đề cao quyền tự do, dân chủ của nhân dân.",
      "B. bảo vệ tuyệt đối quyền và lợi ích của vua.",
      "C. bảo vệ quyền và lợi ích của quân cấm binh.",
      "D. bảo vệ quyền lợi và địa vị của người phụ nữ."
    ],
    correct: "D"
  },
  {
    question: "Câu 29. 'Coi trọng biên soạn quốc sử' là nội dung cải cách của vua Lê Thánh Tông trên lĩnh vực nào sau đây?",
    options: [
      "A. Quân đội.",
      "B. Văn hóa.",
      "C. Luật pháp.",
      "D. Kinh tế."
    ],
    correct: "B"
  },
  {
    question: "Câu 30. Năm 1471, vua Lê Thánh Tông cho lập thêm đạo thừa tuyên thứ 13 có tên gọi là",
    options: [
      "A. Hà Nội.",
      "B. Phú Xuân.",
      "C. Quảng Nam.",
      "D. Tây Đô."
    ],
    correct: "C"
  },
  {
    question: "Câu 31. Trong cuộc cải cách thế kỉ XV, dưới đạo thừa tuyên, vua Lê Thánh Tông thiết lập hệ thống",
    options: [
      "A. phủ, huyện/châu, xã.",
      "B. tỉnh/thành phố, huyện, xã.",
      "C. lộ, trấn, phủ, huyện/châu.",
      "D. tỉnh, phủ, huyện, làng."
    ],
    correct: "A"
  },
  {
    question: "Câu 32. Dưới thời vua Lê Thánh Tông, hệ thống quan lại được tuyển chọn chủ yếu thông qua",
    options: [
      "A. dòng dõi tôn thất.",
      "B. tiến cử.",
      "C. giáo dục – khoa cử.",
      "D. đề cử."
    ],
    correct: "C"
  },
  {
    question: "Câu 33. Để tăng cường sức mạnh quân đội, trong cải cách của mình, vua Lê Thánh Tông đã",
    options: [
      "A. Quy định chặt chẽ kỉ luật quân đội và huấn luyện, tập trận.",
      "B. Thải hồi những binh sĩ già yếu, bổ sung người khỏe mạnh.",
      "C. Tăng cường tuyển quân quy mô lớn, ồ ạt ở các địa phương.",
      "D. Chú trọng cải tiến vũ khí, phòng thủ những nơi hiểm yếu."
    ],
    correct: "A"
  },
  {
    question: "Câu 34. Để tập trung quyền lực vào nhà vua, Lê Thánh Tông đã",
    options: [
      "A. Bãi bỏ nhiều cơ quan, chức quan cũ.",
      "B. Chú trọng đổi mới giáo dục khoa cử.",
      "C. Ban hành chính sách hạn điền và hạn nô.",
      "D. Coi trọng bảo vệ quyền lợi phụ nữ, trẻ em."
    ],
    correct: "A"
  },
  {
    question: "Câu 35. Cuộc cải cách hành chính lớn nhất của vương triều Nguyễn được tiến hành dưới thời vua",
    options: [
      "A. Gia Long.",
      "B. Minh Mạng.",
      "C. Tự Đức.",
      "D. Thiệu Trị."
    ],
    correct: "B"
  },
  {
    question: "Câu 36. Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) được thực hiện trong bối cảnh lịch sử nào sau đây?",
    options: [
      "A. Chế độ quân chủ chuyên chế đang trong thời kì thịnh trị.",
      "B. Phương thức sản xuất tư bản chủ nghĩa phát triển mạnh.",
      "C. Bộ máy chính quyền nhà nước chưa hoàn thiện, đồng bộ.",
      "D. Đất nước đứng trước nguy cơ xâm lược từ nhà Thanh."
    ],
    correct: "C"
  },
  {
    question: "Câu 37. Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) nhằm thực hiện một trong những mục đích nào sau đây?",
    options: [
      "A. Tập trung quyền lực vào tay vua.",
      "B. Thúc đẩy kinh tế tư bản chủ nghĩa.",
      "C. Ngăn ngừa nguy cơ giặc ngoại xâm.",
      "D. Khôi phục nền giáo dục Nho học."
    ],
    correct: "A"
  },
  {
    question: "Câu 38. Để hoàn thiện bộ máy chính quyền Trung ương, vua Minh Mạng đã cho thành lập một số cơ quan mới có tên là",
    options: [
      "A. Lục bộ, Lục khoa, Lục tự.",
      "B. Đô ty, Thừa ty, Hiến ty.",
      "C. Đô sát viện, Cơ mật viện.",
      "D. Thông chính ty, Quốc Tử Giám."
    ],
    correct: "C"
  },
  {
    question: "Câu 39. Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) tập trung vào lĩnh vực chủ yếu nào sau đây?",
    options: [
      "A. Kinh tế.",
      "B. Văn hóa.",
      "C. Quốc phòng.",
      "D. Hành chính."
    ],
    correct: "D"
  },
  {
    question: "Câu 40. Trong cuộc cải cách nửa đầu thế kỉ XIX, vua Minh Mạng đã phân chia bộ máy chính quyền địa phương thành các cấp nào sau đây?",
    options: [
      "A. Đạo thừa tuyên, phủ, huyện/châu, xã.",
      "B. Tỉnh/thành phố, huyện/châu, xã.",
      "C. Lộ, trấn, phủ, huyện/châu, xã.",
      "D. Tỉnh, phủ, huyện/châu, tổng, xã."
    ],
    correct: "D"
  },
  {
    question: "Câu 41. Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) được thực hiện trong bối cảnh",
    options: [
      "A. tình hình an ninh - xã hội ở nhiều địa phương bất ổn.",
      "B. bộ máy nhà nước phong kiến cơ bản đã hoàn chỉnh.",
      "C. tình trạng phân quyền, thiếu thống nhất đã khắc phục.",
      "D. phương thức sản xuất tư bản chủ nghĩa thâm nhập mạnh."
    ],
    correct: "A"
  },
  {
    question: "Câu 42. Trong công cuộc cải cách của vua Minh Mạng, Nội các được thành lập có vai trò nào sau đây?",
    options: [
      "A. Giúp vua khởi thảo các văn bản hành chính.",
      "B. Kiểm tra, giám sát hoạt động của Lục bộ.",
      "C. Phụ trách nhân khẩu, thu thuế trong cả nước.",
      "D. Xướng danh những người đỗ trong kì thi Đình."
    ],
    correct: "A"
  },
  {
    question: "Câu 43. Cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) có ý nghĩa quan trọng nào sau đây?",
    options: [
      "A. xóa bỏ tình trạng 'bế quan tỏa cảng' của đất nước.",
      "B. ngăn chặn mọi nguy cơ xâm lược từ bên ngoài.",
      "C. đặt cơ sở cho sự phân chia tỉnh, huyện hiện nay.",
      "D. hoàn thành thống nhất đất nước về mặt lãnh thổ."
    ],
    correct: "C"
  },
  {
    question: "Câu 44. Ở địa phương, trong công cuộc cải cách hành chính nửa đầu thế kỉ XIX, vua Minh Mạng đã chia cả nước thành",
    options: [
      "A. 30 tỉnh và 1 phủ Thừa Thiên.",
      "B. Bắc Thành, Gia Định thành.",
      "C. 13 đạo thừa tuyên và các phủ.",
      "D. các lộ, trấn, phủ, huyện/châu."
    ],
    correct: "A"
  },
  {
    question: "Câu 45. Công cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) đã đem lại một trong những kết quả nào sau đây?",
    options: [
      "A. Đưa đất nước phát triển lên chế độ tư bản chủ nghĩa.",
      "B. Thúc đẩy bộ máy chính quyền các cấp hoạt động hiệu quả.",
      "C. Góp phần mở cửa và hội nhập nền kinh tế khu vực.",
      "D. Hoàn thành thống nhất đất nước về mặt lãnh thổ."
    ],
    correct: "B"
  },
  {
    question: "Câu 46. Một trong những di sản lớn nhất trong cuộc cải cách của vua Minh Mạng (nửa đầu thế kỉ XIX) còn giá trị đến ngày nay là",
    options: [
      "A. cách thức tổ chức bộ máy nhà nước ở trung ương.",
      "B. cách thức phân chia đơn vị hành chính cấp tỉnh.",
      "C. tập trung cao độ quyền lực vào trong tay nhà vua.",
      "D. ưu tiên bổ nhiệm quan lại là người ở địa phương."
    ],
    correct: "B"
  }
];

const form = document.getElementById('quizForm');
  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionText = document.createElement('p');
    questionText.innerText = question.question;
    questionDiv.appendChild(questionText);

    question.options.forEach((option, i) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q' + (index + 1);
      input.value = String.fromCharCode(97 + i); // 'a', 'b', 'c', 'd'
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });

    form.appendChild(questionDiv);
  });
}

// Hàm tính điểm và hiển thị kết quả khi người dùng nộp bài
function submitQuiz() {
  const form = document.getElementById('quizForm');
  const questionsDivs = form.querySelectorAll('.question');
  let score = 0;

  questionsDivs.forEach((questionDiv, index) => {
    const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
    const correctAnswer = questions[index].correct;

    if (selectedOption && selectedOption.value === correctAnswer) {
      score++;
      questionDiv.classList.add('correct');
    } else {
      questionDiv.classList.add('incorrect');
    }
  });

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Bạn đã trả lời đúng ${score} trên ${questions.length} câu.`;
}

// Gọi hàm loadQuiz để tạo câu hỏi khi trang được tải
loadQuiz();
