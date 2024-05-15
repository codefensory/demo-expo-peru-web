import { MainLayout } from "../layouts/MainLayout"
import mapExpo from "../assets/map-expo.png"
import mapPeru from "../assets/map-peru.png"
import { appTypes } from "../utils/constants"

export const GeneralScreen = ({ appType }) => {
  return (
    <MainLayout showNav showHeader appType={appType}>
      <div className="flex flex-col h-full items-center justify-center gap-12">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[56px]">PLANO GENERAL</h1>
          <div className="w-36 h-3 rounded-xl bg-primary mt-4"></div>
        </div>
        {appType === appTypes.EXPO && <img src={mapExpo} />}
        {appType === appTypes.PERU_CARGO && <img src={mapPeru} />}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="font-bold text-[42px] text-center">15, 16 Y 17 DE MAYO DEL 2024</h4>
            <p className="text-[30px] text-center">DESDE LAS 12:00 A 19:00 HRS</p>
          </div>
          <div>
            <h4 className="font-bold text-[42px] text-center">CENTRO DE EXPOSICIONES JOCKEY</h4>
            <p className="text-[30px] text-center">SANTIAGO DE SURCO - LIMA, PERU</p>
          </div>
        </div>
      </div>
    </MainLayout >
  )
}
