# INTRODUCTION
Today, I am going to start revisiting javascript to dive deeper into the concepts of MERN stack development and open the gates of industry having more to explore, learn and handsome packages for me.

<!-- 2/4/2025 -->
# DATA TYPES
1) Number (12,1.2,-12,Infinity,NaN)
2) String
3) Bool
4) Null
5) Undefined
6) Symbol
7) BigInt:
In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.
const someNumber = 1234567890123456789012345678901234567890n; (n describes it as bigint)

# INTERACTION: ALERT, PROMPT, CONFIRM
1) prompt:The visitor can type something in the prompt input field and press OK. Then we get that text in the result. Or they can cancel the input by pressing Cancel or hitting the Esc key, then we get null as the result.
2) confirm: The result is true if OK is pressed and false otherwise.

# TYPE CONVERSIONS
1) String Conversion: String(value) // false => "false" && null =>"null"
2) Numeric Conversion: Number(value) or +(value) // If the string is not a valid number, the result of such a conversion is NaN
If value is null, it is converted to 0, undefined to NaN.
If String, Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
3) Boolean Conversion: Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false, otherwise they are true. // Boolean("0") === true ✅

# BASIC OPERATORS
1) Unary Operator: -x, --x, x--, +x(Numeric conversion), x++, etc.
2) Note that if any of the operands is a string, then the other one is converted to a string too.
alert(2 + 2 + '1' ); // "41" and not "221"
3) Unary plus has highest precedence followed by unary negation. Next is exponential, MDAS and assignment.
4) n *= 3 + 5; // right part evaluated first, same as n *= 8
5) Such operators (*=,+=) have the same precedence as a normal assignment, so they run after most other calculations

# BITWISE OPERATORS
1) Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
2) Bitwise operator (AND, OR, NOT, XOR, LEFT SHIFT <<, RIGHT SHIFT >>, ZERO-FILL RIGHT SHIFT >>>)
3) These operators are used very rarely, when we need to fiddle with numbers on the very lowest (bitwise) level. We won’t need these operators any time soon, as web development has little use of them, but in some special areas, such as cryptography, they are useful.

# COMPARISONS
1) String comparison: To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order. In other words, strings are compared letter-by-letter.
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
2) alert( null === undefined ); // false
3) alert( null == undefined ); // true
4) For maths and other comparisons < > <= >=, null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
5) Precedence of AND && is higher than OR ||

<!-- April 3, 2025 -->
# LOOPS
1) let i = 0; // we have i already declared and assigned
for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}
2) Labels for break/continue:
Sometimes we need to break out from multiple nested loops at once.
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}
3) The continue directive can also be used with a label. In this case, code execution jumps to the next iteration of the labeled loop.

# SWITCH-CASE
1) Grouping of cases, for both case 3 and 5, we have the following grouped case.
let a = 3;
switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

# FUNCTION
1) An empty return is also the same as return undefined.
2) function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
} // true one is returned
3) Function Declaration, Function Expression, and Arrow Functions
4) const sayHi = function(){} // function expression

# FUNCTION EXPRESSION
1) sayHi stores function as a value, but sayHi can call it.
2) This value can be copied to other variables.
let func = sayHi;
func(); // Hello
sayHi(); // Hello

# ARROW FUNCTION

<!-- April 4, 2025 4am coding -->
# DEBUGGING IN THE BROWSER
1) Open sources or debugger from dev tools.
2) There you find file navigation panel, code editor and javascript debugging pane.
3) A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution.
4) While the code is paused, we can examine current variables, execute commands in the console etc. In other words, we can debug it.
5) We can also pause the code by using the 'debugger' command in it, Such command works only when the development tools are open, otherwise the browser ignores it.
6) Watch – shows current values for any expressions.You can click the plus + and input an expression. The debugger will show its value, automatically recalculating it in the process of execution.
7) Call Stack – shows the nested calls chain. At the current moment the debugger is inside hello() call, called by a script in index.html (no function there, so it’s called “anonymous”). If you click on a stack item (e.g. “anonymous”), the debugger jumps to the corresponding code, and all its variables can be examined as well.
8) Scope – current variables. Local shows local function variables. You can also see their values highlighted right over the source. Global has global variables (out of any functions).

# CODING STYLE
1) Linters are tools that can automatically check the style of your code and make improving suggestions.
2) Here are some well-known linting tools:
  a)  JSLint – one of the first linters.
  b)  JSHint – more settings than JSLint.
  c)  ESLint – probably the newest one.

# TRANSPILERS AND POLYFILLS
1) How to make our modern code work on older engines that don’t understand recent features yet?
There are two tools for that:
  a)  Transpilers.
  b)  Polyfills.
2) A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.
Speaking of names, Babel is one of the most prominent transpilers out there. Modern project build systems, such as webpack, provide a means to run a transpiler automatically on every code change, so it’s very easy to integrate into the development process.
3) In some (very outdated) JavaScript engines, there’s no Math.trunc, so such code will fail. A script that updates/adds new functions is called “polyfill”. It “fills in” the gap and adds missing implementations. One interesting polyfill library is core-js, which supports a wide range of features and allows you to include only the ones you need.

<!-- April 4, 2025 Night session -->
# OBJECT
1) Object literal // const obj = new Object()
2) Object constructor // const obj = {}
3) delete obj.age
4) The variable key may be calculated at run-time or depend on the user input.
let user = {
  name: "John",
  age: 30
};
let key = prompt("What do you want to know about the user?", "name");
console.log(user[key])
5) A number 0 becomes a string "0" when used as a property key.
6) alert("age" in user)
let obj = {
  test: undefined
};
alert( obj.test ); // it's undefined, so - no such property?
alert( "test" in obj ); // true, the property does exist!
7) for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

# CLONING, MERGING AND OBJECT.ASSIGN
1) Cloning is simply creating an object named clone and using for loop, copying keys and values into it.
2) Object.assign(dest, ...sources).
3) Nested cloning: Until now we assumed that all properties of user are primitive. But properties can be references to other objects.
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};
alert( user.sizes.height ); 
Now it’s not enough to copy clone.sizes = user.sizes, because user.sizes is an object, and will be copied by reference, so clone and user will share the same sizes. Use structuredClone for this.
let clone = structuredClone(user)
4) Although, there are cases when structuredClone fails. For instance, when an object has a function property. // Research work needs to be done for this purpose.

# GARBAGE COLLECTION
JS has garbage collector running all the time, looking for garbage to be removed. Unreachable objects you can say, are removed.

# OBJECT METHODS "this
1) When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.
2) user = {
  sayHi: function() {
    alert("Hello");
  }
};
3) It can be used in any function, even if it’s not a method of an object.
function sayHi() {
  alert( this.name );
}
4) Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function. That’s a special feature of arrow functions, it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context.

# CONSTRUCTOR, OPERATOR "new"
1) Constructor functions technically are regular functions. There are two conventions though:

  a)  They are named with capital letter first.
  b)  They should be executed only with "new" operator.
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack");
INTERNAL WORKING
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

2) Technically, any function (except arrow functions, as they don’t have this) can be used as a constructor.
3) Inside a function, we can check whether it was called with new or without it, using a special new.target property. It is undefined for regular calls and equals the function if called with new.
function User(name) {
  if (!new.target) { // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}
let john = User("John"); // redirects call to new User
alert(john.name); // John
# OPTIONAL CHAINING
1) ?.() is used to call a function that may not exist. user.isAdmin?.()