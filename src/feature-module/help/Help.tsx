import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const Help: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "How to Add / Edit a Student?",
      answer: "Explanation for adding or editing a student.",
    },
    {
      question: "How to Change a Student's Password?",
      answer: "Explanation for changing a student's password.",
    },
    {
      question: "How to Add Subscription to a New/Existing Account?",
      answer: "Explanation for adding subscriptions.",
    },
    {
      question: "How to Buy a Subscription Plan?",
      answer: "Explanation for buying a subscription plan.",
    },
    {
      question: "How to Switch a Student's Account between Academic & Core?",
      answer: "Explanation for switching accounts.",
    },
    {
      question: "How to Buy Mock Tests?",
      answer: "Explanation for buying mock tests.",
    },
    {
      question: "How to use the Trainer Mode Feature?",
      answer: "Explanation for using the trainer mode feature.",
    },
    {
      question:
        "How to Use Your Institute's Code for the White Label Mobile App?",
      answer: "Explanation for using the institute's code.",
    },
    {
      question: "How to use the Sign-in OTP function on a Student Login?",
      answer: "Explanation for using sign-in OTP.",
    },
    {
      question: "How to Access the Branch Function?",
      answer: "Explanation for accessing the branch function.",
    },
    {
      question: "How to add Announcements on the Students' Website/Mobile App?",
      answer: "Explanation for adding announcements.",
    },
    {
      question:
        "How to add a Banner/Flyer on the Students' Website/Mobile App?",
      answer: "Explanation for adding banners.",
    },
    {
      question: "How to use the Sub-admin Feature?",
      answer: "Explanation for using the sub-admin feature.",
    },
    {
      question: "How to use the Job Posting Feature?",
      answer: "Explanation for using the job posting feature.",
    },
    {
      question: "How to Turn On or Turn Off Features on Student Website?",
      answer: "Explanation for turning features on/off.",
    },
    {
      question:
        "How to add your Strategy Videos, Templates, Grammar Rules, and Study Files?",
      answer: "Explanation for adding strategy materials.",
    },
    {
      question: "How to Modify Your Branding?",
      answer: "Explanation for modifying branding.",
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="container">
          {/* Top Section */}
          <div className="text-center mb-5">
            <h4 className="text-primary mb-2">HELP CENTER</h4>
            <h1 className="mb-2">How can we help you today?</h1>
            <p className="text-primary">
              You will find answers to all your software-related queries on this
              page. For any further queries or concerns, you can always reach
              out to us.
            </p>
            <div className="row">
              <div className="col-md-6">
                <div className="card text-dark p-3 helpcard">
                  <img src="/assets/img/what.png" alt="WhatsApp Support" />
                  <h5>
                    Reach out to our business support team for any queries
                  </h5>
                  <a href="#" className="text-white text-decoration-none">
                    Go to WhatsApp →
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card text-dark p-3 helpcard">
                  <img src="/assets/img/chat.png" alt="Email Support" />
                  <h5>
                    Reach out to our business support team for any queries
                  </h5>
                  <a href="#" className="text-white text-decoration-none">
                    Go to Email →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="mb-3">Most frequently asked questions</h2>
            <p className="text-secondary mb-4">
              Here are the most frequently asked questions you may check before
              getting started
            </p>
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${
                        index === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0}
                      aria-controls={`collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
