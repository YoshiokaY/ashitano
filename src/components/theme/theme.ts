import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Noto Sans JP",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
    body1: {
      fontSize: 16,
      fontWeight: "normal",
      fontFamily: "Noto Sans JP",
      letterSpacing: "0.001em",
    },
    body2: {
      fontSize: 14,
      fontWeight: "normal",
    },
    h1: {
      fontSize: 30,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 24,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: 20,
      lineHeight: 1.5,
    },
    h4: {
      fontSize: 20,
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
    },
    caption: {
      fontFamily: "Noto Sans JP",
      fontSize: "12px",
      display: "inline",
      fontWeight: "normal",
      lineHeight: "1.4",
      letterSpacing: "0.001em",
    },
  },
  palette: {
    type: "light",
    primary: {
      50: '#eef5fb',
      100: '#d4e5f5',
      200: '#b7d4ee',
      300: '#9ac2e7',
      400: '#85b5e1',
      500: '#6fa8dc',
      600: '#67a0d8',
      700: '#5c97d3',
      800: '#528dce',
      900: '#407dc5',
      A100: '#ffffff',
      A200: '#e3efff',
      A400: '#b0d3ff',
      A700: '#96c4ff',
    },
    secondary: {
      50: '#e5f4f3',
      100: '#bee4e1',
      200: '#93d3cd',
      300: '#67c1b8',
      400: '#47b3a9',
      500: '#26a69a',
      600: '#229e92',
      700: '#1c9588',
      800: '#178b7e',
      900: '#0d7b6c',
      A100: '#adfff3',
      A200: '#7affec',
      A400: '#47ffe4',
      A700: '#2dffe0',
    },
    error: {
      main: "#C93B2F",
    },
    warning: {
      main: "#9D6A20",
    },
  },
  mixins: {
  },
  props: {
    MuiTextField: {
      variant: "outlined",
    },
    MuiCheckbox: {
      color: "primary",
    },
    MuiRadio: {
      color: "primary",
    },
    MuiSwitch: {
      color: "primary",
    },
    MuiList: {
      dense: true,
    },
    MuiTable: {
      size: "small",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 360, // スマホ用
      sm: 768, // タブレット用
      md: 992, // PC用
      lg: 1400,
      xl: 1800,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          minWidth: 0,
        },
      },
    },
    MuiButton: {
      root: {
        // ボタン内アルファベット文字を大文字変換しない
        textTransform: "none",
        width: "376px",
        padding: "1em",
        boxShadow: "none",
        backgroundColor: "#dcdcdc",
      },
      contained: {
        boxShadow: "none",
        backgroundColor: "#dcdcdc",
        "&:hover": {
          boxShadow: "none",
        },
        "&.Mui-disabled": {
          color: "#fff",
          backgroundColor: "#C8C8C8",
        },
      },
      outlined: {
        padding: "1em",
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: "15px",
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: "24px",
      },
    },
    MuiPaper: {
      elevation3: {
        boxShadow: "0px 24px 24px rgba(0, 0, 0, 0.2)",
      },
      elevation2: {
        boxShadow: "00px 0px 16px rgba(0, 0, 0, 0.15)",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "13.5px 14px",
        "&[type='password']": {
          paddingRight: "56px",
        },
        "&[name='password']": {
          paddingRight: "56px",
        },
        "&[id='password']": {
          paddingRight: "56px",
        },
      },
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#C2DEE8",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#969696",
        },
      },
    },
    MuiInput: {
      underline: {
        "&:after, &:before": {
          content: "none",
        },
      },
    },
    MuiSelect: {
      select: {
        padding: "10px 12px",
        borderRadius: 4,
        "&:focus": {
          backgroundColor: "#C8C8C8",
          borderRadius: 4,
        },
      },
      icon: {
        right: 12,
      },
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "#E5F4F9",
        },
      },
      root: {
        "&.Mui-selected, &.Mui-selected:hover": {
          backgroundColor: "#fff",
        },
        "&.Mui-selected:after": {
          content: "''",
          width: 20,
          height: 14,
          position: "absolute",
          right: 13,
        },
      },
    },
  },
});

export default theme;
