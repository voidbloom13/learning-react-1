import React, {useState} from "react";
import Icon from './Icon'
import MenuIcon from "./MenuIcon";

export default function TitleBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full h-1/12 bg-linear-to-b from-slate-950 to-violet-950 border-b-solid border-b-zinc-800 border-b-3">
      <img className="h-full cursor-pointer" src="../../../../src/assets/Images/voidbloom-title.png" />
      <div className="flex flex-row-reverse items-center justify-center gap-2 mr-4">
        <MenuIcon toggleMenu={() => setIsOpen(!isOpen)} icon="fa-solid fa-caret-left" isOpen={isOpen} />
      <div className={`icon-container flex items-center justify-center gap-2 transition duration-100 origin-right ${isOpen ? "scale-x-100" : "scale-x-0"}`}>
          <Icon icon="fa-solid fa-calculator" />
          <Icon icon="fa-solid fa-list" />
        </div>
      </div>
    </div >
  )
}