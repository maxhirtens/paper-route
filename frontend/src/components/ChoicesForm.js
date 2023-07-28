import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const ChoicesForm = ({ updateSection, summarize, setIsLoading, data }) => {
  const [inputValues, setInputValues] = useState({
    section: "home",
    language: "",
    manner: "",
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
    <div>
      <Form>
        <p>
          Dear New York Times AI Bot, please summarize the current top news in
          the (section) section, (language). Oh and make sure to summarize it
          (manner).
        </p>
        <FormGroup>
          <Label for="section"></Label>
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

        <FormGroup>
          <Label for="language"></Label>
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

        <FormGroup>
          <Label for="manner"></Label>
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

        <Button
          color="success"
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
