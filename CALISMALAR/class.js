class Personel {
   
    constructor(ad,soyad){
        this.ad =ad;
        this.soyad = soyad;
    }
    kaydet(){
        console.log("Personel kaydedildi." + this.ad);
    }
}

const personel = new Personel ("Ali","Kaan")

personel.kaydet();
personel.ad="Ali"

/ console.log(personel.ad);
