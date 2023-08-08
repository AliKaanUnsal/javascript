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


function kullanıcıVarmı(email,sifre){
    console.log(email);
    console.log(sifre);
    for(i=0;i<kullanıcılar.length;i++){
        if(kullanıcılar[i].email==email && kullanıcılar[i].sifre==sifre){
            return true;
        }
    }
    return false;
}
function giris(){
    if(kullanıcıVarmı(email,sifre)){
        console.log(tivitler)
    }else{
        console.log("kullanıcı adı veya sifre hayalı")
    }
}

giris(email,sifre)