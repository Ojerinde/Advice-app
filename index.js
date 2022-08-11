const container = document.querySelector(".contain");
const button = document.querySelector(".dice_img");

const dataFetcher = async function () {
  try {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const data = await response.json();
    container.textContent = ''
    container.innerHTML = `<div class="advice_id">Advice ${data.slip.id}</div>
      <div class="advice_text">"${data.slip.advice}"</div>`;
  } catch (error) {
    container.textContent = error.message;
  }
};
button.addEventListener("click", dataFetcher);
