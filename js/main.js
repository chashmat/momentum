import * as setup from './setup.js';

setup.clock();
setup.clockToogle.time.addEventListener("click", setup.clockToogle.shadow);
setup.clockToogle.time.addEventListener("dblclick", setup.clockToogle.timeReading);
console.table(setup);

if (localStorage.length == 0 || !("name" in localStorage)) {
      import('./new-user.js').then(({ newUser }) => {
            newUser();
      });
}