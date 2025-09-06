import React, {useState} from "react";
import Icon from './Icon'
import Menu from "./Menu";

function TitleBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-1/12 bg-linear-to-b from-slate-950 to-violet-950 border-b-solid border-b-zinc-800 border-b-3 flex items-center justify-between">
      <img className="h-full cursor-pointer" src="../../../../src/assets/Images/voidbloom-title.png" />
      <div className="mr-4 flex items-center justify-start gap-2">
        <Menu toggleMenu={() => setIsOpen(!isOpen)} icon="fa-solid fa-caret-left" isOpen={isOpen} />
        <div className={`icon-container flex items-center justify-center gap-2 ${isOpen ? "w-auto" : "w-0 hidden"}`}>
          <Icon icon="fa-solid fa-calculator" />
          <Icon icon="fa-solid fa-list" />
        </div>
      </div>
    </div >
  )
}

export default TitleBar;
