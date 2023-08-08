var kullanıcılar = [
    {email:"alikaan@gmail.com",sifre:"12345"},
    {email:"onuryasin@gmail.com",sifre:"12345"}
]
var tivitler = [
    {email:"alikaan@gmail.com",tivit: "bugün hava çok sıcak"},
    {email:"onuryasin@gmail.com",tivit: "yanıyoruzzzz"},
    {email:"onuryasin@gmail.com",tivit: "klima çok güzel"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")


function giris(){
    if((email == kullanıcılar[0].email && sifre == kullanıcılar[0].sifre)||
    (email == kullanıcılar[1].email && sifre == kullanıcılar[1].sifre)){
        console.log(tivitler)
    }else{
        console.log("kullanıcı adı veya sifre hayalı")
    }
}

giris(email,sifre)