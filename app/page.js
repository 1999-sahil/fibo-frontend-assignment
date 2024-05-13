"use client";

import GoalCard from "./components/goals-check-cards/GoalCard";
import Navbar from "./components/navbar/Navbar";
import ProgressBar from "./components/progress-bar/ProgressBar";

export default function Home() {
  return (
    <main className="w-full min-w-[350px] h-auto bg-[#212121]">
      <ProgressBar />
      <div className="">
        <GoalCard />
      </div>
    </main>
  );
}
