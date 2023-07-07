window.addEventListener("load", () => {
  let body = document.getElementsByTagName("body")[0];
    let element = document.createElement("div");
    element.className="grid-item"
  element.innerHTML = "<h2>Welcome here</h2>";
  
    setTimeout(() => {
       
        body.appendChild(element);
    }, 1100);
});
