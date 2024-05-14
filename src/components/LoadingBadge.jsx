import React from "react";

function LoadingBadge() {
  return (
    <div className="d-flex justify-content-center loading-badge">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingBadge;
