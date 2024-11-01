import { renderHook, act } from "@testing-library/react"

import { useThrottleState } from ".."

describe("useThrottleState", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  it("should be to able to initialize with the provided initial value", () => {
    const { result } = renderHook(() => useThrottleState(0, 1000))
    expect(result.current[0]).toBe(0)
  })

  it("should be to able to update the state after the specified delay", () => {
    const { result } = renderHook(() => useThrottleState(0, 1000))

    act(() => {
      result.current[1](1)
    })

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current[0]).toBe(1)
  })

  it("should be not able to update state immediately", () => {
    const { result } = renderHook(() => useThrottleState(0, 1000))

    act(() => {
      result.current[1](1)
    })

    expect(result.current[0]).toBe(0)
  })

  it("should be stop able to the interval if the internal state doesn't change", () => {
    const { result } = renderHook(() => useThrottleState(0, 1000))

    act(() => {
      result.current[1](1)
      jest.advanceTimersByTime(1000)
    })

    expect(result.current[0]).toBe(1)

    act(() => {
      result.current[1](1)
    })

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current[0]).toBe(1)
  })

  it("should be restart able to the interval if a new value is set", () => {
    const { result } = renderHook(() => useThrottleState(0, 1000))

    act(() => {
      result.current[1](1)
    })

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(result.current[0]).toBe(1)

    act(() => {
      result.current[1](2)
    })

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(result.current[0]).toBe(1)

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(result.current[0]).toBe(2)
  })
})
