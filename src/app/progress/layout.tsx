import Footer from "@/components/footer/Footer"
import Navbar from "@/components/navbar/Navbar"


export default function ProgressLayout({  
    children,
}: {
  children: React.ReactNode
}) {
    return (
      <html lang="en">
        <body >
          <Navbar />
            {children}
          <Footer />
          </body>  
      </html>
    )
  }
  