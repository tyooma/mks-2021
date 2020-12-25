import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Btn } from '../components/Btn'
import { PartnerForm } from '../components/PartnerForm.jsx'

export const Partners = () => {
  const partners = useSelector((state) => state.main.partners)
  const [isFormVisible, setIsFormVisible] = useState(false)

  return (
    <div className='partners'>
      {isFormVisible ? (
        <div className='blackout'>
          <PartnerForm
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
          />
        </div>
      ) : null}
      <div className='partners__title'>{partners.title}</div>
      <div className='partners__logos'>
        {partners.logos.map((logo) => (
          <a href={logo.href} target='_blank' rel='noreferrer' key={logo.id}>
            <img src={logo.img} alt='logo' className='partners__img' />
          </a>
        ))}
      </div>
      <div onClick={() => setIsFormVisible(true)}>
        <Btn btn={partners.btn} />
      </div>
    </div>
  )
}
