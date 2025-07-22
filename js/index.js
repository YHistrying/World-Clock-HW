function updateClock() {
  let londonElement = document.getElementById("#london");
  let londonDateElement = document.querySelector("#london .date");
  let londonTimeElement = document.querySelector("#london .time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerText = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let tokyoElement = document.getElementById("#tokyo");
  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoTimeElement = document.querySelector("#tokyo .time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerText = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateClock();
setInterval(updateClock, 1000);
