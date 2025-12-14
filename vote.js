function vote() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var par = document.getElementById("par");

  if (age > 18) {
    // alert("Eligible to vote");
    par.innerHTML = "You are eligible😊";
  } else {
    // alert("Not eligible to vote");
    par.innerHTML = "You are a child😂";
  }
}
