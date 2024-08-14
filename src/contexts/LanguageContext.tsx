import { dictionaryList } from "@/services/i18n";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface LanguageProviderProps {
  children: ReactNode;
}

export interface LanguageContextType {
  language: string;
  dictionary: Record<string, string>;
  onChangeLanguage?: (selected: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: localStorage.__LANGUAGE__ || "en",
  dictionary: dictionaryList.vi,
});

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const language = localStorage.__LANGUAGE__ || "en";
    if (language in dictionaryList) {
      setLanguage(language);
    }
  }, []);

  const onChangeLanguage = useCallback((selected: string) => {
    if (selected in dictionaryList) {
      localStorage.__LANGUAGE__ = selected;
      setLanguage(selected);
    }
  }, []);

  const provider: LanguageContextType = useMemo(() => {
    return {
      language,
      dictionary: {
        ...dictionaryList[language],
      },
      onChangeLanguage,
    };
  }, [language, onChangeLanguage]);

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}
