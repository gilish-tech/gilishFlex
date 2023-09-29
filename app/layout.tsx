import Footer from "./components/footer"
import Navbar from "./components/navbar"
import "./global.css"


export const metadata = {
  title: 'Gilish',
  description: 'Show your Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}

        </main>
        <Footer/>
      </body>
    </html>
  )
}
