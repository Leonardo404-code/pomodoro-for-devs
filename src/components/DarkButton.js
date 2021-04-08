import React from 'react';
import { ThemeContext } from '../contexts/DarkButtonContext';
import styles from '../styles/components/DarkButton.module.css';
import { useContext } from 'react';

export function DarkButton() {

    const {ChangeTheme} = useContext(ThemeContext);

    return(
        <>
            <label className={styles.switch}>
                <input type="checkbox" onChange={ChangeTheme} />
                <span className={styles.slider}/>
            </label>
        </>
    )
}
