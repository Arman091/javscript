const heading1 = document.getElementsByClassName("grid-item")[1];
const heading2 = document.getElementsByClassName("grid-item")[2];
const heading3 = document.getElementsByClassName("grid-item")[3];
const heading4 = document.getElementsByClassName("grid-item")[4];
const heading5 = document.getElementsByClassName("grid-item")[5];

function changeColor(heading, text, color, onSuccesNextstep,errorHandler) {
  setTimeout(() => {
    heading.textContent = text;
    heading.style.color = color;

    if (onSuccesNextstep) {
      onSuccesNextstep();
    }
    else {
      errorHandler();
    }
  }, 1000);
}

changeColor(heading1, "step 1", "red", () => {
    changeColor(heading2, "step 2", "green", () => {
        changeColor(heading3, "step 3", "violet", () => {
          changeColor(heading4, "step 4", "blue", () => {
            changeColor(heading5, "step 5", "grey", () => {
                        console.log("End of program ")
            }, () => {console.log("error performing action") })
           },()=>{console.log("error performing operation");}) 
        },()=>{console.log("error performing operation");})
    },()=>{console.log("error performing operation");})
},()=>{console.log("error performing operation");});
