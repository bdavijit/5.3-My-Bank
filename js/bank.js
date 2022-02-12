// alert("Login Successful");

//import
// const Withdraw_btn = document.getElementById("Withdraw_btn");
const Withdraw_Amount = document.getElementById("Withdraw_Amount");

// const Deposit_btn = document.getElementById("Deposit_btn");
const Deposit_Amount = document.getElementById("Deposit_Amount");

const Deposit = document.getElementById("Deposit");
const Withdraw = document.getElementById("Withdraw");
const Total = document.getElementById("Total");

function AddDeposit() {
  let TDAmount = parseFloat(Deposit.innerHTML);
  let TAmount = parseFloat(Total.innerHTML);
  let dAmount = parseFloat(Deposit_Amount.value);

  TAmount += dAmount;
  TDAmount += dAmount;

  Total.innerHTML = TAmount;
  Deposit.innerHTML = TDAmount;

  Deposit_Amount.value = "";
}
function SubWithdraw() {
  let TWAmount = parseFloat(Withdraw.innerHTML);
  let TAmount = parseFloat(Total.innerHTML);
  let WAmount = parseFloat(Withdraw_Amount.value);

  TAmount -= WAmount;
  TWAmount += WAmount;

  Total.innerHTML = TAmount;
  Withdraw.innerHTML = TWAmount;
  Withdraw_Amount.value = "";
}
