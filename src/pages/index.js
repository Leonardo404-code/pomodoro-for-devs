import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import {CountDownProvider} from '../contexts/CountDownContext'
import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'
import { ChallegeBox } from '../components/ChallengeBox';
import { ChallegesProvider } from '../contexts/ChallegeContext';

export default function Home(props) {

  return (
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
