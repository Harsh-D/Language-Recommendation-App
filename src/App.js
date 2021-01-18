import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [selectedGenre, setGenre] = useState("WebDev");

  const languageData = {
    WebDev: [
      {
        name: "JavaScript",
        rating: "#1"
      },
      {
        name: "Python",
        rating: "#2"
      },
      {
        name: "C#",
        rating: "#3"
      }
    ],
    MachineLearning: [
      {
        name: "Python",
        rating: "#1"
      },
      {
        name: "R",
        rating: "#2"
      },
      {
        name: "Julia",
        rating: "#3"
      }
    ],
    CompetetiveCoding: [
      {
        name: "C++",
        rating: "#1"
      },
      {
        name: "Java",
        rating: "#2"
      }
    ]
  };

  return (
    <div className="App">
      <h1 className="page-heading">
        <span role="img" aria-label="check">
          ️✅
        </span>{" "}
        Top Programming Languages
      </h1>
      <div className="page-subtext">
        Language Recommendation for different purposes
      </div>
      {Object.keys(languageData).map((item) => (
        <button
          className="btn-purpose"
          key={item + "btn"}
          onClick={() => setGenre(item)}
        >
          {item}
        </button>
      ))}
      <hr />
      <div>
        <ul className="list-items">
          {languageData[selectedGenre].map((item) => (
            <li key={item.name}>
              <div className="text-content">
                <div className="item-name">{item.name}</div>
                <div className="item-rating">{item.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
