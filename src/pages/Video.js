import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import Videosidebar from "./components/footer/sidebar/Videosidebar";

function Video({likes, messages, shares, name, description, music, url}) {
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
        src={url}
      ></video>
      {/*Side Bar*/}
      <Videosidebar 
        likes={likes} 
        messages={messages} 
        shares={shares} 
      />
      {/*footer*/}
      <VideoFooter
      name={name}
      description={description}
      music={music}
      />
    </div>
  );
}

export default Video;
