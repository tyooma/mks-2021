import React from 'react'
import { useSelector } from 'react-redux'

export const Curators = () => {
  const curators = useSelector((state) => state.main.curators)
  const initiativeLogos = useSelector((state) => state.main.initiativeLogos)

  return (
    <>
      <div className='curators-decor'>
        <div className='curators-decor__decor'>
          <div className='curators-decor__ornament curators-decor__ornament_left' />
          <div className='curators-decor__decor-text'>куратори проекту</div>
          <div className='curators-decor__ornament curators-decor__ornament_right' />
        </div>
      </div>
      <div className='curators'>
        {curators.map((curator) => (
          <div key={curator.id} className='curator'>
            <img src={curator.img} alt='curator' className='curator__img' />
            <div className='curator__name-wrap'>
              <a
                href={curator.href}
                target='_blanl'
                rel='noreferrer'
                className='curator__name'
              >
                {curator.name}
              </a>
            </div>
            <div className='curator__position'>{curator.position}</div>
          </div>
        ))}
      </div>
      <div className='initiative-logos'>
        {initiativeLogos.map((logo) => (
          <a
            href={logo.href}
            target='_blank'
            rel='noreferrer'
            key={logo.id}
            className='initiative-logos__link'
          >
            <img src={logo.img} alt='logo' className='initiative-logos__item' />
          </a>
        ))}
      </div>
    </>
  )
}
