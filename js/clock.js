
let hour = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("min")[0];
let second = document.getElementsByClassName("sec")[0];
let amPm = document.getElementsByClassName("am-pm")[0];

let clock = () => {
      let date = new Date();
      let hr = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();

      if (localStorage.getItem("timeFormat") == 24) {
            hour.innerHTML = hr;
            minute.innerHTML = min;
            if (parseInt(hour.innerHTML) < 10 && parseInt(hour.innerHTML) >= 0) {
                  hour.innerHTML = "0" + hr;
            }
            if (parseInt(minute.innerHTML) < 10 && parseInt(minute.innerHTML) >= 0) {
                  minute.innerHTML = "0" + min;
            }
            second.style.opacity = 0;
            amPm.style.display = "none";
      } else if (localStorage.getItem("timeFormat") == 12) {
            hour.innerHTML = hr % 12;
            minute.innerHTML = min;
            if (hr == 0 || hr == 12) {
                  hour.innerHTML = 12;
            }
            if (parseInt(hour.innerHTML) < 10 && parseInt(hour.innerHTML) >= 0) {
                  hour.innerHTML = "0" + hr % 12;
            }
            if (parseInt(minute.innerHTML) < 10 && parseInt(minute.innerHTML) >= 0) {
                  minute.innerHTML = "0" + min;
            }
            if (sec % 2 == 0) {
                  second.style.opacity = 0;
            } else if (sec % 2 == 1) {
                  second.style.opacity = 1;
            }
            amPm.style.display = "block";
            if (hr < 12 && hr >= 0) {
                  amPm.innerHTML = "am"
            } else if (hr > 11 && hr < 24) {
                  amPm.innerHTML = "pm";
            }
      }
      setTimeout(clock, 1000);
}

export { clock };