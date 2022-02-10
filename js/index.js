const UserField = document.getElementById("UserField");
const InputField = document.getElementById("Password");
const Btn = document.getElementById("Btn");

function Login() {
  // console.log( typeof UserField.value);
  // console.log( typeof InputField.value);
  if(UserField.value.toLowerCase() == "shovon" && InputField.value == "1234" ){
      // console.log("done");
      window.location.href = 'Bank.html';
  }
}
