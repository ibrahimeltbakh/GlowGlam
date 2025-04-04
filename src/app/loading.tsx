import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      <h2 className="text-2xl font-bold">Loading...</h2>
    </div>
  );
};

export default loading;
