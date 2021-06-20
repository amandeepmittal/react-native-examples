import { useContext } from 'react';

import { theme } from '../constants';
import { ThemeContext } from '../contexts/ThemeProvider';

const useAppearance = () => {
  const { mode } = useContext(ThemeContext);

  let newMode = mode === 'dark' ? 'dark' : 'light';
  const selectedTheme = theme[newMode];

  return { ...selectedTheme };
};

export default useAppearance;
