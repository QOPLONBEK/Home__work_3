let kurs = document.querySelector(".hash");

let alisher = prompt(" Sayohat uchun jami 900$ miqdoridagi pulingiz bo'lishi shart! \n Sizning qancha pulingiz bor, so'mda kiriting");

let dollor = 500+250
let euro = 120
let uzbDollar = 9433.34
let uzbEvro = 10354.03


if(alisher >= dollor * uzbDollar + uzbEvro * euro) {
    kurs.innerHTML = " Oq yo'l Alisher, sizning pulingiz sayohat uchun yetarli"
}
    else( kurs.innerHTML = " Alisher biroz sabr qiling, sizning pulingiz sayohat uchun yetarli emas")