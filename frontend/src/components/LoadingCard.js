import React from "react";
import { Spinner, Card, CardTitle } from "reactstrap";

const LoadingCard = () => {
  return (
    <div className="container text-center">
      <Card
        body
        className="LoadingCard text-center"
        style={{
          width: "50vw",
          minWidth: "30rem",
          height: "49vh",
          backgroundColor: "mintcream",
        }}
      >
        <CardTitle tag="h5">
          <i className="blinking">Loading!</i>
        </CardTitle>
        <div className="text-center">
          <Spinner className="text-secondary" />
        </div>
      </Card>
    </div>
  );
};

export default LoadingCard;
