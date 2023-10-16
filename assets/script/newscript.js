// get documents from html
const option = document.getElementById('option')
const firstMeasure = document.getElementById('first-measure')
const secoundMeasure = document.getElementById('second-measure')



const div2 = document.getElementById("div2")
const div1 = document.getElementById("div1")




// set the select items and value

const measurements = [
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

// insert options to first measure
firstMeasure.innerHTML = measurements.map(
  (item) => `<option value=${item.value}>${item.name}</option>`
);

// insert options to second  measure
secoundMeasure.innerHTML = measurements.map(
  (item) => `<option value=${item.value}>${item.name}</option>`
);


// declare varialbes to use
let firstValue = 0
let secondValue = 0
let inputValue = 0
let inputValue1 = 0



// get value of firstMeaure
firstMeasure.addEventListener('change', () => {
  if (firstMeasure.value === secondValue) {
    alert("can't convert to the same unit")
    return
  }
  firstValue = firstMeasure.value
  console.log("first value:, ", firstValue);
})

// get value of secondMeasure
secoundMeasure.addEventListener('change', () => {
  if (firstValue === secoundMeasure.value) {
    alert("can't convert to the same unit")
    return
  }
  secondValue = secoundMeasure.value
  console.log("second value:, ", secondValue);
})

// add input from javascript 
div2.innerHTML = `<input value=${inputValue} type="text" id="field-input2">`
// add input2 from javascript
div1.innerHTML = `<input value=${inputValue1} type="text" id="field-input">`

const firstInput = document.getElementById('field-input')
const secondInput = document.getElementById('field-input2')

firstInput.addEventListener('input', () => {
  inputValue = +firstInput.value
  convertMeasurements(inputValue, firstValue, secondValue)

  console.log(inputValue)
  // secondInput.value = inputValue
})

secondInput.addEventListener('input', () => {
  inputValue1 = secondInput.value
  console.log(inputValue)
  // convertMeasurements(inputValue, firstValue, secondValue)
  convertSecondfield(inputValue1, secondValue, firstValue,)
})


let res
const convertMeasurements = (val, from, to) => {
  console.clear()
  console.log(
    { val, from, to }
  );
  // secondInput.value = res
  if (from < to) {
    res = val / to
  } else if (from > to) {
    res = val * from
  }
  // inputValue = res
  console.log("response: ", res)
  secondInput.value =  res
  return res
}

let ans
function convertSecondfield(valu, fromm, too) {
  console.clear()
  console.log({ valu, fromm, too }
  );
  if (fromm < too) {
    ans = valu / too
    console.log(ans);
  } else if (fromm > too) {
    ans = valu * fromm
    console.log(ans);
    
  }

  console.log('second val', ans);
  firstInput.value = ans
    return res
}



// console.log(convertMeasurements(3,10 , 100 ));