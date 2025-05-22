import React, { useState } from "react";
import Table from "../../core/common/dataTable/index";
import { Link } from "react-router-dom";

interface VideoFileType {
  id: number;
  fileName: string;
  priority: number;
  isAcademic: boolean;
  isCore: boolean;
  createdDate: string;
  file?: File | null;
}

const Template: React.FC = () => {
  const [videos, setVideos] = useState<VideoFileType[]>([]);
  const [formData, setFormData] = useState<Partial<VideoFileType>>({});
  const [isEdit, setIsEdit] = useState(false);

  const openEditModal = (video: VideoFileType) => {
    setFormData(video);
    setIsEdit(true);
    const modal = (window as any).bootstrap?.Modal.getOrCreateInstance(
      document.getElementById("standard-modal")
    );
    modal?.show();
  };

  const handleDelete = (id: number) => {
    setVideos((prev) => prev.filter((v) => v.id !== id));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement; // Type assertion for better type safety
    const { name, value, type, checked, files } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "file"
          ? files?.[0]
          : name === "priority"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSubmit = () => {
    if (isEdit && formData.id != null) {
      setVideos((prev) =>
        prev.map((video) =>
          video.id === formData.id
            ? { ...video, ...(formData as VideoFileType) }
            : video
        )
      );
    } else {
      const newVideo: VideoFileType = {
        ...(formData as VideoFileType),
        id: Date.now(),
        createdDate: new Date().toISOString().split("T")[0],
      };
      setVideos((prev) => [...prev, newVideo]);
    }

    setFormData({});
    setIsEdit(false);
    (window as any).bootstrap?.Modal.getOrCreateInstance(
      document.getElementById("standard-modal")
    )?.hide();
  };

  const columns = [
    { title: "#", dataIndex: "id" },
    { title: "File Name", dataIndex: "fileName" },
    { title: "Priority", dataIndex: "priority" },
    {
      title: "Type",
      dataIndex: "type",
      render: (_: any, record: VideoFileType) => (
        <>
          {record.isAcademic && (
            <span className="badge bg-info me-1">Academic</span>
          )}
          {record.isCore && <span className="badge bg-success">Core</span>}
        </>
      ),
    },
    { title: "Created Date", dataIndex: "createdDate" },
    {
      title: "Action",
      dataIndex: "action",
      render: (_: any, record: VideoFileType) => (
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
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="card-title m-0">Template Video Upload</h5>
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
          <div className="card-body">
            <div className="card p-2">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="card shadow-sm h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <span className="fw-semibold">
                        Do you want to show Excel PTE’s templates?
                      </span>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="card shadow-sm h-100">
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <span className="fw-semibold">
                        Do you want to add your own templates?
                      </span>
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Table dataSource={videos} columns={columns} Selection={false} />
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
                  {isEdit ? "Edit Video" : "Add Video"}
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
                  <label className="form-label">File Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fileName"
                    value={formData.fileName || ""}
                    onChange={handleInputChange}
                    placeholder="Enter file name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Priority*</label>
                  <input
                    type="number"
                    className="form-control"
                    name="priority"
                    value={formData.priority || ""}
                    onChange={handleInputChange}
                    placeholder="Enter priority"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label d-block">Type</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="isAcademic"
                      checked={formData.isAcademic || false}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label">Academic</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="isCore"
                      checked={formData.isCore || false}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label">Core</label>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Upload File</label>
                  <input
                    type="file"
                    className="form-control"
                    name="file"
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

export default Template;
