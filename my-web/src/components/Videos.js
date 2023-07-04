import React from "react";
import '../styles/Videos.css';

function Videos() {
  return (
    <div className="videos">
      <iframe
        src="https://www.youtube.com/embed/UsR08cY8k0A"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <iframe
        src="https://www.youtube.com/embed/lsYiPIGwehc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <iframe
        src="https://www.youtube.com/embed/ga3wfFtloH0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  );
}

export default Videos;