var selectedRow = null;

function onFormSubmit() {
  if (validateFirstNo() && validateSecondNo() ) {
    var formData = readFormData();
    var first = document.getElementById("firstno").value;
    var second = document.getElementById("secondno").value;
    var operator = document.getElementById("operator").value;
    var result;

    if (operator == "+") {
      result = Number(first) + Number(second);
    } else if (operator == "-") {
      result = first - second;
    } else if (operator == "*") {
      result = first * second;
    } else {
      result = first / second;
    }
    document.getElementById("calculatorList").innerHTML = result;
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["firstno"] = document.getElementById("firstno").value;
  formData["secondno"] = document.getElementById("secondno").value;
  formData["operator"] = document.getElementById("operator").value;
  return formData;
}

function resetForm() {
  document.getElementById("firstno").value = "";
  document.getElementById("secondno").value = "";
  document.getElementById("operator").value = "";
  selectedRow = null;
}

function validateFirstNo() {
  isValid = true;
  if (document.getElementById("firstno").value == "") {
    isValid = false;
    document
      .getElementById("firstnumberValidationError")
      .classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("firstnumberValidationError")
        .classList.contains("hide")
    )
      document
        .getElementById("firstnumberValidationError")
        .classList.add("hide");
  }
  return isValid;
}


function validateSecondNo() {
    isValid = true;
    if (document.getElementById("secondno").value == "") {
      isValid = false;
      document
        .getElementById("secondnumberValidationError")
        .classList.remove("hide");
    } else {
      isValid = true;
      if (
        !document
          .getElementById("secondnumberValidationError")
          .classList.contains("hide")
      )
        document
          .getElementById("secondnumberValidationError")
          .classList.add("hide");
    }
    return isValid;
  }
