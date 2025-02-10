// Tabs.tsx
"use client";

import React, { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      {/* Tab headers */}
      {/* Active tab content */}
      <div className="p-4">{tabs[activeTabIndex].content}</div>
    </div>
  );
};

export default Tabs;
