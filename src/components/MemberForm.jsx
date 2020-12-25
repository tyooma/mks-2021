import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'

import { Success } from '../components/Success'

init('user_HFG8Dr9h2xgIUHJTEUCT2')

export const MemberForm = ({ isFormVisible, setIsFormVisible }) => {
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
      <div className='forms__title'>Стати учасником або волонтером</div>
      <div className='forms__close'>
        <ion-icon
          name='close-outline'
          onClick={() => setIsFormVisible(!setIsFormVisible)}
        />
      </div>
      <label htmlFor='name' className='forms__label'>
        Ваше ім'я
      </label>
      <input
        type='text'
        name='user_name'
        required
        placeholder='Введіть Ваше ім&#39;я'
        className='forms__input'
      />

      <label htmlFor='email' className='forms__label'>
        Email
      </label>
      <input
        type='text'
        name='user_email'
        required
        placeholder='Введіть Ваш email'
        className='forms__input'
      />

      <label htmlFor='phone' className='forms__label'>
        Телефон
      </label>
      <input
        type='text'
        name='user_phone'
        placeholder='Введіть Ваш телефон'
        className='forms__input'
      />

      <label htmlFor='phone' className='forms__label'>
        Виберіть одну або кілька ініціатив
      </label>
      <div>
        <p className='forms__choose'>
          <input type='checkbox' name='user_initiatives' value='ofar' />
          &nbsp;OPEN FORMAT ART-RESIDENCE
        </p>
        <p className='forms__choose'>
          <input type='checkbox' name='user_initiatives' value='sesam' />
          &nbsp;SESAM Poliklinika
        </p>
        <p className='forms__choose'>
          <input type='checkbox' name='user_initiatives' value='zosya' />
          &nbsp;Золота Осінь Славутича
        </p>
        <p className='forms__choose'>
          <input type='checkbox' name='user_initiatives' value='goldenfest' />
          &nbsp;GOLDENFEST
        </p>
      </div>

      <hr className='forms__line' />

      <label htmlFor='phone' className='forms__label'>
        Виберіть тип участі
      </label>
      <div>
        <p className='forms__choose'>
          <input type='radio' name='user_partician' value='ofar' />
          &nbsp;Я згоден стати учасником
        </p>
        <p className='forms__choose'>
          <input type='radio' name='user_partician' value='sesam' />
          &nbsp;Я згоден стати волонтером
        </p>
      </div>

      <label htmlFor='notes' className='forms__label'>
        Посилання на Ваші роботи або послуги
      </label>
      <textarea
        name='user_notes'
        placeholder='Вставте посилання на Ваші роботи або послуги'
        className='forms__textarea'
      ></textarea>
      <button type='submit' className='forms__submit'>
        запропонувати себе
      </button>
    </form>
  )
}
