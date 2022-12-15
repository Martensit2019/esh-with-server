import React from 'react'

const ProfileCard = ({user}) => {
  const { fio, phone, email, address } = user
  return (
        <div className="profile-card">
          {/* <div className="profile-card__inner"></div> */}
          <div className="profile-card__row">
            <div className="profile-card__title">ФИО:</div>
            <div className="profile-card__body">{fio}</div>
          </div>
          <div className="profile-card__row">
            <div className="profile-card__title">Телефон:</div>
            <div className="profile-card__body">{phone || 'не указан'}</div>
          </div>
          <div className="profile-card__row">
            <div className="profile-card__title">Email:</div>
            <div className="profile-card__body">{email}</div>
          </div>
          <div className="profile-card__row">
            <div className="profile-card__title">Адрес доставки </div>
            <div className="profile-card__body">{address || 'не указан'}</div>
          </div>
        </div>
  )
}

export default ProfileCard