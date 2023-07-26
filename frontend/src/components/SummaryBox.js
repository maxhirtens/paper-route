import React from "react";
import { Button, Card, CardTitle, CardText } from "reactstrap";

const SummaryBox = ({ summary, resetPage }) => {
  const handleReset = () => {
    resetPage();
  };

  return (
    <div className="container text-center">
      <Card
        body
        className="text-center"
        style={{
          width: "50rem",
        }}
      >
        <CardTitle tag="h5">Today's NYT Quickread</CardTitle>
        <CardText>{summary.message}</CardText>
        <Button color="danger" onClick={handleReset}>
          Try Again
        </Button>
      </Card>
    </div>
  );
};

export default SummaryBox;
