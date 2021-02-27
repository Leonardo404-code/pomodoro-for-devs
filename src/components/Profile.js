import React, { useContext } from 'react';
import { ChallegeContext } from '../contexts/ChallegeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const {level} = useContext(ChallegeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Leonardo404-code.png" alt="Leonardo Bispo"/>
            <div>
                <strong>Leonardo Bispo</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}</p>
            </div>
        </div>
    )
}
