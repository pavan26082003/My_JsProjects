 let secondsElapsed = 0;
      interval = null;
      time = document.getElementById("time");

      function padstart(value) {
        return String(value).padStart(2, "0");
      }

      function setTime() {
        const minutes = Math.floor(secondsElapsed / 60);
        const seconds = secondsElapsed % 60;

        time.innerHTML = `${padstart(minutes)}:${padstart(seconds)}`;
      }

      function timer() {
        secondsElapsed++;
        setTime();
      }

      function start() {
        if (interval) stop();
        interval = setInterval(timer, 1000);
      }

      function stop() {
        clearInterval(interval);
        interval=null
      }

      function reset() {
        stop();
        secondsElapsed = 0;
        setTime();
      }
      setTime()