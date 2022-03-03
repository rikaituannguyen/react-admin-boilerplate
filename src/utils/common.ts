export const getPreferredLanguage = () => {
  // get language preference from local storage
  let preferredLanguage = localStorage.getItem('language');
  if (!preferredLanguage) {
    const browserLanguage = navigator.language;
    if (browserLanguage && browserLanguage === 'en') {
      preferredLanguage = 'en';
    } else {
      preferredLanguage = 'ja';
    }
  }
  return preferredLanguage;
};
