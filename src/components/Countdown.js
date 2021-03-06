import { useContext } from 'react';

import {CountDownContext} from '../contexts/CountDownContext';

import {ThemeContext} from '../contexts/DarkButtonContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown(){

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown} = useContext(CountDownContext);

    const {isDark} = useContext(ThemeContext);
    
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
        <div>
        <div className={isDark ? styles.countdownContainerDark : styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        {hasFinished ? (
            <button
            className={`${styles.countdownButton}`} 
            disabled
            >
            Ciclo encerrado
        </button>
        ): (
            <>
            {isActive ? (
            <button 
            type="button" 
            className={`${styles.countdownButton} 
            ${styles.countdownButtonActive}`} 
            onClick={resetCountdown}>
            Abandonar Ciclo
        </button>
        ) : (
            <button 
            type="button" 
            className={styles.countdownButton} 
            onClick={startCountdown}>
                Iniciar Ciclo
            </button>
        )}
            </>
        )}
    </div>
    )
}
