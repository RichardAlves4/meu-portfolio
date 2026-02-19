import React from 'react'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newtLanguage = currentLanguage.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(newtLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className='btn secondaryTextTheme secondaryContainerTheme tertiaryborderTheme'
    >
      {currentLanguage.startsWith('pt') ? 'EN' : 'BR'}
    </button>
  );
}