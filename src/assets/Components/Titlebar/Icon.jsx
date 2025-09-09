import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon(props) {
  return (
    <div className="flex items-center justify-center w-12 h-12 border-solid rounded-lg cursor-pointer border-1 border-sky-400">
      <FontAwesomeIcon icon={props.icon} className="text-3xl text-violet-400" />
    </div>
  )
}