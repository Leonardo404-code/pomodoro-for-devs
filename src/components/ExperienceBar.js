import React, { useContext } from 'react';
import { ChallegeContext } from '../contexts/ChallegeContext';
import { ThemeContext } from '../contexts/DarkButtonContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

     const {currentExperience, experienceToNextLevel} = useContext(ChallegeContext)
     const { isDark } = useContext(ThemeContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <header className={isDark ? styles.experienceBarDark : styles.experienceBar}>

            <span>0 xp</span>
            <div>
              <div style={{width: `${percentToNextLevel}%`}} /> 
              
              <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                {currentExperience} xp
                </span>
            </div>

            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}
