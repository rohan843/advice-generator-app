import { getAdvice } from "./api";
import DiceIcon from "./images/icon-dice.svg";
import DividerImg from "./images/pattern-divider-desktop.svg";

function MainCard() {
  const handleClick = async () => {
    const data = await getAdvice();
    const id = data.id;
    const advice = data.advice;
    document.getElementById("AdvID").innerText = id;
    document.getElementById("Adv").innerText = advice;
  };

  // Fetch first advice
  handleClick();

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <p>
            ADVICE #<span id="AdvID"></span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>
            "<span id="Adv"></span>"
          </p>
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
