
import PropTypes from 'prop-types';

HoverTitleComponent.propTypes = {
  hoverColor: PropTypes.string.isRequired,
  CompHoverState: PropTypes.bool.isRequired,
  // titlePin: PropTypes.bool.isRequired,
  hoverTitle: PropTypes.string.isRequired,

};

export default function HoverTitleComponent({ CompHoverState, hoverColor, hoverTitle }) {
  return (
    <div className={`absolute shadow-md duration-500 delay-300 text-sm p-4 rounded-md -rotate-45  left-8 top-28  ${CompHoverState ? "opacity-100 -translate-y-[150%] skew-y-0 " : "opacity-0 -translate-y-[300%]   skew-y-[20deg] "}`} style={{ backgroundColor: hoverColor }}>
      <p className="text-white ">{hoverTitle}</p>
    </div>
  )
}
