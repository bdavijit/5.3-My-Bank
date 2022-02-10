// alert("Login Successful");

//import
const Withdraw_btn = document.getElementById("Withdraw_btn");
const Withdraw_Amount = document.getElementById("Withdraw_Amount");

const Deposit_btn = document.getElementById("Deposit_btn");
const Deposit_Amount = document.getElementById("Deposit_Amount");

const Deposit = document.getElementById("Deposit");
const Withdraw = document.getElementById("Withdraw");
const Total = document.getElementById("Total");

function AddDeposit() {
  let TDAmount = parseInt(Deposit.innerHTML);
  let TAmount = parseInt(Total.innerHTML);
  let dAmount = parseInt(Deposit_Amount.value);

  TAmount += dAmount;
  TDAmount += dAmount;

  Total.innerHTML = TAmount;
  Deposit.innerHTML = TDAmount;
}
function SubWithdraw() {
  let TWAmount = parseInt(Withdraw.innerHTML);
  let TAmount = parseInt(Total.innerHTML);
  let WAmount = parseInt(Withdraw_Amount.value);

  TAmount -= WAmount;
  TWAmount += WAmount;

  Total.innerHTML = TAmount;
  Withdraw.innerHTML = TWAmount;
}
