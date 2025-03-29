import { extendTheme } from "@chakra-ui/react";

const thema = extendTheme({
  colors: {
    customColor: "#e6e6e6",
  },
  styles: {
    global: {
      body: {
        bg: "customColor",
      },
      '*': {
        fontSize: 'lg',
      },
    },
  },
  fonts: {
    heading: "'Avenir', 'Arial', 'sans-serif'",
    body: "'Avenir', 'Arial', 'sans-serif'"
  },
});

export default thema;
