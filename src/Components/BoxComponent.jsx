import { EntypoPin } from "./IconComponents";

import PropTypes from 'prop-types';

BoxComponent.propTypes = {
  color: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  pin: PropTypes.bool.isRequired,
  icon: PropTypes.element.isRequired,
};

export default function BoxComponent({ color, onMouseEnter, onMouseLeave, className, onClick, pin, icon, title }) {

  return (
    <div className={`group relative cursor-pointer  w-full h-full flex justify-center ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* {!pin && */}
      <div className={`flex items-center justfy-center gap-x-1 py-2 px-4 my-9 mx-6 rounded-full absolute group-hover:animate-bounce  w-fit h-fit ${pin ? `bg-[${color}] ` : " bg-white  "} `}>
        <div className=" group-hover:text-[0px] text-lg duration-500 " style={{ color: pin ? "white" : color }}>{icon}</div>

        <EntypoPin className={`text-[0px] duration-500 group-hover:text-lg group-hover:animate-bounce `} style={{ color: pin ? "white" : color }} />
        <p className={`text-md font-sublima-xbi`}>{title}</p>
      </div>
      {/* } */}
      {/* {pin &&  */}
      {/* } */}
      {/* <p className={`duration-500 ${pin ? "text-xs" : "text-[0px] group-hover:text-xs "} font-sublima-xbi`}>{`Click to ${pin ? "unpin" : "pin"} screen`}</p> */}
    </div>
  )
}
