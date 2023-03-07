import { getAdvice } from "./api";
import DiceIcon from './images/icon-dice.svg';

function MainCard() {
  const handleClick = async () => {
    const data = await getAdvice();
    const id = data.id;
    const advice = data.advice;
    document.getElementById("AdvID").innerText = id;
    document.getElementById("Adv").innerText = advice;
  };

  return (
    <div>
      <h1>Main Card</h1>
      <p>
        Advice Id: <span id="AdvID">0</span>
      </p>
      <p>
        Advice: <span id="Adv">This is an advice</span>
      </p>
      <button onClick={handleClick}><img src={DiceIcon} alt="get new advice" /></button>
    </div>
  );
}

export default MainCard;
