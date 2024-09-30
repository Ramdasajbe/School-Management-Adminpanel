import React, { useState } from "react";

const ImageWithLoader = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && !hasError && (
        <div className="flex justify-center items-center bg-white bg-opacity-80">
          <div className="border-2 border-gray-200 border-t-2 border-t-blue-400 rounded-full w-8 h-8 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`object-cover ${className} ${
          isLoading ? "hidden" : "block"
        }`} // Apply only provided className
      />
      {hasError && !isLoading && (
        <div className="flex justify-center items-center bg-gray-300">
          <span className="text-gray-600">Image not found</span>
        </div>
      )}
    </div>
  );
};

export default ImageWithLoader;
