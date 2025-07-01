
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useTheme();
  
  return (
    <div className="flex items-center gap-1">
      <Globe size={16} className="text-carvil-steel-600" />
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className="px-2 py-1 h-8 text-xs font-corporate"
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="px-2 py-1 h-8 text-xs font-corporate"
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSelector;
