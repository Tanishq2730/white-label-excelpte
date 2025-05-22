import React, { useState } from "react";
import Table from "../../core/common/dataTable/index";
import { Link } from "react-router-dom";

interface VideoFileType {
  id: number;
  fileName: string;
  priority: number;
  createdDate: string;
  file?: File | null;
}

const Grammar: React.FC = () => {
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
    const target = e.target as HTMLInputElement;
    const { name, value, type, files } = target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "file"
          ? files?.[0]
          : name === "priority"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.file) return;

    const fileName = formData.file.name;
    const createdDate = new Date();
    const formattedDate = createdDate.toLocaleDateString("en-GB");
    const formattedTime = createdDate.toLocaleTimeString("en-GB");

    if (isEdit && formData.id != null) {
      setVideos((prev) =>
        prev.map((video) =>
          video.id === formData.id
            ? {
                ...video,
                fileName,
                priority: formData.priority || 0,
                createdDate: `${formattedDate} | ${formattedTime}`,
              }
            : video
        )
      );
    } else {
      const newVideo: VideoFileType = {
        id: Date.now(),
        fileName,
        priority: formData.priority || 0,
        createdDate: `${formattedDate} | ${formattedTime}`,
        file: formData.file,
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
    {
      title: "File Name",
      dataIndex: "fileName",
      render: (text: string) => (
        <a href="#" download>
          {text}
        </a>
      ),
    },
    { title: "Priority", dataIndex: "priority" },
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
            <h5 className="card-title m-0">Grammar</h5>
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
                        Do you want to show Excel PTE’s grammar?
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
                        Do you want to add your own grammar?
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
                  {isEdit ? "Edit File" : "Upload Grammar File"}
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
                  <label className="form-label">Upload Grammar File</label>
                  <input
                    type="file"
                    className="form-control"
                    name="file"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Priority</label>
                  <input
                    type="number"
                    className="form-control"
                    name="priority"
                    value={formData.priority || ""}
                    onChange={handleInputChange}
                    placeholder="Enter priority"
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

export default Grammar;
