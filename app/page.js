"use client";

import GoalCard from "./components/goals-check-cards/GoalCard";
import Navbar from "./components/navbar/Navbar";
import ProgressBar from "./components/progress-bar/ProgressBar";

export default function Home() {
  return (
    <main className="w-full min-w-[350px] h-full bg-[#212121] px-4 py-2 flex flex-col gap-[24px]">
      <ProgressBar />
      <div className="">
        <GoalCard />
      </div>
    </main>
  );
}
