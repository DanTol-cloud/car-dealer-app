"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
    const router = useRouter();

    useEffect(() => {
        console.error("Global Error Caught:", error);
    }, [error]);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100 text-gray-800">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
                <p className="mt-2 text-lg">
                    {error?.message || "An unexpected error occurred. Please try again later."}
                </p>
                <div className="mt-4 flex justify-center gap-4">
                    <button
                        onClick={() => reset()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Try Again
                    </button>
                    <button
                        onClick={() => router.push("/")}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    );
}
