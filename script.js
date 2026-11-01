var popupbox=document.querySelector(".popupbox")
var overlay=document.querySelector(".overlay")
var b1=document.getElementById("b1")
var b2=document.getElementById("b2")
var b3=document.getElementById("b3")
var b4=document.getElementById("b4")
var container=document.querySelector(".container")
var i1=document.getElementById("i1")
var i2=document.getElementById("i2")
var t1=document.getElementById("t1")

b1.addEventListener("click",function()
{
   event.target.parentElement.remove()
})

b2.addEventListener("click",function()
{
    overlay.style.display="block"
    popupbox.style.display="block"
})

b3.addEventListener("click",function(event)
{
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})

b4.addEventListener("click",function(event)
{   
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${i1.value}</h1>
            <h2>${i2.value}</h2>
            <p>${t1.value}</p>
            <button id="b1" onclick="deletebook(event)">Delete</button>`
   
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"
 
})


function deletebook(event)
{
    event.target.parentElement.remove()
}