import React from "react";
import BallCanvas from "./Ball";
import { useMediaQuery } from "react-responsive";

const icons = [
  { src: "images/js.png", name: "JavaScript" },
  { src: "images/node.png", name: "Node.js" },
  { src: "images/ts.png", name: "TypeScript" },
  { src: "images/docker.png", name: "Docker" },
  { src: "images/nest.png", name: "NestJS" },
  { src: "images/react.png", name: "React" },
  { src: "images/tailwind.png", name: "Tailwind CSS" },
  { src: "images/mysql.png", name: "MySQL" },
  { src: "images/git.png", name: "Git" },
  { src: "images/typeorm.png", name: "TypeORM" },
  { src: "images/mongo.png", name: "MongoDB" },
  { src: "images/redux.png", name: "Redux" },
  { src: "images/express.png", name: "Express.js" },
];

const Technologies = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl font-bold text-center lg:mt-10 mb-4">
        Technologies I Work With
      </h2>
      <p className="text-center text-l  max-w-[500px] mx-auto">
        These are some of the technologies I use in my projects, including
        frameworks, programming languages, and other related tools.
      </p>
      <div className="grid grid-cols-3  md:grid-cols-4 xl:grid-cols-6 lg:gap-10  lg:mt-16">
        {icons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <BallCanvas icon={icon.src} isMobile={isMobile} />
            {!isMobile && <p className="m-0 text-center">{icon.name}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
