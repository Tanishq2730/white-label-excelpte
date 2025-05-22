import React from "react";

interface FeatureCardProps {
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc }) => {
  return (
    <div className="card h-100 shadow-sm text-center p-3">
      <div style={{ fontSize: "2rem" }}>📝</div>
      <h5 className="fw-bold mt-2">{title}</h5>
      <p className="text-muted small">{desc}</p>
    </div>
  );
};

export default FeatureCard;
