import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProfileCard from '../components/profile/profileCard'
import ProfileForm from '../components/profile/profileForm'
import { getCurrentUser } from '../store/auth'

const Profile = () => {
  const dispatch = useDispatch()
    const { type } = useParams()
  const [typeProfile, setTypeProfile]=React.useState(type==='edit'? type:'profile')
  const toggleTypeProfile =()=>{
    setTypeProfile((prevState)=>(prevState==='edit'? 'profile':'edit'))
  }

  
  const currentUser = useSelector(getCurrentUser())
  return (
    <div className="profile-page">
      {/* <div className="container"> */}
        <div className="profile-page__wrapper">
        <div className="profile-page__inner">
        <h1 className='profile-page__title'>{typeProfile === 'edit'? 'Редактирование профиля':'Профиль'}</h1>
          {typeProfile === 'edit'? (
          <>  
          {currentUser && <ProfileForm user={currentUser} />}
          </>
          ):(<>
          {currentUser && <ProfileCard user={currentUser} />}
          </>)}
          <button type='button' className='profile-page__btn' onClick={toggleTypeProfile}>{typeProfile === 'edit'? 'Отменить': 'Редактировать'}</button>
        </div>
        
      </div>
    </div>

  )
}

export default Profile