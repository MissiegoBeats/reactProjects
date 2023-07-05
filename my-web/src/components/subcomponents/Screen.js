import React from "react";
import '../../styles/Screen.css';

const Screen = ({ input }) => {
  return (
    <div class="col-1 text-truncate" style={{
      flex: "1 1",
      background: "#1b1b23",
      height: "100px",
      color: "white",
      borderRadius: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 20px",
      fontSize: "30px",
      margin: "4px",
      userSelect: "none",
      boxShadow: "-1px 1px 4px 1px white",
      transition: "all 0.2s ease-in-out"
    }}>
      {input}
    </div>
  );
};

export default Screen;