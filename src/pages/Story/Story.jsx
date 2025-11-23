import React from "react";

function Story() {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-[22px] text-center text-gray-700 mb-2">
          Bu sahifada meni shu kungacha bo'lgan barcha hikoyalarim aks etgan:
        </h2>

        <h2 className="text-4xl font-bold text-center mb-10">Hikoyalar</h2>

        {/* GRID — 2ta yonma-yon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1- HIKOYA */}
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <div className="bg-white shadow-lg p-6 rounded-xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-3">
                2015-yil 4-sentabr — Ilk marta maktabga borish
              </h3>

              <p className="text-[18px] leading-[32px] text-gray-800">
                2015-yil 4-sentabr hayotimdagi eng esda qolarli kunlardan
                biridir. O‘sha kuni men birinchi marta maktabga bordim. Ertalab
                uyg‘onganimda yuragim hayajon va quvonchga to‘la edi. Oppoq
                ko‘ylak, yangi sumka, tartiblangan sochlar — hammasi men uchun
                juda muhim tuyulardi.
                <br />
                <br />
                Maktabga yetib borgach, atrof juda shovqin edi: bolalar
                kulayotgan, ota-onalar suratga olayotgan, hamma bayram
                kayfiyatida. Men sinfxonaga kirganimda hammasi menga juda yangi
                ko‘rindi — partalar, yozuvlar, o‘qituvchilar.
                <br />
                <br />
                O‘sha kuni men birinchi do‘stlarimni topdim. Yonimga kelib
                “salom” degan bola bilan tezda til topishib ketdik. Keyinroq u
                mening eng yaqin do‘stlarimdan biriga aylandi.
                <br />
                <br />
                Shu kun — mening maktab hayotimning boshlanishi, yangi
                do‘stliklar, yangi bilimlar va yangi orzular uchun katta qadam
                bo‘ldi.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h3 className="text-2xl font-semibold mb-3">
              2025-yil 5-aprel men o'zim qiziqqan sohani bitirdim
            </h3>

            <p className="text-[18px] leading-[30px] text-gray-800">
              2025-yil 5-aprel kuni men o'zim qiziqqan va shu sohada o'zimni
              kelajak sohalaridan biri bo'lgan zamonaviy kasblardan biri
              Dasturlash yo'nalishini Frontend React Js ni o'rgandim men bu
              yo'nalishni O'zbekistondagi eng zor nufuzli o'quv markazlaridan
              biri bo'lgan Najot ta'limning Farg'ona viloyatida o'rgandim 8 oy
              ichida shu sohani o'rgandim va 8 oyda har oyda imtihonlar bo'ldi
              men shu imtihonlardan yaxshi ball to'plab 8 oyni imtihonida esa
              menga berilgan bitiruv va yakuniy imtihon loyihasini 1 hafta
              ichida qilib boldim va 17-mart kuni loyihani topshirib 5-aprel
              kunigacha javobini kutdim va 2-aprel kuni imtihon natijalari
              chiqdi va men 68 ball to'plab imtihondan o'tdi va 5-aprel kuni
              bitiruv kechada men shu o'qigan 8 oyni bitirdim va sertifikat
              oldim.
              <br />
              <br />
              Shu uslubda davom ettiraverasan — hammasi yonma-yon chiqadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
