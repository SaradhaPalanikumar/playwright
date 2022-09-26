function reverseString(str: string) {
    let reversestr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversestr =reversestr+ str.charAt(i);
    }
    return reversestr;
  }
  
  let str = "Good Evening";
  let reverseStr = reverseString(str);
  
  console.log("Given string: " + str);
  console.log("Reversed string: " + reverseStr);

  //Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned  //for removing restriction on tsc
/*
  function Reverse(str :string)
{
    let strArr = str.split("");
    let reverseStr = strArr.reverse();
    let reversestring = reverseStr.join("");
    return reversestring;
}


let givenstr = "Good Evening";
console.log("The given string is " + givenstr);
console.log("The Reversed String is "+Reverse(givenstr));*/

