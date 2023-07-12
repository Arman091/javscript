// xhr PRACTICE USING XHR HTTP REQUEST
const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();

// READY STATES
/**
 *  0.unsent-> client has created but .open() method not called yet.
 *
 *  1. opened-> open() has been called and connection established.
 *
 *  2. Header_recieved:- send() method has been called and server has recieved the REQUEST and RESPONSE-HEADERS
 *                       availabe.
 *
 *  3.
 *
 */
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Code to handle the successful response
    console.log(xhr.responseText);
  }
};


// open methods to open request
/**
The third parameter in the xhr.open() method represents whether the request should be asynchronous or not. In your example, the value true is passed as the third parameter, indicating that the request should be asynchronous.
 */
xhr.open("GET", url,true);
xhr.send();
