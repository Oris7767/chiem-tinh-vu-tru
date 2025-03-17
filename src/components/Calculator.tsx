
import { useState, useRef } from 'react';
import { 
  calculateNameNumber, calculateBirthNumber, calculateLifeNumber,
  reduceToPythagoras
} from '../utils/numerologyCalculator';
import { numberMeanings } from '../utils/data';
import { cn } from '../lib/utils';
import { 
  Banknote, Heart, GraduationCap, Activity, 
  Users, TrendingUp, Briefcase, Award, 
  Compass, Zap 
} from 'lucide-react';

interface CalculationResult {
  nameNumber: {
    steps: string;
    totalBeforeReduction: number;
    total: number;
    finalNumber: number;
  };
  birthNumber: {
    steps: string;
    totalBeforeReduction: number;
    total: number;
    finalNumber: number;
  };
  lifeNumber: {
    steps: string;
    totalBeforeReduction: number;
    total: number;
    finalNumber: number;
  };
}

const Calculator = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentTab, setCurrentTab] = useState<'birth' | 'name' | 'life'>(
    'birth'
  );
  
  const resultRef = useRef<HTMLDivElement>(null);

  const isFormValid = name.trim() !== '' && 
    day !== '' && parseInt(day) > 0 && parseInt(day) <= 31 &&
    month !== '' && parseInt(month) > 0 && parseInt(month) <= 12 &&
    year !== '' && year.length === 4;

  const handleCalculate = () => {
    if (!isFormValid) return;
    
    setIsCalculating(true);
    setShowResult(false);
    
    // Small delay to show calculation animation
    setTimeout(() => {
      const nameNum = calculateNameNumber(name);
      const birthNum = calculateBirthNumber(
        parseInt(day),
        parseInt(month),
        parseInt(year)
      );
      const lifeNum = calculateLifeNumber(birthNum.finalNumber, nameNum.finalNumber);
      
      setResult({
        nameNumber: nameNum,
        birthNumber: birthNum,
        lifeNumber: lifeNum
      });
      
      setIsCalculating(false);
      setShowResult(true);
      
      if (resultRef.current) {
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }, 1500);
  };

  const getMeaning = (number: number) => {
    return numberMeanings.find(m => m.number === number) || numberMeanings[0];
  };

  const renderHighlight = (text: string) => {
    const highlights = [
      'abundant riches', 'envy of others', 'travel', 'wonderful experiences',
      'permanent prosperity', 'excellent properties', 'sudden fortunes',
      'sudden accidents', 'happy lives', 'end up being disliked by others in society',
      'power of imagination'
    ];
    
    let formattedText = text;
    
    highlights.forEach(highlight => {
      const regex = new RegExp(highlight, 'gi');
      formattedText = formattedText.replace(regex, match => 
        `<span class="text-green-600 font-medium">${match}</span>`
      );
    });
    
    return formattedText;
  };

  const renderScoreBar = (score: number, label: string, icon: React.ReactNode) => (
    <div className="text-center">
      <div className="flex items-center justify-center mb-2">
        {icon}
        <span className="ml-1 text-sm text-gray-700">{score}%</span>
      </div>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  );

  return (
    <section id="calculator" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
              Công cụ tính toán
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Khám phá con số của bạn
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nhập tên đầy đủ và ngày sinh của bạn để khám phá các con số quan trọng theo số học Vệ Đà.
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-6 md:p-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-2 flex items-center justify-center">
                    <span className="text-white text-xs">📝</span>
                  </div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Họ và tên đầy đủ
                  </label>
                </div>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập họ và tên đầy đủ của bạn"
                  className="input-field"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <label htmlFor="day" className="block text-gray-700 font-medium">
                    Ngày
                  </label>
                  <input
                    id="day"
                    type="number"
                    min="1"
                    max="31"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="Ngày"
                    className="input-field"
                  />
                </div>
                
                <div className="space-y-4">
                  <label htmlFor="month" className="block text-gray-700 font-medium">
                    Tháng
                  </label>
                  <input
                    id="month"
                    type="number"
                    min="1"
                    max="12"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    placeholder="Tháng"
                    className="input-field"
                  />
                </div>
                
                <div className="space-y-4">
                  <label htmlFor="year" className="block text-gray-700 font-medium">
                    Năm
                  </label>
                  <input
                    id="year"
                    type="number"
                    min="1900"
                    max="2100"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Năm"
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  onClick={handleCalculate}
                  disabled={!isFormValid || isCalculating}
                  className={cn(
                    "w-full btn-primary",
                    (!isFormValid || isCalculating) && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isCalculating ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Đang tính toán...
                    </div>
                  ) : (
                    "Tính toán ngay"
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {showResult && result && (
            <div 
              ref={resultRef}
              className="mt-12 glass-card rounded-xl overflow-hidden shadow-lg animate-scale-in"
            >
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setCurrentTab('birth')}
                  className={cn(
                    "flex-1 py-4 px-4 text-center font-medium transition-colors",
                    currentTab === 'birth' 
                      ? "bg-primary/10 text-primary border-b-2 border-primary" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  Số Sinh (Birth)
                </button>
                <button
                  onClick={() => setCurrentTab('name')}
                  className={cn(
                    "flex-1 py-4 px-4 text-center font-medium transition-colors",
                    currentTab === 'name' 
                      ? "bg-primary/10 text-primary border-b-2 border-primary" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  Số Tên (Name)
                </button>
                <button
                  onClick={() => setCurrentTab('life')}
                  className={cn(
                    "flex-1 py-4 px-4 text-center font-medium transition-colors",
                    currentTab === 'life' 
                      ? "bg-primary/10 text-primary border-b-2 border-primary" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  Số Cuộc Đời (Life)
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                {currentTab === 'birth' && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center mb-8">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-4xl font-serif font-bold text-primary">
                            {result.birthNumber.finalNumber}
                          </span>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                          {getMeaning(result.birthNumber.finalNumber).planet}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Các bước tính toán:</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p className="font-medium">
                            Số sinh: {result.birthNumber.totalBeforeReduction} ({result.birthNumber.steps})
                          </p>
                          {result.birthNumber.totalBeforeReduction > 9 && (
                            <p className="font-medium">→ {reduceToPythagoras(result.birthNumber.totalBeforeReduction).steps}</p>
                          )}
                          <p className="text-primary font-medium">Số sinh của bạn là: {result.birthNumber.finalNumber}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.birthNumber.finalNumber).title}
                    </h3>
                    
                    <div className="text-gray-700 leading-relaxed">
                      <p>
                        Một người có con số này có thể được ban phước với <span className="text-green-600 font-medium">những tài sản dồi dào</span>. 
                        Thành tựu và danh tiếng của họ có thể lan rộng khắp nơi, thường trở thành <span className="text-green-600 font-medium">niềm ghen tị của người khác</span>. 
                        Họ có thể sống một cuộc sống náo nhiệt, sôi động, thường liên quan đến rất nhiều <span className="text-green-600 font-medium">du lịch</span>.
                      </p>
                      <p className="mt-2">
                        Họ có thể tận hưởng <span className="text-green-600 font-medium">những trải nghiệm tuyệt vời</span>, 
                        <span className="text-green-600 font-medium">thịnh vượng lâu dài</span>, 
                        <span className="text-green-600 font-medium">tài sản xuất sắc</span>, và 
                        <span className="text-green-600 font-medium">vận may bất ngờ</span>. Tuy nhiên, họ cũng phải cẩn thận với 
                        <span className="text-red-600 font-medium">tai nạn đột ngột</span>.
                      </p>
                      <p className="mt-2">
                        Nếu số sinh của họ may mắn, họ có xu hướng sống <span className="text-green-600 font-medium">cuộc sống hạnh phúc</span>. 
                        Nếu không, có nguy cơ họ có thể <span className="text-orange-600 font-medium">bị ghét bỏ bởi người khác trong xã hội</span> 
                        hoặc thậm chí gặp phải kết cục bi thảm. Con số này nuôi dưỡng <span className="text-green-600 font-medium">sức mạnh trí tưởng tượng</span> mạnh mẽ.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4 py-6 border-t border-b border-gray-200">
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).finance, "Tài chính", <Banknote className="w-5 h-5 text-green-600" />)}
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).romance, "Tình cảm", <Heart className="w-5 h-5 text-red-500" />)}
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).education, "Học vấn", <GraduationCap className="w-5 h-5 text-blue-500" />)}
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).health, "Sức khỏe", <Activity className="w-5 h-5 text-purple-500" />)}
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).family, "Gia đình", <Users className="w-5 h-5 text-orange-500" />)}
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4">
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).growth, "Phát triển", <TrendingUp className="w-5 h-5 text-teal-500" />)}
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).career_score, "Sự nghiệp", <Briefcase className="w-5 h-5 text-indigo-500" />)}
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).reputation, "Danh tiếng", <Award className="w-5 h-5 text-yellow-600" />)}
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).spirituality, "Tâm linh", <Compass className="w-5 h-5 text-cyan-600" />)}
                      {renderScoreBar(getMeaning(result.birthNumber.finalNumber).luck, "May mắn", <Zap className="w-5 h-5 text-amber-500" />)}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Điểm mạnh</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.birthNumber.finalNumber).strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Thách thức</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.birthNumber.finalNumber).challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <h4 className="font-medium text-gray-900 mb-3">Nghề nghiệp phù hợp</h4>
                      <p className="text-gray-700">
                        {getMeaning(result.birthNumber.finalNumber).career}
                      </p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-medium text-gray-900 mb-3">Các mối quan hệ</h4>
                      <p className="text-gray-700">
                        {getMeaning(result.birthNumber.finalNumber).relationships}
                      </p>
                    </div>
                  </div>
                )}
                
                {currentTab === 'name' && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center mb-8">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-4xl font-serif font-bold text-primary">
                            {result.nameNumber.finalNumber}
                          </span>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                          {getMeaning(result.nameNumber.finalNumber).planet}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Các bước tính toán:</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p className="font-medium">
                            Số tên: {result.nameNumber.totalBeforeReduction} ({result.nameNumber.steps})
                          </p>
                          {result.nameNumber.totalBeforeReduction > 9 && (
                            <p className="font-medium">→ {reduceToPythagoras(result.nameNumber.totalBeforeReduction).steps}</p>
                          )}
                          <p className="text-primary font-medium">Số tên của bạn là: {result.nameNumber.finalNumber}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.nameNumber.finalNumber).title}
                    </h3>
                    
                    <div className="text-gray-700 leading-relaxed">
                      <p>
                        Một người có tên số {result.nameNumber.finalNumber} có thể được ban phước với <span className="text-green-600 font-medium">những tài sản dồi dào</span>. 
                        Thành tựu và danh tiếng của họ có thể lan rộng khắp nơi, thường trở thành <span className="text-green-600 font-medium">niềm ghen tị của người khác</span>. 
                        Họ có thể sống một cuộc sống náo nhiệt, sôi động, thường liên quan đến rất nhiều <span className="text-green-600 font-medium">du lịch</span>.
                      </p>
                      <p className="mt-2">
                        Tên với số {result.nameNumber.finalNumber} thường mang lại <span className="text-green-600 font-medium">những trải nghiệm tuyệt vời</span>, 
                        <span className="text-green-600 font-medium">thịnh vượng lâu dài</span>, và 
                        <span className="text-green-600 font-medium">vận may bất ngờ</span>. Con số này nuôi dưỡng <span className="text-green-600 font-medium">sức mạnh trí tưởng tượng</span> mạnh mẽ.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4 py-6 border-t border-b border-gray-200">
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).finance, "Tài chính", <Banknote className="w-5 h-5 text-green-600" />)}
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).romance, "Tình cảm", <Heart className="w-5 h-5 text-red-500" />)}
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).education, "Học vấn", <GraduationCap className="w-5 h-5 text-blue-500" />)}
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).health, "Sức khỏe", <Activity className="w-5 h-5 text-purple-500" />)}
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).family, "Gia đình", <Users className="w-5 h-5 text-orange-500" />)}
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4">
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).growth, "Phát triển", <TrendingUp className="w-5 h-5 text-teal-500" />)}
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).career_score, "Sự nghiệp", <Briefcase className="w-5 h-5 text-indigo-500" />)}
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).reputation, "Danh tiếng", <Award className="w-5 h-5 text-yellow-600" />)}
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).spirituality, "Tâm linh", <Compass className="w-5 h-5 text-cyan-600" />)}
                      {renderScoreBar(getMeaning(result.nameNumber.finalNumber).luck, "May mắn", <Zap className="w-5 h-5 text-amber-500" />)}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Điểm mạnh</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.nameNumber.finalNumber).strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Thách thức</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.nameNumber.finalNumber).challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                
                {currentTab === 'life' && (
                  <div className="space-y-6">
                    <div className="flex flex-col items-center justify-center mb-8">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-4xl font-serif font-bold text-primary">
                            {result.lifeNumber.finalNumber}
                          </span>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                          {getMeaning(result.lifeNumber.finalNumber).planet}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 w-full max-w-sm">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Các bước tính toán:</h4>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p className="font-medium">
                            Số cuộc đời: {result.lifeNumber.totalBeforeReduction} ({result.lifeNumber.steps})
                          </p>
                          {result.lifeNumber.totalBeforeReduction > 9 && (
                            <p className="font-medium">→ {reduceToPythagoras(result.lifeNumber.totalBeforeReduction).steps}</p>
                          )}
                          <p className="text-primary font-medium">Số cuộc đời của bạn là: {result.lifeNumber.finalNumber}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.lifeNumber.finalNumber).title}
                    </h3>
                    
                    <div className="text-gray-700 leading-relaxed">
                      <p>
                        Số cuộc đời {result.lifeNumber.finalNumber} kết hợp năng lượng từ số sinh và số tên của bạn. 
                        Người với số cuộc đời này có thể được ban phước với <span className="text-green-600 font-medium">những tài sản dồi dào</span>. 
                        Thành tựu và danh tiếng có thể lan rộng khắp nơi, và họ có thể sống một cuộc sống náo nhiệt, sôi động.
                      </p>
                      <p className="mt-2">
                        Họ có thể tận hưởng <span className="text-green-600 font-medium">những trải nghiệm tuyệt vời</span>, 
                        <span className="text-green-600 font-medium">thịnh vượng lâu dài</span>, và 
                        <span className="text-green-600 font-medium">vận may bất ngờ</span>. Con số này nuôi dưỡng <span className="text-green-600 font-medium">sức mạnh trí tưởng tượng</span> mạnh mẽ.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4 py-6 border-t border-b border-gray-200">
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).finance, "Tài chính", <Banknote className="w-5 h-5 text-green-600" />)}
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).romance, "Tình cảm", <Heart className="w-5 h-5 text-red-500" />)}
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).education, "Học vấn", <GraduationCap className="w-5 h-5 text-blue-500" />)}
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).health, "Sức khỏe", <Activity className="w-5 h-5 text-purple-500" />)}
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).family, "Gia đình", <Users className="w-5 h-5 text-orange-500" />)}
                    </div>
                    
                    <div className="grid grid-cols-5 gap-4">
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).growth, "Phát triển", <TrendingUp className="w-5 h-5 text-teal-500" />)}
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).career_score, "Sự nghiệp", <Briefcase className="w-5 h-5 text-indigo-500" />)}
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).reputation, "Danh tiếng", <Award className="w-5 h-5 text-yellow-600" />)}
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).spirituality, "Tâm linh", <Compass className="w-5 h-5 text-cyan-600" />)}
                      {renderScoreBar(getMeaning(result.lifeNumber.finalNumber).luck, "May mắn", <Zap className="w-5 h-5 text-amber-500" />)}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Điểm mạnh</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.lifeNumber.finalNumber).strengths.map((strength, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Thách thức</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.lifeNumber.finalNumber).challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6 mt-6">
                      <p className="italic text-gray-600 text-center">
                        Số cuộc đời kết hợp các ảnh hưởng từ số sinh và số tên của bạn, 
                        đại diện cho hướng đi tổng thể của cuộc đời.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
