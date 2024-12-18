import React, { useState } from "react";

import './style.css'

interface Tab {
    label: string
    content: React.ReactNode
}

interface TabsProps {
    tabs: Tab[]
}

//------------------------------
//---Tabs
//------------------------------
export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<number>(0)

    return (
        <div>
            {/* Tab Headers */}
            <div className="tab-header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={activeTab === index ? "active" : ""}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {tabs[activeTab]?.content}
            </div>
        </div>
    )
}

