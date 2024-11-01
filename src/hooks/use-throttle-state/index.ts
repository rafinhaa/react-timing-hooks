import { useState, useEffect, useRef, useCallback } from "react"

export type SetValueThrottled<V> = (value: V, delay?: number) => void
export type UseThrottleState<T> = [T, SetValueThrottled<T>]

export const useThrottleState = <T>(
  initialValue: T,
  delay: number,
): UseThrottleState<T> => {
  const [state, setState] = useState(initialValue)
  const internalStateRef = useRef(initialValue)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startInterval = (newDelay: number = delay) => {
    intervalRef.current = setInterval(() => {
      setState(prev => {
        if (prev === internalStateRef.current) {
          clearInterval(intervalRef.current!)
          intervalRef.current = null

          return prev
        }

        return internalStateRef.current
      })
    }, newDelay)
  }

  const throttledSetState = useCallback(
    (value: T) => {
      internalStateRef.current = value

      if (!intervalRef.current) startInterval()
    },
    [startInterval],
  )

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return [state, throttledSetState]
}
