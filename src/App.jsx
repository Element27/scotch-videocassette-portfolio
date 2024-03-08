import { useRef, useState } from "react";
import { useEffect } from "react"

import BoxComponent from "./Components/BoxComponent";
import HoverTitleComponent from "./Components/HoverTitleComponent";
// import Triangle from "./Components/Triangle";

function App() {

  const [screenHeight, setScreenHeight] = useState(0);
  // const [screenWidth, setScreenWidth] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  const divRef = useRef(null);

  const [hoverState, setHoverState] = useState({ box1: false, box2: false, box3: false, box4: false });
  const [pinState, setPinState] = useState({ box1: false, box2: false, box3: false, box4: false });
  // const [hoverBGColor, setHoverBGColor] = useState(null)
  // const [hoverTitle, setHoverTitle] = useState(null)


  useEffect(() => {
    // get height and  width of screen
    // const h = window.innerHeight;
    setScreenHeight(window.innerHeight);
    // setScreenHeight(window.innerHeight > window.innerWidth ? window.innerHeight : window.innerWidth);
    // setScreenHeight(`${h}px`);
    // setScreenWidth(window.innerWidth);

    //get the diagonal of the screen
    // const d = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    // setScreenHeight(d);

    // get the width and height of the contianerRef


  }, [])

  useEffect(() => {
    const { width, height } = divRef.current.getBoundingClientRect();
    setDivWidth(width);
    setDivHeight(height);
  }, [screenHeight, divRef])



  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden ">
      <div className="p-6">
        <h2 className="text-white font-sublima-xb text-3xl lg:text-7xl">Daniel Akinbo</h2>
        <h2 className="text-white font-sublima-xl text-2xl lg:text-4xl">Frontend Developer</h2>
      </div>

      <div ref={divRef} className="absolute "
        style={{
          height: `${screenHeight}px`,
          width: `${screenHeight}px`,
          bottom: `${-divHeight / 2}px`,
          right: `${-divWidth / 2}px`,
        }}>

        {/* {hoverState && */}
        {/* <div className={`absolute shadow-md duration-300 delay-300 text-sm p-4 rounded-md -rotate-45  left-8 top-28  ${hoverState ? "opacity-100 -translate-y-[150%] skew-y-0 " : "opacity-0 -translate-y-[300%]   skew-y-[20deg] "}`} style={{ backgroundColor: hoverBGColor }}> */}
        {/* <div className="absolute -translate-y-[150%] duration-500 skew-y-0 shadow-md text-sm p-4 rounded-md -rotate-45  left-8 top-28" style={{ backgroundColor: hoverBGColor }}> */}
        {/* <p className="text-white ">{hoverTitle}</p> */}
        {/* </div> */}
        {/* } */}
        <HoverTitleComponent CompHoverState={hoverState.box1} hoverColor={"#0150AC"}
          hoverTitle={"Blue"} />
        <HoverTitleComponent CompHoverState={hoverState.box2} hoverColor={"#008E38"}
          hoverTitle={"Green"} />
        <HoverTitleComponent CompHoverState={hoverState.box3} hoverColor={"#FFE639"}
          hoverTitle={"Yellow"} />
        <HoverTitleComponent CompHoverState={hoverState.box4} hoverColor={"#FF4E3E"}
          hoverTitle={"Red"} />

        <div className="relative w-full h-full bg-white rotate-45">

          <div className=" w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0150AC] -rotate-90 " >
            <BoxComponent
              color="#0150AC"
              id="box1"
              onMouseEnter={() => {
                setHoverState({ box1: true, box2: false, box3: false, box4: false });
                // setHoverTitle("Blue");
                // setHoverBGColor("#0150AC")
              }}
              onMouseLeave={() => {
                setHoverState({ box1: false, box2: false, box3: false, box4: false });
                // setHoverTitle(null);
                // setHoverBGColor(null)
              }}
              onClick={() => setPinState({ box1: !pinState.box1, box2: false, box3: false, box4: false })}
              pin={pinState.box1}
            />
          </div>

          <div className=" w-3/4 h-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#008E38] -rotate-90">
            <BoxComponent
              color="#008E38"
              id="box2"
              onMouseEnter={() => {
                setHoverState({ box1: false, box2: true, box3: false, box4: false });
                // setHoverTitle("Green");
                // setHoverBGColor("#008E38")
              }}
              onMouseLeave={() => {
                setHoverState({ box1: false, box2: false, box3: false, box4: false });
                // setHoverTitle(null);
                // setHoverBGColor(null)
              }}
              onClick={() => setPinState({ box1: false, box2: !pinState.box2, box3: false, box4: false })}
              pin={pinState.box2}
            />
          </div>
          <div className=" w-2/4 h-2/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFE639] -rotate-90">
            <BoxComponent
              color="#FFE639"
              id={"box3"}
              onMouseEnter={() => {
                setHoverState({ box1: false, box2: false, box3: true, box4: false });
                // setHoverTitle("Yellow");
                // setHoverBGColor("#FFE639")
              }}
              onMouseLeave={() => {
                setHoverState({ box1: false, box2: false, box3: false, box4: false });
                // setHoverTitle(null);
                // setHoverBGColor(null)
              }}
              onClick={() => setPinState({ box1: false, box2: false, box3: !pinState.box3, box4: false })}
              pin={pinState.box3}
            />
          </div>

          <div className=" w-1/4 h-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4E3E] -rotate-90" >
            <BoxComponent
              color="#FF4E3E"
              id={"box4"}
              onMouseEnter={() => {
                setHoverState({ box1: false, box2: false, box3: false, box4: true });
                // setHoverTitle("Red");
                // setHoverBGColor("#FF4E3E")
              }}
              onMouseLeave={() => {
                setHoverState({ box1: false, box2: false, box3: false, box4: false });
                // setHoverTitle(null);
                // setHoverBGColor(null)
              }}
              onClick={() => setPinState({ box1: false, box2: false, box3: false, box4: !pinState.box4 })}
              pin={pinState.box4}
            />
          </div>

        </div>

      </div>


    </div>
  )
}

export default App

// #000000
// #0150AC
// #008E38
// #FFE639
// #FF4E3E
// #2D2D2D