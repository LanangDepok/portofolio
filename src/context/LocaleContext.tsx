import { createContext, useCallback, useMemo, useState } from "react";

type LocaleContextValue = [string, () => void];

const LocaleContext = createContext<LocaleContextValue>(["", () => {}]);

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<string>(
    localStorage.getItem("locale") || "en"
  );

  const handleLocale = useCallback(() => {
    const newLocale = locale === "en" ? "id" : "en";
    localStorage.setItem("locale", newLocale);
    setLocale(newLocale);
  }, [locale]);

  const localeContextValue: [string, () => void] = useMemo(() => {
    return [locale, handleLocale];
  }, [locale, handleLocale]);

  return (
    <LocaleContext.Provider value={localeContextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export { LocaleProvider, LocaleContext };
