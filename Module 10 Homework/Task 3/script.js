const wsUri = "wss://echo-ws-service.herokuapp.com";

function pageLoaded() {
  const infoOutput = document.querySelector(".info_output");
  const chatOutput = document.querySelector(".chat_output");
  const input = document.querySelector("input");
  const sendBtn = document.querySelector(".btn_send");
  
  let socket = new WebSocket(wsUri);
  
  socket.onopen = () => {
    infoOutput.innerText = "Соединение установлено";
  }
  
  socket.onmessage = (event) => {
    writeToChat(event.data, true);
  }
  
  socket.onerror = () => {
    infoOutput.innerText = "При передаче данных произошла ошибка";
  }
  
  sendBtn.addEventListener("click", sendMessage);
  
  function sendMessage() {
    if (!input.value) return;
    socket.send(input.value);
    writeToChat(input.value, false);
    input.value === "";
  }
  
  function writeToChat(message, isReceived) {
    let messageHTML = `<div class="${isReceived? "received" : "sent"}">${message}</div>`;
    chatOutput.innerHTML += messageHTML;
  }
}
document.addEventListener("DOMContentLoaded", pageLoaded);


const mapLink = document.querySelector ('#map-link');
const geoBtn = document.querySelector ('.btn_geo');

const error = () => {
  alert("Невозможно получить Ваше местоположение");
}

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
}

geoBtn.addEventListener('click', () => {
  const chatOutput = document.querySelector(".chat_output");
  
  let messageGeo = `<div style = "align-self: flex-end"><a href = ${mapLink} style="display:flex" target="_blank">Геолокация</a></div>`;
    chatOutput.innerHTML += messageGeo;
}) 
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  };