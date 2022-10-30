import "../src/style/common.scss"

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#eeeeee",
      },
      {
        name: "dark",
        value: "#333333",
      },
    ],
    grid: {
      cellSize: 16,
      opacity: 0.2,
      cellAmount: 5,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
};