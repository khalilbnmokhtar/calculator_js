let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn0 = document.getElementById('btn0')
let btn_c = document.getElementById('btn-c')
let btn_plus = document.getElementById('btn-+')
let btn_moin = document.getElementById('btn--')
let btn_x = document.getElementById('btn-x')
let btn_div = document.getElementById('btn-/')
let btn_egale = document.getElementById('btn-=')
let result1 = document.getElementById('result-1')
let result2 = document.getElementById('result-2')
let btn_vir = document.getElementById('btn-,')
let btn_aco1 = document.getElementById('btn-(')
let btn_aco2 = document.getElementById('btn-)')
result1.innerHTML =''
result2.innerHTML=''
btn_aco2.onclick =function(){
    let last_car = result1.innerText[result1.innerText.length -1] 
    
    if (result1.innerHTML == '')
    { result2.innerHTML = 'erreur formule'}

    else if(last_car !='(' && last_car != '+' && last_car!='-' && last_car != '*' && last_car !='/' )
    {result1.innerHTML += btn_aco2.value
        result2.innerHTML= eval(result1.innerHTMl)
    }
    else
    {result2.innerHTML = 'ereur formule'}
 
}
btn_aco1.onclick =function(){
    let last_car = result1.innerText[result1.innerText.length -1]    
    if(last_car != ')' && isNaN(last_car) == true || result1.innerHTML =='')
    {result1.innerHTML += btn_aco1.value}
    else
    {result2.innerHTML = 'ereur formule'}

}
btn_c.onclick = function () {
    result1.innerHTML = ''
    result2.innerHTML = ''
    result2.classList.remove('bg-success')
    result2.classList.add('bg-light')
    result2.classList.remove('fs-2')
    result2.classList.add('fs-4')
}
btn_vir.onclick = function(){
    let last_car = result1.innerText[result1.innerText.length -1]    
    if (last_car != '+' && last_car!='-' && last_car !='*' && last_car!='/' && last_car!='.' && last_car!= '=')
    {result1.innerHTML += btn_vir.value}
    else
    {result2.innerHTML = 'ereure formule'}
}
btn_egale.onclick = function () {
    let last_car = result1.innerText[result1.innerText.length -1]
    if( result1.innerHTML=='')
    {result2.innerHTML ='erreur formule'}
    else if (last_car != '+' && last_car!='-' && last_car !='*' && last_car!='/' && last_car!='.' && last_car!= '=')
{
    result1.innerHTML +=btn_egale.value
    result2.classList.remove('bg-light')
    result2.classList.add('bg-success')
    result2.classList.remove('fs-4')
    result2.classList.add('fs-2')
}
else
{result1.innerHTML += result2.innerHTML}
}
btn_div.onclick = function () {
    let last_car = result1.innerText[result1.innerText.length -1]
    if (result1.innerHTML=='')
    { result2.innerHTML ='erreur formul'}
    else if (last_car != '+' && last_car!='-' && last_car !='*' && last_car!='/' && last_car!='.' && last_car!= '=')
   { result1.innerHTML +=btn_div.value}
   else
   {result2.innerHTML = 'erreur formule'}
}

btn_x.onclick = function () {
    let last_car = result1.innerText[result1.innerText.length -1]
    if (result1.innerHTML=='')
    {result2.innerHTML = 'erreur formul'}
    else if (last_car != '+' && last_car!='-' && last_car !='*' && last_car!='/' && last_car!='.' && last_car!= '=')

    {result1.innerHTML +=btn_x.value}
    else
    {
        result2.innerHTML =' erreur formule'
    }
}

btn_moin.onclick = function () {
    let last_car = result1.innerText[result1.innerText.length -1]
   if (last_car != '+' && last_car!='-' && last_car !='*' && last_car!='/' && last_car!='.' && last_car!= '=')

    {result1.innerHTML +=btn_moin.value}
    else
   {result2.innerHTML = 'erreure formule'}
}

btn_plus.onclick = function () {
    let last_car = result1.innerText[result1.innerText.length -1]
   if (last_car != '+' && last_car!='-' && last_car !='*' && last_car!='/' && last_car!='.' && last_car!= '=')

    {result1.innerHTML += btn_plus.value}
    else
   {result2.innerHTML = 'erreure formule'}
}
btn1.onclick = function () 
{
    result1.innerHTML += btn1.value
   result2.innerHTML = eval(result1.innerHTML)
}

btn2.onclick = function(){
    result1.innerHTML +=btn2.value
    result2.innerHTML = eval(result1.innerHTML)

}
btn3.onclick = function(){
    result1.innerHTML += btn3.value
    result2.innerHTML = eval(result1.innerHTML)

}

btn4.onclick = function(){
    result1.innerHTML +=btn4.value 
    result2.innerHTML = eval(result1.innerHTML)

}
btn5.onclick = function(){
    result1.innerHTML += btn5.value
    result2.innerHTML = eval(result1.innerHTML)

}
btn6.onclick = function(){
    result1.innerHTML += btn6.value
    result2.innerHTML = eval(result1.innerHTML)

}
btn7.onclick = function(){
    result1.innerHTML +=btn7.value 
    result2.innerHTML = eval(result1.innerHTML)
 
}
btn8.onclick = function(){
    result1.innerHTML += btn8.value
    result2.innerHTML = eval(result1.innerHTML)
 
}
btn9.onclick = function(){
    result1.innerHTML +=btn9.value
    result2.innerHTML = eval(result1.innerHTML)

}
btn0.onclick = function(){
        result1.innerHTML +=btn0.value
    result2.innerHTML = eval(result1.innerHTML)
     
}















