import React, {useState} from "react";
import Broken from "./components/Broken";
export default function Home() {
  const[number, setNumber] = useState(1000000)

  const decrease = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1 className={'number'}>
        {number}
      </h1>
      <div className={'imageContainer'}>
        {
          number > 666665 && (
            <img src={'https://cdn.discordapp.com/attachments/935776183688245341/992164761917722654/unknown.png'} className={'notBrokenEgg'} onClick={decrease}/>
          )
        }
        {
          number > 333332 && number < 666666 && (
            <img src={'https://cdn.discordapp.com/attachments/935776183688245341/992164762479759411/unknown.png'} className={'littleBrokenEgg'} onClick={decrease}/>

          )
        }
        {
          number > 0 && number < 333333 && (
            <img src={'https://cdn.discordapp.com/attachments/935776183688245341/992164762869837824/unknown.png'} className={'muchBrokenEgg'} onClick={decrease}/>
          )
        }
        {
          number == 0 && (
            <Broken />
          )
        }
      </div>
    </div>
  )
}
