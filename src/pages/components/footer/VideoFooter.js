import React from "react";
import "./videofooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function videofooter() {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@Wesley Pereira</h3>
        <p>Descrição do Video</p>
        <div className="VideoFooter__music">
          {/*Icones para serem usados no React*/}
          {/*https://mui.com/material-ui/material-icons/*/}
          <MusicNoteIcon/>
          <div className="VideoFooterMusic__text">
              <p>Título da Música</p>
          </div>
        </div>
      </div>
      <img
        className="VideoFooter__record"
        alt="Imagem de um vinil girando"      
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"
      />
    </div>
  );
}

export default videofooter;
