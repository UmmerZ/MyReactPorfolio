import { createContext, useContext } from "react"

export const MyContext = createContext()

export function useAuth() {
  return useContext(MyContext)
}
