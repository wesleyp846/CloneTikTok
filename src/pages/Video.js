import React, { useRef, useState } from "react";
import "./video.css";

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
        src="https://v16-webapp-prime.tiktok.com/video/tos/maliva/tos-maliva-ve-0068c800-us/d0bc13229eef4e10b630773b26278f72/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0|0|0|0&br=2458&bt=1229&cs=0&ds=3&ft=_RwJrBiTq8Zmotg7Cc_vjqy_8AhLrus&mime_type=video_mp4&qs=0&rc=OGc3ZDg2NDM2OjNoNWloO0BpM3A0bnNucnl4dTMzZjczM0BeYTFeMGM1XjAxYzMyMmI1YSNoMjBuMi4uczZfLS0xMTZzcw==&btag=80000&expire=1680159096&l=202303300051303E65F8E9AD833A84A784&ply_type=2&policy=2&signature=1659d74ae740e6c35322b0a3a04f748a&tk=tt_chain_token"
      ></video>
    </div>
  );
}

export default Video;
