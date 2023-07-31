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

const SummaryBox = ({ summary, resetPage }) => {
  const handleReset = () => {
    resetPage();
  };

  const time = new Date(summary.time);

  const localTime = time.toDateString();

  console.log(time.toLocaleString());

  return (
    <div className="SummaryBox container text-center">
      <Card
        body
        className="HomeCard text-center"
        style={{
          width: "50vw",
          minWidth: "30rem",
          backgroundColor: "mintcream",
        }}
      >
        <CardTitle tag="h5">Here's Your Summary!</CardTitle>
        <ListGroup>
          <ListGroupItem>
            <CardText className="text-start">{summary.message}</CardText>
          </ListGroupItem>
        </ListGroup>

        <CardFooter className="text-muted">
          A summary of The (paper) (section) section by paper-route.ai on{" "}
          {localTime}
        </CardFooter>
        <span>
          <Button
            style={{
              color: "#00005c",
              margin: "5%",
              boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
            }}
            outline
          >
            Share It!
          </Button>
          <Button
            style={{
              color: "#00005c",
              margin: "5%",
              boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
            }}
            outline
            onClick={handleReset}
          >
            Try Again
          </Button>
        </span>
        <Footer />
      </Card>
    </div>
  );
};

export default SummaryBox;
