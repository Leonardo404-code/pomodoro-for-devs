import React, { useContext } from 'react';
import { ChallegeContext } from '../contexts/ChallegeContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallegeBox.module.css';


export function ChallegeBox(){
    const {activeChallege, resetChallege, completeChallege} = useContext(ChallegeContext);

    const {resetCountdown} = useContext(CountDownContext);

    function handleChallegeSuccess(){
        completeChallege();
        resetCountdown();
    }

    function handleChallegeFailed(){
        resetChallege();
        resetCountdown();
    }

    return(
        <div className={styles.challegeBoxContainer}>
            { activeChallege ? (
             <div className={styles.challegeActive}>   
                <header>Ganhe {activeChallege.amount} xp</header>

                <main>
                    <img src="icons/body.svg"/>
                    <strong>Novo Desafio</strong>
                    <p>{activeChallege.description}</p>
                </main>

                <footer>
                    <button 
                    type="button" 
                    className={styles.challegeFailedButton}
                    onClick={handleChallegeFailed}
                    >
                        Falhei
                    </button>
                    <button 
                    type="button"
                    className={styles.challegeSucessButton}
                    onClick={handleChallegeSuccess}
                    >
                        Completei
                    </button>
                </footer>
             </div>
            ) : (
            <div className={styles.challegeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de Level completando um desafio
                </p>
            </div>
            )}
        </div>
    )
}
