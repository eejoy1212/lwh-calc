// ThemeContext.tsx
import { createContext, Context } from 'react';

export type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: (index:number) => void;
};

const ThemeContext: Context<ThemeContextType> = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export default ThemeContext;