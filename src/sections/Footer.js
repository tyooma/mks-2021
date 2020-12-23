import React from 'react'
import { useSelector } from 'react-redux'

import { Auth } from '../components/Auth/Auth'

export const Footer = () => {
  const contacts = useSelector((state) => state.main.contacts)

  return (
    <div className='footer'>
      <a href='tel:+38 (045) 792 36 20' className='footer__phone'>
        {contacts.phone}
      </a>
      <a href='mailto:culture@slavutych.capital' className='footer__email'>
        {contacts.email}
      </a>
      <div className='footer__icons'>
        <a
          href='https://www.instagram.com/slavutichgram/'
          target='_blank'
          rel='noreferrer'
          className='footer__link'
        >
          <ion-icon name='logo-instagram' />
        </a>
        <a
          href='https://www.facebook.com/culturalcapital2021'
          target='_blank'
          rel='noreferrer'
          className='footer__link'
        >
          <ion-icon name='logo-facebook' />
        </a>
        <a
          href='https://www.youtube.com/watch?v=bkzXt7swcfE&feature=emb_logo'
          target='_blank'
          rel='noreferrer'
          className='footer__link'
        >
          <ion-icon name='logo-youtube' />
        </a>
      </div>
      <Auth />
    </div>
  )
}
