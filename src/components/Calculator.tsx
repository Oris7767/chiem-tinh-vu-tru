
import { useState, useRef, useEffect } from 'react';
import { calculateNameNumber, calculateBirthPathNumber, calculateDestinyNumber } from '../utils/numerologyCalculator';
import { numberMeanings } from '../utils/data';
import { cn } from '../lib/utils';

interface CalculationResult {
  nameNumber: number;
  birthPathNumber: number;
  destinyNumber: number;
}

const Calculator = () => {
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [currentTab, setCurrentTab] = useState<'name' | 'birth' | 'destiny'>(
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
      const birthNum = calculateBirthPathNumber(
        parseInt(day),
        parseInt(month),
        parseInt(year)
      );
      const destinyNum = calculateDestinyNumber(nameNum, birthNum);
      
      setResult({
        nameNumber: nameNum,
        birthPathNumber: birthNum,
        destinyNumber: destinyNum
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
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Họ và tên đầy đủ
                </label>
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
                  Số đường đời
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
                  Số tên
                </button>
                <button
                  onClick={() => setCurrentTab('destiny')}
                  className={cn(
                    "flex-1 py-4 px-4 text-center font-medium transition-colors",
                    currentTab === 'destiny' 
                      ? "bg-primary/10 text-primary border-b-2 border-primary" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  Số định mệnh
                </button>
              </div>
              
              <div className="p-6 md:p-8">
                {currentTab === 'birth' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-serif font-bold text-primary">
                          {result.birthPathNumber}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.birthPathNumber).title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {getMeaning(result.birthPathNumber).description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Điểm mạnh</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.birthPathNumber).strengths.map((strength, index) => (
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
                          {getMeaning(result.birthPathNumber).challenges.map((challenge, index) => (
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
                        {getMeaning(result.birthPathNumber).career}
                      </p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-medium text-gray-900 mb-3">Các mối quan hệ</h4>
                      <p className="text-gray-700">
                        {getMeaning(result.birthPathNumber).relationships}
                      </p>
                    </div>
                  </div>
                )}
                
                {currentTab === 'name' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-serif font-bold text-primary">
                          {result.nameNumber}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.nameNumber).title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {getMeaning(result.nameNumber).description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Điểm mạnh</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.nameNumber).strengths.map((strength, index) => (
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
                          {getMeaning(result.nameNumber).challenges.map((challenge, index) => (
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
                
                {currentTab === 'destiny' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-4xl font-serif font-bold text-primary">
                          {result.destinyNumber}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-center">
                      {getMeaning(result.destinyNumber).title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {getMeaning(result.destinyNumber).description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 pt-2">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Điểm mạnh</h4>
                        <ul className="space-y-2">
                          {getMeaning(result.destinyNumber).strengths.map((strength, index) => (
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
                          {getMeaning(result.destinyNumber).challenges.map((challenge, index) => (
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
                        Số định mệnh kết hợp các ảnh hưởng từ số đường đời và số tên của bạn, 
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
