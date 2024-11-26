"use client";

import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { fetchVehicleMakes } from "@/api/vehicleApi";
import { generateYears } from "@/utils/generateYears";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

const FilterPageContent = () => {
    const makes = useFetch(fetchVehicleMakes);
    const years = generateYears();

    const [selectedMake, setSelectedMake] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const handleMakeChange = (e) => setSelectedMake(e.target.value);
    const handleYearChange = (e) => setSelectedYear(e.target.value);

    const isDisabled = !selectedMake || !selectedYear;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-200">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold text-gray-800 text-center">Car Filter</h1>
                <p className="text-gray-600 mt-2 text-center">
                    Select a vehicle make and year to proceed.
                </p>
                <div className="mt-8 flex flex-col space-y-4">
                    <Dropdown
                        label="Select a Make"
                        options={makes?.map((make) => ({
                            value: make.MakeId,
                            label: make.MakeName,
                        }))}
                        value={selectedMake}
                        onChange={handleMakeChange}
                    />

                    <Dropdown
                        label="Select a Year"
                        options={years.map((year) => ({
                            value: year,
                            label: year,
                        }))}
                        value={selectedYear}
                        onChange={handleYearChange}
                    />
                    <Link
                        href={isDisabled ? "#" : `/result/${selectedMake}/${selectedYear}`}
                        className={`px-4 py-2 rounded-lg text-white ${isDisabled
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        aria-disabled={isDisabled}
                    >
                        Next
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FilterPageContent;
