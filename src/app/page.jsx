"use client";

import React, { Suspense } from "react";
import FilterPageContent from "./filter/FilterPageContent";
import LoadingSkeleton from "@/components/LoadingSkeleton";

const FilterPage = () => {
  return (
    <Suspense fallback={<LoadingSkeleton type="filter" />}>
      <FilterPageContent />
    </Suspense>
  );
};

export default FilterPage;
