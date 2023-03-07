import axios from "axios";

async function getAdvice() {
  const response = await axios.get("https://api.adviceslip.com/advice");
  console.log(response.data.slip);
  return response.data.slip;
}

export { getAdvice };
