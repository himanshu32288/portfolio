import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import "./Toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../Context";
const Toggle = () => {
  const theme = useContext(ThemeContext);
  const toggle = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="t-icon" onClick={toggle} />
      <img src={Moon} alt="" className="t-icon" onClick={toggle} />
      <div
        className="t-button"
        style={{ left: theme.state.darkMode ? 0 : 25 }}
        onClick={toggle}
      ></div>
    </div>
  );
};

export default Toggle;
