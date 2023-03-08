import { getAdvice } from "./api";
import { useState } from "react";
import DiceIcon from "./images/icon-dice.svg";
import DividerImg from "./images/pattern-divider-desktop.svg";

function MainCard() {
  const [advID, setAdvID] = useState("");
  const [adv, setAdv] = useState("");
  const handleClick = async () => {
    const data = await getAdvice();
    const id = data.id;
    const advice = data.advice;
    setAdvID(id);
    setAdv(advice);
  };

  // Fetch first advice
  handleClick();

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <p>ADVICE #{advID}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>"{adv}"</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={DividerImg} alt="divider" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button onClick={handleClick}>
            <img src={DiceIcon} alt="get new advice" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
