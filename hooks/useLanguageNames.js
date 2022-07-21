/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { get } from "lib/web";
import svSe from "public/intl/language/sv-SE.json";

const languageNames = {
  "sv-SE": svSe,
};

export default function useLanguageNames(locale) {
  const [list, setList] = useState(languageNames[locale] || svSe);
  const { basePath } = useRouter();

  async function loadData(locale) {
    const { ok, data } = await get(`${basePath}/intl/language/${locale}.json`);

    if (ok) {
      languageNames[locale] = data;
      setList(languageNames[locale]);
    } else {
      setList(svSe);
    }
  }

  useEffect(() => {
    if (!languageNames[locale]) {
      loadData(locale);
    } else {
      setList(languageNames[locale]);
    }
  }, [locale]);

  return list;
}
