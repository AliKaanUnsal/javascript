//document.getElementById("bio").innerHTML="Onur Yasin : 1998"

// var intro1=document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0]

// tumElemanler = sehirler.getElementsByTagName("li");

// for(i=0;i<tumElemanler.length;i++){
//     alert(tumElemanler[i].innerHTML);
// }

// var classElemanlari = document.getElementsByClassName("intro1")

// alert(classElemanlari[1].innerHTML);
// alert(classElemanlari.length);

// var queryElemanları = document.querySelectorAll("p.intro1");
// alert(queryElemanları.length);

// var isimElemanları = document.getElementsByName("musteriAdi");
// alert(isimElemanları[0].value)

// var omer =document.getElementById("omer").addEventListener("click",rengiDegistir);

// function rengiDegistir(){
//     document.getElementById("div1").style.color ="red" ;
//     var isimElemanları = document.getElementsByName("musteriAdi");
//     isimElemanları[0].value = "Onur"
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var baslık = document.createElement("h2");
var node = document.createTextNode("Merhaba Ömer")
baslık.appendChild(node)

var div1 = document.getElementById("div1")
var p2 = document.getElementById("p2")

div1.insertBefore(baslık,p2)

alert("p2 siliniyor")
div1.removeChild(p2)

alert("Değiştiriliyor")
var p1 = document.getElementById("p1")
div1.replaceChild(baslık,p1)