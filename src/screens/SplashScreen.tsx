import { MainLayout } from "../layouts/MainLayout"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import { Button } from "../components/Button"
import { appTypes } from "../utils/constants"
import { route } from "preact-router"

export const SplashScreen = () => {
  return (
    <MainLayout>
      <div className="w-full h-full flex flex-col items-center">
        <div className="h-1/2 flex flex-col justify-center items-center">
          <img src={logo1} />
          <Button className="!bg-[#78b745] w-[250px] mt-16" onClick={() => route(`/${appTypes.EXPO}`)}>INGRESAR</Button>
        </div>
        <div className="w-1/2 h-[1px] bg-[#CBCBCB]"></div>
        <div className="h-1/2 flex flex-col justify-center items-center">
          <img src={logo2} />
          <Button className="!bg-[#ff0a27] w-[250px] mt-16" onClick={() => route(`/${appTypes.PERU_CARGO}`)}>INGRESAR</Button>
        </div>
      </div>
    </MainLayout>
  )
}
