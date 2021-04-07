import React, { useContext } from 'react';
import { ChallegeContext } from '../contexts/ChallegeContext';
import {ThemeContext} from '../contexts/DarkButtonContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallegeContext);
    const {isDark} = useContext(ThemeContext);

    return(
        <div className={isDark ? styles.profileContainerDark : styles.profileContainer}>
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
