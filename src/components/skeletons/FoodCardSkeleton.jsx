// FoodCardSkeleton.jsx
import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/4 mt-2"></div>
        <div className="flex gap-2 mt-4">
          <div className="flex-1 h-10 bg-gray-300 rounded"></div>
          <div className="flex-1 h-10 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
