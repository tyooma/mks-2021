import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Jumbotron } from '../components/Jumbotron'
import { MemberForm } from '../components/MemberForm'

export const Sesam = () => {
  const content = useSelector((state) =>
    state.main.initiatives.find((item) => item.id === '3')
  )
  const [isFormVisible, setIsFormVisible] = useState(false)

  return (
    <div className='section'>
      {isFormVisible ? (
        <div className='blackout'>
          <MemberForm
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
          />
        </div>
      ) : null}
      <Jumbotron
        title={content.title}
        desc={content.desc}
        btn={content.btn}
        moreBtn={content.moreBtn}
        background={content.background}
        titleColor={content.titleColor}
        descColor={content.descColor}
        isFormVisible={isFormVisible}
        setIsFormVisible={setIsFormVisible}
      />
      <div className='section__ornament section__ornament_sesam' />
    </div>
  )
}
