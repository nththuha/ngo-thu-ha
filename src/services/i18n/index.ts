import { Dictionary } from "@/types";
import en from "./en";
import vi from "./vi";

export const dictionaryList: Record<string, Dictionary> = {
  en,
  vi,
};

export const languageOptions = {
  en: "English",
  /* cspell:disable-next-line */
  vi: "Tiếng Việt",
};
