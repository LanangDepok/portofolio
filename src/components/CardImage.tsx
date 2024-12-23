import { ReactNode } from "react";

interface Technology {
  icon: ReactNode;
  name: string;
}

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
  technology: Technology[];
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
        <div className="flex flex-wrap gap-5 mt-5 mb-3">
          {technology.map((item, index) => (
            <>
              <div className="relative group" key={index}>
                {item.icon}
                <div className="absolute z-10 w-28 text-white text-center bg-purple-600 top-10 left-1/2 -translate-x-1/2 rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none">
                  {item.name}
                </div>
              </div>
            </>
          ))}
        </div>
        {/* <div className="flex flex-wrap gap-5 mt-5 mb-3">{technology}</div> */}
      </div>
    </div>
  );
};

export default Experience;
