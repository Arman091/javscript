// exports with name

export let food = "sushi";
export let drink = "tea";

// default export type here

//==  NOTE-> ONLY ONE DEFAULT EXPORT PER MODULE IS ALLOWED
export default function eat() {
    console.log(`eat the ${food} and drink The ${drink}`)
}


