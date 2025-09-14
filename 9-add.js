function add(a, b) {
    return a + b;
}

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);

console.log(add(num1, num2));