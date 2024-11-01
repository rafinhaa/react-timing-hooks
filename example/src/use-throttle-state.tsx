import * as React from "react"
import { useThrottleState } from "../../src"

export const UseThrottleState = () => {
  const [throttleValue, setThrottleValue] = useThrottleState("", 1000)
  const [value, setValue] = React.useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThrottleValue(event.target.value)
    setValue(event.target.value)
  }

  return (
    <div>
      <h1>Use Throttle State</h1>
      <input type="text" onChange={handleInputChange} />
      <p>
        <strong>Value: </strong>
        {value}
      </p>
      <p>
        <strong>Throttled Value:</strong>
        {throttleValue}
      </p>
    </div>
  )
}
