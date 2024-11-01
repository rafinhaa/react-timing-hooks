import { renderHook, waitFor, act } from "@testing-library/react"
import { useDebounceState } from "../"

const values = {
  initialValue: "initial value",
  secondValue: "second value",
  thirdValue: "third value",
}

describe("useDebounceState", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  it("should be to able to set the initial value", () => {
    const { result } = renderHook(() =>
      useDebounceState(values.initialValue, 1000),
    )

    waitFor(() => {
      expect(result.current[0]).toBe(values.initialValue)
    })
  })

  it("should be to able to update the value", () => {
    const { result } = renderHook(() =>
      useDebounceState(values.initialValue, 1000),
    )

    expect(result.current[0]).toBe(values.initialValue)

    act(() => {
      result.current[1](values.secondValue)
    })

    act(() => {
      jest.runAllTimers()
    })

    waitFor(() => {
      expect(result.current[0]).toBe(values.secondValue)
    })
  })

  it("should be to able to reset the debounced value", async () => {
    const { result } = renderHook(() =>
      useDebounceState(values.initialValue, 1000),
    )

    result.current[1](values.secondValue)

    act(() => {
      jest.runAllTimers()
    })

    await waitFor(() => {
      expect(result.current[0]).toBe(values.secondValue)
    })

    result.current[1](values.thirdValue)

    act(() => {
      jest.runAllTimers()
    })

    await waitFor(() => {
      expect(result.current[0]).toBe(values.thirdValue)
    })
  })

  it("should be to able to set the delay", () => {
    const { result } = renderHook(() =>
      useDebounceState(values.initialValue, 1000),
    )

    expect(result.current[0]).toBe(values.initialValue)

    act(() => {
      result.current[1](values.secondValue, 2000)
    })

    act(() => {
      jest.runAllTimers()
    })

    waitFor(() => {
      expect(result.current[0]).toBe(values.secondValue)
    })
  })
})
