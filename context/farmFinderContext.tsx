import { useState, createContext, ReactNode } from "react"

type ChildrenProps = {
  children: ReactNode
}

type DefaultGlobalState = {
  query: string
  handleChange: (queryString: string) => void
}

const defaultState: DefaultGlobalState = {
  query: "",
  handleChange: () => {},
}

export const FarmFinderContext = createContext(defaultState)

const FarmFinderProvider = ({ children }: ChildrenProps) => {
  const [query, setQuery] = useState<string>("")

  const handleChange = (queryString: string) => {
    setQuery(queryString.toLowerCase())
  }

  const contextValue = {
    query,
    handleChange,
  }

  return (
    <FarmFinderContext.Provider value={contextValue}>
      {children}
    </FarmFinderContext.Provider>
  )
}

export default FarmFinderProvider
