import {FC} from "react";
import {DisneyFont} from "../../styledComponents/DisnayFont";
import {parseToDoubleDigits} from "../../../utils/DisplayUtils";

type CounterGridProps = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const CounterGrid: FC<CounterGridProps> = ({days, hours, minutes, seconds}: CounterGridProps) => (
    <DisneyFont
        style={{fontSize: 'xxx-large'}}>
        <Stack direction="horizontal" gap={3}>
            <Stack direction="vertical">
                <Col style={{textAlign: "center"}}>{days}</Col>
                <Col>DNI</Col>
            </Stack>
            <Stack direction="vertical">
                <Col style={{textAlign: "center"}}>{parseToDoubleDigits(hours)}</Col>
                <Col>GODZ</Col>
            </Stack>
            <Stack direction="vertical">
                <Col style={{textAlign: "center"}}>{parseToDoubleDigits(minutes)}</Col>
                <Col>MIN</Col>
            </Stack>
            <Stack direction="vertical">
                <Col style={{textAlign: "center"}}>{parseToDoubleDigits(seconds)}</Col>
                <Col>SEK</Col>
            </Stack>
        </Stack>
    </DisneyFont>)


export default CounterGrid