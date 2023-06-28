import {
  createStyled,
  MUIStyledCommonProps,
  createBreakpoints,
} from "@mui/system";
import { createTheme, responsiveFontSizes } from "@mui/material";
import type {} from "@mui/x-date-pickers/themeAugmentation";

export enum FontFamily {
  Primary = "'Ysabeau SC', sans-serif",
  Secondary = "Outfit, Montserrat, Helvetica, Arial, sans-serif", //TODO Set custom font
}

const basicHeadingStyles = {
  fontFamily: FontFamily.Secondary,
  fontWeight: 500,
};

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
});

let defaultTheme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: "#111",
      light: "#77AEDB",
      logo: "#FF5733",
      bg: "red",
    },
    secondary: {
      main: "#6633cc",
      light: "#845BD6",
      dark: "#47238E",
    },
    error: {
      main: "#B51010",
    },
    info: {
      main: "#7F8B8E",
    },
    success: {
      main: "#148314",
    },
    warning: {
      main: "#DD8C15",
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
    },
    background: {
      default: "#FAFAFA",
    },
    divider: "#A0A9AA",
  },
  typography: {
    fontFamily: FontFamily.Primary,
    h1: basicHeadingStyles,
    h2: basicHeadingStyles,
    h3: basicHeadingStyles,
    h4: basicHeadingStyles,
    h5: basicHeadingStyles,
    h6: basicHeadingStyles,
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
    },
    button: {
      fontFamily: FontFamily.Secondary,
      fontWeight: 600,
    },
    overline: {
      fontFamily: FontFamily.Secondary,
      fontWeight: 600,
    },
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

const _styled = createStyled({ defaultTheme });

const styled = ((component: any, config: any) => {
  config = {
    shouldForwardProp: (prop: string) => !prop.startsWith("$"),
    ...config,
  };
  return _styled(component, config);
}) as typeof _styled;

export type ThemeType = typeof defaultTheme;

export interface IStyledCommonProps extends MUIStyledCommonProps<ThemeType> {
  theme: ThemeType;
}

export { defaultTheme };

export default styled;
