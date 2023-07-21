import React, { useState, useEffect } from "react";
import QuickreaderApi from "../api";
import {
  Spinner,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const Home = () => {
  const [articles, setArticles] = useState(null);
  const [summary, setSummary] = useState(null);
  const [isLoading, setisLoading] = useState(null);
  const [modal, setModal] = useState(false);
  const [switchState, setSwitchState] = useState(false);

  // open or close message modal.
  const toggle = () => setModal(!modal);

  // search articles from API.
  async function searchArticles(type) {
    let articles = await QuickreaderApi.getArticles(type);
    setArticles(articles);
  }

  // summarize articles with ChatGPT.
  async function summarize(data) {
    let summary = await QuickreaderApi.summarize(data);
    setSummary(summary);
    setisLoading(false);
  }

  // get articles from API on mount.
  useEffect(() => {
    console.log("useEffect on NYT Page");
    searchArticles();
  }, []);

  // loading spinner.
  if (!articles || isLoading) return <Spinner />;

  if (summary)
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Today's NYT Quickread</ModalHeader>
          <ModalBody>{summary.message}</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Save to Profile
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );

  // parse out content from articles.
  let selects = articles.message.results;
  let top3 = selects.slice(3, 6);
  let top3Data = top3.map((c) => c.title + ": " + c.abstract);
  let top3joined = top3Data.join(". ");
  let data = {
    prompt: top3joined,
  };

  return (
    <div className="container text-center">
      <div className="container text-center">
        <h3>Welcome to Quickreader!</h3>
        <h5>AI-Assisted Summaries for The New York Times</h5>
        <br></br>
        <Form>
          <FormGroup switch>
            <Input
              type="switch"
              checked={switchState}
              onClick={() => {
                setSwitchState(!switchState);
              }}
            />
            <Label check>Use emojis</Label>
          </FormGroup>
        </Form>
        {/* <p>Choose a news section:</p> */}
      </div>

      <Button
        color="success"
        onClick={() => {
          summarize(data);
          toggle();
          setisLoading(true);
        }}
      >
        Quickread The News
      </Button>
    </div>
  );
};

export default Home;
