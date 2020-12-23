import React from 'react'
import { useSelector } from 'react-redux'

import mainLogo from '../assets/main_logo.svg'

import { Jumbotron } from '../components/Jumbotron'
import { Nav } from '../components/Nav'
import { Calendar } from '../components/Calendar.jsx'

export const Header = () => {
  const content = useSelector((state) =>
    state.main.initiatives.find((item) => item.section === 'Header')
  )

  return (
    <div className='header'>
      <img src={mainLogo} alt='logo' className='header__logo' />
      <Nav />
      <Calendar />
      <Jumbotron
        title={content.title}
        desc={content.desc}
        btn={content.btn}
        moreBtn={content.moreBtn}
        background={content.background}
        titleColor={content.titleColor}
        descColor={content.descColor}
      />
      <div className='header__videos'>
        <iframe
          src='https://www.youtube.com/embed/bkzXt7swcfE'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          title='first-video'
          className='header__video'
        />
        <iframe
          src='https://www.youtube.com/embed/lrNKjRbLUF0'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
          title='second-video'
          className='header__video'
        />
      </div>
      <div className='header__decor'>
        <div className='header__ornament header__ornament_left' />
        <div className='header__decor-text'>
          За підтримки українського культурного фонду
        </div>
        <div className='header__ornament header__ornament_right' />
      </div>
    </div>
  )
}
