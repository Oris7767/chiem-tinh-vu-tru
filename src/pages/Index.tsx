
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Calculator from '../components/Calculator';
import Footer from '../components/Footer';
import { numberMeanings } from '../utils/data';
import { useLanguage } from '../context/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <Calculator />
        
        <section id="about" className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-900/10 text-amber-700 mb-4">
                {t('nav.about')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
                {t('about.title')}
              </h2>
              <p className="text-lg text-amber-800">
                {t('about.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="glass-card rounded-xl p-6 md:p-8 space-y-6">
                <h3 className="text-2xl font-bold text-amber-900">{t('about.origins.title')}</h3>
                <p className="text-amber-900 leading-relaxed">
                  {t('about.origins.p1')}
                </p>
                <p className="text-amber-900 leading-relaxed">
                  {t('about.origins.p2')}
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6 md:p-8 space-y-6">
                <h3 className="text-2xl font-bold text-amber-900">{t('about.difference.title')}</h3>
                <p className="text-amber-900 leading-relaxed">
                  {t('about.difference.p1')}
                </p>
                <p className="text-amber-900 leading-relaxed">
                  {t('about.difference.p2')}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="meanings" className="py-24 bg-gradient-to-br from-amber-900/5 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-900/10 text-amber-700 mb-4">
                {t('nav.meanings')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
                {t('meanings.title')}
              </h2>
              <p className="text-lg text-amber-800">
                {t('meanings.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={num} className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-amber-600/10 flex items-center justify-center">
                      <span className="text-2xl font-serif font-bold text-amber-700">{num}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-amber-900">{getNumberTitle(num)}</h3>
                      <p className="text-sm text-amber-700">{getPlanetName(num)}</p>
                    </div>
                  </div>
                  <p className="text-amber-800">
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
  const meaning = numberMeanings.find(m => m.number === num);
  return meaning ? meaning.title : "";
};

const getPlanetName = (num: number): string => {
  const meaning = numberMeanings.find(m => m.number === num);
  return meaning ? meaning.planet : "";
};

const getNumberShortDescription = (num: number): string => {
  const meaning = numberMeanings.find(m => m.number === num);
  return meaning ? meaning.description.split('.')[0] + '.' : "";
};

export default Index;
