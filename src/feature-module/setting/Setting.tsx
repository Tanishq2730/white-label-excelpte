import React, { useState } from "react";

const Setting: React.FC = () => {
  const [settings, setSettings] = useState({
    whatsapp: false,
    email: false,
    grammar: false,
    community: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="container py-4">
          <h2 className="mb-4 fw-bold">Settings</h2>

          <div className="card p-4 mb-4 shadow-sm">
            <h5 className="text-success fw-semibold mb-3">General Settings</h5>
            <div className="d-flex justify-content-between align-items-center  py-2">
              <span>WhatsApp Notification</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="whatsappSwitch"
                  checked={settings.whatsapp}
                  onChange={() => toggleSetting("whatsapp")}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center  py-2">
              <span>Email Notification</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="emailSwitch"
                  checked={settings.email}
                  onChange={() => toggleSetting("email")}
                />
              </div>
            </div>
          </div>

          <div className="card p-4 shadow-sm">
            <h5 className="text-success fw-semibold mb-3">General Settings</h5>
            <div className="d-flex justify-content-between align-items-center  py-2">
              <span>Grammar Quiz</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="grammarSwitch"
                  checked={settings.grammar}
                  onChange={() => toggleSetting("grammar")}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-2">
              <span>Community Score</span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="communitySwitch"
                  checked={settings.community}
                  onChange={() => toggleSetting("community")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
