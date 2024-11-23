const marksObtainedArr = document.querySelectorAll('.marksObtained')
const totalMarksArr = document.querySelectorAll('.totalMarks')
const click  = document.querySelector('.click')
const showPercentage = document.querySelector('#showPercentage')
const showPercentageptag = document.querySelector('#showPercentageptag')
const reset = document.querySelector('#reset')

let isempty = []
let isemptyTotalMarks = []
let marksObtained = 0
let totalMarks = 0


function isemptys (){
    marksObtainedArr.forEach(function(elem) {
        if(elem.value != ''){
            isempty.push(false)
            console.log(isempty);
        }
        else{
            isempty.push(true)
            console.log(isempty);
        }
});
}
function isemptysMarks (){
    totalMarksArr.forEach(function(elem) {
        if(elem.value != ''){
            isemptyTotalMarks.push(false)
            console.log(isempty);
        }
        else{
            isemptyTotalMarks.push(true)
            console.log(isempty);
        }
});
}

function marksObtainedFunc (){
    marksObtainedArr.forEach(function(elem) {
        if(elem.value != ''){
            marksObtained+= parseInt(elem.value)
            console.log(marksObtained);
        }
        else{
            elem.style.border = '2px solid red'
          
        }
});
}
function totalMarksFunc (){
    totalMarksArr.forEach(function(elem) {
        if(elem.value != ''){
            totalMarks+= parseInt(elem.value)
            console.log(totalMarks);
            
        }
        else{
            elem.style.border = '2px solid red'
           
           
        }
});
}
function percentageFun(marksObtained, totalMarks){
    perc = marksObtained/totalMarks*100
    console.log(perc);
    return perc
}


click.addEventListener('click', function(){
    isemptys()
    isemptysMarks()
    console.log(isempty);
    console.log(isemptyTotalMarks);

   if(isempty.includes(true) || isemptyTotalMarks.includes(true)){
    console.log('nthing');
    showPercentageptag.innerHTML = 'fill all the boxes'
    isempty = []
   isemptyTotalMarks = []
   }

   else{
   marksObtainedFunc()
   totalMarksFunc()
   percentageFun(marksObtained,totalMarks)
   function showCase(){
    showPercentage.innerHTML = `${percentageFun(marksObtained,totalMarks)}`
   }
   showCase()
   marksObtained = 0
   totalMarks= 0
   isempty = []
   isemptyTotalMarks = []
   }
})

reset.addEventListener('click', function(){
    marksObtainedArr.forEach(function(elem){
        elem.value = ''
    })
})