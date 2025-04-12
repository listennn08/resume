export const fallbackLng = "zh-TW";
export const languages = [fallbackLng, "en"];
export const cookieName = "i18next";
export const defaultNS = "translation";

export function getOptions(language = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    lng: language,
    fallbackLng,
    ns,
    defaultNS,
    fallbackNS: defaultNS,
  };
}