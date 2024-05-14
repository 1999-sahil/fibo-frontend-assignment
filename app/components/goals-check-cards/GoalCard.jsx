import React, { useEffect, useState } from 'react';
import Card from './Card';
import { cardsInfo } from '@/app/constants';
import SwipeAll from '../swipe-all/SwipeAll';
import Graph from '../graph/Graph';
import Image from 'next/image';

function GoalCard({ onProgressChange }) {

    const [goals, setGoals] = useState(cardsInfo.map((goal) => (
        { ...goal, isChecked: false })));
    const [allGoalsTracked, setAllGoalsTracked] = useState(false);
    const [progressData, setProgressData] = useState([]);

    // Calculate progress based on checked goals
    const totalGoals = goals.length;

    const completedGoals = goals.filter((goal) => goal.isChecked).length;

    const progress = (completedGoals / totalGoals) * 100;

    // Function to toggle individual goal tracking
    const handleCheck = (index) => {
        const newGoals = [...goals];
        newGoals[index].isChecked = !newGoals[index].isChecked;
        setGoals(newGoals);
        setAllGoalsTracked(newGoals.every((goal) => goal.isChecked));
    };

    // Function to handle tracking all goals
    const handleTrackAllGoals = () => {
        const allGoalsTracked = goals.map((goal) => ({ ...goal, isChecked: true }));
        setGoals(allGoalsTracked);
        setAllGoalsTracked(true);
    };

    // Function to handle untracking all goals
    const handleUntrackAllGoals = () => {
        const allGoalsUntracked = goals.map((goal) => ({ ...goal, isChecked: false }));
        setGoals(allGoalsUntracked);
        setAllGoalsTracked(false);
    };

    // Passing data from child to parent.
    useEffect(() => {
        onProgressChange(progress);
        // Update progress data
        setProgressData(prevData => [...prevData, { date: new Date().toLocaleDateString(), percentage: progress }]);
    }, [progress, onProgressChange]);

    return (
        <div className='min-w-[312px] h-[475px] w-full flex flex-col gap-[16px]'>
            {/* heading */}
            <div className='w-full h-[28px] flex justify-between'>
                <h2 className='w-[96px] h-[11px] font-dmsans font-medium text-[16px] leading-[20.83px] text-[#ebe9e8]'>
                    Today&apos;s Goal
                </h2>
                <div className='w-[36px] h-[28px]'>
                    <Image src="/heart.gif" alt='' width={36} height={28} unoptimized={true} />
                </div>
            </div>

            {/* cards */}
            <div className='flex flex-col gap-[10px]'>
                {goals.map((item, i) => (
                    <div key={i}>
                        <Card
                            title={item.title}
                            img={item.img}
                            bgColor={item.checkBoxColor}
                            isChecked={item.isChecked}
                            onCheck={() => handleCheck(i)}
                        />
                    </div>
                ))}
            </div>

            {/* swipe all */}
            <div className='w-full flex items-center justify-center'>
                <SwipeAll
                    onSwipe={allGoalsTracked ? handleUntrackAllGoals : handleTrackAllGoals}
                    allGoalsTracked={allGoalsTracked}
                />
            </div>

            {/** Graph Component */}
            <div className='w-full flex items-center justify-center'>
              <Graph progressData={progressData} />
            </div>
        </div>
    );
}

export default GoalCard;
