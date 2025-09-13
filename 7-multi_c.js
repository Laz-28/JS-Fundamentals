const number = process.argv[2];
const arg = parseInt(number);

if(isNaN(arg)){
    console.log("Missing number of occurrences")
}
else{
    for (const _ of Array.from({length: arg})) {
    console.log("C is fun");
    }
}