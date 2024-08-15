import {FC, ReactNode} from "react";
import Countdown from "react-countdown";
import {CountdownTimeDelta} from "react-countdown/dist/utils";
import EndCounter from "./components/EndCounter";
import CounterGrid from "./components/CounterGrid";

type CounterType = {
    counterDate: Date | number | string
}

const Counter: FC<CounterType> = ({counterDate}: CounterType) => {

    const render = ({completed, ...rest}: CountdownTimeDelta): ReactNode => {
        if (completed) {
            return <EndCounter />
        }

        return <CounterGrid {...rest} />
    }

    return <Countdown renderer={render} date={counterDate}/>
}

export default Counter