import React from 'react'

import { Ofar } from './sections/Ofar'
import { Curators } from './sections/Curators'
import { Footer } from './sections/Footer'
import { GoldenFest } from './sections/GoldenFest'
import { Header } from './sections/Header'
import { Partners } from './sections/Partners'
import { Sesam } from './sections/Sesam'
import { Zosya } from './sections/Zosya'

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Ofar />
      <Sesam />
      <Zosya />
      <GoldenFest />
      <Curators />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
