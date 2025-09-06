import React from "react";
import Icon from './Icon'
import Menu from "./Menu";

function TitleBar() {
  return (
    <div className="w-full h-1/12 bg-linear-to-b from-slate-950 to-violet-950 border-b-solid border-b-zinc-800 border-b-3 flex items-center justify-between">
      <img className="h-full cursor-pointer" src="../../../../src/assets/Images/voidbloom-title.png" />
      <div className="icon-container mr-4 flex items-center justify-start gap-2">
        <Menu icon="fa-solid fa-caret-left" />
        <Icon icon="fa-solid fa-calculator" />
        <Icon icon="fa-solid fa-list" />
      </div>
    </div >
  )
}

export default TitleBar;
