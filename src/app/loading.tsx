import React from "react";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-pulse">
      {/* Top Banner Skeleton */}
      <div className="space-y-3 max-w-2xl">
        <div className="h-4 w-32 bg-sand-200 rounded" />
        <div className="h-10 w-96 bg-sand-300 rounded" />
        <div className="h-4 w-80 bg-sand-200 rounded" />
      </div>

      {/* Cards Skeleton Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-editorial overflow-hidden bg-white space-y-4 p-4"
          >
            <div className="h-48 w-full bg-sand-200 rounded-xl" />
            <div className="space-y-2">
              <div className="h-5 w-3/4 bg-sand-300 rounded" />
              <div className="h-3.5 w-full bg-sand-200 rounded" />
              <div className="h-3.5 w-2/3 bg-sand-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
