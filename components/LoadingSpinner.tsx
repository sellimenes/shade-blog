import React from "react";

type Props = {};

const LoadingSpinner = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
    </div>
  );
};

export default LoadingSpinner;
