

export default function Triangle(props) {

  // eslint-disable-next-line react/prop-types
  const width = props.width || 32;
  // eslint-disable-next-line react/prop-types
  const height = props.height || 24;

  const viewBoxWidth = width + 8;
  const viewBoxHeight = height + 8;
  // const points = `${width + 8},${height + 8} 8,${height + 8} 8,8`;
  // const points = `8,8 ${width + 8},8 8,${height + 8}`;
  const points = `8,  ${height + 8} ${width + 8},  ${height + 8} ${width + 8},  8`;
  // ${height + 8} 8,

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      {...props}
    >
      <polygon points={points} fill="currentColor" />
    </svg>
  );
}


