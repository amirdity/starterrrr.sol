import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

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
      <div className="form-control">
        <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
        <input
          style={{
            borderColor: isValid ? "black" : "red",
            backgroundColor: isValid ? "transparent" : "salmon",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
}
CourseInput.propTypes = {
  onAddGoal: PropTypes.func,
};
export default CourseInput;
