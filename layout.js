import "./globals.css"

export const metadata = {
  title: "3D PC Build Simulator",
  description: "Learn to build PCs in 3D"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  )
}
