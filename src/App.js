import React, { useState } from "react";
import "./App.css";

const data = [
  {
    name: "Search Engines",
    url: ["https://www.google.com", "https://www.bing.com"],
    backgroundColor: "#0096c7",
  },
  {
    name: "Leetcode",
    url: ["https://leetcode.com/problemset/"],
    backgroundColor: "#f4a261",
  },
  {
    name: "GFG",
    url: ["https://www.geeksforgeeks.org/problem-of-the-day"],
    backgroundColor: "#1a7431",
  },
  {
    name: "Youtube",
    url: ["https://www.youtube.com/"],
    backgroundColor: "#f94144",
  },
  {
    name: "Gmail",
    url: ["https://mail.google.com/"],
    backgroundColor: "#f2bac9",
  },
  {
    name: "Github",
    url: ["https://github.com/"],
    backgroundColor: "#979dac",
  },
  {
    name: "Google Drive",
    url: ["https://drive.google.com/drive/"],
    backgroundColor: "#aaf683",
  },
];

const App = () => {
  const [lists, setLists] = useState(data);
  const openTabs = (url) => {
    for (const link of url) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="App">
      <h3>Choose your App List</h3>
      <div className="lists">
        {lists &&
          lists.map((item, index) => {
            // Added index as second argument
            return (
              <button
                key={index} // Added key prop
                className="button"
                style={{ backgroundColor: item.backgroundColor }}
                onClick={() => {
                  openTabs(item.url);
                }}
              >
                {item.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default App;
