import { getAdvice } from "./api";
import { useState } from "react";
import DiceIcon from "./images/icon-dice.svg";
import DividerImg from "./images/pattern-divider-desktop.svg";
import "./MainCard.css";

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
    <div className="main-card" style={{ position: "relative" }}>
      <div
        style={{
          zIndex: 100,
          position: "absolute",
          bottom: "20%",
          left: "8.5%",
        }}
      >
        <img src={DividerImg} alt="divider" />
      </div>
      <div
        style={{
          zIndex: 100,
          position: "absolute",
          bottom: "-10.5%",
          left: "44.42%",
        }}
      >
        <button className="new-advice-button" onClick={handleClick}>
          <img src={DiceIcon} alt="get new advice" />
        </button>
      </div>
      <div className="container text-center ">
        <div className="row">
          <div className="col advice-section">
            <p>ADVICE #{advID}</p>
          </div>
        </div>
        <div className="row advice-text-section">
          <div className="col">
            <p>"{adv}"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
