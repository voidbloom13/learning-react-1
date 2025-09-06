import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon(props) {
  return (
    <div className="w-12 h-12 rounded-lg border-1 border-solid border-sky-400 flex items-center justify-center">
      <FontAwesomeIcon icon={props.icon} className="text-violet-400 text-2xl" />
    </div>
  )
}

export default Icon;
