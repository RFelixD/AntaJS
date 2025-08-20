export const simple = {
  style: "simple",
  theme: {
    sea: {
      0: "sea",
      1: "#2b7fff",
      2: "#51a2ff",
      3: "#8ec5ff",
      4: "#bedbff",
      5: "#dbeafe",
      dark: "#1c398e",
    },
    windy: {
      0: "windy",
      1: "#00a6f4",
      2: "#00bcff",
      3: "#74d4ff",
      4: "#b8e6fe",
      5: "#dff2fe",
      dark: "#024a70",
    },
  },
  neutralSet: {
    stone: "#79716b",
    slate: "#737373",
    zinc: "#71717b",
    pure: "#f9fafb",
    dark: "#101828",
  },
  globalCSS: {
    transition: "all 0.1s ease-in-out",
  },
  components: {
    card: {
      host: {
        margin: "1rem",
      },
      header: {
        padding: "1rem",
        fontSize: "2rem",
      },
      body: {
        padding: "1rem",
      },
      footer: {
        padding: "1rem",
      },
    },
    button: {
      host: {
        margin: "0.5rem",
      },
      button: {
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        fontFamily: "Arial",
      },
    },
  },
};
