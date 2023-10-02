import Footer from "@/components/footer/Footer"
import NavigationBar from "@/components/navbar/NavigationBar"


export default function ProgressLayout({  
    children,
}: {
  children: React.ReactNode
}) {
    return (
      <html lang="en">
        <body >
          <NavigationBar/>
            {children}
          <Footer />
          </body>  
      </html>
    )
  }
  