import colors from './colors';

const baseTheme = {
  primary: colors.primary,
  secondary: colors.secondary,
  danger: colors.error,
  black: colors.black,
  divider: colors.divider,
  medium: colors.medium,
  strong: colors.strong,
  background: colors.background,
  white: colors.surface
};

const dark = {
  ...baseTheme,
  text: colors.surface,
  background: colors.strong,
  border: colors.divider
};

const light = {
  ...baseTheme,
  text: colors.black,
  background: colors.background,
  border: colors.surface
};

export default { light, dark };
