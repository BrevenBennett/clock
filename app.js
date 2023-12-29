const hourHand = document.querySelector(".hour__hand");
const minuteHand = document.querySelector(".minute__hand");
const secondHand = document.querySelector(".second__hand");
const millisecondHand = document.querySelector(".millisecond__hand");

requestAnimationFrame(setHands);

function setHands() {
  const d = new Date();

  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const milliseconds = d.getMilliseconds();

  // Increment millisecond hand 360 degrees every 1000ms
  const millisecondsAngle = (milliseconds * 360) / 1000;

  // Increment hand by 6 degrees every 1000 ms
  const secondsScaleFactor = 6 / 1000;
  const extraSecondsAngle = milliseconds * secondsScaleFactor;
  const secondsAngle = seconds * 6 + extraSecondsAngle;

  // Increment hand 0.1 degrees every second
  // 0.1 degree per second = 6 degrees / 60 seconds
  const minutesScaleFactor = 6 / 60;
  const extraMinutesAngle = seconds * minutesScaleFactor;
  const minutesAngle = minutes * 6 + extraMinutesAngle;

  // Increment hand 0.5 degrees every minute
  // 0.5 degree per minute = 30 degrees / 60 minutes
  const hoursScaleFactor = 30 / 60;
  const extraHoursAngle = minutes * hoursScaleFactor;
  const hoursAngle = hours * 30 + extraHoursAngle;

  millisecondHand.style.transform = `translateX(-50%) rotate(${millisecondsAngle}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;

  requestAnimationFrame(setHands);
}
