import React from 'react';

const BuyerCard: React.FC = () => {
  return (
    <div className="container my-4">
        <button className='btn btn-primary m-auto addonBtn'>
            Add-on Feature
        </button>
      <div className="row g-4">
        {/* Co-Branded Platform Card */}
        <div className="col-md-6">
          <div className="card h-100 border-2 custom-border-light p-4 shadow-sm">
            <h4 className="fw-bold text-center">Co-Branded Platform</h4>
            <p className="text-dark text-center mt-3">
              We offer a co-branded platform featuring your company logo and a customized URL as{' '}
              <a href="#" className="text-dark fw-semibold text-decoration-none">
                yourcompany.portal.alfapte.com
              </a>. This allows you to maintain your brand identity while leveraging Alfa PTE’s resources.
              There are no additional fees for this option.
            </p>
            <h6 className="fw-bold mt-4 text-center">Your Domain</h6>
            <div className="btn btn-light mt-4 rounded shadow-sm">
              <i className="bi bi-globe2 fs-5 me-2 text-dark"></i>
              <span className="fw-semibold text-dark">yourcompany.alfapte.com</span>
            </div>
          </div>
        </div>

        {/* Fully Branded Option Card */}
        <div className="col-md-6">
          <div className="card h-100 bg-primary text-white p-4 shadow-sm">
            <h4 className="fw-bold text-white text-center">Fully Branded Option</h4>
            <p className="mt-3">
              We can host the website on your URL. For this, you will need to purchase a domain.
              This option comes with a one-time setup cost and the per-account cost will be 20% higher
              compared to the co-branded pricing. To learn more, please get in touch with our support
              team by <a href="#" className="fw-bold text-white text-decoration-underline">clicking here</a>.
            </p>
            <h6 className="fw-bold mt-4 text-center text-white">Whitelabel Service</h6>
            <div className='companybtn'>
                <div className='name'>
                    <h5>yourcompany.excelpte.com</h5>
                </div>
                <div className='icon'>
                    <i className='ion-arrow-right-c'></i>
                </div>
                <div className='name'>
                    <h5 style={{color:'skyblue'}}>yourcompany.excelpte.com</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerCard;
