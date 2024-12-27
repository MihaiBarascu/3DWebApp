import React from "react";

const About = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-purple-950 via-purple-700 to-purple-950 text-white py-16"
      aria-labelledby="about-heading"
    >
      <div className="text-left px-6 max-w-2xl mx-auto">
        <h2
          id="about-heading"
          className="text-2xl font-bold mb-8 text-white tracking-wide drop-shadow-lg"
        >
          About Me
        </h2>
        <p
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}
          className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100 drop-shadow-md"
        >
          Hello, I'm Mihai, a passionate developer with a strong enthusiasm for
          both <span className="font-bold">front-end</span> and{" "}
          <span className="font-bold">back-end</span> development. I enjoy
          working on all aspects of web development, from building intuitive
          user interfaces to creating powerful, efficient server-side systems.
        </p>
        <p
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}
          className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200 drop-shadow-md"
        >
          Throughout my journey as a developer, I’ve realized that nothing is
          more rewarding than seeing a functional product come to life.
          Overcoming challenges, whether it's debugging tricky issues or solving
          unexpected roadblocks, gives me a deep sense of accomplishment and
          fuels my passion for coding.
        </p>
        <p
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}
          className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200 drop-shadow-md"
        >
          Currently, I am focused on improving my knowledge in full-stack
          development, continually learning and applying my skills in real-world
          projects. I'm excited to keep progressing and to face new challenges
          that come my way.
        </p>
      </div>
    </section>
  );
};

export default About;
