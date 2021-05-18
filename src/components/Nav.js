import React from 'react'

export const Nav = () => (
  <nav className='nav'>
    <ul className='nav__list'>
      <li className='nav__item'>
        <a
          href='https://www.facebook.com/CultureSlavutich'
          target='_blank'
          rel='noreferrer'
          className='nav__link'
        >
          Відділ культури Славутича
        </a>
      </li>
      <li className='nav__item'>
        <a
          href='https://www.facebook.com/102391795005758/posts/239257054652564'
          target='_blank'
          rel='noreferrer'
          className='nav__link'
        >
          Прес-анонси
        </a>
      </li>
      <li className='nav__item'>
        <a
          href='https://www.facebook.com/visitslavutych'
          target='_blank'
          rel='noreferrer'
          className='nav__link'
        >
          Туристично-інформаційний центр
        </a>
      </li>
    </ul>
  </nav>
)
