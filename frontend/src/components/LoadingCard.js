import React from "react";
import { Card, CardTitle } from "reactstrap";

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
        <div>
          <svg>
            <circle className="bg-loading" cx="57" cy="57" r="52" />
            <circle className="meter-3" cx="57" cy="57" r="52" />
          </svg>
        </div>
      </Card>
    </div>
  );
};

export default LoadingCard;
