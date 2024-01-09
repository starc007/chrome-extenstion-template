import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";
import Popup from "./popup";

//  "content_scripts": [
//     {
//       "matches": ["<all_urls>"],
//       "js": ["contentScript.js"]
//     }
//   ]
//  "chrome_url_overrides": {
//     "newtab": "newTab.html"
//   },

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  console.log(appContainer);
  root.render(<Popup />);
}

init();
