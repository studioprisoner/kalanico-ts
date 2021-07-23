import React, { ReactNode } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Kalani Co - Heavenly Flowers Arranged for you',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Kalani Co Flowers" key="title" />
      <meta property="og:url" content="https://www.kalani-co.com.au" key="url" />
      <meta property="og:type" content="Store" key="type"/>
      <meta property="og:image" content="https://www.kalani-co.com.au/images/front-page.webp" key="image" />
      <meta property="og:description" content="Heavenly dried flower arrangements made from home with love." />
    </Head>
    <div className="relative overflow-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
    
  </>
)

export default Layout
