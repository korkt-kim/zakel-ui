import { createTheme } from "@zakel-ui/core";

const theme = createTheme({
  colors: {
    red: {
      100: "orange",
    },
    blue: "blue",
    green: "green",
    asdf: "skyblue"
  },

  fontSizes: {
    x: "100px",
    y: {
      z: 200,
    },
  },
  fonts: {
    a: "font a",
  },
  fontWeights: {
    super_bold: "bold",
    super_bold_2: 900,
  },
  letterSpacings: {
    space_200: ".2rem",
    space_300: ".3rem",
  },
  lineHeights: {
    sx: 1.5,
    s: 2,
  },
  components: {

    Button: {
      baseStyle: {
        color: "skyblue",
      },
      variants: {
        primary: {
          bg: "#576ddf",
          borderRadius: "14px",
          p: "16px 32px",
          color: "white",
          fontWeight: 600,
          _hover: {
            opacity: 0.8,
          },
        },
      },
    },
    Box: {
      baseStyle: {
        color: "red",
      },
      variants: {
        action: {
          bg: "pink",
        },
        action2: {
          bg: "red",
        },
      },
    },
    Flex: {
      baseStyle: {
        backgroundColor: "red",
        color: "gray",
      },
      variants: {
        action: {
          color: "orange",
        },
      },
    },
  },
  breakpoints: {
    sm: "1000px",
  },
});

type UserTheme = typeof theme;

declare module "@zakel-ui/core" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface Theme extends UserTheme {}
}

export default theme;
