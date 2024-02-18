import React from "react";
import styles from "./TotalLiveDriverData.module.css";
import LiveDriverData from "../LiveDriverData/LiveDriverData";

interface StandingData {
  position: number;
  driverName: string;
  profilepicture: string;
  interval: string;
  lastLap: string;
}

interface TotalLiveDriverDataProps {
  standings: StandingData[];
}

const TotalLiveDriverData: React.FC<
TotalLiveDriverDataProps
> = ({ standings }) => {
  return (
    <div className={styles["standings"]}>
      {standings.map((standing, index) => (
        <LiveDriverData
          key={index}
          position={standing.position}
          driverName={standing.driverName}
          profilepicture={standing.profilepicture}
          interval={standing.interval}
          lastLap={standing.lastLap}        />
      ))}
    </div>
  );
};

export default TotalLiveDriverData;
