import React, { useState, useEffect, FC } from 'react';
import Addon from './Addon';
import PlanComponent from './Plancomponent';

// Type for plan data
interface Plan {
  id: number;
  type_name: string;
  [key: string]: any; // Add other plan-related fields as needed
}

// Type for tab structure
interface Tab {
  id: string;
  title: string;
  content: React.ReactNode;
}

const TabSection: FC = () => {
  // Static plan list
  const staticPlans: Plan[] = [
    { id: 1, type_name: 'Basic Plan' },
    { id: 2, type_name: 'Premium Plan' },
    { id: 3, type_name: 'Enterprise Plan' },
  ];

  const [activeTab, setActiveTab] = useState<string>(''); // Defaults to empty
  const [tabs, setTabs] = useState<Tab[]>([]); // Store all tabs (plan + addon)

  useEffect(() => {
    // Prepare tabs from static plans
    const planTabs: Tab[] = staticPlans.map((plan) => ({
      id: plan.id.toString(),
      title: plan.type_name,
      content: <PlanComponent />,
    }));

    // Add "Add-on Feature" as the last tab
    planTabs.push({
      id: 'addon',
      title: 'Add-on Feature',
      content: <Addon />,
    });

    setTabs(planTabs);

    // Set default active tab to the first one
    if (planTabs.length > 0) {
      setActiveTab(planTabs[0].id);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
      {/* Tab Header */}
      <div className="tab-header" style={{ display: 'inline-flex', gap: '10px', marginBottom: '20px' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 20px',
              borderRadius: '20px',
              border: activeTab === tab.id ? '2px solid #1ab69d' : '1px solid #ccc',
              backgroundColor: activeTab === tab.id ? '#fff' : '#f9f9f9',
              fontWeight: activeTab === tab.id ? 'bold' : 'normal',
              color: activeTab === tab.id ? '#1ab69d' : '#333',
              cursor: 'pointer',
              outline: 'none',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className="tab-content"
        style={{
          padding: '20px',
          backgroundColor: 'white',
          border: '1px solid #ddd',
          borderRadius: '10px',
          width: '100%',
          margin: '0 auto',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabSection;
