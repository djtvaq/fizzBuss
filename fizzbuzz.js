let input = parseInt(prompt('What is the number?'))

for (let counter = 1; counter <= input; counter++) {
    if (counter % 5 === 0 && counter % 3 === 0) {
    console.log("fizzbuzz")
    } else if (counter % 5 === 0) {
    console.log("buzz") 
    } else if (counter % 3 === 0) {
            console.log("fizz") 
    } else {
            console.log(counter)
    }

}