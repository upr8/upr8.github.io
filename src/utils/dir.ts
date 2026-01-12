export const getDirectionFromLang = (lang: string): 'ltr' | 'rtl' => {
  return lang === 'en' ? 'ltr' : 'rtl';
};
