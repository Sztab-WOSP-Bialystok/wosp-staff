export const parseToDoubleDigits = (myNumber: number) => myNumber.toLocaleString(undefined, {
    minimumIntegerDigits: 2,
    useGrouping: false
})