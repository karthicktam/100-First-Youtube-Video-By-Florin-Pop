import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>
        Florin's First Youtube Video{" "}
        <span role="img" aria-label="">
          🤩
        </span>
      </h2>

      <iframe
        title="FLorin"
        width="560px"
        height="315"
        src="https://www.youtube.com/embed/NpPrEWdnofU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
