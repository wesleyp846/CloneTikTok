import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handlleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handlleStart}
        loop
        src="  https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
      ></video>
      {/*Side Bar*/}
      {/*footer*/}
      <VideoFooter />
    </div>
  );
}

export default Video;
