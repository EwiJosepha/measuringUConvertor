let measureselected;
selectedMeasure.addEventListener("click", () => {
  measureselected = selectedMeasure.value
  console.log(measureselected);
  choosenMeasurement = measureselected.split()

  // let selectedval = measureselected.length;
  console.log(measureselected);
  
});

// convertion from celsuis to farenheit

function celsuisToFahrenheit() {
  // getting the unit measure selected fron the dropdown


  // convertion

  let far = fieldValue * 1.8 + 32 + "°f";
  console.log(far);
  return far;
}
celsuisToFahrenheit();


// convertion from farenheit to celsuis

function farhenheitCelsuis() {
  let celsuis = ((fieldValue - 32) * 5) / 9 + "°c";
  console.log(celsuis);
  return celsuis;
}
farhenheitCelsuis();