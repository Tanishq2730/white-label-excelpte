import React from "react";

const Branding: React.FC = () => {
  const logo = "/assets/images/static-logo.png";
  const favicon = "/assets/images/static-favicon.png";
  const landingImage = "/assets/images/static-landing.png";

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="container">
          {/* Login Info Section */}
          <div className="card rounded mb-4 shadow-sm">
            <div className="card-header">
              <div className="card-title">Login Info</div>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="email"
                    id="username"
                    className="form-control"
                    value="demo@learnerskills.in"
                    readOnly
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="instituteCode" className="form-label">
                    Institute Code
                  </label>
                  <input
                    type="text"
                    id="instituteCode"
                    className="form-control"
                    value="LS1234"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Branding Section */}
          <div className="card rounded mb-4 shadow-sm">
            <div className="card-header">
              <div className="card-title">Branding</div>
            </div>
            <div className="card-body">
              <div className="row g-4 text-left">
                <div className="col-md-4">
                  <label className="form-label d-block">
                    Learner Skills Logo
                  </label>
                  <div className="border rounded p-3">
                    <p className="mb-2 text-muted">No file uploaded</p>
                    <input type="file" className="form-control" disabled />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label d-block">
                    Learner Skills Favicon
                  </label>
                  <div className="border rounded p-3">
                    <p className="mb-2 text-muted">No file uploaded</p>
                    <input type="file" className="form-control" disabled />
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label d-block">
                    Landing Page Image
                  </label>
                  <div className="border rounded p-3">
                    <p className="mb-2 text-muted">No file uploaded</p>
                    <input type="file" className="form-control" disabled />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Institute Contact Info Section */}
          <div className="card rounded mb-4 shadow-sm">
            <div className="card-header">
              <div className="card-title">Institute Contact Info</div>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-4">
                  <label htmlFor="person" className="form-label">
                    Person
                  </label>
                  <input
                    type="text"
                    id="person"
                    className="form-control"
                    value="Dr. Sandeep"
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value="info@learnerskills.in"
                    readOnly
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="form-control"
                    value="+91-9876543210"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Update Button */}
          <div className="text-center">
            <button className="btn btn-primary px-4" disabled>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
