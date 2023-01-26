import footerStyles from "@/styles/Footer.module.css"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div>FARMFINDER &copy; 2023</div>
      <Link href="/about">|ABOUT</Link>
    </footer>
  )
}

export default Footer
