"use client";

import React from "react";

const LoadingSkeleton = ({ type }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-200 flex items-center justify-center">
            <div className="w-full max-w-6xl px-6 py-12">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 animate-pulse">
                        {type === "filter" ? "Loading Filter Options..." : "Loading Vehicle Models..."}
                    </h1>
                    <p className="text-gray-600 mt-2">
                        {type === "filter"
                            ? "Fetching vehicle makes and years. Please wait."
                            : "Fetching models based on your selection. Hang tight!"}
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md border border-gray-200 rounded-lg p-4 animate-pulse"
                        >
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoadingSkeleton;
