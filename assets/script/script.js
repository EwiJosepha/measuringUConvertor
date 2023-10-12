let secondfield = document.getElementById('input-field')
let firstfield = document.getElementById('field-input')
let selectedMeasure = document.getElementById('first-measure')
let selectedMeasuretwo = document.getElementById('second-measure')


firstfield.addEventListener('change', (e)=>{
  const fieldValue = e.target.value
  console.log(fieldValue);

function vals () {
  let measureselected = selectedMeasure.value
  let selectedval = measureselected.length
  console.log(selectedval);
}

selectedMeasure.addEventListener('change', vals())



function celsuisToFahrenheit(nam){
  // let temp= 30
  // console.log(temp*1.8+32+"°F" )
  let far = fieldValue * 1.8 + 32 + "°f"

  if(nam=== Ferenheit){
    console.log(far);

     return far
  }

}
  celsuisToFahrenheit('measureselected')

  function farhenheitCelsuis(){
   
    let celsuis=(fieldValue-32)*5/9+"°c"
    console.log(celsuis);
    return celsuis
  }
  farhenheitCelsuis()
})




secondfield.addEventListener('change', (e)=>{
const secondfieldfieldValue = e.target.value
console.log(secondfieldfieldValue);

})

