import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";

const initI18next = async(language: string, ns: string) => {
  const instance = createInstance();
  await instance
    .use(initReactI18next)
    .use(resourcesToBackend((lng: string, ns: string) => import(`./locales/${lng}/${ns}.json`)))
    .init(getOptions(language, ns));
  return instance;
}
  
export async function useTranslation(lng: string, ns: string, options = {}) {
  const instance = await initI18next(lng, ns);

  return {
    t: instance.getFixedT(lng, ns),
    i18n: instance
  }
}