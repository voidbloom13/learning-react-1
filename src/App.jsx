import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

import TitleBar from './assets/Components/Titlebar/TitleBar';

function App() {
  return (
    <div className="bg-gray-950 w-screen h-screen overflow-hidden">
      <TitleBar />
      <ul className="text-sky-200 ml-12 mt-12">
        <li>&gt; When menu is expanded, &lt;Menu&gt; should be on the left.</li>
        <li>&gt; Add permissions to an array for the user. Map through the array to add &lt;Icon&gt; to toolbar</li>
        <li>&gt; When icon is pressed for tool, a window pops up that resembles hyprland.</li>
        <li>&gt; Make the tool window have a window bar on top with an X in the corner to close the tool. Clicking the icon again should also close the tool.</li>
      </ul>
    </div>
  )
}

export default App
