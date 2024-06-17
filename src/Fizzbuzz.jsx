import React from "react";

export default function Fizzbuzz() {
  const [fizzBuzzNumber, setFizzBuzzNumber] = React.useState(1);

  function increaseFizzBuzzNumber() {
    setFizzBuzzNumber((number) => number + 1);
  }

  function resetFizzBuzzNumber() {
    setFizzBuzzNumber(1);
  }

  const fizzBuzzResult = generateFizzBuzz(fizzBuzzNumber)

  return (
    <>
      <p>{fizzBuzzResult}</p>
      <button onClick={increaseFizzBuzzNumber}>Next</button>
      <button onClick={resetFizzBuzzNumber}>Reset</button>
    </>
  );
}

function generateFizzBuzz(number) {
  if (number % 15 === 0) {
    number = "FizzBuzz";
  } else if (number % 3 === 0) {
    number = "Fizz";
  } else if (number % 5 === 0) {
    number = "Buzz";
  }
  return number;
}