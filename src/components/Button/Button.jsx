import { useState } from "react";
import "./button.css";

function Button(props) {
  const [colorState, setColorState] = useState(
    { backgroundColor: props.color, 
      borderColor: "red" }
    );

  function handleClick() { 
    setColorState({ backgroundColor: "#cc76cc" });
  }

  return (
    <button onClick={handleClick} style={colorState} className="btn">
      {props.children}
    </button>
  );
}

export default Button;
