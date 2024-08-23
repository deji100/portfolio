import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link"

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center overflow-hidden justify-center py-20 relative z-[5]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-row justify-center flex-wrap gap-10 px-10">
        <Link href="https://amorserv.com/" target="_blank">
          <ProjectCard
            src="/portfolio.png"
            title="AmorServ Website"
            description="An IT Solutions company website integrated with Hubspot Calender. Web and mobile responsive website. Built with Next.js, Redux Toolkit, framer motions and some great libraries"
          />
        </Link>

        <Link href="https://projectinfo.io/" target="_blank">
          <ProjectCard
            src="/portfolio1.png"
            title="Project Info (CUSMIT)"
            description="A SaaS product capable of managing the process of project and service delivery end-to-end. This tool will be utilized by Amorserv internal administrators responsible for delivering on IT Project and Services. Web and mobile responsive web app. Built with Reactjs, Redux Toolkit, framer motions and some great libraries."
          />
        </Link>

        <Link href="https://amorservtalents.com/" target="_blank">
          <ProjectCard
            src="/talents.png"
            title="AmorServ Talent Website"
            description="AmorServ Talent website showcasing Africa Tech talents. Web and mobile responsive web app. Built with Reactjs, Redux Toolkit and some great libraries."
          />
        </Link>

        <Link href="https://www.thefiberopticacademy.com/" target="_blank">
          <ProjectCard
            src="/foa.png"
            title="The Fiber Optic Academy"
            description="Amorserv Client's website. Web and mobile responsive website. Built with Next js and some great libraries."
          />
        </Link>

        <Link href="/">
          <ProjectCard
            src="/port.png"
            title="Portfolio"
            description="A Portfolio describing who I am, my skills and projects. Web and mobile responsive website. Built with Next.js, tailwind css, framer motions and some great libraries."
          />
        </Link>

        <Link href="https://software.amorservsolutions.com/" target="_blank">
          <ProjectCard
            src="/solutions.png"
            title="AmorServ Solutions Landing Page"
            description="Solutions landing page integrated with Hubspot Calender. Web and mobile responsive landing page. Built with React js, framer motion and some great libraries."
          />
        </Link>

        <Link href="https://360-therapy.amorservtech.net/" target="_blank">
          <ProjectCard
            src="/360.png"
            title="360 Talk Therapy"
            description="Amorserv Client's website. Web and mobile responsive website. Built with React js and some great libraries."
          />
        </Link>

        <Link href="https://imac.amorservtech.com/" target="_blank">
          <ProjectCard
            src="/imac.png"
            title="AmorServ Imac Landing Page"
            description="Imac landing page integrated with Hubspot Calender. Web and mobile responsive landing page. Built with React js, framer motion and some great libraries."
          />
        </Link>

        <Link href="https://structured-cabling.amorservtech.com/" target="_blank">
          <ProjectCard
            src="/structured.png"
            title="AmorServ Structured Cabling Landing Page"
            description="Structured Cabling landing page integrated with Hubspot Calender. Web and mobile responsive landing page. Built with React js, framer motion and some great libraries."
          />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
