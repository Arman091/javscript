// window.addEventListener("load", () => {
//   let body = document.getElementsByClassName("grid-container")[0];
//   let element = document.createElement("div");
//   element.className = "grid-item";
//   element.innerHTML = "<h2>Welcome here</h2>";

//   setTimeout(() => {
//     body.appendChild(element);
//   }, 1100);
// });

//CALLBACK HELL AND PYRAMID OF DOOM

const heading1 = document.getElementsByClassName("grid-item")[1];
const heading2 = document.getElementsByClassName("grid-item")[2];
const heading3 = document.getElementsByClassName("grid-item")[3];
const heading4 = document.getElementsByClassName("grid-item")[4];
const heading5 = document.getElementsByClassName("grid-item")[5];

setTimeout(() => {
  heading1.textContent = "step 1";
  heading1.style.color = "red";
  setTimeout(() => {
    heading2.textContent = "step 2";
    heading2.style.color = "green";
    setTimeout(() => {
      heading3.textContent = "step 3";
      heading3.style.color = "purple";
      setTimeout(() => {
        heading4.textContent = "step 4";
          heading4.style.color = "blue";
          setTimeout(() => {
              heading5.textContent = "step 5";
              heading5.style.color="grey"
          },1000)
      }, 1300);
    }, 1200);
  }, 1000);
}, 1000);
