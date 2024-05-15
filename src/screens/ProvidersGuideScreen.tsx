import { MainLayout } from "../layouts/MainLayout"
import providerGuide from "../assets/provider-guide.png"
import expoProviderGuide from "../assets/expo-provider-guide.png"
import { appTypes } from "../utils/constants"

export const ProviderGuideScreen = ({ appType }) => {
  return (
    <MainLayout showNav showHeader appType={appType}>
      <div className="flex flex-col items-center justify-center gap-12 mt-8" >
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[56px]">GUIA DE PROVEEDORES</h1>
          <div className="w-36 h-3 rounded-xl bg-primary mt-4"></div>
        </div>
        <img src={appType === appTypes.PERU_CARGO ? providerGuide : expoProviderGuide} />
      </div>
    </MainLayout>
  )
}
