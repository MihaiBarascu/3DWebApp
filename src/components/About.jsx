import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Card } from "primereact/card"; // Importing the PrimeReact Card component
import Laptop from "./Laptop";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section className="min-h-screen w-full bg-gradient-to-r flex flex-col relative justify-center from-blue-800 via-indigo-700 to-purple-900 text-slate-600 py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center  ">
        <Card
          title="Most Recent Project"
          subTitle="Unified Product Data Import System"
          className="shadow-2xl bg-transparent p-6 max-w-full  col-span-3  lg:col-span-2 mx-auto lg:max-w-4xl
       
          
          "
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
        </Card>

        {!isMobile && (
          <div className="ml-96 w-full h-full absolute inset-0 ">
            <Canvas className="h-full w-full">
              <PerspectiveCamera makeDefault position={[0, 3, 10]} />
              <ambientLight intensity={20} />
              <directionalLight position={[10, 10, 5]} intensity={20} />
              <Laptop
                scale={20}
                position={[1, 0, 0]}
                rotation={[0.1, -0.1, 0]}
              />
            </Canvas>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
