import React from "react";

const DownloadButton = ({ fileUrl, fileName, label }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="btn btn-primary  bg-blue py-2 px-3 boder-0"
    >
      {label || "Download"}
    </button>
  );
};

export default DownloadButton;
