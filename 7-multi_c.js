const number = process.argv[2];
const arg = parseInt(number);

if(isNaN(arg) || arg <= 0){
    console.log("Missing number of occurrences")
}
else{
    for(i=0; i<arg; i++){
        console.log("C is fun")
    }
}