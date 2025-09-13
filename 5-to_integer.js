const arg = process.argv[2];
const number = parseInt(arg);
if(isNaN(number)){
    console.log("This is not a number");
}
else{
    console.log(`The number is: ${number}`);
}
