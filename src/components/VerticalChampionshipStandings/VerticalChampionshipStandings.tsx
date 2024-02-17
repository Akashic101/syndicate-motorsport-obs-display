import React from "react";
import styles from "./VerticalChampionshipStandings.module.css";
import SimpleDriverData from "../SimpleDriverData/SimpleDriverData";

interface StandingData {
  position: number;
  countryCode: string;
  driverName: string;
  points: number;
}

interface VerticalChampionshipStandingsProps {
  standings: StandingData[];
}

const VerticalChampionshipStandings: React.FC<
  VerticalChampionshipStandingsProps
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
          horizontal={false}
        />
      ))}
    </div>
  );
};

export default VerticalChampionshipStandings;
