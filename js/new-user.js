let newUser = () => {
      localStorage.setItem("bg", "./images/bg/bg1.jpg");
      localStorage.setItem("timeFormat", "12");
      localStorage.setItem("timeBorder", "yes");
      namePage.classList.toggle("hide-name");
      localStorage.setItem("searchEngine", "google");
};

// cuz of this, bg pic can't load when localStorage 0

export { newUser };