import React, {useEffect, useState} from "react";
import './../../App.css';


type PropsType = {
    get2digitsString: (num: number) => number | string
    hourRatio: number
    minuteRatio: number
    secondRatio: number
    setClock: () => void
}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect( () => {
        const intervalID = setInterval( () => {
            setDate(new Date());
            props.setClock();

        }, 1000 );

        return () => {
            clearInterval(intervalID);
        }

    }, [] )

    return <div>
        <span>{props.get2digitsString(date.getHours())}</span>
        :
        <span>{props.get2digitsString(date.getMinutes())}</span>
        :
        <span>{props.get2digitsString(date.getSeconds())}</span>
        <div className="clock">
            <div className="hand hour" style={{transform: `translate(-50%) rotate(${props.hourRatio * 360}deg)`}}/>
            <div className="hand minute" style={{transform: `translate(-50%) rotate(${props.minuteRatio * 360}deg)`}}/>
            <div className="hand second" style={{transform: `translate(-50%) rotate(${props.secondRatio * 360}deg)`}}/>

            <div className="number number1">
                <div>1</div>
            </div>
            <div className="number number2">
                <div>2</div>
            </div>
            <div className="number number3">
                <div>3</div>
            </div>
            <div className="number number4">
                <div>4</div>
            </div>
            <div className="number number5">
                <div>5</div>
            </div>
            <div className="number number6">
                <div>6</div>
            </div>
            <div className="number number7">
                <div>7</div>
            </div>
            <div className="number number8">
                <div>8</div>
            </div>
            <div className="number number9">
                <div>9</div>
            </div>
            <div className="number number10">
                <div>10</div>
            </div>
            <div className="number number11">
                <div>11</div>
            </div>
            <div className="number number12">
                <div>12</div>
            </div>

        </div>
    </div>

}