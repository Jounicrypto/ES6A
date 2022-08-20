window.onload = function () {

    document.querySelector("h1").style.color = "Blue";
};

window.alert("Hello From JS File");


//Styling Console Directive: %c

/*Data Types Intro

    String
    Number
    Array => object
    Object
    Boolean: True or false
*/

console.log("Nice Weather");
console.log(typeof "Nice Weather");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof ["os", "ah", "sa"]);
console.log(typeof{name: "Osama", age: 17, coutry:"NL"});
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

/*
    variables Intro
    What is Variables?
    Why We Use Variables?
    Declare A Variables And Use
    Syntax (Keyword | Variable Name | Assignment Operator | Variable Value)
    Variable Without Var
    Multiple Variables in The Same Line
    Id And Global Variable
    loosely Types vs Strongly Typed
*/

/*Declare then Use*/
var user = "Tim",
    age = 19

console.log(user + age);

console.log(hello);
hello.innerHTML ="We Are Developers";

/*
    Var:

    Redeclare (Yes)
    Access Before Declare(Undefined)
    Variable Scope Drama [Added To window]()
    Block or Function Scope

    Let:

    Redeclare(No => Error)
    Access Before Declare(Error)
    Variable Scope Drama()
    Block or Function Scope

    Const:

    Redeclare (No => Error)
    Access Before Declare(Error)
    Variable Scope Drama()
    Block or Fuction Scope
*/

/*Redeclare*/

var a = 1;
var a = 2;

console.log(a);

let b = 1;
let d = 2;

console.log(d);

/*String Syntax + Character Escape Sequences
\\Escape + Line Continue
\\n
*/

console.log('Programming');
console.log("Programming 'Score'");

/*Escape*/
console.log("Programming \'Score\'")
console.log("Software \\ Programming \'Score\'");


console.log('Hello there "Iam developer"');

console.log('Hello \
there \
"Iam developer"');

/*New Line Continue*/

console.log('Hello there\n"Iam developer"');

/*
    concatetion => Linking data
*/

/* Adding space between content*/
let c = "We Love"
let j = "JavaScript"

document.write( c + " " +j );

/*
    Tamplate Literals (Template String)
*/

let r = "We Love"
let m = "JavaScript"
let t = "And"
let k = "Programming"

console.log(r + "  \"\" " + m +
"\n" + t + " " + k);

console.log(`${r} ${m} ''
${t} ${k}`);


let title = "Coding"
let desc = "The Master Zone"
let markUp = `
    <div class="card"> 
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>

    </div>
`;

document.write(markUp)

