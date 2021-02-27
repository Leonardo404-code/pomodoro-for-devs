import {createContext, useEffect, useState} from 'react'
import challeges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/LevelUpModal';

export const ChallegeContext = createContext({});

export function ChallegesProvider({children, ...rest}){



    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challegesCompleted, setChallegesCompleted] = useState(rest.challegesCompleted ?? 0)
    const [activeChallege, setActiveChallege] = useState(null); 
    const [isLevelModalOpen, setIsLvelUpModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challegesCompleted', String(challegesCompleted));
    }, [level, currentExperience, challegesCompleted])

    function levelUp(){
        setLevel(level + 1)
        setIsLvelUpModalOpen(true);
    }

    function closeLevelUpModal(){
        setIsLvelUpModalOpen(false);
    }

    function startNewChallege(){
        const randomChallegeIndex = Math.floor(Math.random() * challeges.length)
        const challege = challeges[randomChallegeIndex];
        setActiveChallege(challege)

        new Audio('/notification.mp3').play();


        if(Notification.permission === 'granted'){
            new Notification('Novo desafio ', {
                body: `Valendo ${challege.amount} xp`
            })
        }
    }

    function resetChallege(){
        setActiveChallege(null)
    }

    function completeChallege(){
        if(!activeChallege) return;

        const {amount} = activeChallege;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();

            setCurrentExperience(finalExperience);
            setActiveChallege(null);
            setChallegesCompleted(challegesCompleted + 1);
        }
    }

    return(
        <ChallegeContext.Provider value={{
            level, 
            currentExperience, 
            challegesCompleted,
            experienceToNextLevel,
            levelUp,
            activeChallege,
            startNewChallege,
            resetChallege,
            completeChallege,
            closeLevelUpModal,
            }}>
            {children}
            {isLevelModalOpen && <LevelUpModal />}
            
        </ChallegeContext.Provider>
    )
} 
