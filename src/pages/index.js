import React from 'react';

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

import { CompletedChallenges } from '../components/CompletedChallenges';

import { Countdown } from '../components/Countdown';

import { ExperienceBar } from '../components/ExperienceBar';

import { Profile } from '../components/Profile';

import {CountDownProvider} from '../contexts/CountDownContext'

import { ChallegeBox } from '../components/ChallengeBox';

import {DarkButton} from '../components/DarkButton';

import { ChallegesProvider } from '../contexts/ChallegeContext';

import { ThemeContextProvider } from '../contexts/DarkButtonContext';

import Container from '../components/Container';

export default function Home(props) {

  return (
    <ThemeContextProvider>
        <Container>
        <ChallegesProvider 
        level={props.level}
        currentExperience={props.currentExperience}
        challegesCompleted={props.challegesCompleted}
        >
          <div className={styles.container}>

            <Head>
              <title>Inicio | Move.it</title>
            </Head>

            <ExperienceBar />
            <div className={styles.darkButtonContainer}>
              <DarkButton />
            </div>
            
            <CountDownProvider>

              <section>

                <div>
                  <Profile />

                  <CompletedChallenges />
                  
                  <Countdown/>
                </div>

                <div>

                  <ChallegeBox />

                </div>

              </section>
              
            </CountDownProvider>
          </div>
        
        </ChallegesProvider>
        </Container>
    </ThemeContextProvider>
  )
}


export const getServerSideProps = async (ctx) => {

  const {level, currentExperience, challegesCompleted}  = ctx.req.cookies;

  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challegesCompleted: Number(challegesCompleted),
    }
  }
}
