/**
 * ====================we will make an iccream===============================================
 */
let time = 7;
let ingrd = true;
let prom = new Promise(factory_open);
function factory_open(resolve, reject) {
  if (time < 9) {
    resolve();
  } else {
    reject();
  }
}

prom.then(() => {
  console.log("yes we are open");
});
prom.catch(() => {
  console.log("sorry we are done for today");
});

//==================================================================
// practice with another promise
let promis = new Promise((resolve, reject) => {
  if (ingrd) {
    resolve("we are passing argument from resolve"); //this argument will be passed to callback of then.
  } else {
    reject("we are passing argument from reject");
  }
});
let another_fun = (parameter) => {
  console.log(parameter, "ok  we have recieved what you passed");
};
promis.then(another_fun);
promis.catch();
