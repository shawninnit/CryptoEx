const exchangeRates = {
  BTC: 60000,
  ETH: 3500,
  LTC: 200
};

function convert() {
  const usdAmount = parseFloat(document.getElementById("usdAmount").value);
  const crypto = document.getElementById("cryptoSelect").value;

  if (isNaN(usdAmount) || usdAmount <= 0) {
    document.getElementById("resultBox").innerText = "Please enter a valid USD amount.";
    return;
  }

  const rate = exchangeRates[crypto];
  const converted = usdAmount / rate;
  document.getElementById("resultBox").innerText = 
    `${usdAmount} USD = ${converted.toFixed(6)} ${crypto}`;
}
