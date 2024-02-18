import React from "react";
import styles from "./LiveDriverData.module.css";

interface LiveDriverDataProps {
  position: number;
  profilepicture: string;
  driverName: string;
  interval: string;
  lastLap: string;
}

const LiveDriverData: React.FC<LiveDriverDataProps> = ({
  position,
  profilepicture,
  driverName,
  interval,
  lastLap
}) => {
  return (
    <div className={styles["angled-rectangle"]}>
      <p className={styles["position"]}>{position}</p>
      <img className={styles["profile-picture"]} src={profilepicture} width="20px" height="20px"
      />
      <p className={styles["drivername"]}>{driverName}</p>
      <p className={styles["interval"]}>{interval}</p>
      <p className={styles["last-lap"]}>{lastLap}</p>
    </div>
  );
};

export default LiveDriverData;
