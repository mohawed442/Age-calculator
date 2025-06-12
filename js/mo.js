const year = document.getElementById('year'); 
const month = document.getElementById('month'); 
const day = document.getElementById('day'); 
const item = document.querySelectorAll('.item')
const submit = document.getElementById('submit'); 
let endDate = new Date() ;

submit.addEventListener('click',click ) ;


item.forEach(ele => {
    ele.addEventListener('keydown' ,(e) => {
        e.key === 'Enter' ? click() :console.log(e.key) ;
    }) ;
});


function dayv(day) {
    if (day > 0 && day < 31) {
        return true
    }
    return false
}
function monthv(month) {
    if (month > 0 && month <= 12) {
        return true
    }
    return false
}
function yearv(year) {
    if (year > 1950 && year <= endDate.getFullYear() ) {
        return true
    }
    return false
}

function click () { 
    if (dayv(day.value) && monthv(month.value) && yearv(year.value)){
        let date = new Date(year.value  , month.value - 1, day.value  ) ;
        let calc = endDate.getFullYear() - date.getFullYear()  ; 
        document.getElementById('old').innerHTML=calc ;  
    } else if(!dayv(day.value)) {
        alert('day error')
    } else if(!monthv(month.value)) {
        alert('month error')
    } else if(!yearv(year.value)) {
        alert('year error')
    } 
}   
