// file upload sys

let speechPage = document.getElementsByClassName("speech")[0];

let customBginput = document.getElementById("file");
let labelInput = document.getElementsByTagName("label")[0];
let restoreDefault = document.getElementsByClassName("restore-default")[0];
let body = document.body;
if (!("bg" in localStorage)) {
      localStorage.setItem("bg", "./images/bg/bg1.jpg");
}
if (localStorage.getItem("bg") == "./images/bg/bg1.jpg") {
      labelInput.style.display = "flex";
      restoreDefault.style.display = "none";
} else {
      labelInput.style.display = "none";
      restoreDefault.style.display = "flex";
}

customBginput.addEventListener("change", function (e) {
      const file = e.target.files[0];

      if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                  body.style.background = `url("${this.result}") center top / cover no-repeat`;
                  localStorage.setItem("bg", this.result);
                  speechPage.style.background = `url("${localStorage.getItem("bg")}") center top / cover no-repeat`;
                  labelInput.style.display = "none";
                  restoreDefault.style.display = "flex";
            });
            reader.readAsDataURL(file);
      }
});

restoreDefault.addEventListener("click", function () {
      localStorage.setItem("bg", "./images/bg/bg1.jpg");
      body.style.background = `url("${localStorage.getItem("bg")}") center top / cover no-repeat`;
      speechPage.style.background = `url("${localStorage.getItem("bg")}") center top / cover no-repeat`;
      labelInput.style.display = "flex";
      restoreDefault.style.display = "none";
});

// clock sys

let hour = document.getElementsByClassName("hour")[0];
let minute = document.getElementsByClassName("min")[0];
let second = document.getElementsByClassName("sec")[0];
let amPm = document.getElementsByClassName("am-pm")[0];

if (!("timeFormat" in localStorage)) {
      localStorage.setItem("timeFormat", "12");
}

function clock() {
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
clock();

// toogle 12-24

let time = document.getElementsByClassName("time")[0];
time.addEventListener("dblclick", function () {
      if (localStorage.getItem("timeFormat") == "12") {
            localStorage.setItem("timeFormat", "24");
      } else if (localStorage.getItem("timeFormat") == "24") {
            localStorage.setItem("timeFormat", "12");
      }
});

// toggle shadow
let cards = document.getElementsByClassName("card");

if (!("timeBorder" in localStorage)) {
      localStorage.setItem("timeBorder", "yes");
}

if (localStorage.getItem("timeBorder") == "yes") {
      for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("no-shadow");
      }
} else if (localStorage.getItem("timeBorder") == "no") {
      for (let i = 0; i < cards.length; i++) {
            cards[i].classList.add("no-shadow");
      }
}

time.addEventListener("click", function () {
      for (let i = 0; i < cards.length; i++) {
            cards[i].classList.toggle("no-shadow");
            if (cards[i].classList.contains("no-shadow")) {
                  localStorage.setItem("timeBorder", "no");
            } else if (!(cards[i].classList.contains("no-shadow"))) {
                  localStorage.setItem("timeBorder", "yes");
            }
      }
});

// Set greetings
let greetingElement = document.getElementsByClassName("greeting")[0];
function setGreeting() {
      let name = localStorage.getItem("name");
      let date = new Date();
      let hr = date.getHours();
      if (hr >= 0 && hr < 6) {
            greetingElement.innerHTML = `It's Sleeping time go sleep, ${name}.`;
      } else if (hr >= 6 && hr < 12) {
            greetingElement.innerHTML = `Good Morning, ${name}.`;
      } else if (hr >= 12 && hr < 17) {
            greetingElement.innerHTML = `Good Afternoon, ${name}.`;
      } else if (hr >= 17 && hr < 20) {
            greetingElement.innerHTML = `Good Evening, ${name}.`;
      } else if (hr >= 20 && hr <= 23) {
            greetingElement.innerHTML = `Good Night, ${name}.`;
      }
}

setGreeting();

// name storing sys

let namePage = document.getElementsByClassName("get-name")[0];
let nameInput = document.getElementsByClassName("write-name")[0];
let continueBtn = document.getElementsByClassName("next")[0];
let errorCode = document.getElementsByClassName("error")[0];

if (!("name" in localStorage)) {
      namePage.classList.toggle("hide-name");
}

function setItemName() {
      if (nameInput.value == "") {
            errorCode.style.opacity = 1;
      } else if (nameInput.value != "") {
            localStorage.setItem("name", nameInput.value);
            namePage.style.display = "none";
            setGreeting();
      }
}

nameInput.addEventListener("keyup", function (e) {
      keyCode = e.keyCode || e.which;
      if (nameInput.value != "") {
            errorCode.style.opacity = 0;
            continueBtn.style.visibility = "visible";
            setTimeout(() => {
                  continueBtn.style.opacity = 1;
            }, 1);
      } else if (nameInput.value == "") {
            continueBtn.style.opacity = 0;
            setTimeout(() => {
                  continueBtn.style.visibility = "hidden";
            }, 1);
      }
      if (keyCode == 13) {
            setItemName();
      }
});

continueBtn.addEventListener("click", function () {
      setItemName();
});

// slection sys
let logo = document.getElementsByClassName("logo")[0];
let downArrow = document.getElementsByClassName("down-arrow")[0];
let selectionBox = document.getElementsByClassName("selection")[0];
let options = [
      {
            value: document.getElementsByClassName("google")[0],
            id: "google"
      },
      {
            value: document.getElementsByClassName("bing")[0],
            id: "bing"
      },
      {
            value: document.getElementsByClassName("duckduckgo")[0],
            id: "duckduckgo"
      }
]
downArrow.addEventListener("click", function () {
      hideShowSlectionBox();
});

function hideShowSlectionBox() {
      if (selectionBox.style.opacity == 0) {
            selectionBox.style.visibility = "visible";
            setTimeout(() => {
                  selectionBox.style.opacity = 1;
                  selectionBox.style.transform = "translate(36px, 40px)";
            }, 1);
      } else if (selectionBox.style.opacity == 1) {
            selectionBox.style.visibility = "hidden";
            setTimeout(() => {
                  selectionBox.style.opacity = 0;
                  selectionBox.style.transform = "translate(36px, 16px)";
            }, 1);
      }
}

if (!("searchEngine" in localStorage)) {
      localStorage.setItem("searchEngine", "google");
}

function setLogo() {
      if (localStorage.getItem("searchEngine") == "google") {
            logo.classList.add("google");
            logo.classList.remove("bing");
            logo.classList.remove("duckduckgo");
      } else if (localStorage.getItem("searchEngine") == "bing") {
            logo.classList.add("bing");
            logo.classList.remove("google");
            logo.classList.remove("duckduckgo");
      } else if (localStorage.getItem("searchEngine") == "duckduckgo") {
            logo.classList.add("duckduckgo");
            logo.classList.remove("bing");
            logo.classList.remove("google");
      }
}

setLogo();

for (let i = 0; i < options.length; i++) {
      options[i].value.addEventListener("click", function () {
            localStorage.setItem("searchEngine", options[i].id);
            hideShowSlectionBox();
            setLogo();
      });
}

// search engine sys by mic
let textDisplayWait = document.getElementsByClassName("wait")[0];
let textDisplayListen = document.getElementsByClassName("listen")[0];
let textDisplayResult = document.getElementsByClassName("result")[0];
let holder = document.getElementsByClassName("cont-opt")[0];
let searchMic = document.getElementsByClassName("search")[0];
let cancelMic = document.getElementsByClassName("cancel");
let mic = document.getElementsByClassName("mic-icon")[0];
let micQuery = null;
let holderFail = document.getElementsByClassName("cont-opt-fail")[0];
let tryAgain = document.getElementsByClassName("try-again")[0];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.addEventListener("error", function () {
      textDisplayListen.style.display = "none";
      textDisplayResult.innerHTML = "Sorry can't get your voice.";
      textDisplayResult.style.display = "block";
      setTimeout(() => {
            textDisplayResult.style.opacity = 1;
            holderFail.style.visibility = "visible";
            setTimeout(() => {
                  holderFail.style.opacity = 1;
            }, 100);
      }, 1);
});

speechPage.style.background = `url("${localStorage.getItem("bg")}") center top / cover no-repeat`;

recognition.addEventListener("result", function (e) {
      textDisplayListen.style.opacity = 0;
      setTimeout(() => {
            textDisplayListen.style.display = "none";
            textDisplayResult.innerHTML = e.results[e.resultIndex][e.resultIndex].transcript;
            micQuery = e.results[e.resultIndex][e.resultIndex].transcript;
            textDisplayResult.style.display = "block";
            setTimeout(() => {
                  textDisplayResult.style.opacity = 1;
                  holder.style.visibility = "visible";
                  setTimeout(() => {
                        holder.style.opacity = 1;
                  }, 100);
            }, 10);
      }, 1);
});

mic.addEventListener("click", function () {
      speechPage.style.display = "flex";
      textDisplayWait.style.display = "block";
      setTimeout(() => {
            textDisplayWait.style.opacity = 1;
      }, 1);
      setTimeout(function () {
            recognition.start();
            textDisplayWait.style.opacity = 0;
            setTimeout(() => {
                  textDisplayWait.style.display = "none";
                  textDisplayListen.style.display = "block";
                  setTimeout(() => {
                        textDisplayListen.style.opacity = 1;
                  }, 10);
            }, 1);
      }, 1000);
});

for (i = 0; i < cancelMic.length; i++) {
      cancelMic[i].addEventListener("click", function () {
            speechPage.style.display = "none";
            textDisplayResult.innerHTML = "";
            textDisplayResult.style.display = "none";
            textDisplayResult.style.opacity = 0;
            holder.style.opacity = 0;
            holderFail.style.opacity = 0;
            setTimeout(() => {
                  holder.style.visibility = "hidden";
                  holderFail.style.visibility = "hidden";
            }, 1);
      });
}

searchMic.addEventListener("click", function () {
      let url, query;
      let searchEngine = localStorage.getItem("searchEngine");
      if (searchEngine == "google") {
            url = "https://www.google.com/search?q=";
      } else if (searchEngine == "bing") {
            url = "https://www.bing.com/search?q=";
      } else if (searchEngine == "duckduckgo") {
            url = "https://duckduckgo.com/?q=";
      }
      query = url + micQuery;
      window.open(query, "_self");
});

tryAgain.addEventListener("click", function () {
      textDisplayResult.style.display = "none";
      textDisplayWait.style.display = "block";
      holderFail.style.opacity = 0;
      setTimeout(() => {
            textDisplayWait.style.opacity = 1;
            holderFail.style.visibility = "hidden";
      }, 1);
      setTimeout(function () {
            recognition.start();
            textDisplayWait.style.opacity = 0;
            setTimeout(() => {
                  textDisplayWait.style.display = "none";
                  textDisplayListen.style.display = "block";
                  setTimeout(() => {
                        textDisplayListen.style.opacity = 1;
                  }, 10);
            }, 1);
      }, 1000);
});

// search engine sys by input
let searchBtn = document.getElementsByClassName("search-icon")[0];
let input = document.getElementsByClassName("search-query")[0];

function search() {
      if (input.value != "") {
            let query = input.value;
            let url;
            let searchEngine = localStorage.getItem("searchEngine");
            if (searchEngine == "google") {
                  url = "https://www.google.com/search?q=";
            } else if (searchEngine == "bing") {
                  url = "https://www.bing.com/search?q=";
            } else if (searchEngine == "duckduckgo") {
                  url = "https://duckduckgo.com/?q=";
            }
            let search = url + query;
            window.open(search, "_self");
      }
}

searchBtn.addEventListener("click", search);
input.addEventListener("keyup", function (e) {
      let key = e.keyCode;
      if (key == 13) {
            search();
      }
});

// Loading sys
let loadImg = document.getElementsByClassName("img-loader")[0];
let loadContent = document.getElementsByClassName("load")[0];
window.addEventListener("load", function () {
      setTimeout(() => {
            loadImg.style.display = "none";
            loadContent.style.display = "block";
            body.style.background = `url("${localStorage.getItem("bg")}") center top / cover no-repeat`;
      }, 700);
});