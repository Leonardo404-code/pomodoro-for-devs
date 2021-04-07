import React, {useContext} from 'react';
import {ChallegeContext} from '../contexts/ChallegeContext';
import {ThemeContext} from '../contexts/DarkButtonContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
    const {challegesCompleted} = useContext(ChallegeContext);
    const {isDark} = useContext(ThemeContext);

    return(
        <div className={isDark ? styles.completedChallengesContainerDark : styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challegesCompleted}</span>
        </div>
    )
}
