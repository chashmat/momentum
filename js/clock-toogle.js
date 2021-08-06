// toggle shadow
let cards = document.getElementsByClassName("card");

let setFirstShadow = () => {
      if (localStorage.getItem("timeBorder") == "yes") {
            for (let i = 0; i < cards.length; i++) {
                  cards[i].classList.remove("no-shadow");
            }
      } else if (localStorage.getItem("timeBorder") == "no") {
            for (let i = 0; i < cards.length; i++) {
                  cards[i].classList.add("no-shadow");
            }
      }
};

let shadow = () => {
      for (let i = 0; i < cards.length; i++) {
            cards[i].classList.toggle("no-shadow");
            if (cards[i].classList.contains("no-shadow")) {
                  localStorage.setItem("timeBorder", "no");
            } else if (!(cards[i].classList.contains("no-shadow"))) {
                  localStorage.setItem("timeBorder", "yes");
            }
      }
};
// toogle 12-24

let time = document.getElementsByClassName("time")[0];

let timeReading = () => {
      if (localStorage.getItem("timeFormat") == "12") {
            localStorage.setItem("timeFormat", "24");
      } else if (localStorage.getItem("timeFormat") == "24") {
            localStorage.setItem("timeFormat", "12");
      }
};
export { time, shadow, timeReading, setFirstShadow };