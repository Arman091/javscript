// xhr PRACTICE USING XHR HTTP REQUEST


// READY STATES
/**
 *  0.unsent-> client has created but .open() method not called yet.
 *
 *  1. opened-> open() has been called and connection established.
 *
 *  2. Header_recieved:- send() method has been called and server has recieved the REQUEST and RESPONSE-HEADERS
 *                       availabe.
 *
 *  3.loading-> partial data may be available.
 *
 * 4. Done-> you can acces complete data.
 *
 */
const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Code to handle the successful response
    dataHandler(xhr.responseText); // send to a function
  }
};



// open methods to open request
/**
The third parameter in the xhr.open() method represents whether the request should be asynchronous or not. In your example, the value true is passed as the third parameter, indicating that the request should be asynchronous.
 */
xhr.open("GET", url, true);
xhr.send(); // sending the http request;


// function to handle the data what to do with it;
async function dataHandler(usersobject) {
  let data = await JSON.parse(usersobject);
  let users = data.slice(0, 12); // Create a new array with the first 10 items
  let element = document.getElementsByClassName("grid-continer")[0];
  users.forEach((user) => {
    let child = document.createElement("div");
    child.className = "grid-item";
    child.innerHTML = `User Id: ${user.id}`;
    element.appendChild(child);
  });
}