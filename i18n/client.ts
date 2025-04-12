"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationI18next,
} from "react-i18next";
import { useCookies } from "react-cookie";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions, languages, cookieName } from "./settings";

const runsOnServerSide = typeof window === "undefined";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend((lng: string, ns: string) => import(`./${lng}/${ns}.json`)))
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ["path", "htmlTag", "cookie", "navigator"],
    },
    preload: runsOnServerSide ? languages : []
  });


export function useTranslation(lng: string, ns: string, options?: {}) {
  const [cookies, setCookies] = useCookies([cookieName]);
  const ret = useTranslationI18next(ns, options);
  const { i18n } = ret;
  if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
    useEffect(() => {
      if (activeLng === i18n.resolvedLanguage) return;
      setActiveLng(i18n.resolvedLanguage);
    }, [i18n.resolvedLanguage]);

    useEffect(() => {
      if (lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
      }
    }, [lng]);

    useEffect(() => {
      if (cookies.i18next === lng) return;
      setCookies(cookieName, lng, { path: "/" });
    }, [lng, cookies.i18next, setCookies]);
  }

  return ret;
}