import React from "react";
import {
  Button,
  Card,
  CardTitle,
  CardFooter,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import Footer from "../home/Footer";

const SummaryBox = ({ summary, section, resetPage }) => {
  const handleReset = () => {
    resetPage();
  };

  const time = new Date();

  const localTime = time.toLocaleDateString();

  return (
    <div className="SummaryBox container text-center">
      <Card
        body
        className="HomeCard text-center"
        style={{
          width: "50vw",
          minWidth: "20rem",
          backgroundColor: "mintcream",
        }}
      >
        <CardTitle tag="h5">Here's Your Summary!</CardTitle>
        <ListGroup>
          <ListGroupItem className="typed-container">
            <CardText className="typed">
              {summary.message
                ? summary.message
                : "No summary available. Try again!"}
            </CardText>
          </ListGroupItem>
        </ListGroup>

        <CardFooter className="text-muted">
          A summary of The New York Times {section} section on {localTime} by
          paper-route.app
        </CardFooter>
        <span>
          {/* <Button
            style={{
              color: "#00005c",
              margin: "5%",
              boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
            }}
            outline
            disabled
          >
            Share It!
          </Button> */}
          <Button
            style={{
              color: "#00005c",
              margin: "5%",
              boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
            }}
            outline
            onClick={handleReset}
          >
            I Want to Try Again
          </Button>
        </span>
        <Footer />
      </Card>
    </div>
  );
};

export default SummaryBox;
