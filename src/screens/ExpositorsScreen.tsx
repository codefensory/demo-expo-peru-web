import { MainLayout } from "../layouts/MainLayout"
import expositors from "../assets/proveedores.png"

export const ExpositorsScreen = ({ appType }) => {
  return (
    <MainLayout showNav showHeader appType={appType}>
      <div className="flex flex-col items-center justify-center gap-12 mt-8" >
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[56px]">EXPOSITORES</h1>
          <div className="w-36 h-3 rounded-xl bg-primary mt-4"></div>
        </div>
        <img src={expositors} />
      </div>
    </MainLayout>
  )
}
