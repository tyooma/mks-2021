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

    console.log(e.target)

    emailjs.sendForm(
      'service_62qyzyn',
      'template_oe2sdmc',
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
        <div className='forms__fake-checkbox'>
          <input
            type='checkbox'
            name='user_initiatives'
            value='OPEN FORMAT ART-RESIDENCE'
            id='fake-checkbox_1'
          />
          <label htmlFor='fake-checkbox_1' className='forms__fake-label'>
            OPEN FORMAT ART-RESIDENCE
          </label>
        </div>
        <div className='forms__fake-checkbox'>
          <input
            type='checkbox'
            name='user_initiatives'
            value='SESAM Poliklinika'
            id='fake-checkbox_2'
          />
          <label htmlFor='fake-checkbox_2' className='forms__fake-label'>
            SESAM Poliklinika
          </label>
        </div>
        <div className='forms__fake-checkbox'>
          <input
            type='checkbox'
            name='user_initiatives'
            value='Золота Осінь Славутича'
            id='fake-checkbox_3'
          />
          <label htmlFor='fake-checkbox_3' className='forms__fake-label'>
            Золота Осінь Славутича
          </label>
        </div>
        <div className='forms__fake-checkbox'>
          <input
            type='checkbox'
            name='user_initiatives'
            value='GOLDENFEST'
            id='fake-checkbox_4'
          />
          <label htmlFor='fake-checkbox_4' className='forms__fake-label'>
            GOLDENFEST
          </label>
        </div>
      </div>

      <hr className='forms__line' />

      <label htmlFor='phone' className='forms__label'>
        Виберіть тип участі
      </label>
      <div>
        <fieldset id='user__partician' className='forms__fieldset'>
          <div className='forms__fake-checkbox'>
            <input
              type='radio'
              name='user_partician'
              value='Я згоден стати учасником'
              id='fake-checkbox_5'
              className='forms__radio'
            />
            <label htmlFor='fake-checkbox_5' className='forms__fake-label'>
              Я згоден стати учасником
            </label>
          </div>
          <div className='forms__fake-checkbox'>
            <input
              type='radio'
              name='user_partician'
              value='Я згоден стати волонтером'
              id='fake-checkbox_6'
              className='forms__radio'
            />
            <label htmlFor='fake-checkbox_6' className='forms__fake-label'>
              Я згоден стати волонтером
            </label>
          </div>
        </fieldset>
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
