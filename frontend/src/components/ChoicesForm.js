import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const ChoicesForm = ({ summarize, setIsLoading, data }) => {
  const [radioValues, setRadioValues] = useState({
    language: "english",
    tone: "neutral",
    emojis: "without emojis.",
  });

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setRadioValues((data) => ({
      ...data,
      [name]: value,
    }));
    console.log(radioValues);
  };

  const onClick = (ev) => {
    //TO-DO SEND/click value
    console.log("radio values:", radioValues);
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Input type="radio" value={" "} name="language" onChange={onChange} />
          For an Adult
          <Input
            type="radio"
            value={"for a second-grader "}
            name="language"
            onChange={onChange}
          />
          For a Second-Grader
        </FormGroup>

        <FormGroup>
          <Input type="radio" value={" "} name="tone" onChange={onChange} />
          Neutral
          <Input
            type="radio"
            value={"in a sarcastic manner "}
            name="tone"
            onChange={onChange}
          />
          Sarcastic
        </FormGroup>
        <FormGroup>
          <Input type="radio" value={"."} name="emojis" onChange={onChange} />
          No Emojis
          <Input
            type="radio"
            value={"with added emojis."}
            name="emojis"
            onChange={onChange}
          />
          Include Emojis 📰 🗞️ 🥸
        </FormGroup>
        <Button
          color="success"
          onClick={() => {
            onClick();
            summarize([data, radioValues]);
            setIsLoading(true);
          }}
        >
          Quickread The News
        </Button>
      </Form>
    </div>
  );
};

export default ChoicesForm;
