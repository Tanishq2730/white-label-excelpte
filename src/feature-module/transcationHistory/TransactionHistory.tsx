import React from "react";
import Table from "../../core/common/dataTable/index";

interface Transaction {
  id: number;
  transactionId: string;
  date: string;
  planName: string;
  items: string;
  paymentStatus: string;
  amount: string;
}

const TransactionHistory: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      transactionId: "# No Transaction Occurred",
      date: "-",
      planName: "Plan 1",
      items: "20 Accounts x 30 days",
      paymentStatus: "Pending",
      amount: "INR 0.00",
    },
    {
      id: 2,
      transactionId: "# No Transaction Occurred",
      date: "-",
      planName: "Plan 2",
      items: "5 Accounts x 30 days",
      paymentStatus: "Pending",
      amount: "INR 0.00",
    },
    {
      id: 3,
      transactionId: "# No Transaction Occurred",
      date: "-",
      planName: "Plan 1",
      items: "23 Accounts x 60 days",
      paymentStatus: "Pending",
      amount: "INR 0.00",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "TransactionId",
      dataIndex: "transactionId",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Plan Name",
      dataIndex: "planName",
    },
    {
      title: "Items",
      dataIndex: "items",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      render: (status: string) => (
        <span className="badge bg-warning-subtle text-warning fw-semibold px-2 py-1 rounded-pill">
          {status}
        </span>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title m-0">Transaction History</h5>
          </div>
          <div className="card-body">
            <Table dataSource={transactions} columns={columns} Selection={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
