import { ReactNode } from "react"
import Footer from "./Footer"
import Header from "./Header"
import Meta from "./Meta"

type ChildrenProps = {
  children: ReactNode
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
