export const selectThemes = {
  theme: (theme) => ({
    ...theme,
    // borderRadius: 0,
    colors: {
      ...theme.colors,
      primary25: "#7763BF80",
      primary: "#7763BF",
    },
  }),
};
