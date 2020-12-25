import React from 'react'

export const Success = ({ formVisibility, close }) => {
  return (
    <div className='success'>
      <div className='success__head'>
        <div className='success__title'>Дякуємо!</div>
        <div className='success__close'>
          <ion-icon
            name='close-outline'
            onClick={() => close(!formVisibility)}
          />
        </div>
      </div>
      <div className='success__info'>
        {' '}
        Форму успішно відправлено! Ми зв'яжемося з Вами найближчим часом.
      </div>
    </div>
  )
}
