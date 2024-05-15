import clsx from 'clsx'
import { MainLayout } from '../layouts/MainLayout'
import { days } from '../mock/data'
import { appTypes } from '../utils/constants'
import program1 from "../assets/programs/program1.png"
import program2 from "../assets/programs/program2.png"
import program3 from "../assets/programs/program3.png"
import pprogram1 from "../assets/programs/pprogram1.png"

const generateText = (text) => {
  if (text.split('*').length > 1) {
    return <div className="font-bold text-current">{text.split('*')[1]}</div>
  }

  if (text.split('>').length > 1) {
    return (
      <ul className="font-bold list-disc list-inside">
        <li>
          <span style={{ marginLeft: "-12px" }}>{text.split('>')[1]}</span>
        </li>
      </ul>
    )
  }

  return <div className="ml-2.5">{text}</div>
}

const DaysTable = ({ item, appType }) => {
  const isExpo = appType === appTypes.EXPO

  return (
    <div className="w-[838px] space-y-2">
      <h2 className={clsx("text-[28px] font-bold w-full", { "text-center": !isExpo })}>{item.day}</h2>
      <table className={clsx("divide-y divide-solid divide-[#dddddd] overflow-hidden", { "rounded-xl ": isExpo })}>
        {item.data.map(element => (
          <tr className={clsx('bg-[#f6f6f6] min-h-16 max-h-16', { 'bg-primary text-white': element.highlight })}>
            <td className="p-2 text-current">
              <div className="text-nowrap text-current">{element.from}</div>
              {element.to && <div className="text-nowrap text-current">{element.to}</div>}
            </td>
            <td className="p-2 text-current">
              {element.ubication && (
                <div className={clsx("bg-[#e9eaec] p-2 space-y-0", { "rounded": isExpo })}>
                  <div className="text-center">{element.ubication.split(',')[0]}</div>
                  {element.ubication.split(',')[1] && (
                    <div className="text-center font-bold" style={{ marginTop: '-8px' }}>
                      {element.ubication.split(',')[1]}
                    </div>
                  )}
                </div>
              )}
            </td>
            <td className="p-2 text-current" style={{ fontSize: element.size ?? "16px" }}>
              {element.text.split('\n').map(text => generateText(text))}
            </td>
          </tr>
        ))}
      </table>
    </div >
  )
}

export const ProgramScreen = ({ appType }) => {
  return (
    <MainLayout showNav showHeader appType={appType}>
      <div className="flex flex-col items-center justify-center gap-12 mt-8" >
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[56px]">PROGRAMA GENERAL</h1>
          <div className="w-36 h-3 rounded-xl bg-primary mt-4"></div>
        </div>
        <div className="relative">
          {appType === appTypes.EXPO ? (
            <>
              <img className="relative -top-[250px]" src={program1} />
              <img className="relative -top-[670px]" src={program2} />
              <img className="relative -top-[800px]" src={program3} />
            </>
          ) :
            <img className="mt-[50px]" src={pprogram1} />
          }
        </div>
      </div>
    </MainLayout >
  )
}

/*
          {days.map(item => (
            <DaysTable item={item} appType={appType} />
          ))}
*/
