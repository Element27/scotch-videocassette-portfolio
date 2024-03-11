import './pageLayout.css'
export default function PageLayout({ children, color, pin, title, description, heading,
  subHeading }) {
  return (
    <div className={`p-6 absolute shadow-md duration-700 delay-300 ${pin ? "opacity-100 skew-y-0 w-full  max-h-screen" : "opacity-0 -translate-x-[300%]   skew-y-[20deg] w-0 h-0"} overflow-auto`} style={{ msScrollbarTrackColor: color }}>
      <div className="relative">

        <div className={`relative shadow-md duration-700 delay-500 ${pin ? "opacity-100 skew-y-0 " : "opacity-0 -translate-y-[300%]   skew-y-[20deg] w-0 h-0"} `}>
          <h2 className={`text-white font-sublima-xb text-3xl lg:text-7xl `}>{heading}</h2>
          <p className="text-white font-sublima-xl text-2xl lg:text-4xl">{subHeading}</p>
        </div>
        <div className={`text-white delay-1000 duration-300 ${pin ? "opacity-100" : "opacity-0"}`}>
          <p>children should go here</p>
          {children}
        </div>
      </div>
    </div>
  )
}
