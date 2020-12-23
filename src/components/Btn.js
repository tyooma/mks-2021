import React from 'react'

export const Btn = ({ btn }) => {
  return (
    <div className='btn' style={{ backgroundColor: btn.background }}>
      <div className='btn__text' style={{ color: btn.color }}>
        {btn.text}
      </div>
    </div>
  )
}
