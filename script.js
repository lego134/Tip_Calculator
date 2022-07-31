let AmountEl = document.getElementById('Amount');
let TipEl = document.getElementById('Tip');
let peopleEl = document.getElementById('people');
let peopleEl2 = Number(peopleEl.innerText)
let TotalPerson = document.getElementById('Total_person');
function Tip(){
    let Calculation = Number(AmountEl.value) * Number(TipEl.value)/100
    let food_and_tip = Calculation + Number(AmountEl.value)
    let divide_people =  food_and_tip / peopleEl2
    let final_total = divide_people
   TotalPerson.innerText =  final_total
} 
const increasePeople = () => {
    peopleEl2 += 1
    peopleEl.innerText = peopleEl2
  }
  const decreasePeople = () => {
    if( peopleEl2 <= 1){
        let message = alert('We can not calculate at zero, pleas start at one.')
        return message
    }
    peopleEl2 -= 1
    peopleEl.innerText = peopleEl2
  }

