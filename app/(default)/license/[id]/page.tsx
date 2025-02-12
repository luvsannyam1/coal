"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MiningPage() {
  const [hasPurchased, setHasPurchased] = useState(false);

  useEffect(() => {
    document.body.style.overflow = hasPurchased ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hasPurchased]);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-gray-200 mt-8 mb-4">
            Нүүрсний Ордын Талаар
          </h3>
          <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 mb-4 shadow-sm hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold text-amber-400 mb-2">
              Байршил
            </h4>
            <p className="text-gray-300">
              Улаанбаатар хотоос зүүн урагш 360 км, Дорноговь-Сайншанд аймгийн
              төвөөс хойш 170 км, Иххэт сумаас зүүн урагш 6 км, Төмөр замын Хар
              Айраг өртөөнөөс 87 км, Замын-Үүд боомтоос 370 км. Энэхүү
              стратегийн байршил нь тээвэр, ложистикийн зардлыг бууруулах
              боломжийг олгодог бөгөөд орон нутгийн эдийн засагт эерэг нөлөө
              үзүүлдэг.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 mb-4 shadow-sm hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold text-amber-400 mb-2">
              Нүүрсжилт
            </h4>
            <p className="text-gray-300">
              Ордын нүүрсний давхрааснууд нь хагарал эвдрэлд бага өртсөн бөгөөд
              зузаан нь тогтвортой. Нүүрсний нийт нөөц нь 41.05 сая.тн бөгөөд
              үүнээс бодитой (B) 10.65 сая.тн, боломжтой (C) 29.09 сая.тн.
              Нүүрсний чанар өндөр, дулаан ялгаруулах чадвар сайтай тул дотоодын
              болон олон улсын зах зээлд өрсөлдөхүйц бүтээгдэхүүн үйлдвэрлэх
              боломжтой.
            </p>
          </div>

          <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 mb-4 shadow-sm hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold text-amber-400 mb-2">
              Физик шинж чанар
            </h4>
            <p className="text-gray-300">
              Агаарын хуурай нөхцөл дэх чийг: 13.1%, үнсжилт: 21.6%, дэгдэмхий
              бодисын гарц: 37.5%, хүхрийн агуулга: 1.05%, дулаан ялгаруулах
              чадвар: 4310.7 ккал/кг. Нүүрсний эдгээр физик шинж чанарууд нь
              өндөр чанарын түлш үйлдвэрлэхэд тохиромжтой бөгөөд байгаль орчинд
              сөрөг нөлөөллийг багасгана.
            </p>
          </div>
        </div>

        <div>
          <section className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
            <div className="p-8 rounded-3xl border border-amber-500 bg-gray-800 shadow-lg">
              <div className="flex items-center mb-6">
                <h1 className="text-4xl font-bold text-amber-500">
                  Олонгийн Ухаагийн Нүүрсний Орд
                </h1>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Энэ орд нь Хөх тээг формацын тунамал зузаалгийн дээд хэсэгт
                байрлах бөгөөд 7 давхраастай. Давхраасуудын зузаан нь 2-12.6 м,
                нүүрсний чанар нь өндөр бөгөөд үйлдвэрлэлийн ач холбогдолтой.
                Нүүрсний бүтэц, химийн найрлага нь орон нутгийн болон гадаадын
                зах зээлд өрсөлдөх чадвартай бүтээгдэхүүн үйлдвэрлэх боломжийг
                бүрдүүлдэг.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                    Нийт Нөөц
                  </h3>
                  <p className="text-gray-300 text-lg">
                    41.05 сая тонн нүүрс, үүнээс 10.65 сая тонн нь бодитой,
                    29.09 сая тонн нь боломжит нөөцөөр тооцогддог.
                  </p>
                </div>

                <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                  <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                    Ашиглалтын Зардал
                  </h3>
                  <p className="text-gray-300 text-lg">
                    2.18 тэрбум төгрөг, үүнд олборлолт, тээвэрлэлт,
                    боловсруулалтын зардлууд багтсан.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                  Эдийн Засгийн Үнэлгээ
                </h3>
                <p className="text-gray-300">
                  Ашгийн хэмжээг 2.24 жилд нөхнө. Жилд 11.9 тэрбум төгрөгийн
                  бүтээгдэхүүн борлуулах бөгөөд төсөл хэрэгжих хугацаанд 97.89
                  тэрбум төгрөгийн цэвэр ашиг олох боломжтой. Энэхүү төсөл нь
                  улсын эдийн засагт томоохон хувь нэмэр оруулах төдийгүй орон
                  нутгийн иргэдийн амьжиргааг дээшлүүлэхэд чухал үүрэг
                  гүйцэтгэнэ.
                </p>
              </div>

              <div className="p-6 bg-gray-900 rounded-xl border border-gray-700 mt-6">
                <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                  Нийгмийн Нөлөө
                </h3>
                <p className="text-gray-300">
                  Нийт 68 ажлын байр бий болох бөгөөд нэг ажилтны дундаж цалин 1
                  сая төгрөг байна. Ордын ашиглалт нь орон нутгийн хөгжилд
                  ихээхэн хувь нэмэр оруулж, дэд бүтцийн хөгжлийг дэмжих, орон
                  нутгийн иргэдийн амьжиргааг сайжруулах боломжийг бүрдүүлнэ.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {!hasPurchased && (
        <div className="fixed inset-0 bg-gradient-to-t from-gray-500 to-transparent bg-opacity-100 flex items-end justify-center z-50">
          <div className="text-center pb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              Get Full Access to Mining Data
            </h2>
            <div className="flex space-x-4 justify-center">
              <button
                onClick={() => setHasPurchased(true)}
                className="px-8 py-4 bg-white text-amber-700 rounded-2xl font-semibold shadow-md hover:bg-gray-200 transition-colors"
              >
                Buy the Document
              </button>
              <button
                onClick={() => setHasPurchased(true)}
                className="px-8 py-4 bg-gray-900 text-amber-400 rounded-2xl font-semibold shadow-md hover:bg-gray-800 transition-colors"
              >
                Buy Premium
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
