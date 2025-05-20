"use client"
import React, { useState, useRef, useEffect } from "react";
import "@styles/globals.css";
import VideoTab from "./videoTab";
export default function TabControllers() {
  const [activeTab, setActiveTab] = useState("myVideos");
  const tabs = ["myVideos", "myTweets", "myPlaylists", "savedPlaylists"];
  const tabRefs = useRef({});

  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const current = tabRefs.current[activeTab];
    if (current) {
      const { offsetLeft, offsetWidth } = current;
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative w-full px-2 py-2">
      <div className="relative flex gap-4 justify-start border-b border-gray-600 md:justify-center">
        <div
          className="absolute bottom-0 h-[3px] bg-purple-500 rounded transition-all duration-300"
          style={{ ...indicatorStyle }}
        />

        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            onClick={() => setActiveTab(tab)}
            className={`relative px-1 py-2 font-medium transition-colors duration-300 ${
              activeTab === tab
                ? "text-purple-500"
                : "text-gray-400 hover:text-purple-300"
            }`}
          >
            {formatLabel(tab)}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="tab-content mt-6 text-white">
        {activeTab === "myVideos" && <VideoTab />}
        {activeTab === "myTweets" && <div>My Tweets</div>}
        {activeTab === "myPlaylists" && <div>My Playlists</div>}
        {activeTab === "savedPlaylists" && <div>Saved Playlists</div>}
      </div>
    </div>
  );
}

function formatLabel(tab) {
  return tab
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}
