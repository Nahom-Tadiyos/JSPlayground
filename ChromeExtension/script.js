//const can not be reassigned

let myLeads = []
const inputsEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log("Button Clicked from addEventListener")
    myLeads.push(inputsEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    console.log(myLeads[i])
}