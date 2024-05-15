import { route } from "preact-router"
import menu1banner from "../assets/menu1banner.png"
import menu2banner from "../assets/menu2banner.png"
import sponsorsMenu from "../assets/sponsors-menu.png"
import { Button } from "../components/Button"
import { MainLayout } from "../layouts/MainLayout"
import { appTypes } from "../utils/constants"
import { useEffect } from "preact/hooks"

export const MainMenu = ({ appType }) => {
  useEffect(() => {
    const root = document.querySelector(":root") as any

    root.style.setProperty("--color-primary", appType === appTypes.PERU_CARGO ? '#ff0a27' : '#78b745')
  }, [appType])

  return (
    <MainLayout showHeader appType={appType}>
      <div className="flex flex-col items-center justify-center h-full">
        {appType === appTypes.EXPO && <img src={menu1banner} />}
        {appType === appTypes.PERU_CARGO && <img src={menu2banner} />}
        <div className="flex flex-col gap-6 mt-2">
          <Button className="w-[750px]" onClick={() => route(`/${appType}/general`)}>PLANO GENERAL</Button>
          <Button className="w-[750px]" onClick={() => route(`/${appType}/program`)}>PROGRAMA GENERAL</Button>
          <Button className="w-[750px]" onClick={() => route(`/${appType}/activities`)}>ACTIVIDADES EN PARALELO</Button>
          <Button className="w-[750px]" onClick={() => route(`/${appType}/expositors`)}>EXPOSITORES</Button>
          <Button className="w-[750px]" onClick={() => route(`/${appType}/guide`)}>GUIA DE PROVEEDORES</Button>
        </div>
        <img src={sponsorsMenu} className="mt-12" />
      </div>
    </MainLayout>
  )
}
