import React from "react";
import "./videofooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function videofooter({name, description, music}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="VideoFooter__music">
          {/*Icones para serem usados no React*/}
          {/*https://mui.com/material-ui/material-icons/*/}
          <MusicNoteIcon/>
          <div className="VideoFooterMusic__text">
              <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="VideoFooter__record"
        alt="Imagem de um vinil girando"      
        src="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/vinil.png?alt=media&token=95dd7b93-7976-446f-944b-5ea6a4fb85c9"
      />
    </div>
  );
}

export default videofooter;
