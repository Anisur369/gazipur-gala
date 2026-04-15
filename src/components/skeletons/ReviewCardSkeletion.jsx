import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6 mb-6 animate-pulse">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-16 bg-gray-300 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-32"></div>
          <div className="h-3 bg-gray-300 rounded w-24"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mt-3">
        <div className="w-5 h-5 bg-gray-300 rounded"></div>
        <div className="w-5 h-5 bg-gray-300 rounded"></div>
        <div className="w-5 h-5 bg-gray-300 rounded"></div>
        <div className="w-5 h-5 bg-gray-300 rounded"></div>
        <div className="w-5 h-5 bg-gray-300 rounded"></div>
      </div>

      {/* Review Text */}
      <div className="space-y-2 mt-4">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-4/6"></div>
      </div>

      {/* Date */}
      <div className="h-3 bg-gray-300 rounded w-24 mt-2"></div>

      {/* Like Button */}
      <div className="flex items-center gap-2 mt-4">
        <div className="w-20 h-8 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded w-12"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
