//2; //Write a nodejs application to convert the currency from one currency to
//another using package: currency-converter-lt
/*
const CC = require("currency-converter-lt");
const currencyConverter = new CC();

// currencyConverter
//   .from("USD")
//   .to("NPR")
//   .amount(125)
//   .convert()
//   .then((response) => {
//     console.log({ from: "USD", to: "NPR", amount: 1000, response }); //or do something else
//   });

const moneyConverter = async () => {
  const answer = await currencyConverter
    .amount(100)
    .to("NPR")
    .from("USD")
    .convert();
  return answer; // promise
};

async function answer() {
  const reply = await moneyConverter();
  return reply; // value (promise resolve)
}

const returned = answer();
console.log({ returned });
*/
/*
const CC = require("currency-converter-lt");

let currencyConverter = new CC();

currencyConverter
  .from("USD")
  .to("GBP")
  .amount(125)
  .convert()
  .then((response) => {
    console.log(response); //or do something else
  });

module.exports = currencyConverter;
*/

const CC = require("currency-converter-lt");

class CurrencyConverter {
  constructor() {
    this.converter = new CC();
  }

  convert(from, to, amount) {
    return this.converter.from(from).to(to).amount(amount).convert();
  }
}

// Create an instance of the CurrencyConverter class
const currencyConverter = new CurrencyConverter();

// Export the currencyConverter instance
module.exports = currencyConverter;

// Example usage
currencyConverter
  .convert("USD", "GBP", 125)
  .then((response) => {
    console.log(response); // Output the conversion result
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });
