function updateClock() {
  let londonDateElement = document.querySelector("#london .date");
  let londonTimeElement = document.querySelector("#london .time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoTimeElement = document.querySelector("#tokyo .time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let sydneyDateElement = document.querySelector("#sydney .date");
  let sydneyTimeElement = document.querySelector("#sydney .time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let berlinDateElement = document.querySelector("#berlin .date");
  let berlinTimeElement = document.querySelector("#berlin .time");
  let berlinTime = moment().tz("Europe/Berlin");
  berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
  berlinTimeElement.innerHTML = berlinTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateClock();
setInterval(updateClock, 1000);

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityElement = document.querySelector("#chosen-city");
  let cityTimeNow = moment().tz(cityTimeZone);
  let cityDateNow = cityTimeNow.format("MMMM Do YYYY");
  let cityTimeNowFormatted = cityTimeNow.format("hh:mm:ss");
  let cityTimeNowAmPm = cityTimeNow.format("A");

  cityElement.innerHTML = `<div class="city">
      <div>
          <h2 class="city-name">${cityName}</h2>
          <div class="date">${cityDateNow}</div>
        </div>
        <div class="time">${cityTimeNowFormatted} <small>${cityTimeNowAmPm}</small></div>
    </div>
    <a href="https://sc-world-clock-hw.netlify.app/">Back to all countries</a>`;
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", changeCity);
