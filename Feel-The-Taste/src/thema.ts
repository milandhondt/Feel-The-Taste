import { extendTheme } from "@chakra-ui/react";

const thema = extendTheme({
  colors: {
    customColor: "#FFFDE7",
  },
  styles: {
    global: {
      body: {
        bg: "customColor",
        color: "gray.800",
      },
      '*': {
        fontSize: 'lg',
      },
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Roboto', sans-serif",
  },
});

export default thema;
