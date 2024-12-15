import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Search, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { LanguageSelector } from '../components/LanguageSelector';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from '../hooks/useTranslation';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-8 sm:py-12 bg-[#F4F5FA]">
      <LanguageSelector
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />
      
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2B3E89] mb-4 sm:mb-6 leading-tight">
          {t.home.title}
        </h1>
        <p className="text-lg sm:text-xl text-[#64748b] mb-8 sm:mb-12 leading-relaxed">
          {t.home.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button
            size="lg"
            onClick={() => navigate('/new-complaint')}
            className="flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all w-full sm:w-auto bg-[#2B3E89] text-white hover:bg-[#212C6C]"
          >
            <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            <span>{t.home.newComplaint}</span>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/track-complaint')}
            className="flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all w-full sm:w-auto bg-[#C62F3C] text-white hover:bg-[#A22731]"
          >
            <Search className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            <span>{t.home.trackComplaint}</span>
          </Button>
        </div>

        {/* Features */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#EAF0FA] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <FileText className="h-6 w-6 text-[#2B3E89]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#2B3E89]">{t.home.features.submission.title}</h3>
            <p className="text-[#64748b]">{t.home.features.submission.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#FDE8E9] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Search className="h-6 w-6 text-[#C62F3C]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#C62F3C]">{t.home.features.tracking.title}</h3>
            <p className="text-[#64748b]">{t.home.features.tracking.description}</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#EAF0FA] rounded-lg flex items-center justify-center mb-4 mx-auto">
              <MessageSquare className="h-6 w-6 text-[#2B3E89]" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[#2B3E89]">{t.home.features.communication.title}</h3>
            <p className="text-[#64748b]">{t.home.features.communication.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
