// FETCH API ALLOWES TO MAKE HTTP REQUEST AND HANDLE RESPONSE EASILY;

// IT RETURNS A PROMOSE OBJECT THAT CAN BE HANDLES ACCORDINGLY;
// const url = "https://jsonplaceholder.typicode.com/posts";
const url = "https://floralcart.onrender.com/products";
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response
    
    /**
     * The response.json() method in the Fetch API is used to extract the JSON body content from the HTTP response.
     *  It reads the response stream to completion, parses the content as JSON, and returns a promise that resolves
     *  to the JavaScript object corresponding to the JSON data.
     */
    }).then((data) => {
        console.log(data);
  })

