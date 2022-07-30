
const Tip = () => {
    let AmountEl = document.querySelector('#Amount').value;
    let TipEl = document.querySelector('#Tip').value;
    let peopleEl = document.querySelector('#people').value;
    let TotalPerson = document.querySelector('#Total_person');
    let Calculation = Number(AmountEl) * Number(TipEl)/100
    let food_and_tip = Calculation + Number(AmountEl)
    let final =  food_and_tip / Number(peopleEl)
    let final_total =  final 
    console.log(TotalPerson.innerText = '$' + final_total)
}
document.querySelector('#TipTotal').addEventListener('click', function() {
    Tip();
})