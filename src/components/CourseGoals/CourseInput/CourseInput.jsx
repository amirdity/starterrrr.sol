import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components";
const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  /* if form-control is in the same element with invalid run this code  */
  &.invalid input {
    border-color: red;
    background: #ffd7d7;
  }
  &.invalid label {
    color: red;
  }
`;

function CourseInput({ onAddGoal }) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid && "invalid"}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
CourseInput.propTypes = {
  onAddGoal: PropTypes.func,
};
export default CourseInput;
