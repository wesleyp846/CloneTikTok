import React, { useState } from "react";
import "./videosidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function Videosidebar() {
  const [liked, setLiked] = useState(false);

  function handdleLike() {
    setLiked(!liked);
  }

  return (
    <div className="videosidebar">
      <div className="videosidebar__opitons" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? 300 + 1 : 300}</p>
      </div>
      <div className="videosidebar__opitons">
        <ChatIcon fontSize="large" />
        <p>200</p>
      </div>
      <div className="videosidebar__opitons">
        <ShareIcon fontSize="large" />
        <p>100</p>
      </div>
    </div>
  );
}

export default Videosidebar;
