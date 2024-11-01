import { useState, useEffect, useRef, useCallback } from "react"

export type SetValueDebounced<V> = (value: V, newDelay?: number) => void
export type UseDebounceState<T> = [T, SetValueDebounced<T>]

export const useDebounceState = <T>(
  initialValue: T,
  delay: number,
): UseDebounceState<T> => {
  const [debouncedValue, setDebouncedValue] = useState(initialValue)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const setValueDebounced: SetValueDebounced<T> = useCallback(
    (newValue: T, newDelay) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(newValue)
      }, newDelay ?? delay)
    },
    [delay],
  )

  useEffect(() => {
    return () => {
      if (!timeoutRef.current) return

      clearTimeout(timeoutRef.current)
    }
  }, [])

  return [debouncedValue, setValueDebounced]
}
