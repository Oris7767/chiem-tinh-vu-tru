
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BirthChartData } from '../pages/BirthChartPage';
import { format } from 'date-fns';
import { Earth, CalendarIcon, Clock, MapPin } from 'lucide-react';

interface BirthChartDisplayProps {
  chartData: BirthChartData;
}

const BirthChartDisplay: React.FC<BirthChartDisplayProps> = ({ chartData }) => {
  const { t, language } = useLanguage();

  // This is a placeholder for the actual birth chart calculation and display
  // In a future implementation, this would integrate with VedAstro logic
  
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">
          {t('birthChart.birthDetails') || 'Birth Details'}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                {t('birthChart.date') || 'Date'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {format(chartData.date, 'PPP')}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {t('birthChart.time') || 'Time'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {chartData.time}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {t('birthChart.location') || 'Location'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>{chartData.location}</div>
              <div className="text-sm text-muted-foreground mt-1">
                {chartData.latitude.toFixed(4)}°, {chartData.longitude.toFixed(4)}°
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Earth className="h-4 w-4" />
                {t('birthChart.timezone') || 'Timezone'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {chartData.timezone}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="border-t border-amber-200 pt-6">
        <h2 className="text-2xl font-semibold text-amber-800 mb-4">
          {t('birthChart.chartPlaceholder') || 'Birth Chart'}
        </h2>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <div className="flex justify-center items-center h-64">
            <div className="text-amber-800">
              <div className="mb-4 text-5xl">🔮</div>
              <p className="text-xl font-semibold">
                {t('birthChart.comingSoon') || 'Coming Soon'}
              </p>
              <p className="mt-2 text-amber-700 max-w-md mx-auto">
                {t('birthChart.implementationInProgress') || 'The Vedic birth chart calculation and visualization is still under development. Check back soon!'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthChartDisplay;
