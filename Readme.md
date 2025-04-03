# INTRODUCTION
Today, I am going to start revisiting javascript to dive deeper into the concepts of MERN stack development and open the gates of industry having more to explore, learn and handsome packages for me.

<!-- 2/4/2025 -->
# Data types
1)  Number (12,1.2,-12,Infinity,NaN)
2) String
3) Bool
4) Null
5) Undefined
6) Symbol
7) BigInt:
In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
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
# Loops
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

# Switch-Case
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

# Function
1) An empty return is also the same as return undefined.
2) function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
} // true one is returned
3) Function Declaration, Function Expression, and Arrow Functions
4) const sayHi = function(){} // function expression

# Function Expression
1) sayHi stores function as a value, but sayHi can call it.
2) This value can be copied to other variables.
let func = sayHi;
func(); // Hello
sayHi(); // Hello

# ARROW FUNCTION
