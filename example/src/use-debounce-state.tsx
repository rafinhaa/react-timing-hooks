import * as React from "react"
import { useDebounceState } from "../../src"

export const UseDebounceState = () => {
  const [debouncedValue, setDebouncedValue] = useDebounceState("", 1000)
  const [value, setValue] = React.useState("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedValue(event.target.value)
    setValue(event.target.value)
  }

  return (
    <div>
      <h1>Use Debounce State</h1>

      <input type="text" onChange={handleInputChange} />
      <p>
        <strong>Value: </strong>
        {value}
      </p>
      <p>
        <strong>Debounced Value:</strong>
        {debouncedValue}
      </p>
    </div>
  )
}
