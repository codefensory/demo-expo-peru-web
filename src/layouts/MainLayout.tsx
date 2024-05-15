import { route } from "preact-router"
import header1 from "../assets/header1.png"
import header2 from "../assets/header2.png"
import borderPeru from "../assets/border-peru.png"
import { appTypes } from "../utils/constants"

const ExpoBarTop = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#27588D] w-[170px] h-6 rounded-bl-lg"></div>
      <div className="bg-[#F6BA3A] w-[170px] h-6"></div>
      <div className="bg-[#BB1E1E] w-[170px] h-6"></div>
      <div className="bg-[#5BB54C] w-[170px] h-6 rounded-br-lg"></div>
    </div>
  )
}

const ExpoBarBottom = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#5BB54C] w-[170px] h-6 rounded-tl-lg"></div>
      <div className="bg-[#BB1E1E] w-[170px] h-6"></div>
      <div className="bg-[#F6BA3A] w-[170px] h-6"></div>
      <div className="bg-[#27588D] w-[170px] h-6 rounded-tr-lg"></div>
    </div>
  )
}

const PeruBarTop = () => {
  return (
    <div className="w-full flex justify-center">
      <img src={borderPeru} />
    </div >
  )
}

const PeruBarBottom = () => {
  return (
    <div className="w-full flex justify-center">
      <img src={borderPeru} className="rotate-180" />
    </div >
  )
}

export const MainLayout = (props) => {
  const { showNav, showHeader, children, appType } = props

  return (
    <div className="relative w-full h-screen flex flex-col">
      {showHeader && <div className="w-full h-44 transition-all">
        <div className="w-full h-full flex items-end justify-center">
          <div
            className="w-[458.5px] h-[148px] bg-[#f6f6f6] rounded-l-3xl flex justify-center items-center"
            onClick={() => route(`/${appTypes.EXPO}/`)}
          >
            <img src={header1} />
          </div>
          <div className="w-[1px] h-[148px] bg-[#c1bebe]"></div>
          <div
            className="w-[458.5px] h-[148px] bg-[#f6f6f6] rounded-r-3xl flex justify-center items-center"
            onClick={() => route(`/${appTypes.PERU_CARGO}/`)}
          >
            <img src={header2} />
          </div>
        </div>
      </div>}
      {appType === appTypes.PERU_CARGO ? <PeruBarTop /> : <ExpoBarTop />}
      <div className="body flex-1 w-full overflow-auto">
        {children}
      </div>
      {appType === appTypes.PERU_CARGO ? <PeruBarBottom /> : <ExpoBarBottom />}
      {showNav && (
        <div className="w-full h-44 bg-[#f6f6f6] flex items-center justify-center">
          <div className="bg-white w-[95%] h-[70%] overflow-hidden rounded-[80px] flex gap-[1px]">
            <div
              className="bg-primary w-full h-full text-center flex justify-center items-center text-[24px] px-2 text-white font-bold"
              onClick={() => route(`/${appType}/general`)}
            >
              PLANO GENERAL
            </div>
            <div
              className="bg-primary w-full h-full text-center flex justify-center items-center text-[24px] px-2 text-white font-bold"
              onClick={() => route(`/${appType}/program`)}
            >
              PROGRAMA GENERAL
            </div>
            <div
              className="bg-primary w-full h-full text-center flex justify-center items-center text-[24px] px-2 text-white font-bold"
              onClick={() => route(`/${appType}/activities`)}
            >
              ACTIVIDADES EN PARALELO
            </div>
            <div
              className="bg-primary w-full h-full text-center flex justify-center items-center text-[24px] px-2 text-white font-bold"
              onClick={() => route(`/${appType}/expositors`)}
            >
              EXPOSITORES
            </div>
            <div
              className="bg-primary w-full h-full text-center flex justify-center items-center text-[24px] px-2 text-white font-bold"
              onClick={() => route(`/${appType}/guide`)}
            >
              GUIA DE PROVEEDORES
            </div>
          </div>
        </div>
      )}
      <div className="hidden-button absolute w-12 h-12 top-0 right-0" onClick={() => route("/")}></div>
    </div >
  )
}
