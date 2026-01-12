import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Prototypes = () => {
  return (
    <div
      className="flex flex-col items-center overflow-hidden justify-center py-20 relative z-[5]"
      id="prototypes"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Prototypes
      </h1>
      <div className="h-full w-full flex flex-row justify-center flex-wrap gap-10 px-10">
        <Link href="https://www.figma.com/proto/1XB4pUye0vajxeiBZywNXd/One-Medical-System?node-id=170-1149&t=ojyge3DMprjdj0qi-1&scaling=scale-down&content-scaling=fixed&page-id=170%3A1148&starting-point-node-id=170%3A1149" target="_blank">
          <ProjectCard
            src="/front-desk.png"
            title="OneMed — Unified Hospital Management Platform."
            description="A centralized hospital operations dashboard that provides real-time visibility into rooms, patients, staff availability, appointments, and daily activities—enabling administrators and front-desk staff to manage hospital workflows efficiently from one place."
          />
        </Link>

        <Link href="https://www.figma.com/proto/BqL2AAVklMjysE1CbC2tng/Monster-fit?node-id=323-5205&t=4rg7AC0MqgrkMMu9-1&scaling=scale-down&content-scaling=fixed&page-id=323%3A5202&starting-point-node-id=323%3A5205" target="_blank">
          <ProjectCard
            src="/monster.png"
            title="MonsterFit — Your Personal Fitness Command Center."
            description="MonsterFit is an intelligent fitness and nutrition platform designed to help you train smarter, eat better, and track progress in one unified experience. From daily workouts and meal planning to performance insights and progress analytics, MonsterFit keeps everything you need to reach your fitness goals in one place."
          />
        </Link>
      </div>
    </div>
  );
};

export default Prototypes;
