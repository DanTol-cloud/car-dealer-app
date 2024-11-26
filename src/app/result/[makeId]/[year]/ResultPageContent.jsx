"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import { fetchVehicleModels } from "@/api/vehicleApi";
import { ModelCard } from "@/components/ModalCard";
import { GoBackButton } from "@/components/GoBackButton";
import { useFetch } from "@/hooks/useFetch";

const ResultPageContent = ({ params }) => {
    const { makeId, year } = use(params);

    const fetchModels = () => fetchVehicleModels(makeId, year);
    const models = useFetch(fetchModels);

    const router = useRouter();
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex justify-between items-center mb-6">
                    <GoBackButton onClick={() => router.back()} />
                    <h1 className="text-3xl font-bold text-gray-800 text-center">Vehicle Models ({year})</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {
                        models?.map((model, index) => (
                            <ModelCard key={`${model.Model_ID}_${model.Model_Name}_${index}`} model={model} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ResultPageContent;
