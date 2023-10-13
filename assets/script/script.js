let inputfield1 = document.getElementById("field-input");
let inputfield2 = document.getElementById("field-input2");
let selectedMeasure = document.getElementById("first-measure");
let selectedMeasure2 = document.getElementById("second-measure")

// let selectedMeasuretwo = document.getElementById("second-measure")

const measurements = [
  {
    name: "millimeters",
    value: 1,
  },
  {
    name: "millimeters",
    value: 1,
  },
  {
    name: "centimetters",
    value: 10,
  },
  {
    name: "meters",
    value: 100,
  },
  {
    name: "KiloMetters",
    value: 1000,
  },
  // {
  //   name: "Inch",
  //   value: 1,
  // },
];

const option = document.createElement("option");
selectedMeasure.append(option);

// step 1 render the measuring units

selectedMeasure.innerHTML = measurements.map(
  (item) => `<option value=${item.value}>${item.name}</option>`
);
console.log(measurements);

// step 2 get the value from inputfield 1

let fieldValue;
inputfield1.addEventListener("change", (e) => {
  fieldValue = e.target.value;
  console.log(fieldValue);
  convertor(fieldValue)
  convertor ({fieldValue, measureselected, measureselected2 })

});

// get the value of dropdown from firstfield (measuriing unit)(unit from)

let measureselected;
selectedMeasure.addEventListener("change", () => {
  measureselected = selectedMeasure.value
  console.log(measureselected);

  convertor ({fieldValue, measureselected, measureselected2 })
});

// render measurement units for second input field

  selectedMeasure2.innerHTML = measurements.map(
    (item) => `<option value=${item.value}>${item.name}</option>`
  );
  console.log(measurements);


// get the value or unit from which user is about to convert to.(unit to)

let measureselected2;
selectedMeasure2.addEventListener('change', ()=>{
  measureselected2 = selectedMeasure2.value
  console.log(measureselected2);
  convertor ({fieldValue, measureselected, measureselected2 })

})

// lets put our value, selected measurement for from and to in and object



//function to convert
console.log('hey');
function convertor ({val, from, to }) {
  for(let i = 0; i < from; i++){
    if(measurements.from[i] > measurements.to[i]){
      const res = val/ measurements.to[i]
      console.log(res);
    }else if(measurements.from[i] < measurements.to[i]){
      const ans = val * measurements.to[i]
    }else if(measurements.from[i]=== measurements.to[i]){
      return alert('units must be different')
    }else {
      console.log('come next');
    }
  }
 
}




// });
