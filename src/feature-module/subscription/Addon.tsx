import React, { FC } from 'react';

const Addon: FC = () => {
  return (
    <div className="addonfeature">
      <div className="container my-4">
        <div className="row">
          {/* Co-Branded Platform Card */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100 co-branded-card">
              <div className="card-body">
                <h5 className="card-title fw-bold">Co-Branded Platform</h5>
                <p className="card-text">
                  We offer a co-branded platform featuring your company logo and a customized URL as{' '}
                  <a
                    href="https://yourcompany.portal.excelpte.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    yourcompany.portal.excelpte.com
                  </a>
                  . This allows you to maintain your brand identity while leveraging Excel PTE
                  resources. There are no additional fees for this option.
                </p>
                <p className="fw-bold">Your Domain</p>
                <div className="domain-box">
                  <i className="bi bi-globe"></i> yourcompany.excelpte.com
                </div>
              </div>
            </div>
          </div>

          {/* Fully Branded Option Card */}
          <div className="col-md-6">
            <div className="card shadow-sm border-0 h-100 fully-branded-card">
              <div className="card-body">
                <h5 className="card-title fw-bold text-white">Fully Branded Option</h5>
                <p className="card-text text-white">
                  We can host the website on your URL. For this, you will need to purchase a domain.
                  This option comes with a one-time setup cost and the per-account cost will be 20%
                  higher compared to the co-branded pricing. To learn more, please get in touch with
                  our support team by{' '}
                  <a href="#" className="text-white text-decoration-underline">
                    clicking here
                  </a>
                  .
                </p>
                <p className="fw-bold text-white">Whitelabel Service</p>
                <div className="domain-box text-white">
                  <i className="bi bi-globe"></i> yourcompany.excelpte.com
                  <span className="arrow">→</span>
                  <span className="new-domain">yourcompany.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addon;
