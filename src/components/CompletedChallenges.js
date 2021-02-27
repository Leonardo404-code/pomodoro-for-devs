import React, {useContext} from 'react';
import {ChallegeContext} from '../contexts/ChallegeContext';
import styles from '../styles/components/CompletedChallenges.module.css';


export function CompletedChallenges(){

    const {challegesCompleted} = useContext(ChallegeContext);
    


    return(
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challegesCompleted}</span>
        </div>
    )
}
