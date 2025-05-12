"use client";

import React from "react";

export default function Navigation({name}) {
    return (
        <div className="max-w-lg mx-auto p-8">
            <h1 className="text-4xl font-extrabold mb-4">About</h1>
            <p className="text-sm text-gray-700 dark:text-gray-200">
                Hello {name}
            </p>
        </div>
    ); 
}