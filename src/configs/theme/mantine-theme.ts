import {
  CSSVariablesResolver,
  Checkbox,
  Input,
  PasswordInput,
  Switch,
  Text,
  createTheme,
} from "@mantine/core";
import classes from "./theme.module.scss";

const labelStyle = {
  fontSize: "1rem",
  fontWeight: "500",
  color: "var(--input-label-color)",
};

const textStyle = {
  fontSize: "1rem",
  fontWeight: "500",
  color: "var(--mantine-color-black)",
};

// https://mantine.dev/styles/css-variables/#css-variables-resolver
export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--main-color": theme.colors.primary[7],
    "--input-label-color": theme.colors.primary[4],
    "--input-placeholder-color": theme.colors.primary[2],
    "--border-color": "#ebebeb",
    "--highlight-color": theme.colors.primary[2],
    "--input-highlight-color": theme.colors.primary[2],
    "--hover-background-color": theme.colors.primary[3],
    "--navbar-active-background-color": theme.colors.primary[5],
  },
  light: {},
  dark: {},
});

export const theme = createTheme({
  fontFamily: "Quicksand",
  headings: {
    fontWeight: "900",
    sizes: {
      h1: {
        fontSize: "2.6rem",
      },
    },
  },
  components: {
    Text: Text.extend({
      styles: {
        root: textStyle,
      },
    }),
    Checkbox: Checkbox.extend({
      styles: {
        label: labelStyle,
      },
    }),
    InputWrapper: Input.Wrapper.extend({
      styles: {
        label: labelStyle,
      },
    }),
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),
    PasswordInput: PasswordInput.extend({
      classNames: {
        input: classes.input,
        innerInput: classes.innerInput,
      },
    }),
    Switch: Switch.extend({
      styles: {
        label: labelStyle,
      },
    }),
  },
  primaryColor: "primary",
  defaultRadius: "sm",
  colors: {
    // https://mantine.dev/colors-generator/?color=F21616
    error: [
      "#ffe9e9",
      "#ffd1d1",
      "#fba0a1",
      "#f76d6d",
      "#f34141",
      "#f22625",
      "#f21616",
      "#d8070b",
      "#c10008",
      "#a90003",
    ],
    primary: [
      "#e2f8ff",
      "#cdecff",
      "#9ed6fc",
      "#6bbff9",
      "#42acf6",
      "#28a0f4",
      "#139af5",
      "#0086db",
      "#0077c5",
      "#0067af",
    ],
  },
});
