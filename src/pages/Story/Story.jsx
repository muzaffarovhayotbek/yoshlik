import React from "react";
import './story.css'
function Story() {
  return (
    <div>
      <div className="story container  mx-auto">
        <h2 className="story-title">
          Bu sahifada meni shu kungacha bo'lgan barcha hikoyalarim aks etgan:
        </h2>

        <h2 className="text-[38px] text-center title">Hikoyalar</h2>

        <div className="story-main">
          <div className="story-first">
            <h3>2015-yil 4-sentabr — Ilk marta maktabga borish</h3>

            <p>
              2015-yil 4-sentabr hayotimdagi eng esda qolarli kunlardan biridir.
              O‘sha kuni men birinchi marta maktabga bordim. Ertalab
              uyg‘onganimda yuragim hayajon va quvonchga to‘la edi. Oppoq
              ko‘ylak, yangi sumka, tartiblangan sochlar — hammasi men uchun
              juda muhim tuyulardi. Maktabga yetib borgach, atrof juda shovqin
              edi: bolalar kulayotgan, ota-onalar suratga olayotgan, hamma
              bayram kayfiyatida. Men sinfxonaga kirganimda hammasi menga juda
              yangi ko‘rindi — partalar, yozuvlar, o‘qituvchilar. O‘sha kuni men
              birinchi do‘stlarimni topdim. Yonimga kelib “salom” degan bola
              bilan tezda til topishib ketdik. Keyinroq u mening eng yaqin
              do‘stlarimdan biriga aylandi. Shu kun — mening maktab hayotimning
              boshlanishi, yangi do‘stliklar, yangi bilimlar va yangi orzular
              uchun katta qadam bo‘ldi.
            </p>
          </div>

          <div className="second-story">
            <h3>2025-yil 5-aprel men o'zim qiziqqan sohani bitirdim</h3>

            <p>
              2025-yil 5-aprel kuni men o'zim qiziqqan va shu sohada o'zimni
              kelajak sohalaridan biri bo'lgan zamonaviy kasblardan biri
              Dasturlash yo'nalishini Frontend React Js ni o'rgandim. Men bu
              yo'nalishni O'zbekistondagi eng zor nufuzli o'quv markazlaridan
              biri bo'lgan Najot ta'limning Farg'ona viloyatida o'rgandim 8 oy
              ichida shu sohani o'rgandim va 8 oyda har oyda imtihonlar bo'ldi.
              Men shu imtihonlardan yaxshi ball to'plab 8 oyni imtihonida esa
              menga berilgan bitiruv va yakuniy imtihon loyihasini 1 hafta
              ichida qilib boldim va 17-mart kuni loyihani topshirib 5-aprel
              kunigacha javobini kutdim va 2-aprel kuni imtihon natijalari
              chiqdi va men 68 ball to'plab imtihondan o'tdi va 5-aprel kuni
              bitiruv kechada men shu o'qigan 8 oyni bitirdim va sertifikat
              oldim. Shu uslubda davom ettiraverasan — hammasi yonma-yon
              chiqadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
