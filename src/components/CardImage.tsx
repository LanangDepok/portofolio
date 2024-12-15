import { ReactNode } from "react";

const Experience = ({
  children,
  title,
  role,
  time,
  description,
  technology,
}: {
  children: ReactNode;
  title: string;
  role: string;
  time: string;
  description: string;
  technology: ReactNode;
}) => {
  return (
    <div className="border-2 border-purple-600 rounded-lg">
      {children}
      <div className="mx-5">
        <p className="text-white text-center text-xl font-semibold mt-5">
          {title}
        </p>
        <p className="text-white font-thin text-sm mt-2">
          {role} ({time})
        </p>
        <p className="text-white text-justify mt-2">{description}</p>
        <div className="flex flex-wrap gap-5 mt-5 mb-3">{technology}</div>
      </div>
    </div>
  );
};

export default Experience;
