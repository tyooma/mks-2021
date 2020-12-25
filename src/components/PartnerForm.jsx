import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'

import { Success } from './Success'

init('user_HFG8Dr9h2xgIUHJTEUCT2')

export const PartnerForm = ({ isFormVisible, setIsFormVisible }) => {
  const [sended, setSended] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSended(!sended)

    emailjs.sendForm(
      'service_62qyzyn',
      'template_jqfl6sr',
      e.target,
      'user_HFG8Dr9h2xgIUHJTEUCT2'
    )
  }

  return sended ? (
    <Success formVisibility={isFormVisible} close={setIsFormVisible} />
  ) : (
    <form className='forms' onSubmit={sendEmail}>
      <div className='forms__title'>Стати партнером</div>
      <div className='forms__close'>
        <ion-icon
          name='close-outline'
          onClick={() => setIsFormVisible(!setIsFormVisible)}
        />
      </div>
      <label htmlFor='forms' className='forms__label'>
        Назва партнера
      </label>
      <input
        type='text'
        name='user_partner'
        required
        placeholder='Введіть назву партнера'
        className='forms__input'
      />

      <label htmlFor='name' className='forms__label'>
        Ім'я контактної особи
      </label>
      <input
        type='text'
        name='user_name'
        required
        placeholder='Введіть ім&#39;я контактної особи'
        className='forms__input'
      />

      <label htmlFor='email' className='forms__label'>
        Email
      </label>
      <input
        type='text'
        name='user_email'
        placeholder='Введіть email'
        className='forms__input'
      />

      <label htmlFor='phone' className='forms__label'>
        Телефон
      </label>
      <input
        type='text'
        name='user_phone'
        placeholder='Введіть телефон'
        className='forms__input'
      />

      <label htmlFor='notes' className='forms__label'>
        Приклади послуг або матеріальної допомоги
      </label>
      <textarea
        name='user_notes'
        placeholder='Вставте посилання на приклади послуг або матеріальної допомоги'
        className='forms__textarea'
      ></textarea>
      <button type='submit' className='forms__submit'>
        стати партнером
      </button>
    </form>
  )
}
