import { CursorHover, EntypoPin } from "./IconComponents";

import PropTypes from 'prop-types';

BoxComponent.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  pin: PropTypes.bool.isRequired
};

export default function BoxComponent({ color, onMouseEnter, onMouseLeave, className, onClick, pin }) {

  return (
    <div className={`group relative cursor-pointer  w-full h-full flex justify-center ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* {!pin && */}
      <div className={`p-2 m-6 rounded-full absolute rotate-45 w-fit h-fit ${pin ? `bg-[${color}] group-hover:animate-none` : " bg-white group-hover:animate-bounce  "} `}>
        <CursorHover className="text-sm group-hover:text-[0px] duration-500" style={{ color }} />

        <EntypoPin className={`text-[0px] duration-500 group-hover:text-lg group-hover:animate-bounce ${pin ? "text-white group-hover:animate-none text-lg" : `text-[${color}]`}`} style={{ color: pin ? "white" : color }} />
      </div>
      {/* } */}
      {/* {pin &&  */}
      {/* } */}
      <p className={`duration-500 ${pin ? "text-xs" : "text-[0px] group-hover:text-xs "} font-sublima-xbi`}>{`Click to ${pin ? "unpin" : "pin"} screen`}</p>
    </div>
  )
}
