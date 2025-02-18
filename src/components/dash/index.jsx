"use client";
import React, { useState } from "react";
import { Button } from "@/components/elements";
import { selectChatBot } from "@/lib/features/dashboardSlice";
import { useBotDispatch, useBotSelector } from "@/lib/hooks/rtk_hooks";

export const LeftBar = () => {
    const { selectedChatbot, chatbots } = useBotSelector(
        (state) => state.dashboard,
    );

    const dispatch = useBotDispatch();

    const handleSelect = (item) => {
        if (item.id === selectedChatbot?.id) {
            dispatch(selectChatBot(null));
            return;
        }
        dispatch(selectChatBot(item));
    };

    return (
        <div className="h-full flex flex-col overflow-y-auto border-r gap-1">
            {!chatbots.length && (
                <p className="text-lg p-4 text-center text-gray-800 dark:text-gray-200">
                    Please add a chatbot
                </p>
            )}
            {chatbots.map((item) => {
                return (
                    <div
                        key={item.id}
                        className={`flex items-center justify-center gap-1 py-2 px-8 border-b-2 cursor-pointer transition-all duration-100 ${selectedChatbot?.id === item.id ? "bg-blue-500 hover:bg-blue-600" : "hover:bg-gray-400"}`}
                        onClick={() => {
                            handleSelect(item);
                        }}
                    >
                        <p
                            className={`${selectedChatbot?.id === item.id ? "text-white" : ""} text-gray-800 dark:text-gray-200 items-center`}
                        >
                            {item.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};
