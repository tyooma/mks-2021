import React from 'react'

import { Btn } from './Btn'
import { MoreBtn } from './MoreBtn'

export const Jumbotron = ({
  title,
  desc,
  background,
  btn,
  moreBtn,
  titleColor,
  descColor,
  isFormVisible,
  setIsFormVisible
}) => (
  <div className='jumbotron' style={{ backgroundColor: background }}>
    <div className='jumbotron__title' style={{ color: titleColor }}>
      {title}
    </div>
    <div className='jumbotron__desc' style={{ color: descColor }}>
      {desc}{' '}
      <MoreBtn
        title={moreBtn.title}
        color={moreBtn.color}
        href={moreBtn.href}
      />
    </div>
    {btn.text ? (
      isFormVisible !== null ? (
        <div onClick={() => setIsFormVisible(true)}>
          <Btn btn={btn} />
        </div>
      ) : (
        <Btn btn={btn} />
      )
    ) : (
      null
    )}
  </div>
)
