const mainContainer = document.querySelector(".container");
const loader = document.querySelector("#loader");
const date = document.querySelector("#date");
const confirmed = document.querySelector("#confirmed");
const death = document.querySelector("#deaths");
const recovered = document.querySelector("#recovered");

mainContainer.style.display = "none";

function getData() {
  const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((json) => processData(json))
    .catch((err) => console.error(err));
}

function processData(data) {
  //console.log(extractMauritiusData(data));
  const latest = extractMauritiusData(data);
  date.innerHTML = latest.date;
  confirmed.innerHTML = `Confimed: ${latest.confirmed}`;
  death.innerHTML = `Death:${latest.deaths}`;
  recovered.innerHTML = `Recovered: ${latest.recovered}`;
  setTimeout(() => {
    loader.style.display = "none";
    mainContainer.style.display = "flex";
  }, 2000);
}

function extractMauritiusData(data) {
  return data.Mauritius[data.Mauritius.length - 1];
}

getData();
