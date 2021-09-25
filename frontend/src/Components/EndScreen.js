import React, { useEffect, useState } from "react";

const EndScreen = (props) => {
  const price = ((props.last.High+props.last.Low)/2).toFixed(2)
  const asset = ((props.share*price)+props.money).toFixed(2)
  const increase = (asset-props.begin).toFixed(2)
  const total = ((increase/props.begin)*100).toFixed(2)
  var word = increase < 0 ? "lost":"made";
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/1219598.jpg")`,
      }}
    >
      <div className="title">Congratulations, you have reached the end!</div>
      <div className="title">
        You have ${asset}. You {word} ${increase} Can you shoot
        for the moon?{" "}
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
