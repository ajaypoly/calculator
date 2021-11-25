// function displayValue(num){
//     let result=document.querySelector("#results")
//     result.value+=num
// }
// function clearbox(){
//     document.querySelector("#results").value=""
  
// }
// function evaluateExp(){
//     let res=document.querySelector("#results")
//     let cur_val=res.value
//     let results=eval(cur_val)
//     res.value=results
// }
// function backspace(){
//     let num=document.querySelector("#results")
//     let cur_num=num.value
//     num.value=cur_num.slice(0,-1)
// }


var displayValue=(num)=>results.value+=num

var clearbox=()=>results.value=""

var evaluateExp=()=>results.value=eval(results.value)

var backspace=()=>results.value.slice(0,-1)