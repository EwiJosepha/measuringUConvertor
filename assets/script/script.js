let secondfield = document.getElementById("input-field");
let firstfield = document.getElementById("field-input");
let selectedMeasure = document.getElementById("first-measure");

// let selectedMeasuretwo = document.getElementById("second-measure")

const measurements = [
  {
    name: "millimeters",
    value: 1,
  },
  {
    name: "centimetters",
    value: 1,
  },
  {
    name: "meters",
    value: 1,
  },
  {
    name: "KiloMetters",
    value: 1,
  },
  {
    name: "Inch",
    value: 1,
  },
];

const option = document.createElement("option");
selectedMeasure.append(option);

selectedMeasure.innerHTML = measurements.map(
  (item) => `<option value=${item.name}>${item.name}</option>`
);

let measureselected;
selectedMeasure.addEventListener("change", () => {
  function va(ve) {
    firstfield.addEventListener("change", (e) => {
      const fieldValue = e.target.value;
      console.log(fieldValue);
    });

    measureselected = selectedMeasure.value;
    console.log(measureselected);

    if (measurements.name === measurements.name) {
      let ans = ve * 120;
      console.log(ans);
    }
  }

  va(2);
});

// secondfield.addEventListener("change", (e) => {
//   const secondfieldfieldValue = e.target.value;
//   console.log(secondfieldfieldValue);
// });
