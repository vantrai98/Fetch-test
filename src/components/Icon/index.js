export default function Icon({
  width,
  height,
  margin,
  marginLeft,
  marginRight,
  marginBottom,
  marginTop,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  style,
  ...props
}) {
  const _style = {
    width,
    height,
    margin,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    ...style,
  };

  return <img style={_style} alt="icon" {...props} />;
}
