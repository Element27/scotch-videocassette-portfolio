import { useRef, useState } from "react";
import { useEffect } from "react"

import BoxComponent from "./Components/BoxComponent";
import HoverTitleComponent from "./Components/HoverTitleComponent";
import { AboutIcon, ExperienceIcon, HomeIcon } from "./Components/IconComponents";
import PageLayout from "./Components/PageLayout";
// import ModalComponent from "./Components/ModalComponent";
// import Triangle from "./Components/Triangle";

function App() {

  const [screenHeight, setScreenHeight] = useState(0);
  // const [screenWidth, setScreenWidth] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  const divRef = useRef(null);

  const [hoverState, setHoverState] = useState({ about: false, experience: false, home: false });
  const [pinState, setPinState] = useState({ about: false, experience: false, home: true });
  // const [hoverBGColor, setHoverBGColor] = useState(null)
  // const [hoverTitle, setHoverTitle] = useState(null)


  useEffect(() => {
    // height and  width of screen
    // const h = window.innerHeight;
    setScreenHeight(window.innerHeight);
  }, [])

  useEffect(() => {
    const { width, height } = divRef.current.getBoundingClientRect();
    setDivWidth(width);
    setDivHeight(height);
  }, [screenHeight, divRef])



  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden ">
      <div className="w-full h-screen relative">
        <PageLayout pin={pinState.home} color="#0156FF" heading="Home" subHeading="This is home">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate minima soluta quia mollitia accusantium in accusamus, tempore veritatis enim doloremque labore eius, numquam tenetur, nihil dignissimos odit. Sunt, iste.</p>
        </PageLayout>
        <PageLayout pin={pinState.experience} color="#0156FF" heading="Experience" subHeading="This is experience">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate minima soluta quia mollitia accusantium in accusamus, tempore veritatis enim doloremque labore eius, numquam tenetur, nihil dignissimos odit. Sunt, iste.</p>
        </PageLayout>
        <PageLayout pin={pinState.about} color="#0156FF" heading="About" subHeading="This is about">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate minima soluta quia mollitia accusantium in accusamus, tempore veritatis enim doloremque labore eius, numquam tenetur, nihil dignissimos odit. Sunt, iste.</p>
        </PageLayout>
      </div>
      {/* <div className={`p-6 absolute shadow-md duration-1000 delay-300 ${pinState.home ? "opacity-100 skew-y-0 w-full h-full " : "opacity-0 -translate-y-[300%]   skew-y-[20deg] w-0 h-0"} `}>
        <h2 className="text-white font-sublima-xb text-3xl lg:text-7xl">Daniel Akinbo</h2>
        <h2 className="text-white font-sublima-xl text-2xl lg:text-4xl">This is home</h2>
      </div> */}

      {/* <div className={`p-6 absolute shadow-md duration-1000 delay-300 ${pinState.experience ? "opacity-100 skew-y-0 w-full h-full " : "opacity-0 -translate-y-[300%]   skew-y-[20deg] w-0 h-0"} `}>
        <h2 className="text-white font-sublima-xb text-3xl lg:text-7xl">Experience</h2>
        <h2 className="text-white font-sublima-xl text-2xl lg:text-4xl">This is experience</h2>
      </div>

      <div className={`p-6 absolute shadow-md duration-1000 delay-300 ${pinState.about ? "opacity-100 skew-y-0 w-full h-full " : "opacity-0 -translate-y-[300%]   skew-y-[20deg] w-0 h-0"} `}>
        <h2 className="text-white font-sublima-xb text-3xl lg:text-7xl">About</h2>
        <h2 className="text-white font-sublima-xl text-2xl lg:text-4xl">This is about</h2>
      </div> */}

      {/* <ModalComponent /> */}

      <div ref={divRef} className="absolute "
        style={{
          height: `${screenHeight}px`,
          width: `${screenHeight}px`,
          bottom: `${-divHeight / 2}px`,
          right: `${-divWidth / 2}px`,
        }}>




        <div className="relative w-full h-full bg-white rotate-45">

          <div className={`w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${pinState.about ? "bg-black" : "bg-[#0150AC]"} -rotate-90 `} >
            <BoxComponent
              color="#0150AC"
              id="about"
              onMouseEnter={() => {
                setHoverState({ about: true, experience: false, home: false });
              }}
              onMouseLeave={() => {
                setHoverState({ about: false, experience: false, home: false });
              }}
              onClick={() => setPinState({ about: !pinState.about, experience: false, home: false })}
              pin={pinState.about}
              icon={<AboutIcon />}
              title="About"
            />
          </div>

          {/* <div className=" w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#008E38] -rotate-90">
            <BoxComponent
              color="#008E38"
              id="box2"
              onMouseEnter={() => {
                setHoverState({ about: false, box2: true, experience: false, home: false });
              }}
              onMouseLeave={() => {
                setHoverState({ about: false, experience: false, home: false });
              }}
              onClick={() => setPinState({ about: false, box2: !pinState.box2, experience: false, home: false })}
              pin={pinState.box2}
            />
          </div> */}
          <div className={` w-2/3 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${pinState.experience ? "bg-black" : "bg-[#FFE639]"} -rotate-90`}>
            <BoxComponent
              color="#FFE639"
              id={"experience"}
              onMouseEnter={() => {
                setHoverState({ about: false, experience: true, home: false });
              }}
              onMouseLeave={() => {
                setHoverState({ about: false, experience: false, home: false });
              }}
              onClick={() => setPinState({ about: false, experience: !pinState.experience, home: false })}
              pin={pinState.experience}
              icon={<ExperienceIcon />}
              title="Experience"
            />
          </div>

          <div className={` w-1/3 h-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${pinState.home ? "bg-black" : "bg-[#FF4E3E]"} -rotate-90`} >
            <BoxComponent
              color="#FF4E3E"
              id={"home"}
              onMouseEnter={() => {
                setHoverState({ about: false, experience: false, home: true });
              }}
              onMouseLeave={() => {
                setHoverState({ about: false, experience: false, home: false });
              }}
              onClick={() => setPinState({ about: false, experience: false, home: !pinState.home })}
              pin={pinState.home}
              icon={<HomeIcon />}
              title="Home"
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