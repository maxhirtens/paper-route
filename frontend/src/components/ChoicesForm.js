import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const ChoicesForm = ({ updateSection, summarize, setIsLoading, articles }) => {
  const defaults = {
    paper: "New York Times",
    section: "home",
    manner: "with lots of emojis.",
  };

  const [inputValues, setInputValues] = useState(defaults);

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setInputValues((data) => ({
      ...data,
      [name]: value,
    }));
    if (name === "section") {
      updateSection(value);
    }
  };

  return (
    <div className="container text-center">
      <Form>
        <FormGroup className="FormGroupMain">
          <Label for="paper">News Source</Label>
          <Input
            type="select"
            name="paper"
            id="paper"
            value={inputValues.paper}
            onChange={onChange}
          >
            <option defaultValue>New York Times</option>
            <option disabled>Washington Post (coming soon...)</option>
            <option disabled>Wall Street Journal (coming soon...)</option>
          </Input>
        </FormGroup>

        <FormGroup className="FormGroupMain">
          <Label for="section">Section</Label>
          <Input
            type="select"
            name="section"
            id="section"
            value={inputValues.section}
            onChange={onChange}
          >
            <option defaultValue value="home">
              front page
            </option>
            <option>arts</option>
            <option>business</option>
            <option>politics</option>
            <option>technology</option>
            <option>sports</option>
            <option>world</option>
          </Input>
        </FormGroup>

        <FormGroup className="FormGroupMain">
          <Label for="manner">Manner</Label>
          <Input
            type="select"
            name="manner"
            id="manner"
            value={inputValues.manner}
            onChange={onChange}
          >
            <option defaultValue>with lots of emojis.</option>
            <option>for a second-grader.</option>
            <option>super sarcastically.</option>
            <option>as Shakespeare.</option>
            <option>as a total bro who's had a few brews.</option>
          </Input>
        </FormGroup>
        <div>
          Dear Magic News Bot, please summarize the current top
          <i className="blinking"> {inputValues.paper} </i>news in the
          <i className="blinking"> {inputValues.section}</i> section. Oh, and
          make sure to summarize it{" "}
          <i className="blinking"> {inputValues.manner}</i>
        </div>
        <span>
          {" "}
          <Button
            style={{
              color: "#00005c",
              margin: "5%",
              boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
            }}
            outline
            onClick={() => {
              setInputValues(defaults);
            }}
          >
            Reset Choices
          </Button>
          <Button
            style={{
              color: "#00005c",
              margin: "5%",
              boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
            }}
            outline
            onClick={() => {
              summarize([articles, inputValues]);
              setIsLoading(true);
            }}
          >
            Summarize!
          </Button>
        </span>
      </Form>
    </div>
  );
};

export default ChoicesForm;
