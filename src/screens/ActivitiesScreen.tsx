import { route } from "preact-router"
import act1 from "../assets/activities/1.png"
import act2 from "../assets/activities/2.png"
import act3 from "../assets/activities/3.png"
import act4 from "../assets/activities/4.png"
import act5 from "../assets/activities/5.png"
import act6 from "../assets/activities/6.png"

import pact1 from "../assets/activities/p1.png"
import pact2 from "../assets/activities/p2.png"
import pact3 from "../assets/activities/p3.png"
import pact4 from "../assets/activities/p4.png"
import pact5 from "../assets/activities/p5.png"
import pact6 from "../assets/activities/p6.png"

import { MainLayout } from "../layouts/MainLayout"
import { appTypes } from "../utils/constants"

const Item = ({ src, ...rest }) => {
  return (
    <div
      className="flex justify-center items-center w-[813px] h-[168px] bg-[#f6f6f6] rounded-[20px]"
      onClick={rest.onClick}
    >
      <img src={src} />
    </div>
  )
}

const data = {
  [appTypes.EXPO]: [
    { id: 'cumbre', src: act1 },
    { id: 'gore', src: act2 },
    { id: 'encuentro', src: act3 },
    { id: 'doencuentro', src: act4 },
    { id: 'foro', src: act5 },
    { id: 'china', src: act6 },
  ],
  [appTypes.PERU_CARGO]: [
    { id: 'p1', src: pact1 },
    { id: 'p2', src: pact2 },
    { id: 'p3', src: pact3 },
    { id: 'p4', src: pact4 },
    { id: 'p5', src: pact5 },
    { id: 'p6', src: pact6 },
  ]
}

export const ActivitiesScreen = ({ appType }) => {
  return (
    <MainLayout showNav showHeader appType={appType}>
      <div className="flex flex-col items-center justify-center gap-12 mt-8" >
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[56px]">ACTIVIDADES EN PARALELO</h1>
          <div className="w-36 h-3 rounded-xl bg-primary mt-4"></div>
        </div>
        <div className="space-y-10">
          {data[appType]?.map(el => <Item src={el.src} onClick={() => route(`/${appType}/activities/${el.id}`)} />)}
        </div>
      </div>
    </MainLayout>
  )
}
