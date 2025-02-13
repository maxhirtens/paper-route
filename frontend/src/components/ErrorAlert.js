import React from "react";
import { Alert } from "reactstrap";

const ErrorAlert = ({ error }) => {
  if (!error) return null;

  // Get the most relevant error message
  const errorMessage =
    error.response?.data?.error?.message || // API error response
    error.response?.data?.error || // Simple API error
    error.message || // JS Error message
    "An unexpected error occurred"; // Fallback

  return (
    <Alert color="danger" className="mt-3">
      {errorMessage}
    </Alert>
  );
};

export default ErrorAlert;
