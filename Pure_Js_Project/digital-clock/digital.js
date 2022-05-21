const clock = document.querySelector(".clock");

(function dateUpdate() {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    let clockUpdate = (clock.textContent =
      hours + ":" + minute + ":" + seconds);
  }, 1000);
})();

// dateUpdate();
