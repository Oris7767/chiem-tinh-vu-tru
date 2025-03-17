
export interface NumberMeaning {
  number: number;
  title: string;
  description: string;
  strengths: string[];
  challenges: string[];
  career: string;
  relationships: string;
}

export const numberMeanings: NumberMeaning[] = [
  {
    number: 1,
    title: "Nhà lãnh đạo",
    description: "Số 1 tượng trưng cho sự độc lập và khả năng lãnh đạo. Người có số 1 thường là người tiên phong, quyết đoán, và có tham vọng. Họ có ý chí mạnh mẽ và thường không ngại đối mặt với thách thức.",
    strengths: ["Độc lập", "Quyết đoán", "Sáng tạo", "Tự tin", "Có tầm nhìn"],
    challenges: ["Bướng bỉnh", "Thống trị", "Ích kỷ", "Không kiên nhẫn"],
    career: "Phù hợp với vai trò lãnh đạo, doanh nhân, nhà sáng tạo, hoặc trong lĩnh vực quản lý.",
    relationships: "Trong các mối quan hệ, người số 1 cần học cách lắng nghe và tôn trọng ý kiến của người khác."
  },
  {
    number: 2,
    title: "Người hòa giải",
    description: "Số 2 đại diện cho sự hợp tác và cân bằng. Người có số 2 thường là người hòa giải, nhạy cảm, và biết quan tâm đến người khác. Họ có khả năng làm việc hiệu quả trong nhóm và tạo ra sự hài hòa.",
    strengths: ["Hợp tác", "Trực giác", "Ngoại giao", "Kiên nhẫn", "Thấu hiểu"],
    challenges: ["Nhạy cảm quá mức", "Thiếu quyết đoán", "Phụ thuộc", "Lo lắng"],
    career: "Phù hợp với các vị trí đòi hỏi sự hợp tác, như giáo viên, nhà tư vấn, nhà hòa giải, hoặc chuyên gia chăm sóc sức khỏe.",
    relationships: "Trong các mối quan hệ, người số 2 là người đồng hành tuyệt vời, luôn quan tâm đến cảm xúc và nhu cầu của đối phương."
  },
  {
    number: 3,
    title: "Người biểu đạt",
    description: "Số 3 tượng trưng cho sự sáng tạo và giao tiếp. Người có số 3 thường hướng ngoại, có tài ăn nói, và có khả năng truyền cảm hứng cho người khác. Họ có óc sáng tạo và yêu thích nghệ thuật.",
    strengths: ["Giao tiếp", "Sáng tạo", "Lạc quan", "Hài hước", "Biểu cảm"],
    challenges: ["Phân tán", "Hời hợt", "Trì hoãn", "Kiêu ngạo"],
    career: "Phù hợp với các ngành nghề sáng tạo như nghệ thuật, viết lách, diễn xuất, giáo dục, hoặc truyền thông.",
    relationships: "Trong các mối quan hệ, người số 3 mang lại niềm vui và tình yêu cuộc sống, nhưng đôi khi cần thêm chiều sâu."
  },
  {
    number: 4,
    title: "Người xây dựng",
    description: "Số 4 đại diện cho sự ổn định và thực tế. Người có số 4 thường rất đáng tin cậy, có tổ chức, và chăm chỉ. Họ thích xây dựng nền móng vững chắc và làm việc theo kế hoạch rõ ràng.",
    strengths: ["Đáng tin cậy", "Có tổ chức", "Cần cù", "Thực tế", "Trung thành"],
    challenges: ["Cứng nhắc", "Bảo thủ", "Thiếu linh hoạt", "Lo lắng"],
    career: "Phù hợp với các lĩnh vực đòi hỏi sự chính xác và tổ chức như kế toán, kỹ thuật, xây dựng, hoặc quản lý dự án.",
    relationships: "Trong các mối quan hệ, người số 4 là người đáng tin cậy và ổn định, nhưng đôi khi cần mở lòng hơn với những thay đổi."
  },
  {
    number: 5,
    title: "Người tự do",
    description: "Số 5 tượng trưng cho sự tự do và thay đổi. Người có số 5 thường năng động, phiêu lưu, và thích trải nghiệm mới. Họ thích du lịch, học hỏi, và không muốn bị giới hạn.",
    strengths: ["Thích nghi", "Linh hoạt", "Tò mò", "Năng động", "Đa tài"],
    challenges: ["Bồn chồn", "Thiếu kiên định", "Mạo hiểm", "Bốc đồng"],
    career: "Phù hợp với các lĩnh vực đòi hỏi sự đa dạng và linh hoạt như bán hàng, tiếp thị, du lịch, hoặc báo chí.",
    relationships: "Trong các mối quan hệ, người số 5 mang lại sự hứng khởi và phiêu lưu, nhưng đôi khi cần cam kết sâu hơn."
  },
  {
    number: 6,
    title: "Người chăm sóc",
    description: "Số 6 đại diện cho tình yêu và trách nhiệm. Người có số 6 thường ấm áp, quan tâm, và có tinh thần phục vụ. Họ thích chăm sóc người khác và tạo ra một môi trường hòa hợp.",
    strengths: ["Yêu thương", "Trách nhiệm", "Hòa hợp", "Hỗ trợ", "Thấu hiểu"],
    challenges: ["Hy sinh thái quá", "Lo lắng", "Can thiệp", "Hoàn hảo chủ nghĩa"],
    career: "Phù hợp với các lĩnh vực phục vụ con người như giáo dục, y tế, tư vấn, hoặc làm việc trong các tổ chức phi lợi nhuận.",
    relationships: "Trong các mối quan hệ, người số 6 là người chăm sóc và hy sinh, nhưng đôi khi cần học cách cân bằng việc cho và nhận."
  },
  {
    number: 7,
    title: "Người tìm kiếm",
    description: "Số 7 tượng trưng cho trí tuệ và tâm linh. Người có số 7 thường thông minh, trực giác, và thích phân tích sâu sắc. Họ thích tìm kiếm kiến thức và chân lý.",
    strengths: ["Phân tích", "Trực giác", "Tư duy sâu sắc", "Tâm linh", "Độc lập"],
    challenges: ["Hoài nghi", "Cô lập", "Quá phân tích", "Xa cách"],
    career: "Phù hợp với các lĩnh vực nghiên cứu, phân tích, triết học, tâm linh, hoặc công nghệ.",
    relationships: "Trong các mối quan hệ, người số 7 mang lại chiều sâu trí tuệ, nhưng đôi khi cần mở lòng hơn về mặt cảm xúc."
  },
  {
    number: 8,
    title: "Người thành đạt",
    description: "Số 8 đại diện cho quyền lực và thành công vật chất. Người có số 8 thường có tham vọng, khả năng lãnh đạo, và nhạy bén trong kinh doanh. Họ hướng đến sự thành công và ổn định tài chính.",
    strengths: ["Tự tin", "Quản lý", "Thực tế", "Quyết đoán", "Tham vọng"],
    challenges: ["Thống trị", "Vật chất", "Thiếu kiên nhẫn", "Áp lực"],
    career: "Phù hợp với các lĩnh vực kinh doanh, tài chính, quản lý, hoặc lãnh đạo doanh nghiệp.",
    relationships: "Trong các mối quan hệ, người số 8 mang lại sự ổn định và bảo vệ, nhưng đôi khi cần cân bằng giữa công việc và cuộc sống cá nhân."
  },
  {
    number: 9,
    title: "Người nhân ái",
    description: "Số 9 tượng trưng cho sự hoàn thiện và lòng nhân ái. Người có số 9 thường có tầm nhìn rộng lớn, lòng từ bi, và tinh thần phục vụ. Họ quan tâm đến lợi ích của toàn thể nhân loại.",
    strengths: ["Từ bi", "Rộng lượng", "Sáng tạo", "Lý tưởng", "Trí tuệ"],
    challenges: ["Xa rời thực tế", "Hy sinh thái quá", "Cảm xúc mạnh", "Khó buông bỏ"],
    career: "Phù hợp với các lĩnh vực phục vụ nhân loại như nghệ thuật, giáo dục, tâm linh, hoặc hoạt động xã hội.",
    relationships: "Trong các mối quan hệ, người số 9 mang lại tình yêu vô điều kiện, nhưng đôi khi cần học cách chấp nhận sự không hoàn hảo."
  },
  {
    number: 11,
    title: "Nhà tiên tri",
    description: "Số 11 là một số thầy, tượng trưng cho trực giác cao độ và sự giác ngộ tâm linh. Người có số 11 thường rất nhạy cảm, có tầm nhìn xa, và có khả năng truyền cảm hứng cho người khác.",
    strengths: ["Trực giác", "Tầm nhìn", "Cảm xúc sâu sắc", "Lý tưởng", "Sáng tạo"],
    challenges: ["Căng thẳng", "Lo âu", "Nhạy cảm quá mức", "Không thực tế"],
    career: "Phù hợp với các lĩnh vực sáng tạo, tâm linh, trị liệu, hoặc giảng dạy tâm linh.",
    relationships: "Trong các mối quan hệ, người số 11 mang lại sự hiểu biết sâu sắc, nhưng đôi khi khó tìm được người đồng điệu."
  },
  {
    number: 22,
    title: "Người kiến tạo",
    description: "Số 22 là số thầy cao nhất, tượng trưng cho khả năng biến ước mơ thành hiện thực. Người có số 22 có tầm nhìn lớn, khả năng tổ chức, và có thể tạo ra những thành tựu vĩ đại có tác động lâu dài.",
    strengths: ["Tầm nhìn", "Thực tế", "Năng lực", "Kiên định", "Lãnh đạo"],
    challenges: ["Áp lực lớn", "Hoàn hảo chủ nghĩa", "Kiểm soát", "Kiệt sức"],
    career: "Phù hợp với các vai trò lãnh đạo, kiến trúc, kỹ thuật, hoặc các dự án quy mô lớn.",
    relationships: "Trong các mối quan hệ, người số 22 có thể gặp khó khăn trong việc cân bằng giữa tầm nhìn lớn và nhu cầu cá nhân."
  }
];
