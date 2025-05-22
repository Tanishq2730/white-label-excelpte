import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../core/common/dataTable/index";
import { all_routes } from "../router/all_routes";

interface StudentType {
  id: number;
  name: string;
  userCode: string;
  phone: string;
  country: string;
  state: string;
  subscription: string;
}

const Student: React.FC = () => {
  const routes = all_routes;

  const initialStudents: StudentType[] = [
    {
      id: 1001,
      name: "Vijay Sharma",
      userCode: "91A",
      phone: "9875845215",
      country: "India",
      state: "Rajasthan",
      subscription: "Premium",
    },
  ];

  const [students, setStudents] = useState<StudentType[]>(initialStudents);
  const [formData, setFormData] = useState<Partial<StudentType>>({});
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openAddModal = () => {
    setIsEdit(false);
    setFormData({ subscription: "Standard" });
  };

  const openEditModal = (student: StudentType) => {
    setIsEdit(true);
    setFormData(student);
  };

  const handleSubmit = () => {
    if (isEdit && formData.id != null) {
      setStudents((prev) =>
        prev.map((student) =>
          student.id === formData.id ? { ...(student as StudentType), ...(formData as StudentType) } : student
        )
      );
    } else {
      const newStudent: StudentType = {
        id: Date.now(),
        name: formData.name || "",
        userCode: formData.userCode || "",
        phone: formData.phone || "",
        country: formData.country || "",
        state: formData.state || "",
        subscription: formData.subscription || "Standard",
      };
      setStudents((prev) => [...prev, newStudent]);
    }
    (window as any).bootstrap?.Modal.getOrCreateInstance(document.getElementById("standard-modal"))?.hide();
  };

  const columns = [
    { title: "#", dataIndex: "id" },
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => (
        <Link to="#" className="text-primary text-decoration-underline">
          {text}
        </Link>
      ),
    },
    { title: "User Code", dataIndex: "userCode" },
    { title: "Phone", dataIndex: "phone" },
    { title: "Country", dataIndex: "country" },
    { title: "State", dataIndex: "state" },
    { title: "Subscription", dataIndex: "subscription" },
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
                <Link
                  className="dropdown-item rounded-1"
                  to={routes.editStudent}
                  data-bs-toggle="modal"
                  data-bs-target="#standard-modal"
                  onClick={() => openEditModal(record)}
                >
                  <i className="ti ti-edit-circle me-2" />
                  Edit
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded-1" to="#">
                  <i className="fa fa-arrow-right me-2" />
                  Logout Student
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded-1" to="#">
                  <i className="ion-person me-2" />
                  Send Email
                </Link>
              </li>
              <li>
                <Link className="dropdown-item rounded-1" to="#">
                  <i className="ti ti-trash-x me-2" />
                  Delete
                </Link>
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
            <div className="card-title">Student</div>
          </div>
          <div className="card-body">
            <div className="mb-3 d-flex flex-wrap align-items-center gap-2 justify-content-between">
              <div className="d-flex flex-wrap align-items-center gap-2">
                <select className="form-select" style={{ width: "120px" }}>
                  <option defaultValue="true">Active</option>
                  <option>Inactive</option>
                </select>
                <select className="form-select" style={{ width: "100px" }}>
                  <option defaultValue="true">All</option>
                  <option>India</option>
                  <option>USA</option>
                </select>
                <div className="form-check form-check-inline">
                  <input className="form-check-input bg-primary border-primary" type="checkbox" checked readOnly id="freeCheck" />
                  <label className="form-check-label" htmlFor="freeCheck">Free</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input bg-primary border-primary" type="checkbox" checked readOnly id="premiumCheck" />
                  <label className="form-check-label" htmlFor="premiumCheck">Premium</label>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-dark rounded-pill px-3" data-bs-toggle="modal" data-bs-target="#standard-modal" onClick={openAddModal}>
                  +Add
                </button>
                <button className="btn btn-dark rounded-pill px-3">Logout All Student</button>
              </div>
            </div>
            <Table dataSource={students} columns={columns} Selection={true} />
          </div>
        </div>
        <div id="standard-modal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="standard-modalLabel">
                  {isEdit ? "Edit Student" : "Add Student"}
                </h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    {["name", "userCode", "phone", "country", "state"].map((key) => (
                      <div className="col-md-6" key={key}>
                        <div className="mb-3">
                          <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                          <input
                            type="text"
                            name={key}
                            value={formData[key as keyof StudentType] || ""}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder={`Enter ${key}`}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Subscription</label>
                        <select
                          name="subscription"
                          value={formData.subscription || "Standard"}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="Standard">Standard</option>
                          <option value="Premium">Premium</option>
                          <option value="Free">Free</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-cancel" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
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

export default Student;