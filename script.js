let display= document.querySelector('.display')
let btn=document.querySelector('.btn')
let nseven=document.querySelector('.seven')
let nsix=document.querySelector('.six')
let nfive=document.querySelector('.five')
let plus=document.querySelector('.plus')
let nfour=document.querySelector('.four')
let nthree=document.querySelector('.three')
let ntwo=document.querySelector('.two')
let none=document.querySelector('.one')
let minus=document.querySelector('.minus')
let divide=document.querySelector('.divide')
let fbrac=document.querySelector('.fbrac')
let bbrac=document.querySelector('.bbrac')
let neight=document.querySelector('.eight')
let nnine=document.querySelector('.nine')
let nzero=document.querySelector('.zero')
let dot=document.querySelector('.dot')
let del=document.querySelector('.del')
let ce=document.querySelector('.ce')
let times=document.querySelector('.times')
let equalst=document.querySelector('.equals ')


equalst.addEventListener('click',equalt)
ce.addEventListener('click',reset)
del.addEventListener('click',dele)
times.addEventListener('click',change)
plus.addEventListener('click',change)
minus.addEventListener('click',change)
divide.addEventListener('click',change)
fbrac.addEventListener('click',change)
bbrac.addEventListener('click',change)
dot.addEventListener('click',change)
nnine.addEventListener('click',change)
neight.addEventListener('click',change)
nseven.addEventListener('click',change)
nsix.addEventListener('click',change)
nfive.addEventListener('click',change)
nfour.addEventListener('click',change)
nthree.addEventListener('click',change)
ntwo.addEventListener('click',change)
none.addEventListener('click',change)
nzero.addEventListener('click',change)


function  change (e){
    console.log(e.target.innerHTML)
    display.innerHTML+=e.target.innerHTML


}
function dele (){

display.innerHTML=display.innerHTML.slice(0, -1)
}
function reset (){
    display.innerHTML=""

}
function equalt (){
eval(display.innerHTML)
console.log(eval(display.innerHTML))
display.innerHTML=eval(display.innerHTML)

}



