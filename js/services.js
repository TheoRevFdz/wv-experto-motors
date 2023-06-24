const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = "Cliente";

const msgerForm = document.getElementsByClassName("msger-inputarea")[0];
const msgerInput = document.getElementById("msger-input");
const msgerChat = document.getElementById("msger-chat");
const optionListChat = document.getElementById("msg-text");
const msgerButton = document.getElementById("msger-button");
const msger = document.getElementById("msger");
const chatButton = document.getElementById("chat-btn");

const chat_bot = [{
  id: "1",
  accion: "Recibir información del estado de tu compra.",
  respuesta: "Su pedido será entregado el día de sábado entre las 2pm a 8pm."
}, {
  id: "2",
  accion: "Necesitas ayuda para realizar tu compra",
  respuesta: "En breve un asesor lo contactará"
}, {
  id: "3",
  accion: "No recibiste email con to orden de compra",
  respuesta: "Revise su bandeja de entrada en 10 minutos máximo."
}]

function appendMessage(name, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function hideChat() {
  msger.style.display = "none";
}

hideChat()

// Utils

const delay = (msgText,time) => msgText.split(" ").length * time;

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isNumber(char) {
  return /^\d$/.test(char);
}

msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  if(isNumber(msgText) &&  (msgText ==='1'|| msgText==='2'||msgText==='3')) {
    const getMessage= chat_bot.find(el => el.id === msgText).respuesta
    appendMessage(PERSON_NAME, "right", msgText);
    msgerInput.value = "";

    setTimeout(() => {
      appendMessage(BOT_NAME, "left", getMessage);
    }, delay(msgText,100));
  
  } else {
    appendMessage(BOT_NAME, "left", 'Ingresa una opción valida');
    msgerInput.value = "";
  }


});

msgerButton.addEventListener("click", event => {
  hideChat()
})

chatButton.addEventListener("click", event => {
  msger.style.display = "flex";
})





