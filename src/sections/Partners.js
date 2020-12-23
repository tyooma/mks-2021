import React from 'react'
import { useSelector } from 'react-redux'

import { Btn } from '../components/Btn'

export const Partners = () => {
  const partners = useSelector((state) => state.main.partners)
  return (
    <div className='partners'>
      <div className='partners__title'>{partners.title}</div>
      <div className='partners__logos'>
        {partners.logos.map((logo) => (
          <a href={logo.href} target='_blank' rel='noreferrer'>
            <img
              src={logo.img}
              alt='logo'
              key={logo.id}
              className='partners__img'
            />
          </a>
        ))}
      </div>
      <Btn btn={partners.btn} />
    </div>
  )
}
