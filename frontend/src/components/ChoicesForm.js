import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const ChoicesForm = ({ updateSection, summarize, setIsLoading, data }) => {
  const [inputValues, setInputValues] = useState({
    section: "home",
    language: "in English",
    manner: "for an adult.",
  });

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setInputValues((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(inputValues);
    updateSection(inputValues.section);
  };

  return (
    <div className="container text-center">
      <Form>
        <FormGroup className="FormGroupMain">
          <Label for="section">Section</Label>
          <Input
            type="select"
            name="section"
            id="section"
            value={inputValues.section}
            onChange={onChange}
          >
            <option defaultValue>front page</option>
            <option>arts</option>
            <option>business</option>
            <option>politics</option>
            <option>technology</option>
            <option>sports</option>
            <option>world</option>
          </Input>
        </FormGroup>

        <FormGroup className="FormGroupMain">
          <Label for="language">Language</Label>
          <Input
            type="select"
            name="language"
            id="language"
            value={inputValues.language}
            onChange={onChange}
          >
            <option defaultValue>in English</option>
            <option>in Spanish</option>
            <option>in German</option>
            <option>in Tagalog</option>
            <option>in Arabic</option>
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
            <option defaultValue>for an adult.</option>
            <option>for a second-grader.</option>
            <option>in a sarcastic manner.</option>
            <option>as Shakespeare.</option>
            <option>with lots of emojis.</option>
          </Input>
        </FormGroup>
        <p>
          Dear Magic News Bot, please summarize the current top news in the{" "}
          <i className="blinking">{inputValues.section}</i> section,{" "}
          <i className="blinking">{inputValues.language}</i>. Oh, and make sure
          to summarize it <i className="blinking">{inputValues.manner}</i>
        </p>
        <Button
          style={{
            color: "#00005c",
            margin: "5%",
            boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
          }}
          outline
          onClick={() => {
            summarize([data, inputValues]);
            setIsLoading(true);
          }}
        >
          Summarize!
        </Button>
      </Form>
    </div>
  );
};

export default ChoicesForm;
