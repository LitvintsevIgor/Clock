import React, {useState} from 'react';
import './App.css';
import {Clock} from "./components/Clock/Clock";

function App() {

    const get2digitsString = (num: number) => num < 10 ? "0" + num : num

    let [secondRatio, setSecondRatio] = useState(0);
    let [minuteRatio, setMinuteRatio] = useState(0);
    let [hourRatio, setHourRatio] = useState(0);

    const setClock = () => {
        const currentDate = new Date();
        secondRatio = currentDate.getSeconds() / 60;
        minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
        hourRatio = (minuteRatio + currentDate.getHours()) / 12;

        setSecondRatio(secondRatio);
        setMinuteRatio(minuteRatio);
        setHourRatio(hourRatio);
    }

  return (
    <div className="App">
      <Clock get2digitsString={get2digitsString}
             hourRatio={hourRatio}
             minuteRatio={minuteRatio}
             secondRatio={secondRatio}
             setClock={setClock}

      />
    </div>
  );
}

export default App;
