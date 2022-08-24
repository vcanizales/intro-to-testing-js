// helloWorld function
//work on a branch
//push to the branch
//pull request
function helloWorld() {
    return "Hello, World!"; }

// function sayHello(){
//     return "Hello, Jane!";
//}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!";
//     } else if (input === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

function sayHello(input) {
    if (input === undefined || input === false) {
        return "Hello, World!";
    } else {
            return "Hello," + " " + input + "!";
        }
}

function isFive(input){
    return input;
}
