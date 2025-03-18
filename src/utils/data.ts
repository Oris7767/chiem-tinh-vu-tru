
export interface NumberMeaning {
  number: number;
  title: string;
  planet: string;
  description: string;
  strengths: string[];
  challenges: string[];
  career: string;
  relationships: string;
  finance: number;
  romance: number;
  education: number;
  health: number;
  family: number;
  growth: number;
  career_score: number;
  reputation: number;
  spirituality: number;
  luck: number;
}

export const numberMeanings: NumberMeaning[] = [
  {
    number: 1,
    title: "Nhà lãnh đạo",
    planet: "Mặt Trời (Sun)",
    description: "Số 1 tượng trưng cho sự độc lập và khả năng lãnh đạo. Người số 1 thể hiện âm thanh và cộng hưởng của lực lượng nguyên thủy. Họ sẽ là người đáng kính và phổ biến. Sự tự tin và kiên nhẫn cùng tồn tại nhưng vận may của họ sẽ thường xuyên thay đổi. Như một bánh xe quay, cuộc sống của họ sẽ có nhiều thăng trầm. Họ phải trung thực trong mọi hoạt động và sẽ nhận được sự ủng hộ từ cộng đồng.",
    strengths: ["Độc lập", "Quyết đoán", "Sáng tạo", "Tự tin", "Có tầm nhìn"],
    challenges: ["Bướng bỉnh", "Thống trị", "Ích kỷ", "Không kiên nhẫn"],
    career: "Phù hợp với vai trò lãnh đạo, doanh nhân, nhà sáng tạo, hoặc trong lĩnh vực quản lý.",
    relationships: "Trong các mối quan hệ, người số 1 cần học cách lắng nghe và tôn trọng ý kiến của người khác.",
    finance: 80,
    romance: 20,
    education: 10,
    health: 30,
    family: 60,
    growth: 80,
    career_score: 85,
    reputation: 75,
    spirituality: 60,
    luck: 70
  },
  {
    number: 2,
    title: "Người hòa giải",
    planet: "Mặt Trăng (Moon)",
    description: "Số 2 đại diện cho sự hợp tác và cân bằng. Người số 2 sẽ tiến bộ trong cuộc sống bởi đức tin vào Thượng đế. Họ thu lợi từ nhiều phương tiện một cách dễ dàng. Họ có thể gặp phải những vấn đề không lường trước được và những nguy hiểm, như để thử thách đức tin của họ. Đôi khi, họ có xu hướng can thiệp vào những vấn đề không liên quan. Họ có thể bị gia đình và bạn bè làm thất vọng. Nếu họ có đức tin vào Thượng đế, họ chắc chắn sẽ đạt được những đỉnh cao trong cuộc sống.",
    strengths: ["Hợp tác", "Trực giác", "Ngoại giao", "Kiên nhẫn", "Thấu hiểu"],
    challenges: ["Nhạy cảm quá mức", "Thiếu quyết đoán", "Phụ thuộc", "Lo lắng"],
    career: "Phù hợp với các vị trí đòi hỏi sự hợp tác, như giáo viên, nhà tư vấn, nhà hòa giải, hoặc chuyên gia chăm sóc sức khỏe.",
    relationships: "Trong các mối quan hệ, người số 2 là người đồng hành tuyệt vời, luôn quan tâm đến cảm xúc và nhu cầu của đối phương.",
    finance: 80,
    romance: 70,
    education: 60,
    health: 50,
    family: 80,
    growth: 65,
    career_score: 70,
    reputation: 65,
    spirituality: 75,
    luck: 65
  },
  {
    number: 3,
    title: "Người biểu đạt",
    planet: "Sao Mộc (Jupiter)",
    description: "Số 3 tượng trưng cho làm việc chăm chỉ, trí tuệ, thành công và cuộc sống thoải mái. Người số 3 có khả năng thu hút người khác bằng sức mạnh lời nói của họ. Họ hy sinh cuộc sống của mình vì phúc lợi và hạnh phúc của người khác bằng cách gánh vác gánh nặng của họ. Với sự quyết tâm mạnh mẽ, họ tiến bộ đều đặn trong cuộc sống và đạt đến đỉnh cao của thành công. Họ sẽ có được và duy trì vị trí tốt vĩnh viễn trong cuộc sống của họ.",
    strengths: ["Giao tiếp", "Sáng tạo", "Lạc quan", "Hài hước", "Biểu cảm"],
    challenges: ["Phân tán", "Hời hợt", "Trì hoãn", "Kiêu ngạo"],
    career: "Phù hợp với các ngành nghề sáng tạo như nghệ thuật, viết lách, diễn xuất, giáo dục, hoặc truyền thông.",
    relationships: "Trong các mối quan hệ, người số 3 mang lại niềm vui và tình yêu cuộc sống, nhưng đôi khi cần thêm chiều sâu.",
    finance: 80,
    romance: 60,
    education: 90,
    health: 50,
    family: 75,
    growth: 75,
    career_score: 75,
    reputation: 80,
    spirituality: 70,
    luck: 75
  },
  {
    number: 4,
    title: "Người xây dựng",
    planet: "Rahu (North Node)",
    description: "Số 4 thể hiện cho một người hoặc một thứ phổ biến. Người số 4 không mang lại may mắn như người ta có thể xứng đáng. Họ sẽ có những nỗi sợ vô cớ, bệnh tật và sự đối lập. Họ có thể được thông tin tốt và khôn ngoan, nhưng họ vẫn sẽ chỉ làm việc như những người dưới quyền người khác. Các quốc gia phương Tây coi số 13 là không may mắn và điềm báo. Sự kiện đau buồn bất ngờ xảy ra thường xuyên với người này. Người đàn ông số này có kinh nghiệm cay đắng và gặp nhiều khó khăn vì phụ nữ.",
    strengths: ["Đáng tin cậy", "Có tổ chức", "Cần cù", "Thực tế", "Trung thành"],
    challenges: ["Cứng nhắc", "Bảo thủ", "Thiếu linh hoạt", "Lo lắng"],
    career: "Phù hợp với các lĩnh vực đòi hỏi sự chính xác và tổ chức như kế toán, kỹ thuật, xây dựng, hoặc quản lý dự án.",
    relationships: "Trong các mối quan hệ, người số 4 là người đáng tin cậy và ổn định, nhưng đôi khi cần mở lòng hơn với những thay đổi.",
    finance: 30,
    romance: 20,
    education: 40,
    health: 30,
    family: 70,
    growth: 65,
    career_score: 80,
    reputation: 70,
    spirituality: 65,
    luck: 60
  },
  {
    number: 5,
    title: "Người tự do",
    planet: "Sao Thủy (Mercury)",
    description: "Số 5 tượng trưng cho sức mạnh quyến rũ, năng động và cuộc sống xa hoa, nổi tiếng. Người số 5 thích hợp cho thương mại. Họ luôn được bao quanh bởi nhiều người và sự vật. Họ thành công trong nhiều ngành thương mại và sẽ gặp gỡ nhiều bạn bè. Họ có thể gặp phải những vấn đề kỳ lạ và có thể đối mặt với sự thất vọng khi tin tưởng người khác. Họ cũng có thể đối mặt với rủi ro từ sấm sét, nước và lửa. Họ thường xuyên đi du lịch. Những người này được khuyên nên cẩn thận khi đi trên những phương tiện di chuyển nhanh.",
    strengths: ["Thích nghi", "Linh hoạt", "Tò mò", "Năng động", "Đa tài"],
    challenges: ["Bồn chồn", "Thiếu kiên định", "Mạo hiểm", "Bốc đồng"],
    career: "Phù hợp với các lĩnh vực đòi hỏi sự đa dạng và linh hoạt như bán hàng, tiếp thị, du lịch, hoặc báo chí.",
    relationships: "Trong các mối quan hệ, người số 5 mang lại sự hứng khởi và phiêu lưu, nhưng đôi khi cần cam kết sâu hơn.",
    finance: 70,
    romance: 80,
    education: 60,
    health: 50,
    family: 60,
    growth: 80,
    career_score: 75,
    reputation: 70,
    spirituality: 65,
    luck: 75
  },
  {
    number: 6,
    title: "Người chăm sóc",
    planet: "Sao Kim (Venus)",
    description: "Số 6 biểu thị cuộc sống hòa bình, tâm trí hài lòng và mãn nguyện và mức sống tốt. Họ có sự quyết tâm thành công trong mọi kế hoạch, kiếm tiền và tìm kiếm để đạt được mục đích của mình. Dục vọng, trả thù và ác ý có thể đẩy những người có số này vào trạng thái tâm trí đồi bại. Họ có thể dần dần trở nên ích kỷ. Một vẻ ngoài quyến rũ và lời nói mạnh mẽ sẽ giúp họ đạt được lợi ích của mình. Nhiều người sẵn sàng giúp đỡ họ khi cần. Cuộc sống sẽ xa hoa.",
    strengths: ["Yêu thương", "Trách nhiệm", "Hòa hợp", "Hỗ trợ", "Thấu hiểu"],
    challenges: ["Hy sinh thái quá", "Lo lắng", "Can thiệp", "Hoàn hảo chủ nghĩa"],
    career: "Phù hợp với các lĩnh vực phục vụ con người như giáo dục, y tế, tư vấn, hoặc làm việc trong các tổ chức phi lợi nhuận.",
    relationships: "Trong các mối quan hệ, người số 6 là người chăm sóc và hy sinh, nhưng đôi khi cần học cách cân bằng việc cho và nhận.",
    finance: 90,
    romance: 80,
    education: 60,
    health: 70,
    family: 90,
    growth: 70,
    career_score: 75,
    reputation: 80,
    spirituality: 75,
    luck: 70
  },
  {
    number: 7,
    title: "Người tìm kiếm",
    planet: "Ketu (South Node)",
    description: "Số 7 đại diện cho các nguyên tắc cao và phẩm chất đức hạnh, có thể phát triển với ân sủng thiêng liêng. Những người trong số này sẽ trải qua nhiều thử thách trong cuộc sống. Mỗi bước trong cuộc sống sẽ mang đến vấn đề và khó khăn. Chiến thắng đạt được trước những vấn đề như vậy sẽ giúp họ có được sự tự tin, tăng trưởng tâm linh và sự hỗ trợ của những người xung quanh. Họ hiểu biết rộng, nổi tiếng với sự rõ ràng trong suy nghĩ và do đó hành động của họ sẽ được lên kế hoạch tốt. Những người này sẽ thiết lập lý tưởng và tiêu chuẩn cho chính họ và sẽ tuân thủ chúng bằng mọi giá.",
    strengths: ["Phân tích", "Trực giác", "Tư duy sâu sắc", "Tâm linh", "Độc lập"],
    challenges: ["Hoài nghi", "Cô lập", "Quá phân tích", "Xa cách"],
    career: "Phù hợp với các lĩnh vực nghiên cứu, phân tích, triết học, tâm linh, hoặc công nghệ.",
    relationships: "Trong các mối quan hệ, người số 7 mang lại chiều sâu trí tuệ, nhưng đôi khi cần mở lòng hơn về mặt cảm xúc.",
    finance: 40,
    romance: 30,
    education: 50,
    health: 30,
    family: 65,
    growth: 75,
    career_score: 70,
    reputation: 70,
    spirituality: 90,
    luck: 65
  },
  {
    number: 8,
    title: "Người thành đạt",
    planet: "Sao Thổ (Saturn)",
    description: "Số 8 mang đến thành công lớn trong đời sống tâm linh. Người số 8 nếu không kiểm soát được niềm vui, thành công sẽ bị trì hoãn. Sau một cuộc đấu tranh lớn, họ có thể thành công. Họ sẽ phải đối mặt với những nguy hiểm không lường trước được và những hoàn cảnh khó khăn trong cuộc sống. Số này biểu thị nghèo đói trong tuổi già và nỗ lực vô ích. Những người có số này phải chịu tổn thất lớn do bạn bè và đối tác. Hoàn cảnh dẫn họ đến thất bại và nhầm lẫn. Số này làm giảm tuổi thọ của một người và tạo ra kẻ thù thậm chí có thể giết họ.",
    strengths: ["Tự tin", "Quản lý", "Thực tế", "Quyết đoán", "Tham vọng"],
    challenges: ["Thống trị", "Vật chất", "Thiếu kiên nhẫn", "Áp lực"],
    career: "Phù hợp với các lĩnh vực kinh doanh, tài chính, quản lý, hoặc lãnh đạo doanh nghiệp.",
    relationships: "Trong các mối quan hệ, người số 8 mang lại sự ổn định và bảo vệ, nhưng đôi khi cần cân bằng giữa công việc và cuộc sống cá nhân.",
    finance: 40,
    romance: 20,
    education: 60,
    health: 50,
    family: 65,
    growth: 80,
    career_score: 90,
    reputation: 80,
    spirituality: 60,
    luck: 75
  },
  {
    number: 9,
    title: "Người nhân ái",
    planet: "Sao Hỏa (Mars)",
    description: "Số 9 tượng trưng cho sự khôn ngoan và khả năng. Người số 9 cũng chỉ ra việc đi du lịch, đấu tranh chống lại tình huống kỳ lạ và chiến thắng cuối cùng. Khi họ cuối cùng thành công, họ sẽ có một cuộc sống xa hoa lâu dài. Số này cho thấy tâm trí rõ ràng và trí thông minh, làm việc không mệt mỏi, tích lũy của cải, ảnh hưởng mọi mặt và vị trí nổi bật và cấp bậc cao. Đặc biệt là trong các dịch vụ mặc đồng phục như cảnh sát, quân đội, vv.., họ sẽ tăng lên rất cao trong cấp bậc của họ. Đây là một số rất may mắn mang lại tâm linh và quyền năng ma thuật.",
    strengths: ["Từ bi", "Rộng lượng", "Sáng tạo", "Lý tưởng", "Trí tuệ"],
    challenges: ["Xa rời thực tế", "Hy sinh thái quá", "Cảm xúc mạnh", "Khó buông bỏ"],
    career: "Phù hợp với các lĩnh vực phục vụ nhân loại như nghệ thuật, giáo dục, tâm linh, hoặc hoạt động xã hội.",
    finance: 90,
    romance: 70,
    education: 80,
    health: 60,
    family: 75,
    growth: 80,
    career_score: 75,
    reputation: 85,
    spirituality: 85,
    luck: 70
  }
];
