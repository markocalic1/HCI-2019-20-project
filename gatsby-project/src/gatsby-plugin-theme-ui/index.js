import { tailwind } from "@theme-ui/presets"

const theme = {
  ...tailwind,
  sizes: {
    ...tailwind.sizes,
    container: "1024px",
    logo: "44px",
    navBar: "65px",
    navLinkBorder: "3px",
  },
  colors: {
    ...tailwind.colors,
    accent: "#f50057",
  },
  fontWeights: {
    ...tailwind.fontWeights,
    heading: "500",
  },
  styles: {
    ...tailwind.styles,
    blockquote: {
      borderLeft: theme => `5px solid ${theme.colors.accent}`,
      paddingLeft: 2,
      marginLeft: 0,
      marginRight: 0,
      fontStyle: "italic",
    },
    h1: {
      ...tailwind.styles.h1,
      py: 4,
    },
    h2: {
      ...tailwind.styles.h2,
      py: 3,
    },
    h3: {
      ...tailwind.styles.h3,
      py: 1,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 2,
      boxShadow: theme => `0 0 8px ${theme.colors.indigo[2]}`,
    },
  },
  shadows: {
    header: theme =>
      `0 4px 6px ${theme.colors.indigo[1]}, 0 0 1px rgba(1,0,0,.1)`,
  },
  borders: {
    header: theme => `1px solid ${theme.colors.indigo[2]}`,
  },
}

export default theme