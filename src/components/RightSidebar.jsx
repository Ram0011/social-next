"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import News from "./News";

const RightSidebar = () => {
    const [input, setInput] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim) return;
        router.push(`/search/${input}`);
    };

    return (
        <>
            <div className="sticky top-0 bg-white py-2">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search Better"
                        className="w-full h-10 bg-gray-100 rounded-full p-3 border border-gray-500 px-4 focus:outline-gray-500 py-2"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </form>
            </div>
            <News />
        </>
    );
};

export default RightSidebar;
