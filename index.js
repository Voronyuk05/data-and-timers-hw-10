const targetDate = new Date('Oct 17, 2023');

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.querySelector("span[data-value='days']").textContent = padZero(days);
  document.querySelector("span[data-value='hours']").textContent = padZero(hours);
  document.querySelector("span[data-value='mins']").textContent = padZero(mins);
  document.querySelector("span[data-value='secs']").textContent = padZero(secs);
}

function padZero(number) {
  return (number < 10) ? `0${number}` : number;
}

setInterval(updateCountdown, 1000);
updateCountdown();