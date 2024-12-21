import { createContext } from "react";

type LocaleContextValue = [string, () => void];

const LocaleContext = createContext<LocaleContextValue>(["", () => {}]);

export default LocaleContext;
