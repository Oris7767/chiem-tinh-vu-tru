
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Calculator />
        
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
                Giới thiệu
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Số học Vệ Đà là gì?
              </h2>
              <p className="text-lg text-gray-600">
                Khám phá nguồn gốc và ý nghĩa của số học Vệ Đà.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-card rounded-xl p-6 md:p-8 space-y-6">
                <h3 className="text-2xl font-bold">Nguồn gốc cổ đại</h3>
                <p className="text-gray-700 leading-relaxed">
                  Số học Vệ Đà có nguồn gốc từ văn hóa Ấn Độ cổ đại và các văn bản Vệ Đà thiêng liêng, 
                  được viết cách đây hơn 5.000 năm. Đây là một trong những hệ thống số học lâu đời nhất thế giới.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Theo Số học Vệ Đà, mỗi con số mang một rung động và năng lượng riêng biệt, 
                  có thể tiết lộ rất nhiều về tính cách, tiềm năng và số phận của một người.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6 md:p-8 space-y-6">
                <h3 className="text-2xl font-bold">Sự khác biệt</h3>
                <p className="text-gray-700 leading-relaxed">
                  Điểm đặc biệt của Số học Vệ Đà so với các hệ thống khác là nó không chỉ phân tích 
                  các con số từ ngày sinh, mà còn đặc biệt chú trọng đến tên của một người.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Hệ thống này cũng công nhận các "số thầy" như 11 và 22, những con số mang năng lượng 
                  rất mạnh mẽ và tiềm năng đặc biệt, không giống như một số hệ thống số học khác luôn 
                  giảm tất cả các số xuống còn một chữ số.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="meanings" className="py-24 bg-gradient-to-br from-primary/5 to-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
                Ý nghĩa
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ý nghĩa các con số
              </h2>
              <p className="text-lg text-gray-600">
                Mỗi con số từ 1 đến 9, cùng với các số thầy 11 và 22, đều mang những ý nghĩa và năng lượng riêng biệt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-primary">{num}</span>
                    </div>
                    <h3 className="text-xl font-bold">{getNumberTitle(num)}</h3>
                  </div>
                  <p className="text-gray-700">
                    {getNumberShortDescription(num)}
                  </p>
                </div>
              ))}
              
              {/* Master numbers */}
              {[11, 22].map((num) => (
                <div key={num} className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md border-2 border-primary/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-primary">{num}</span>
                    </div>
                    <h3 className="text-xl font-bold">{getNumberTitle(num)} (Số thầy)</h3>
                  </div>
                  <p className="text-gray-700">
                    {getNumberShortDescription(num)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

// Helper functions for number meanings
const getNumberTitle = (num: number): string => {
  const titles: Record<number, string> = {
    1: "Nhà lãnh đạo",
    2: "Người hòa giải",
    3: "Người biểu đạt",
    4: "Người xây dựng",
    5: "Người tự do",
    6: "Người chăm sóc",
    7: "Người tìm kiếm",
    8: "Người thành đạt",
    9: "Người nhân ái",
    11: "Nhà tiên tri",
    22: "Người kiến tạo"
  };
  
  return titles[num] || "";
};

const getNumberShortDescription = (num: number): string => {
  const descriptions: Record<number, string> = {
    1: "Độc lập, tiên phong, quyết đoán, và có tham vọng. Có ý chí mạnh mẽ và khả năng lãnh đạo.",
    2: "Hợp tác, nhạy cảm, và biết quan tâm đến người khác. Có khả năng làm việc hiệu quả trong nhóm.",
    3: "Sáng tạo, giao tiếp, và biểu đạt. Hướng ngoại, có tài ăn nói, và truyền cảm hứng cho người khác.",
    4: "Ổn định, đáng tin cậy, và thực tế. Có tổ chức, chăm chỉ, và xây dựng nền móng vững chắc.",
    5: "Tự do, thay đổi, và phiêu lưu. Năng động, thích trải nghiệm mới, và khám phá.",
    6: "Yêu thương, trách nhiệm, và hòa hợp. Ấm áp, quan tâm, và có tinh thần phục vụ.",
    7: "Trí tuệ, tâm linh, và phân tích. Thông minh, trực giác, và tìm kiếm chân lý.",
    8: "Quyền lực, thành công vật chất, và thực tế. Tham vọng, khả năng lãnh đạo, và nhạy bén kinh doanh.",
    9: "Nhân ái, hoàn thiện, và lý tưởng. Có tầm nhìn rộng lớn, lòng từ bi, và tinh thần phục vụ.",
    11: "Trực giác cao độ, tầm nhìn xa, và giác ngộ tâm linh. Nhạy cảm và có khả năng truyền cảm hứng.",
    22: "Nhà kiến tạo vĩ đại, có khả năng biến ước mơ thành hiện thực. Có tầm nhìn lớn và khả năng tổ chức."
  };
  
  return descriptions[num] || "";
};

export default Index;
