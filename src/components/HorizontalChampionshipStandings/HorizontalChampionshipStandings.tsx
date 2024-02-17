import React from "react";
import styles from "./HorizontalChampionshipStandings.module.css";
import SimpleDriverData from "../SimpleDriverData/SimpleDriverData";

interface StandingData {
  position: number;
  countryCode: string;
  driverName: string;
  points: number;
}

interface HorizontalChampionshipStandingsProps {
  standings: StandingData[];
}

const HorizontalChampionshipStandings: React.FC<
  HorizontalChampionshipStandingsProps
> = ({ standings }) => {
  return (
    <div className={styles["standings"]}>
      {standings.map((standing, index) => (
        <SimpleDriverData
          key={index}
          position={standing.position}
          countryCode={standing.countryCode}
          driverName={standing.driverName}
          points={standing.points}
          horizontal={true}
        />
      ))}
    </div>
  );
};

export default HorizontalChampionshipStandings;
