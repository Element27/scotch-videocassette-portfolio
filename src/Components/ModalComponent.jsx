import { EntypoPin } from "./IconComponents";

export default function ModalComponent({ onClick, color }) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30 w-11/12 h-4/5 mx-auto bg-black/95 overflow-hidden rounded-md border-blue-700 border p-4 ">
      <div className="text-white w-full h-full flex justify-between">
        <p>Modal</p>
        <EntypoPin onClick={onClick} style={{ color }} className="cursor-pointer" />
      </div>
    </div>
  )
}
