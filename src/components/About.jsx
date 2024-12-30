import { Card } from "primereact/card"; // Importing the PrimeReact Card component

const About = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-r flex flex-col justify-center from-blue-800 via-indigo-700 to-purple-900 text-slate-600 py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center  ">
        <Card
          title="About Me"
          className="shadow-2xl bg-transparent p-6  lg:max-w-xl ml-auto  col-span-2 lg:col-span-1  

          hover:scale-110
          
          hover:bg-indigo-900 duration-1000 lg:hover:translate-x-1/4"
        >
          <p className="text-md lg:text-lg leading-relaxed mb-6 text-gray-100 ">
            I&apos;m a developer with experience in both front-end and back-end.
            I manage the entire process for both layers, creating user
            experiences and building server-side systems.
          </p>
          <p className="text-md lg:text-lg leading-relaxed mb-6 text-gray-200">
            Throughout my journey as a developer, I’ve realized that nothing is
            more rewarding than seeing a functional product come to life.
            Overcoming challenges, whether it&apos;s debugging tricky issues or
            solving unexpected roadblocks, gives me a deep sense of
            accomplishment and fuels my passion for coding.
          </p>
        </Card>

        <Card
          title="Most Recent Project"
          subTitle="Unified Product Data Import System"
          className="shadow-2xl bg-transparent p-6 max-w-full  col-span-3  lg:col-span-2 mx-auto lg:max-w-6xl
           hover:scale-110
          
          hover:bg-indigo-900 duration-700 lg:hover:-translate-x-1/4"
        >
          <p className="text-md lg:text-lg leading-relaxed mb-6 text-gray-200">
            For this project, my role was to develop both the backend and the
            frontend of a system that enables users to import and export product
            data in various formats and define the structure of exported data.
            This system is particularly useful for online e-commerce platforms
            where products come from multiple suppliers and need to be
            standardized into a unified format.
          </p>

          <p className="text-md lg:text-lg leading-relaxed mb-6 text-gray-200">
            I implemented a role and permission-based system that allows users
            to have different access levels. Additionally, I developed full
            access management functionality, enabling admins to manage user
            profiles, assign roles, and control permission levels, ensuring that
            each user only has access to the relevant parts of the system.
          </p>

          <p className="text-md lg:text-lg leading-relaxed mb-6 text-gray-200">
            Moreover, I added support for dynamically creating new import types,
            providing users with the flexibility to define custom import
            templates that can be reused for various product data formats. I
            implemented functionality for dynamically mapping columns, setting
            data types, saving, and exporting product data in CSV format. I also
            implemented a revision system that enables admins to track and
            review changes made to the system. This includes recording
            modifications to user profiles, roles, permissions, and import
            types, ensuring an audit trail for enhanced transparency and
            accountability.
          </p>

          <p className="text-md lg:text-lg leading-relaxed mb-6 text-gray-200">
            Some of the technologies I used include TypeScript, NestJS, MySQL,
            TypeORM, RabbitMQ, MongoDB, MinIO, BullMQ, Redis, React, Redux,
            Tailwind CSS, Socket.IO, Docker, and Git.
          </p>

          <p className="text-md lg:text-lg leading-relaxed mb-6 text-gray-200">
            This project has been an incredible learning experience, and I have
            greatly enjoyed collaborating with a talented team, which has
            contributed to my personal and professional growth.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
