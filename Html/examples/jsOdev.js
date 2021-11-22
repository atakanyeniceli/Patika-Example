let userName=prompt("Lütfen Adınızı giriniz.","Sayın")
let lastName=prompt("Lütfen Soyadınızı giriniz.","Sayın")
userName=userName.toUpperCase()
lastName=lastName.toUpperCase()


window.onload=function(){
    let div=document.querySelector("#ati")
    function myDate(){
        div.innerHTML=`Merhaba ${userName} ${lastName} ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
    }
    setInterval(myDate,1000)
}

window.onfocus=function(){
    document.head.querySelector("title").innerHTML="Focus"
}
window.onblur=function(){
    document.head.querySelector("title").innerHTML="Non Focus"
}

