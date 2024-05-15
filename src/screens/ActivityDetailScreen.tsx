import { MainLayout } from "../layouts/MainLayout"

import cumbre from "../assets/activities/content/expo/cumbre.png"
import encuentro from "../assets/activities/content/expo/encuentro.png"
import gore from "../assets/activities/content/expo/gore.png"
import doencuentro from "../assets/activities/content/expo/2doencuentro.png"
import foro from "../assets/activities/content/expo/foro.png"
import china from "../assets/activities/content/expo/china.png"

import p1 from "../assets/activities/content/peru-cargo/p1.png"
import p2 from "../assets/activities/content/peru-cargo/p2.png"
import p3 from "../assets/activities/content/peru-cargo/p3.png"
import p4 from "../assets/activities/content/peru-cargo/p4.png"
import p5 from "../assets/activities/content/peru-cargo/p5.png"
import p6 from "../assets/activities/content/peru-cargo/p6.png"
import { appTypes } from "../utils/constants"

const data = {
  [appTypes.EXPO]: {
    cumbre,
    encuentro,
    gore,
    doencuentro,
    foro,
    china,
  },
  [appTypes.PERU_CARGO]: {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6
  }
}

export const ActivityDetailScreen = ({ appType, id }) => {
  return (
    <MainLayout showNav showHeader appType={appType}>
      <div className="flex flex-col items-center justify-center mt-8 w-full" >
        {data[appType]?.[id] && <img src={data[appType][id]} />}
      </div>
    </MainLayout>
  )
}
