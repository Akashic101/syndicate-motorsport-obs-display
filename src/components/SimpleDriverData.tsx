import React from 'react';
import styles from './SimpleDriverData.module.css';
import ReactCountryFlag from 'react-country-flag';

interface SimpleDriverDataProps {
    position: number;
    countryCode: string;
    driverName: string;
    points: number;
}

const SimpleDriverData: React.FC<SimpleDriverDataProps> = ({ position, countryCode, driverName, points }) => {
    return (
        <div className={styles['angled-rectangle']}>
            <p className={styles['position']}>{position}</p>
            <ReactCountryFlag
                className={styles['countryflag']}
                svg
                countryCode={countryCode}
                style={{
                    fontSize: '2em',
                }}
                aria-label={countryCode}
            />
            <p className={styles['drivername']}>{driverName}</p>
            <p className={styles['points']}>{points}P</p>
        </div>
    );
};

export default SimpleDriverData;