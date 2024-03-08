import { CursorHover } from "./IconComponents";

import PropTypes from 'prop-types';

BoxComponent.propTypes = {
  color: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default function BoxComponent({ color, onMouseEnter, onMouseLeave, className }) {

  // function mouseEnter() {
  //   () => console.log(id, "enter")
  //   hoverTitle(title)
  //   hoverColor(color)
  // }

  // function mouseOut() {
  //   hoverTitle(null)
  //   hoverColor(null)

  // }

  return (
    <div className={`group relative w-full h-full flex justify-center ${className} `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-fit h-fit bg-white p-2 m-6 rounded-full absolute rotate-45  group-hover:animate-bounce ">
        <CursorHover className="text-sm group-hover:text-lg" style={{ color }} />
      </div>
      <p className="text-[0px] group-hover:text-sm font-sublima-xbi">Click to pin screen</p>
    </div>
  )
}
