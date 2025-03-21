export type PlanetName =
  | 'Sun'
  | 'Moon'
  | 'Jupiter'
  | 'Rahu'
  | 'Mercury'
  | 'Venus'
  | 'Ketu'
  | 'Saturn'
  | 'Mars';

export interface NumberMeaning {
  number: number;
  planet: PlanetName;
  title: string;
  description: string;
  strengths: string[];
  strengths_vi?: string[]; // Added Vietnamese strengths
  challenges: string[];
  challenges_vi?: string[]; // Added Vietnamese challenges
  career: string;
  career_vi?: string; // Added Vietnamese career
  relationships: string;
  relationships_vi?: string; // Added Vietnamese relationships
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
    planet: 'Sun',
    title: 'The Sun',
    description:
      'Leadership, creation, and uniqueness. Number 1 represents new beginnings, independence, and a pioneering spirit.',
    strengths: [
      'Independent',
      'Ambitious',
      'Determined',
      'Innovative',
      'Courageous',
    ],
    challenges: [
      'Arrogance',
      'Stubbornness',
      'Self-centeredness',
      'Impatience',
      'Dominating',
    ],
    career:
      'Leadership roles, entrepreneurship, creative fields, politics, and any position where they can be independent and innovative.',
    relationships:
      'May struggle with partnerships due to their independent nature. Need a partner who understands their need for autonomy and respects their leadership qualities.',
    finance: 8,
    romance: 6,
    education: 7,
    health: 7,
    family: 6,
    growth: 9,
    career_score: 8,
    reputation: 7,
    spirituality: 6,
    luck: 7,
  },
  {
    number: 2,
    planet: 'Moon',
    title: 'The Moon',
    description:
      'Sensitivity, intuition, and harmony. Number 2 signifies partnerships, diplomacy, and receptive energy.',
    strengths: [
      'Diplomatic',
      'Cooperative',
      'Empathetic',
      'Intuitive',
      'Supportive',
    ],
    challenges: [
      'Indecisiveness',
      'Over-sensitivity',
      'Submissiveness',
      'Insecurity',
      'Moodiness',
    ],
    career:
      'Counseling, social work, diplomacy, customer service, and any role that requires empathy and cooperation.',
    relationships:
      'Excel in partnerships and value harmony. Need a supportive and understanding partner who appreciates their sensitivity and avoids conflict.',
    finance: 6,
    romance: 8,
    education: 7,
    health: 7,
    family: 8,
    growth: 7,
    career_score: 7,
    reputation: 8,
    spirituality: 7,
    luck: 6,
  },
  {
    number: 3,
    planet: 'Jupiter',
    title: 'Jupiter',
    description:
      'Expression, joy, and optimism. Number 3 represents creativity, communication, and expansion.',
    strengths: [
      'Creative',
      'Optimistic',
      'Expressive',
      'Sociable',
      'Enthusiastic',
    ],
    strengths_vi: [
      'Sáng tạo',
      'Lạc quan',
      'Biết diễn đạt',
      'Hòa đồng',
      'Nhiệt tình',
    ],
    challenges: [
      'Superficiality',
      'Scattering energy',
      'Gossip',
      'Over-optimism',
      'Lack of focus',
    ],
    challenges_vi: [
      'Hời hợt',
      'Phân tán năng lượng',
      'Nhiều chuyện',
      'Quá lạc quan',
      'Thiếu tập trung',
    ],
    career:
      'Writing, public speaking, teaching, acting, and any field that allows them to express their creativity and enthusiasm.',
    career_vi:
      'Viết lách, diễn thuyết trước công chúng, giảng dạy, diễn xuất và bất kỳ lĩnh vực nào cho phép họ thể hiện sự sáng tạo và nhiệt huyết của mình.',
    relationships:
      'Enjoy being social and need a partner who appreciates their humor and creativity. May struggle with commitment due to their desire for variety and excitement.',
    relationships_vi:
      'Thích giao tiếp xã hội và cần một người bạn đời đánh giá cao sự hài hước và sáng tạo của họ. Có thể gặp khó khăn với sự cam kết do mong muốn sự đa dạng và hứng thú.',
    finance: 7,
    romance: 7,
    education: 8,
    health: 6,
    family: 7,
    growth: 8,
    career_score: 8,
    reputation: 7,
    spirituality: 6,
    luck: 8,
  },
  {
    number: 4,
    planet: 'Rahu',
    title: 'Rahu',
    description:
      'Stability, determination, and practicality. Number 4 represents foundations, order, and a systematic approach.',
    strengths: [
      'Organized',
      'Disciplined',
      'Reliable',
      'Practical',
      'Hardworking',
    ],
    strengths_vi: [
      'Có tổ chức',
      'Kỷ luật',
      'Đáng tin cậy',
      'Thực tế',
      'Chăm chỉ',
    ],
    challenges: [
      'Rigidity',
      'Stubbornness',
      'Resistance to change',
      'Pessimism',
      'Workaholism',
    ],
    challenges_vi: [
      'Cứng nhắc',
      'Bướng bỉnh',
      'Kháng cự sự thay đổi',
      'Bi quan',
      'Nghiện công việc',
    ],
    career:
      'Engineering, accounting, project management, construction, and any field that requires structure and attention to detail.',
    career_vi:
      'Kỹ thuật, kế toán, quản lý dự án, xây dựng và bất kỳ lĩnh vực nào đòi hỏi cấu trúc và sự chú ý đến chi tiết.',
    relationships:
      'Value stability and security in relationships. Need a partner who appreciates their reliability and is willing to build a solid foundation together.',
    relationships_vi:
      'Đánh giá cao sự ổn định và an toàn trong các mối quan hệ. Cần một người bạn đời đánh giá cao sự đáng tin cậy của họ và sẵn sàng xây dựng một nền tảng vững chắc cùng nhau.',
    finance: 8,
    romance: 6,
    education: 7,
    health: 7,
    family: 8,
    growth: 6,
    career_score: 8,
    reputation: 7,
    spirituality: 6,
    luck: 7,
  },
  {
    number: 5,
    planet: 'Mercury',
    title: 'Mercury',
    description:
      'Freedom, versatility, and change. Number 5 represents adaptability, travel, and progressive energy.',
    strengths: [
      'Adaptable',
      'Versatile',
      'Curious',
      'Communicative',
      'Resourceful',
    ],
    strengths_vi: [
      'Dễ thích nghi',
      'Linh hoạt',
      'Tò mò',
      'Có khả năng giao tiếp',
      'Tháo vát',
    ],
    challenges: [
      'Restlessness',
      'Inconsistency',
      'Impulsiveness',
      'Superficiality',
      'Lack of commitment',
    ],
    challenges_vi: [
      'Bồn chồn',
      'Không nhất quán',
      'Bốc đồng',
      'Hời hợt',
      'Thiếu cam kết',
    ],
    career:
      'Sales, marketing, journalism, travel industry, and any role that involves communication and variety.',
    career_vi:
      'Bán hàng, tiếp thị, báo chí, ngành du lịch và bất kỳ vai trò nào liên quan đến giao tiếp và sự đa dạng.',
    relationships:
      'Seek excitement and variety in relationships. Need a partner who is open-minded and willing to explore new experiences together.',
    relationships_vi:
      'Tìm kiếm sự hứng thú và đa dạng trong các mối quan hệ. Cần một người bạn đời có tư tưởng cởi mở và sẵn sàng khám phá những trải nghiệm mới cùng nhau.',
    finance: 7,
    romance: 7,
    education: 7,
    health: 6,
    family: 6,
    growth: 9,
    career_score: 8,
    reputation: 7,
    spirituality: 6,
    luck: 8,
  },
  {
    number: 6,
    planet: 'Venus',
    title: 'Venus',
    description:
      'Harmony, love, and responsibility. Number 6 represents nurturing, beauty, and balance.',
    strengths: [
      'Caring',
      'Responsible',
      'Harmonious',
      'Artistic',
      'Loyal',
    ],
    strengths_vi: [
      'Chu đáo',
      'Có trách nhiệm',
      'Hài hòa',
      'Nghệ thuật',
      'Trung thành',
    ],
    challenges: [
      'Perfectionism',
      'Over-critical',
      'Martyrdom',
      'Interference',
      'Jealousy',
    ],
    challenges_vi: [
      'Chủ nghĩa hoàn hảo',
      'Quá khắt khe',
      'Liệt sĩ',
      'Can thiệp',
      'Ghen tuông',
    ],
    career:
      'Design, arts, counseling, healthcare, and any role that involves nurturing and creating beauty.',
    career_vi:
      'Thiết kế, nghệ thuật, tư vấn, chăm sóc sức khỏe và bất kỳ vai trò nào liên quan đến việc nuôi dưỡng và tạo ra vẻ đẹp.',
    relationships:
      'Value harmony and commitment in relationships. Need a partner who appreciates their caring nature and is willing to create a beautiful and balanced home life.',
    relationships_vi:
      'Đánh giá cao sự hài hòa và cam kết trong các mối quan hệ. Cần một người bạn đời đánh giá cao bản chất chu đáo của họ và sẵn sàng tạo ra một cuộc sống gia đình tươi đẹp và cân bằng.',
    finance: 7,
    romance: 8,
    education: 7,
    health: 7,
    family: 9,
    growth: 7,
    career_score: 7,
    reputation: 8,
    spirituality: 7,
    luck: 6,
  },
  {
    number: 7,
    planet: 'Ketu',
    title: 'Ketu',
    description:
      'Spirituality, analysis, and wisdom. Number 7 represents introspection, mysticism, and inner knowledge.',
    strengths: [
      'Analytical',
      'Intuitive',
      'Wise',
      'Spiritual',
      'Independent',
    ],
    strengths_vi: [
      'Phân tích',
      'Trực giác',
      'Khôn ngoan',
      'Tâm linh',
      'Độc lập',
    ],
    challenges: [
      'Isolation',
      'Skepticism',
      'Over-thinking',
      'Cynicism',
      'Secretiveness',
    ],
    challenges_vi: [
      'Cô lập',
      'Hoài nghi',
      'Suy nghĩ quá nhiều',
      'Yếm thế',
      'Kín đáo',
    ],
    career:
      'Research, science, philosophy, spirituality, and any field that requires deep thinking and analysis.',
    career_vi:
      'Nghiên cứu, khoa học, triết học, tâm linh và bất kỳ lĩnh vực nào đòi hỏi tư duy sâu sắc và phân tích.',
    relationships:
      'May struggle with intimacy and prefer solitude. Need a partner who respects their need for space and appreciates their intellectual depth.',
    relationships_vi:
      'Có thể gặp khó khăn với sự thân mật và thích sự cô độc. Cần một người bạn đời tôn trọng nhu cầu về không gian của họ và đánh giá cao chiều sâu trí tuệ của họ.',
    finance: 6,
    romance: 6,
    education: 9,
    health: 7,
    family: 6,
    growth: 7,
    career_score: 7,
    reputation: 7,
    spirituality: 9,
    luck: 6,
  },
  {
    number: 8,
    planet: 'Saturn',
    title: 'Saturn',
    description:
      'Power, achievement, and strength. Number 8 represents ambition, organization, and material success.',
    strengths: [
      'Ambitious',
      'Disciplined',
      'Organized',
      'Efficient',
      'Responsible',
    ],
    strengths_vi: [
      'Tham vọng',
      'Kỷ luật',
      'Có tổ chức',
      'Hiệu quả',
      'Có trách nhiệm',
    ],
    challenges: [
      'Workaholism',
      'Materialism',
      'Control issues',
      'Pessimism',
      'Rigidity',
    ],
    challenges_vi: [
      'Nghiện công việc',
      'Chủ nghĩa vật chất',
      'Vấn đề kiểm soát',
      'Bi quan',
      'Cứng nhắc',
    ],
    career:
      'Business, finance, law, management, and any field that offers opportunities for advancement and material gain.',
    career_vi:
      'Kinh doanh, tài chính, luật, quản lý và bất kỳ lĩnh vực nào mang lại cơ hội thăng tiến và lợi ích vật chất.',
    relationships:
      'Seek stability and security in relationships. Need a partner who is reliable and shares their ambition and work ethic.',
    relationships_vi:
      'Tìm kiếm sự ổn định và an toàn trong các mối quan hệ. Cần một người bạn đời đáng tin cậy và chia sẻ tham vọng và đạo đức làm việc của họ.',
    finance: 9,
    romance: 6,
    education: 7,
    health: 6,
    family: 7,
    growth: 8,
    career_score: 9,
    reputation: 8,
    spirituality: 6,
    luck: 7,
  },
  {
    number: 9,
    planet: 'Mars',
    title: 'Mars',
    description:
      'Courage, energy, and completion. Number 9 represents humanitarianism, leadership, and transformation.',
    strengths: [
      'Courageous',
      'Passionate',
      'Generous',
      'Idealistic',
      'Charismatic',
    ],
    strengths_vi: [
      'Can đảm',
      'Đam mê',
      'Hào phóng',
      'Lý tưởng',
      'Lôi cuốn',
    ],
    challenges: [
      'Aggression',
      'Impulsiveness',
      'Idealism',
      'Burnout',
      'Self-righteousness',
    ],
    challenges_vi: [
      'Hung hăng',
      'Bốc đồng',
      'Chủ nghĩa lý tưởng',
      'Kiệt sức',
      'Tự cho mình là đúng',
    ],
    career:
      'Activism, social work, military, politics, and any field that allows them to fight for a cause and make a difference.',
    career_vi:
      'Hoạt động xã hội, công tác xã hội, quân đội, chính trị và bất kỳ lĩnh vực nào cho phép họ đấu tranh cho một mục tiêu và tạo ra sự khác biệt.',
    relationships:
      'Seek a partner who shares their passion and idealism. May struggle with commitment due to their desire to change the world and help others.',
    relationships_vi:
      'Tìm kiếm một người bạn đời chia sẻ niềm đam mê và chủ nghĩa lý tưởng của họ. Có thể gặp khó khăn với sự cam kết do mong muốn thay đổi thế giới và giúp đỡ người khác.',
    finance: 7,
    romance: 7,
    education: 7,
    health: 7,
    family: 6,
    growth: 9,
    career_score: 8,
    reputation: 8,
    spirituality: 8,
    luck: 7,
  },
];
