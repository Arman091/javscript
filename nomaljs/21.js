
const arr = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const btn = document.getElementById('btn');


btn.addEventListener("click", function () {
    
    let index = '#';
    for (i = 0; i < 6; i++){
        index += arr[getRandomNumber()]
        console.log(index)
    }
   
    

})

function getRandomNumber() {
   
    return Math.floor((Math.random() * arr.length))
    
}