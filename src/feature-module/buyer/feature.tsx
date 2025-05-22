import React, { useState } from "react";
import FeatureCard from "./featureCard";

const featuresData = {
  academic: [
    { title: "AI Scores", desc: "Access to AI evaluations to comprehensively understand the distribution of PTE marks in all sections." },
    { title: "Full Mock Tests", desc: "Access to Unlimited Full Mock Tests with a score report and detailed analytics of all modules." },
    { title: "Sectional Mock Test", desc: "Access to Unlimited Sectional Mock Test" },
    { title: "Prediction File", desc: "Access to the latest prediction files on a weekly and monthly basis." },
    { title: "Templates", desc: "Access to our Exam-tested and proven templates." },
    { title: "Study Plan", desc: "Access to an Expert expert-crafted study plan to Target a realist PTE score." },
    { title: "Practice History", desc: "Know your practice progress with our practice history in your online learning journey." },
    { title: "Support", desc: "24/7 Team Support for your queries. At info@excelpte.com" }
  ],
  core: [
    { title: "AI Scores", desc: "PTE Core AI score tracking for every section with accuracy breakdown." },
    { title: "Mock Tests", desc: "Practice unlimited core-based mock tests with real-time results." },
    { title: "Skill Feedback", desc: "Receive feedback on each core competency for improvement." },
    { title: "Templates", desc: "Use our proven templates built specifically for PTE Core exam." },
    { title: "Weekly Tasks", desc: "Assigned weekly targets and tasks tailored to your progress." },
    { title: "Video Solutions", desc: "Get video explanations for most repeated questions." },
    { title: "Progress Reports", desc: "Track your week-by-week performance and insights." },
    { title: "Support", desc: "24/7 Dedicated support team. Email: core@excelpte.com" }
  ]
};

const Feature: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"academic" | "core">("academic");

  const handleTabChange = (tab: "academic" | "core") => {
    setActiveTab(tab);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Features</h2>

      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn me-2 ${activeTab === "academic" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => handleTabChange("academic")}
        >
          PTE Academic
        </button>
        <button
          className={`btn ${activeTab === "core" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => handleTabChange("core")}
        >
          PTE Core
        </button>
      </div>

      <div className="row">
        {featuresData[activeTab].map((feature, idx) => (
          <div key={idx} className="col-md-6 col-lg-3 mb-4">
            <FeatureCard title={feature.title} desc={feature.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
