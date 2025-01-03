import {Montserrat} from 'next/font/google'
import React from "react"

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

export default async function AppLayout(props: Readonly<{children: React.ReactNode}>) {
  return <html lang="en" data-bs-theme="dark" className={montserrat.className} style={montserrat.style}>
  <body>
  {props.children}
  </body>
  </html>
}
