import { useState } from "react";

const ImageWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  const triggerLoading = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className="animate-skeleton w-full flex justify-center items-center">
          <div className="size-20 rounded-full animate-borderSpinSKeleton border-t-4 border-gray-700"></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`rounded-t-lg ${isLoading && "hidden"}`}
        onLoad={triggerLoading}
      />
    </>
  );
};

export default ImageWithSkeleton;
