let toastBox = document.getElementById("toastBox");

let mekanlar = [

/* ERZURUM */

{
ad:"Atatürk Üniversitesi Merkez Kütüphanesi",
kategori:"Kütüphane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Mühendislik Fakültesi",
kategori:"Üniversite",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"İktisadi ve İdari Bilimler Fakültesi",
kategori:"Üniversite",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Edebiyat Fakültesi",
kategori:"Üniversite",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Fen Fakültesi",
kategori:"Üniversite",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Merkezi Yemekhane",
kategori:"Üniversite",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Öğrenci İşleri",
kategori:"Üniversite",
rampa:"Yok",
tuvalet:"Var",
asansor:"Yok",
otopark:"Var"
},

{
ad:"Erzurum Şehir Hastanesi",
kategori:"Hastane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Araştırma Hastanesi",
kategori:"Hastane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Forum Erzurum AVM",
kategori:"AVM",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Erzurum Otogarı",
kategori:"Ulaşım",
rampa:"Var",
tuvalet:"Var",
asansor:"Yok",
otopark:"Var"
},

{
ad:"Yakutiye Kent Meydanı",
kategori:"Park",
rampa:"Var",
tuvalet:"Yok",
asansor:"Yok",
otopark:"Var"
},

/* ANKARA */

{
ad:"Millet Kütüphanesi",
kategori:"Kütüphane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"AŞTİ Otogarı",
kategori:"Ulaşım",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Kızılay Meydanı",
kategori:"Park",
rampa:"Var",
tuvalet:"Yok",
asansor:"Yok",
otopark:"Var"
},

{
ad:"Ankara Garı",
kategori:"Ulaşım",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Anıtkabir",
kategori:"Tarihi Yer",
rampa:"Var",
tuvalet:"Var",
asansor:"Yok",
otopark:"Var"
},

{
ad:"Bilkent Üniversitesi Kütüphanesi",
kategori:"Kütüphane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"ODTÜ Kütüphanesi",
kategori:"Kütüphane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Armada AVM",
kategori:"AVM",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Kentpark AVM",
kategori:"AVM",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Ankara Şehir Hastanesi",
kategori:"Hastane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Hacettepe Hastanesi",
kategori:"Hastane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Gençlik Parkı",
kategori:"Park",
rampa:"Var",
tuvalet:"Var",
asansor:"Yok",
otopark:"Var"
},

/* SİVAS */

{
ad:"Cumhuriyet Üniversitesi Kütüphanesi",
kategori:"Kütüphane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Cumhuriyet Üniversitesi Merkezi Yemekhane",
kategori:"Üniversite",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Sivas Devlet Hastanesi",
kategori:"Hastane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Numune Hastanesi",
kategori:"Hastane",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Sivas Otogarı",
kategori:"Ulaşım",
rampa:"Var",
tuvalet:"Var",
asansor:"Yok",
otopark:"Var"
},

{
ad:"İstasyon Caddesi",
kategori:"Park",
rampa:"Var",
tuvalet:"Yok",
asansor:"Yok",
otopark:"Var"
},

{
ad:"Kent Meydanı",
kategori:"Park",
rampa:"Var",
tuvalet:"Yok",
asansor:"Yok",
otopark:"Var"
},

{
ad:"AVM Park",
kategori:"AVM",
rampa:"Var",
tuvalet:"Var",
asansor:"Var",
otopark:"Var"
},

{
ad:"Sivas Tren Garı",
kategori:"Ulaşım",
rampa:"Var",
tuvalet:"Var",
asansor:"Yok",
otopark:"Var"
},

{
ad:"Buruciye Medresesi",
kategori:"Tarihi Yer",
rampa:"Yok",
tuvalet:"Yok",
asansor:"Yok",
otopark:"Var"
},

{
ad:"Çifte Minareli Medrese",
kategori:"Tarihi Yer",
rampa:"Yok",
tuvalet:"Yok",
asansor:"Yok",
otopark:"Var"
},

{
ad:"Sivas Kongre Müzesi",
kategori:"Tarihi Yer",
rampa:"Var",
tuvalet:"Var",
asansor:"Yok",
otopark:"Var"
}

];

let randevular =
JSON.parse(localStorage.getItem("randevular")) || [];

/* KAMPÜS */

function mekanEkle(){

    let ad =
    document.getElementById("mekanAdi").value;

    let durum =
    document.getElementById("durum").value;

    if(ad === "" || durum === ""){

        showToast("Tüm alanları doldurun!");
        return;
    }

    mekanlar.push({

        ad: ad,
        durum: durum

    });

    localStorage.setItem(
        "mekanlar",
        JSON.stringify(mekanlar)
    );

    listele();
    istatistikGuncelle();

    showToast("Mekan başarıyla eklendi!");

    document.getElementById("mekanAdi").value = "";
    document.getElementById("durum").value = "";
}

function listele(){

    let liste =
    document.getElementById("liste");

    if(!liste) return;

    liste.innerHTML = "";

    mekanlar.forEach((mekan,index)=>{

        liste.innerHTML += `

        <div class="col-md-4">

            <div class="mekan-card">

                <h3>${mekan.ad}</h3>

<p>
<span class="badge bg-success">
♿ Rampa ${mekan.rampa}
</span>
</p>

<p>
<span class="badge bg-success">
🚻 Tuvalet ${mekan.tuvalet}
</span>
</p>

<p>
<span class="badge bg-success">
🛗 Asansör ${mekan.asansor}
</span>
</p>

<p>
<span class="badge bg-success">
🅿️ Otopark ${mekan.otopark}
</span>
</p>

<button
onclick="favoriEkle('${mekan.ad}')"
class="btn btn-outline-danger mb-3">

${favoriler.includes(mekan.ad)
? "❤️ Favoriler"
: "🤍 Favoriler"}

</button>

<button
onclick="sil(${index})"
class="sil-btn">

Sil

</button>
               

            </div>

        </div>

        `;
    });
}

function sil(index){

    mekanlar.splice(index,1);

    localStorage.setItem(
        "mekanlar",
        JSON.stringify(mekanlar)
    );

    listele();
    istatistikGuncelle();
}

function filtrele(durum){

    let filtreli =
    mekanlar.filter(

        mekan => mekan.durum === durum
    );

    listeleFiltreli(filtreli);
}

function hepsiniGoster(){

    listele();
}

function listeleFiltreli(veri){

    let liste =
    document.getElementById("liste");

    if(!liste) return;

    liste.innerHTML = "";

    veri.forEach((mekan,index)=>{

        liste.innerHTML += `

        <div class="col-md-4">

            <div class="mekan-card">

                <h3>${mekan.ad}</h3>

                <p>${mekan.durum}</p>

                <button
                onclick="favoriEkle('${mekan.ad}')"
                class="btn btn-warning w-100 mb-2">

                ⭐ Favorilere Ekle

                </button>

                <button
                onclick="sil(${index})"
                class="sil-btn">

                Sil

                </button>

            </div>

        </div>

        `;
    });
}

/* TOAST */

function showToast(message){

    if(!toastBox) return;

    let toast =
    document.createElement("div");

    toast.classList.add(
        "toast-notification"
    );

    toast.innerHTML = message;

    toastBox.appendChild(toast);

    setTimeout(()=>{

        toast.remove();

    },3000);
}

/* RANDEVU */

function randevuEkle(){

    let ad =
    document.getElementById("randevuAdi").value;

    let tarih =
    document.getElementById("randevuTarih").value;
    let saat =
document.getElementById("randevuSaat").value;
let brans =
document.getElementById("randevuBrans").value;

    if(ad === "" || tarih === "" || saat === "" || brans === ""){

        showToast(
        "Randevu bilgilerini doldurun!"
        );

        return;
    }

   randevular.push({

    ad: ad,
    tarih: tarih,
    saat: saat,
    brans: brans

});

    localStorage.setItem(
        "randevular",
        JSON.stringify(randevular)
    );

    randevuListele();

    document.getElementById(
    "randevuAdi").value = "";

    document.getElementById(
    "randevuTarih").value = "";

    document.getElementById(
"randevuSaat").value = "";
document.getElementById(
"randevuBrans").value = "";

    showToast(
    "Randevu oluşturuldu!"
    );
}

function randevuListele(){

    let alan =
    document.getElementById(
    "randevuListe"
    );

    if(!alan) return;

    alan.innerHTML = "";

    randevular.forEach((randevu,index)=>{
        let bugun = new Date();

let randevuTarihi =
new Date(randevu.tarih);

let kartSinifi =
randevuTarihi < bugun
? "gecmis-randevu"
: "yaklasan-randevu";

        alan.innerHTML += `

        <div class="col-md-4">

            <div class="mekan-card ${kartSinifi}">

              <h3>🏥 ${randevu.ad}</h3>

<p>🩺 ${randevu.brans}</p>

<p>📅 ${randevu.tarih}</p>

<p>🕒 ${randevu.saat}</p>
<button
onclick="randevuSil(${index})"
class="sil-btn">

Sil

</button>

            </div>

        </div>

        `;
    });
}

function randevuSil(index){

    randevular.splice(index,1);

    localStorage.setItem(
        "randevular",
        JSON.stringify(randevular)
    );

    randevuListele();
}
/* TEMA */

function temaAyarla(tema){

    localStorage.setItem(
        "tema",
        tema
    );

    document.body.classList.remove(
        "light-mode",
        "blue-mode"
    );

    if(tema === "light"){

        document.body.classList.add(
        "light-mode"
        );
    }

    if(tema === "blue"){

        document.body.classList.add(
        "blue-mode"
        );
    }
}

function temaYukle(){

    let tema =
    localStorage.getItem("tema");

    document.body.classList.remove(
        "light-mode",
        "blue-mode"
    );

    if(tema === "light"){

        document.body.classList.add(
        "light-mode"
        );
    }

    if(tema === "blue"){

        document.body.classList.add(
        "blue-mode"
        );
    }
}

function istatistikGuncelle(){

    let toplam = mekanlar.length;

    let varSayisi =
    mekanlar.filter(
        mekan => mekan.durum === "Rampa Var"
    ).length;

    let yokSayisi =
    mekanlar.filter(
        mekan => mekan.durum === "Rampa Yok"
    ).length;

    let toplamMekan =
    document.getElementById("toplamMekan");

    let rampaVar =
    document.getElementById("rampaVar");

    let rampaYok =
    document.getElementById("rampaYok");

    let rampaVarBar =
    document.getElementById("rampaVarBar");

    let rampaYokBar =
    document.getElementById("rampaYokBar");

    if(toplamMekan){

        toplamMekan.innerText = toplam;
    }

    if(rampaVar){

        rampaVar.innerText = varSayisi;
    }

    if(rampaYok){

        rampaYok.innerText = yokSayisi;
    }

    if(toplam > 0){

        let varYuzde =
        (varSayisi / toplam) * 100;

        let yokYuzde =
        (yokSayisi / toplam) * 100;

        if(rampaVarBar){

            rampaVarBar.style.width =
            varYuzde + "%";
        }

        if(rampaYokBar){

            rampaYokBar.style.width =
            yokYuzde + "%";
        }
    }
}

/* SAYFA YÜKLENİNCE */

window.onload = function(){

    temaYukle();

    listele();

    randevuListele();

    favorileriListele();

    istatistikGuncelle();

};
function aramaYap(){

    let aranan =
    document.getElementById("aramaKutusu")
    .value
    .toLowerCase();

    let filtreli =
    mekanlar.filter(mekan =>

        mekan.ad
        .toLowerCase()
        .includes(aranan)

    );

    listeleFiltreli(filtreli);
}

/* FAVORİLER */

let favoriler =
JSON.parse(localStorage.getItem("favoriler")) || [];

function favoriEkle(ad){

    if(!favoriler.includes(ad)){

        favoriler.push(ad);

        localStorage.setItem(
            "favoriler",
            JSON.stringify(favoriler)
        );

        showToast(
            "Favorilere eklendi ❤️"
        );

        listele();
    }

    else{

        showToast(
            "Bu mekan zaten favorilerde ⭐"
        );
    }
}
    function favorileriListele(){

    let alan =
    document.getElementById("favoriListe");

    if(!alan) return;

    alan.innerHTML = "";

    favoriler.forEach((ad)=>{

        alan.innerHTML += `

        <div class="col-md-4">

            <div class="mekan-card">

                <h3>${ad}</h3>

                <p>❤️ Favori Mekan</p>

                <button
                onclick="favoriSil('${ad}')"
                class="sil-btn">

                Favorilerden Kaldır

                </button>

            </div>

        </div>

        `;
    });
}
function favoriSil(ad){

    favoriler =
    favoriler.filter(
        favori => favori !== ad
    );

    localStorage.setItem(
        "favoriler",
        JSON.stringify(favoriler)
    );

    favorileriListele();

    listele();

    showToast(
        "Favorilerden kaldırıldı ❌"
    );
}