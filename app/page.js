"use client";
import { useState } from "react";
import GoalCard from "./components/goals-check-cards/GoalCard";
import ProgressBar from "./components/progress-bar/ProgressBar";

export default function Home() {

  const [progress, setProgress] = useState(0);

  const handleProgressChange = (newProgress) => {
    setProgress(newProgress);
  }

  return (
    <main className="w-full min-w-[350px] h-full bg-[#212121] px-4 py-2 flex flex-col gap-[24px]">
      <ProgressBar progress={progress} />
      <div className="">
        <GoalCard onProgressChange={handleProgressChange} />
      </div>
    </main>
  );
}
