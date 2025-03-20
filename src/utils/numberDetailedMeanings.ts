
// Define a type for detailed meanings
interface DetailedMeaning {
  number: number;
  description: {
    en: string;
    vi: string;
  };
}

// Array to store detailed meanings for numbers
const detailedMeanings: DetailedMeaning[] = [
  // Adding detailed meanings for numbers 1-19
  {
    number: 10,
    description: {
      en: "This number when comes as a name indicates the sound or resonance of the primal force. This is depicted in the ancient texts as a snake enmeshed within a wheel. Those named under this number will be dignified and popular. Confidence and patience coexist in their lives but their fortunes will change frequently. It is like a revolving wheel, with ups and downs frequently. They must be honest in all their activities and they are bound to gain popularity. They will lead happy lives since there will be no paucity of funds.",
      vi: "Số này khi đến như một cái tên biểu thị âm thanh hoặc sự cộng hưởng của lực nguyên thủy. Điều này được mô tả trong các văn bản cổ đại như một con rắn quấn quýt trong một bánh xe. Những người được đặt tên theo số này sẽ được tôn trọng và phổ biến. Sự tự tin và kiên nhẫn cùng tồn tại trong cuộc sống của họ nhưng vận may của họ sẽ thay đổi thường xuyên. Nó giống như một bánh xe quay, với những thăng trầm thường xuyên. Họ phải trung thực trong tất cả các hoạt động của họ và họ chắc chắn sẽ được nhiều người biết đến. Họ sẽ sống một cuộc sống hạnh phúc vì sẽ không thiếu tiền."
    }
  },
  {
    number: 19,
    description: {
      en: "Ancient books on this subject attribute mastery over the Three Worlds to this Number and as such, these people will be the focus of attention wherever they are. This number indicates the Rising Sun. This also has been described as the \"Prince of the Celestial World\" in ancient Indian texts and as an \"Ideal Lover\" in Egyptian scriptures. The sun becomes brighter as the day lengthens and so also these people progress as their age advances. Position, status, happiness, success and wealth will be gradually on the rise. Being well-disciplined, they will look young and will be very active even in their advanced age. They must be honest even in matters related to sensual pleasures.",
      vi: "Các sách cổ về chủ đề này gán cho sự thông thạo ba thế giới cho Số này và do đó, những người này sẽ là tâm điểm chú ý ở bất cứ nơi nào họ đến. Số này biểu thị Mặt trời mọc. Điều này cũng đã được mô tả như \"Hoàng tử của Thế giới Thiên đường\" trong các văn bản Ấn Độ cổ đại và như một \"Người yêu lý tưởng\" trong kinh thánh Ai Cập. Mặt trời trở nên sáng hơn khi ngày dài ra và vì vậy những người này cũng tiến bộ khi tuổi tác của họ tiến triển. Vị trí, địa vị, hạnh phúc, thành công và sự giàu có sẽ dần dần gia tăng. Là người có kỷ luật tốt, họ sẽ trông trẻ và sẽ rất năng động ngay cả ở tuổi già của họ. Họ phải trung thực ngay cả trong những vấn đề liên quan đến khoái lạc giác quan."
    }
  }
  // Additional numbers can be added following the same pattern
];

// Function to get detailed meaning for a specific number
export const getDetailedMeaning = (number: number): DetailedMeaning | undefined => {
  return detailedMeanings.find(meaning => meaning.number === number);
};
