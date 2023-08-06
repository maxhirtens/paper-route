import React from "react";
import { Spinner, Card, CardTitle, CardText } from "reactstrap";

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
          <i className="blinking">Summarizing the News!</i>
        </CardTitle>
        <CardText className="text-start text-center">
          <Spinner className="text-secondary" />
        </CardText>
        {/* <CardFooter className="text-muted"></CardFooter> */}
        {/* <Footer /> */}
      </Card>
    </div>
  );
};

export default LoadingCard;
