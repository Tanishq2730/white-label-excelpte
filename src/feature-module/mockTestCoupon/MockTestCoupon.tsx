import React, { useState } from "react";
import Table from "../../core/common/dataTable/index";
import { Link } from "react-router-dom";

interface StudentType {
  id: number;
  unlockCode: string;
  userId: string;
  studentName: string;
  mockTest: string;
  usedDate: string;
  status: string;
  score: number;
  codeCount?: number; // ✅ New field added
}

const MockTestCoupon: React.FC = () => {
  const [students, setStudents] = useState<StudentType[]>([
    {
      id: 1,
      unlockCode: "123456",
      userId: "U001",
      studentName: "John Doe",
      mockTest: "Mock Test 1",
      usedDate: "10-01-2025 | 10:00 AM",
      status: "Completed",
      score: 85,
      codeCount: 0,
    },
  ]);

  const [formData, setFormData] = useState<Partial<StudentType>>({});
  const [isEdit, setIsEdit] = useState(false);

  const openEditModal = (student: StudentType) => {
    setFormData(student);
    setIsEdit(true);
    const modal = (window as any).bootstrap?.Modal.getOrCreateInstance(
      document.getElementById("standard-modal")
    );
    modal?.show();
  };

  const handleDelete = (id: number) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "codeCount" || name === "score" ? +value : value,
    }));
  };

  const handleSubmit = () => {
    if (isEdit && formData.id != null) {
      setStudents((prev) =>
        prev.map((student) =>
          student.id === formData.id
            ? { ...student, ...(formData as StudentType) }
            : student
        )
      );
    } else {
      const newStudent: StudentType = {
        ...(formData as StudentType),
        id: Date.now(), // Simple ID generator
      };
      setStudents((prev) => [...prev, newStudent]);
    }

    setFormData({});
    setIsEdit(false);
    (window as any).bootstrap?.Modal.getOrCreateInstance(
      document.getElementById("standard-modal")
    )?.hide();
  };

  const columns = [
    { title: "#", dataIndex: "id" },
    { title: "Unlock Code", dataIndex: "unlockCode" },
    { title: "User Id", dataIndex: "userId" },
    { title: "Student Name", dataIndex: "studentName" },
    { title: "Mock Test", dataIndex: "mockTest" },
    { title: "Used Date", dataIndex: "usedDate" },
    { title: "Status", dataIndex: "status" },
    { title: "Score", dataIndex: "score" },
    { title: "Code Count", dataIndex: "codeCount" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: StudentType) => (
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <Link
              to="#"
              className="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="ti ti-dots-vertical fs-14" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-right p-3">
              <li>
                <button
                  className="dropdown-item rounded-1"
                  onClick={() => openEditModal(record)}
                >
                  <i className="ti ti-edit-circle me-2" />
                  Edit
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item rounded-1"
                  onClick={() => handleDelete(record.id)}
                >
                  <i className="ti ti-trash-x me-2" />
                  Delete
                </button>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Mock Test Coupons</div>
          </div>
          <div className="card-body">
            <div className="mb-3 d-flex flex-wrap align-items-center gap-2 justify-content-between">
              <div className="d-flex flex-wrap align-items-center gap-2"></div>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-dark rounded-pill px-3"
                  onClick={() => {
                    setFormData({});
                    setIsEdit(false);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#standard-modal"
                >
                  +Add
                </button>
              </div>
            </div>
            <Table dataSource={students} columns={columns} Selection={false} />
          </div>
        </div>

        {/* Modal */}
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
                  {isEdit ? "Edit Student" : "Add Student"}
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">
                    How many codes? (0 Remaining)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="codeCount"
                    value={formData.codeCount || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-cancel"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTestCoupon;
