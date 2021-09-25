import React, { useEffect, useState } from "react";
const EndScreen = (props) => {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/1219598.jpg")`,
      }}
    >
      <div className="title">Congratulations, you have reached the end!</div>
      <div className="title">
        {" "}
        You made ${props.profit} Can you shoot for the moon?{" "}
      </div>
      <button
        onClick={props.restart}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full replay"
      >
        REPLAY
      </button>
    </div>
  );
};
export default EndScreen;
