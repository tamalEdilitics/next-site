import {
  bgCard,
  primaryText,
  secondaryBg,
  secondaryText,
  smallFontSize,
} from "@/lib/static/Constants";

export const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "0.5rem !important",
    borderWidth: "0px !important",
    color: state.isDisabled ? secondaryText : "var(--text-primary) !important",
    lineHeight: "1.25rem !important",
    fontSize: smallFontSize,
    cursor: "pointer !important",
    height: "40px",
    padding: "0px 8px",
    "min-height": "40px",
    background: state.isDisabled
      ? "var(--bg-secondary) !important"
      : "var(--bg-white) !important",
    "box-shadow": state.isFocused
      ? "var(--shadow-hover-color) 0px -2px 4px 0px inset"
      : state.isDisabled
      ? ""
      : "var(--shadow-color) 0px -2px 4px 0px inset",
  }),
  indicatorSeparator: (styles, state) => ({
    ...styles,
    background: state.isDisabled ? secondaryText : "",
  }),
  dropdownIndicator: (styles, state) => ({
    ...styles,
    color: state.isDisabled ? secondaryText : "",
  }),
  option: (styles, state) => ({
    // ...styles,
    cursor: "pointer",
    borderRadius: "0.5rem",
    color: primaryText,
    backgroundColor:
      state.isFocused &&
      typeof window !== "undefined" &&
      window.innerWidth > 768
        ? secondaryBg
        : bgCard,
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    padding: "8px 12px",
    boxSizing: "border-box",
    boxShadow: state.isSelected && "#8360c3 0px -2px 4px 0px inset",
    overflow: "hidden",
  }),
  menu: (provided) => ({
    ...provided,
    "border-radius": "0.5rem",
    padding: "0.5rem ",
    "background-color": bgCard,
    "box-shadow": "var(--shadow-color) 0px -2px 6px 0px inset ",
    "z-index": "1000",
  }),
  menuList: (provided) => ({
    ...provided,
    "border-radius": "0.5rem",
    padding: 0,
    fontSize: smallFontSize,
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  input: (styles) => ({
    ...styles,
    color: primaryText,
    whiteSpace: "nowrap",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "var(--text-secondary)",
    whiteSpace: "nowrap",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: primaryText,
  }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: secondaryBg,
      borderRadius: "0.3rem",
    };
  },
  multiValueLabel: (styles) => {
    return {
      ...styles,
      color: primaryText,
    };
  },
};
