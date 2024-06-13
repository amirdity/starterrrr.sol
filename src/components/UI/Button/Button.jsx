import "./Button.css";
import propTypes  from "prop-types";
function Button({ children, onClick, type }) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: propTypes.element,
  onClick: propTypes.func,
  type: propTypes.any,
};
export default Button;
