import styles from "./videoControls.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const VideoControls = (props) => {
  const [play, setPlay] = useState(false);

  const handleClick = ()=> {
    setPlay(!play);
  }

  return (
    <div className={styles.controlBar}>
      <FontAwesomeIcon className={styles.playPause} onClick={handleClick} icon={play ? faPause : faPlay} />
      <div className={styles.progressBar}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
};

export default VideoControls;
