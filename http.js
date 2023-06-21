
//create http request
//open http request
//send requets
//checkstatus

// we should wrap up all the data in a single function
// callback will have two inputs

const getTodos = (resource,callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data);                              //calling callback functions and pass
                                                                   //err and data as parameter
        }

        else if (request.readyState === 4) {
            callback('could not fetch data', undefined);            //calling callback functions
        }
    })

    request.open('GET', resource);
    request.send(); 
}

getTodos('./todos/arman.json' ,(err, data) => {                        //callback calling this (err,data)

    console.log(data);
    getTodos('./todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('./todos/shaun.json', (err, data) => {                //callbak hell here
            console.log(data);
        })
    })
    
})




