let secondfield = document.getElementById("input-field");
let firstfield = document.getElementById("field-input");
let selectedMeasure = document.getElementById("first-measure");
// let selectedMeasuretwo = document.getElementById("second-measure")


const measurements = [

  {
    name: "meters",
    value: 45
  },
  {
    name: "Ferenheit",
    value: 5
  
  },
  {
    name: "celsuis",
    value: 4
  }
]

const option = document.createElement('option')
  selectedMeasure.append(option)

  selectedMeasure.innerHTML = measurements.map(
    (item) =>
      `<option value=${item.name}>${item.name}</option>`
  )


firstfield.addEventListener("change", (e) => {
  const fieldValue = e.target.value;
  console.log(fieldValue);

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
});

// secondfield.addEventListener("change", (e) => {
//   const secondfieldfieldValue = e.target.value;
//   console.log(secondfieldfieldValue);
// });
