import React, { useState, FC, ChangeEvent } from 'react';

// Type for static plans
interface InstitutePlan {
  id: number;
  plan_name: string;
}

interface PlanData {
  id: number;
  plan_type_name: string;
  account_price: number;
  institute_plans: InstitutePlan[];
}

// Static plan data (Replace this with your actual static values)
const staticPlanData: PlanData = {
  id: 1,
  plan_type_name: 'Standard Plan',
  account_price: 50,
  institute_plans: [
    { id: 101, plan_name: 'Starter Pack' },
    { id: 102, plan_name: 'Growth Pack' },
    { id: 103, plan_name: 'Enterprise Pack' },
  ],
};

const PlanComponent: FC = () => {
  const [numAccounts, setNumAccounts] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');

  const handleAccountsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumAccounts(value);
    setTotalPrice(value * staticPlanData.account_price);
  };

  const handlePlanSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPlanId(e.target.value);
  };



  const isPayNowDisabled = numAccounts <= 0 || !selectedPlanId;

  return (
    <>
      <div className="planone">
        <div className="container">
          <div className="row">
            {/* Form Section */}
            <div className="col-md-7">
              <div className="form-section">
                <h3>{staticPlanData.plan_type_name}</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Select Plan</label>
                        <select onChange={handlePlanSelect} value={selectedPlanId}>
                          <option value="">Select Plan</option>
                          {staticPlanData.institute_plans.map((plan) => (
                            <option key={plan.id} value={plan.id.toString()}>
                              {plan.plan_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Number of Accounts</label>
                        <input
                          type="number"
                          placeholder="Enter number of accounts"
                          min="0"
                          value={numAccounts}
                          onChange={handleAccountsChange}
                        />
                      </div>
                    </div>

                    <p>
                      * For a fully branded white-label option, please get in touch with our
                      support by clicking <a href="#">here</a>{' '}
                      <span className="new-badge">New</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="col-md-5">
              <div className="pricing-section">
                <h3>${staticPlanData.account_price} per account</h3>
                <h5>Total: ${totalPrice}</h5>
                <button
                  
                  disabled={isPayNowDisabled}
                  className={isPayNowDisabled ? 'disabled-btn' : ''}
                >
                  Pay Now
                </button>
                <p>No expiry to Premium credits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Table account_price={staticPlanData.account_price} /> */}
    </>
  );
};

export default PlanComponent;
