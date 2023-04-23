import React from 'react'
import document from '../../../assets/document.svg';
import infoCircle from '../../../assets/information-circle 1.svg'
import playCircle from '../../../assets/play-circle.svg';
import videoCam from '../../../assets/videocam.svg';
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import InfoIcon from "@mui/icons-material/Info";
const TopicDetails = () => {
  return (
    <div className="topic-detail-container">
      <div className="topic-type-container active-topic-type-container">
        <InfoIcon />
        <p>
          <b>SESSION PLAN</b>
        </p>
      </div>
      <div className="topic-type-container">
        <PlayCircleOutlineOutlinedIcon />
        <p>PRE-WATCH VIDEOS</p>
      </div>
      <div className="topic-type-container">
        <VideoCameraFrontOutlinedIcon />
        <p>SESSION RECORDING</p>
      </div>
      <div className="topic-type-container">
        <FileOpenOutlinedIcon />
        <p>REFERENCES</p>
      </div>
    </div>
  );
}

export default TopicDetails