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

export const SearchFarmContext = createContext(defaultState)

const SearchFarmProvider = ({ children }: ChildrenProps) => {
  const [query, setQuery] = useState<string>("")

  const handleChange = (queryString: string) =>
    setQuery(queryString.toLowerCase())

  const contextValue = {
    query,
    handleChange,
  }

  return (
    <SearchFarmContext.Provider value={contextValue}>
      {children}
    </SearchFarmContext.Provider>
  )
}

export default SearchFarmProvider
