
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BirthChartForm from '../components/BirthChartForm';
import BirthChartDisplay from '../components/BirthChartDisplay';
import { Badge } from '@/components/ui/badge';

export interface BirthChartData {
  date: Date;
  time: string;
  latitude: number;
  longitude: number;
  timezone: string;
  location: string;
}

const BirthChartPage = () => {
  const { t } = useLanguage();
  const [chartData, setChartData] = useState<BirthChartData | null>(null);
  
  const handleCalculate = (data: BirthChartData) => {
    console.log('Calculating chart with data:', data);
    setChartData(data);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-amber-100">
      <NavBar />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-bold text-amber-900">
                  {t('birthChart.title') || 'Vedic Birth Chart'}
                </h1>
                <Badge variant="outline" className="bg-amber-600 text-white border-amber-700">
                  {t('birthChart.comingSoon') || 'Coming Soon'}
                </Badge>
              </div>
              <p className="text-lg text-amber-800">
                {t('birthChart.subtitle') || 'Calculate your Vedic astrology birth chart based on your birth details'}
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
              <BirthChartForm onCalculate={handleCalculate} />
            </div>
            
            {chartData && (
              <div className="bg-white rounded-lg shadow-xl p-6 mt-8">
                <BirthChartDisplay chartData={chartData} />
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BirthChartPage;
