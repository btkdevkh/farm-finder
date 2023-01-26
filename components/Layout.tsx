import FarmFinderProvider from "@/context/farmFinderContext"
import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Meta from "./Meta"

type ChildrenProps = {
  children: ReactNode
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <FarmFinderProvider>
      <Meta />
      <Header />
      {children}
      <Footer />
    </FarmFinderProvider>
  )
}

export default Layout
