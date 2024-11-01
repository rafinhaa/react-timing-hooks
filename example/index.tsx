import "react-app-polyfill/ie11"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { UseDebounceState } from "./src/use-debounce-state"

const App = () => {
  return (
    <div>
      <UseDebounceState />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
