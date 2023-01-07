export default function Box({ style, children, ...props }) {
  const _style = {
    ...props,
    ...style,
  };

  return <div style={_style} children={children} />;
}
