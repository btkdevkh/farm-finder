import SearchFarmProvider from "@/context/searchFarmContext"
import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Meta from "./Meta"

type ChildrenProps = {
  children: ReactNode
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <SearchFarmProvider>
      <Meta />
      <Header />
      {children}
      <Footer />
    </SearchFarmProvider>
  )
}

export default Layout
