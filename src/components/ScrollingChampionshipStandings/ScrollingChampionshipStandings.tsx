import React from 'react';
import styles from './ScrollingChampionshipStandings.module.css';
import SimpleDriverData from '../SimpleDriverData/SimpleDriverData';

interface StandingData {
    position: number;
    countryCode: string;
    driverName: string;
    points: number;
}

interface ScrollingChampionshipStandingsProps {
    standings: StandingData[];
}


const ScrollingChampionshipStandings: React.FC<ScrollingChampionshipStandingsProps> = ({ standings }) => {
    return (
        <div className={styles['standings']}>
        {standings.map((standing, index) => (
          <SimpleDriverData
            key={index}
            position={standing.position}
            countryCode={standing.countryCode}
            driverName={standing.driverName}
            points={standing.points}
          />
        ))}
      </div>
    );
};

export default ScrollingChampionshipStandings;