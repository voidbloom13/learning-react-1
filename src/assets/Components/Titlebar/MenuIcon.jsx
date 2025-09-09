import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuIcon(props) {
  return (
    <div onClick={props.toggleMenu} className="flex items-center justify-center w-12 h-12 border-solid rounded-lg cursor-pointer border-1 border-sky-400">
      <FontAwesomeIcon icon={props.icon} className={`text-violet-400 text-3xl animate-pulse transition duration-100 ${props.isOpen ? "rotate-180" : "rotate-0"}`} />
    </div>
  )
}