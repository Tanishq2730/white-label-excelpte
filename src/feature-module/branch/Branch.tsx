import React, { useState } from "react";
import Table from "../../core/common/dataTable/index";

interface BranchData {
  id: number;
  name: string;
  status: string;
  createdDate: string;
  assignRemaining: string;
}

const Branch: React.FC = () => {
  const [modalAction, setModalAction] = useState<"add" | "edit" | "plus" | null>(null);

  const branchList: BranchData[] = [
    {
      id: 1,
      name: "5",
      status: "ACTIVE",
      createdDate: "16-05-2025",
      assignRemaining: "0 / 0",
    },
    {
      id: 2,
      name: "3",
      status: "ACTIVE",
      createdDate: "10-01-2025",
      assignRemaining: "0 / 0",
    },
  ];

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status: string) => (
        <span className="badge bg-success-subtle text-success fw-semibold px-2 py-1 rounded-pill">
          {status}
        </span>
      ),
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
    },
    {
      title: "Assign Vs Remaining",
      dataIndex: "assignRemaining",
    },
    {
      title: "Action",
      dataIndex: "actions",
      render: (_: any, record: BranchData) => (
        <div className="d-flex gap-2">
          <i
            className="fas fa-plus"
            title="Add"
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#standard-modal"
            onClick={() => setModalAction("plus")}
          ></i>
          <i
            className="fas fa-list"
            title="View"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="fas fa-edit"
            title="Edit"
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#standard-modal"
            onClick={() => setModalAction("edit")}
          ></i>
          <i
            className="fas fa-trash"
            title="Delete"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      ),
    },
  ];

  const renderModalBody = () => {
    switch (modalAction) {
      case "add":
        return (
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" placeholder="Enter name" />
          </div>
        );
      case "edit":
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Enter name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select className="form-select">
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>
            </div>
          </>
        );
      case "plus":
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Select Plan</label>
              <select className="form-select">
                <option value="">Choose plan</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Credit</label>
              <input type="number" className="form-control" placeholder="Enter credits" />
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="mb-3">
              <label className="form-label">Upload Grammar File</label>
              <input type="file" className="form-control" name="file" />
            </div>
            <div className="mb-3">
              <label className="form-label">Priority</label>
              <input
                type="number"
                className="form-control"
                name="priority"
                placeholder="Enter priority"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Type</label>
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="Enter file type (e.g., Academic)"
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title m-0">Branch List</h5>
            <button
              className="btn btn-dark rounded-pill px-3"
              data-bs-toggle="modal"
              data-bs-target="#standard-modal"
              onClick={() => setModalAction("add")}
            >
              +Add
            </button>
          </div>
          <div className="card-body">
            <Table dataSource={branchList} columns={columns} Selection={false} />
          </div>
        </div>
      </div>

      <div
        id="standard-modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="standard-modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="standard-modalLabel">
                {modalAction === "add"
                  ? "Add Branch"
                  : modalAction === "edit"
                  ? "Edit Branch"
                  : modalAction === "plus"
                  ? "Add Plan Credit"
                  : "Upload Grammar File"}
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{renderModalBody()}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;
