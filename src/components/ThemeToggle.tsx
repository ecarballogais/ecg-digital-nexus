
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useTranslations } from '@/hooks/useTranslations';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations();
  
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center gap-2 font-corporate"
      title={theme === 'light' ? t.temaOscuro : t.temaClaro}
    >
      {theme === 'light' ? (
        <>
          <Moon size={16} />
          <span className="hidden sm:inline">{t.temaOscuro}</span>
        </>
      ) : (
        <>
          <Sun size={16} />
          <span className="hidden sm:inline">{t.temaClaro}</span>
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
