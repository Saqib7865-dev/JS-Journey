// console.log(100/0)

let a = 5;

switch (a) {
  case 4:
    console.log("Right!");
    break;

  case 3: // (*) grouped two cases
  case 5:
    console.log("Wrong!");
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log("The result is strange. Really.");
}
