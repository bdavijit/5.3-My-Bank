//import
const Withdraw_Amount = document.getElementById("Withdraw_Amount");
const Deposit_Amount = document.getElementById("Deposit_Amount");

const Deposit = document.getElementById("Deposit");
const Withdraw = document.getElementById("Withdraw");
const Total = document.getElementById("Total");

function GetData(AmountID, Inputfield) {
  let Amount = document.getElementById(AmountID);

  let fieldData = 0;
  if (Inputfield) {
    if (Amount.value === "") {
      alert("Set the value of an input field");
      return 0;
    }
    fieldData = parseFloat(Amount.value);
  } else {
    fieldData = parseFloat(Amount.innerText);
  }

  if (fieldData < 0) {
    alert("please enter positive number");
    return 0;
  }
  return fieldData;
}

function AddDeposit() {
  let newDeposit = GetData("Deposit_Amount", true);
  Deposit.innerText = GetData("Deposit", false) + newDeposit;
  Total.innerText = GetData("Total", false) + newDeposit;

  Deposit_Amount.value = "";
}
function SubWithdraw() {
  let newWithdraw = GetData("Withdraw_Amount", true);
  Withdraw.innerText = (GetData("Withdraw", false) + newWithdraw).toFixed(2);
  Total.innerText =( GetData("Total", false) - newWithdraw).toFixed(2);

  Withdraw_Amount.value = "";
}
