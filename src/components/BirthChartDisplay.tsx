
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BirthChartData } from '../pages/BirthChartPage';
import { format } from 'date-fns';
import { Earth, CalendarIcon, Clock, MapPin, Info } from 'lucide-react';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';

interface BirthChartDisplayProps {
  chartData: BirthChartData;
}

const BirthChartDisplay: React.FC<BirthChartDisplayProps> = ({ chartData }) => {
  const { t, language } = useLanguage();
  
  // Example planet positions - this would come from actual calculations in a full implementation
  const planetData = [
    { planet: 'Ascendant', position: 'Scorpio', house: 1 },
    { planet: 'Sun', position: 'Aries', house: 6 },
    { planet: 'Moon', position: 'Sagittarius', house: 2 },
    { planet: 'Mars', position: 'Gemini', house: 8 },
    { planet: 'Mercury', position: 'Aries', house: 6 },
    { planet: 'Jupiter', position: 'Cancer', house: 9 },
    { planet: 'Venus', position: 'Aries', house: 6 },
    { planet: 'Saturn', position: 'Capricorn', house: 3 },
    { planet: 'Rahu', position: 'Aries', house: 6 },
    { planet: 'Ketu', position: 'Libra', house: 12 },
  ];
  
  // Color mapping for planets
  const planetColors: Record<string, string> = {
    Ascendant: 'text-pink-600',
    Sun: 'text-amber-500',
    Moon: 'text-cyan-500',
    Mars: 'text-red-600',
    Mercury: 'text-green-500',
    Jupiter: 'text-orange-500',
    Venus: 'text-purple-500',
    Saturn: 'text-blue-800',
    Rahu: 'text-indigo-600',
    Ketu: 'text-amber-800',
  };
  
  // Create a 4x3 grid for the South Indian chart style
  const chartGrid = Array(12).fill(null).map((_, i) => {
    const houseNumber = ((i + 1) % 12) + 1;
    const planetsInHouse = planetData.filter(p => p.house === houseNumber);
    return { house: houseNumber, planets: planetsInHouse };
  });
  
  // Reorder houses for South Indian chart layout
  const southIndianOrder = [
    // Order is: top-left to bottom-right by rows
    1, 12, 11,  // First row
    2, 0, 10,   // Second row (0 is center - unused)
    3, 4, 9,    // Third row
    4, 5, 8,    // Fourth row
  ];
  
  // Abbreviate planet names for chart display
  const getPlanetAbbr = (planet: string) => {
    const abbrs: Record<string, string> = {
      'Ascendant': 'As',
      'Sun': 'Su',
      'Moon': 'Mo',
      'Mars': 'Ma',
      'Mercury': 'Me',
      'Jupiter': 'Ju',
      'Venus': 'Ve',
      'Saturn': 'Sa',
      'Rahu': 'Ra',
      'Ketu': 'Ke',
    };
    return abbrs[planet] || planet.substring(0, 2);
  };
  
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
        <h2 className="text-2xl font-semibold text-amber-800 mb-4 flex items-center">
          {t('birthChart.chartPlaceholder') || 'Birth Chart'}
          <span className="ml-2 text-sm bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
            {t('birthChart.comingSoon') || 'Coming Soon'}
          </span>
        </h2>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="max-w-3xl mx-auto">
            {/* South Indian Style Chart Grid */}
            <div className="aspect-square w-full border-2 border-amber-300 mb-6 overflow-hidden">
              <div className="grid grid-cols-3 h-full">
                {/* Row 1 */}
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">1</span>
                  {planetData.filter(p => p.house === 1).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">12</span>
                  {planetData.filter(p => p.house === 12).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">11</span>
                  {planetData.filter(p => p.house === 11).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                
                {/* Row 2 */}
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">2</span>
                  {planetData.filter(p => p.house === 2).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border-0 flex items-center justify-center text-amber-900 font-semibold">
                  <div className="text-center">
                    <div className="text-sm font-bold mb-1">D1 Janma</div>
                    <div className="text-xs opacity-70">Birth Chart</div>
                  </div>
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">10</span>
                  {planetData.filter(p => p.house === 10).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                
                {/* Row 3 */}
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">3</span>
                  {planetData.filter(p => p.house === 3).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">4</span>
                  {planetData.filter(p => p.house === 4).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">9</span>
                  {planetData.filter(p => p.house === 9).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                
                {/* Row 4 */}
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">4</span>
                  {planetData.filter(p => p.house === 4).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">5</span>
                  {planetData.filter(p => p.house === 5).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">8</span>
                  {planetData.filter(p => p.house === 8).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                
                {/* Row 5 */}
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">5</span>
                  {planetData.filter(p => p.house === 5).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">6</span>
                  {planetData.filter(p => p.house === 6).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
                <div className="border border-amber-300 p-2 text-xs relative flex flex-col">
                  <span className="text-gray-400 text-[10px] absolute top-1 left-1">7</span>
                  {planetData.filter(p => p.house === 7).map((p, i) => (
                    <span key={i} className={`${planetColors[p.planet]} font-bold text-center`}>
                      {getPlanetAbbr(p.planet)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Planet Positions Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    {t('birthChart.planetPositions') || 'Planet Positions'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Planet</TableHead>
                        <TableHead>Sign</TableHead>
                        <TableHead>House</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {planetData.map((planet, index) => (
                        <TableRow key={index}>
                          <TableCell className={`font-medium ${planetColors[planet.planet]}`}>
                            {planet.planet}
                          </TableCell>
                          <TableCell>{planet.position}</TableCell>
                          <TableCell>{planet.house}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    {t('birthChart.additionalInfo') || 'Additional Information'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-amber-800">Ascendant:</span> 
                      <span>Scorpio</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800">Moon Sign:</span> 
                      <span>Sagittarius</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800">Sun Sign:</span> 
                      <span>Aries</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800">Nakshatra:</span> 
                      <span>Mula (19)</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-amber-800">Ayana:</span> 
                      <span>Uttara-Ayana</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="text-center mt-8 text-amber-800 italic text-sm">
            <p>{t('birthChart.implementationInProgress') || 'The Vedic birth chart calculation and visualization is still under development with actual calculations coming soon.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthChartDisplay;
