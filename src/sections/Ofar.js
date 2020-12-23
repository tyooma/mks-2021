import React from 'react'
import { useSelector } from 'react-redux'

import { Jumbotron } from '../components/Jumbotron'

export const Ofar = () => {
  const content = useSelector((state) =>
    state.main.initiatives.find((item) => item.id === '2')
  )

  return (
    <div className='section'>
      <Jumbotron
        title={content.title}
        desc={content.desc}
        btn={content.btn}
        moreBtn={content.moreBtn}
        background={content.background}
        titleColor={content.titleColor}
        descColor={content.descColor}
      />
      <div className='section__ornament section__ornament_ofar' />
    </div>
  )
}
