import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createEvent } from '../store/actions/eventActions'
import { app } from '../config/fbConfig'

import { Btn } from './Btn'

const schema = yup.object().shape({
  image: yup
    .mixed()
    .test(
      'filesize',
      'The file is too large',
      (value) => value && value[0].size < 4000000
    )
})

const refDatePicker = React.createRef()

const AddEventForm = (props) => {
  const [eventToggle, setEventToggle] = useState(false)
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data, e) => {
    const file = data.image[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(data.image[0].name)
    await fileRef.put(file)
    const fileUrl = await fileRef.getDownloadURL()

    e.target.reset()
    refDatePicker.current.clear()
    setEventToggle(!eventToggle)

    const eventData = {
      title: data.title,
      description: data.description,
      eventDate: data.date.toDateString(),
      id: Date.now(),
      image: fileUrl
    }
    props.createEvent(eventData)
  }

  return (
    <>
      <div onClick={() => setEventToggle(!eventToggle)} className='aef__new'>
        <Btn
          btn={{ background: '#d71016', color: '#fff', text: 'нова подія' }}
        />
      </div>
      {eventToggle ? (
        <form onSubmit={handleSubmit(onSubmit)} className='aef__form'>
          <label htmlFor='title' className='aef__label'>
            Назва події
          </label>
          <input
            type='text'
            name='title'
            placeholder='Введіть назву події'
            ref={register}
            required
            className='aef__input'
          />
          <label htmlFor='description' className='aef__label'>
            Опис події
          </label>
          <textarea
            type='text'
            name='description'
            placeholder='Напишіть опис події, додайте посилання або контакти'
            ref={register}
            required
            className='aef__textarea'
          />
          <label htmlFor='date' className='aef__label'>
            Дата події
          </label>
          <Controller
            name='date'
            control={control}
            render={({ onChange, value }) => (
              <DatePicker
                required
                placeholderText='Виберіть дату'
                selected={value}
                onChange={onChange}
                ref={refDatePicker}
                className='aef__date'
              />
            )}
          />
          <label htmlFor='image' className='aef__label'>
            Постер події або картинка
          </label>
          <input
            type='file'
            name='image'
            ref={register}
            required
            className='aef__image'
          />
          {errors.image && <p>{errors.image.message}</p>}
          <button type='submit' className='aef__submit'>
            зберегти
          </button>
        </form>
      ) : (
        ''
      )}
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event))
  }
}

export default connect(null, mapDispatchToProps)(AddEventForm)
