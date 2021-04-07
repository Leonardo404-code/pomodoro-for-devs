import React, {useContext} from 'react';
import styles from '../styles/pages/Home.module.css';
import {ThemeContext} from '../contexts/DarkButtonContext';
export default function Container({children}){
    
    const {isDark} = useContext(ThemeContext);

    return(
        <main className={isDark ? styles.superContainerDark : styles.superContainer}>
            {children}
        </main>
    )
}