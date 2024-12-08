import { MagicCard } from '@/components/ui/magic-card';
import React from 'react';
import Image from 'next/image';

import ai_assist from '../../../public/icons/ai.gif';
import resources from '../../../public/icons/resources.gif';
import progress from '../../../public/icons/progress.gif';
import projects from '../../../public/icons/projects.gif';

const FeaturesSection = () => {
	return (
        <div
        className="flex flex-col justify-center items-center gap-10 max-w-screen-lg mx-auto min-h-screen"
        id="features"
      >
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <h1 className="text-4xl font-bold">
            Designed to
            <span className="text-[#33cccc]"> Simplify </span>
            Learnings
          </h1>
          <p className="text-gray-500">
            From essential tools to advanced capabilities—this is what we offer.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <MagicCard className="p-5 font-semibold flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[45%]">
            <Image src={ai_assist} alt="" className="w-48 z-0" />
            <h2>AI-Powered Study Plan</h2>
          </MagicCard>
          <MagicCard className="p-5 font-semibold flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[45%]">
            <Image src={resources} alt="" className="w-48 z-0" />
            <h2>Curated Learning Resources</h2>
          </MagicCard>
          <MagicCard className="p-5 font-semibold flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[45%]">
            <Image src={projects} alt="" className="w-48 z-0" />
            <h2>Assignments with Projects</h2>
          </MagicCard>
          <MagicCard className="p-5 font-semibold flex flex-col justify-center items-center w-full sm:w-[48%] lg:w-[45%]">
            <Image src={progress} alt="" className="w-48 z-0" />
            <h2>Dynamic Progress Tracker</h2>
          </MagicCard>
        </div>
      </div>
      
	);
};

export default FeaturesSection;
