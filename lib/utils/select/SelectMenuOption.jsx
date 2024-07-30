const SelectMenuOption = (props) => {
  const { children, getStyles, innerRef, innerProps } = props;
  return (
    <div
      ref={innerRef}
      style={{
        ...getStyles("option", props),
      }}
      {...innerProps}
    >
      <p className="scrollbar-hide overflow-scroll whitespace-nowrap">
        {children}
      </p>
    </div>
  );
};

export default SelectMenuOption;
