import React from 'react'



const AdminTableHeader = ({titles}) => {
  return (
    <div className="basket-header" style={{'gridTemplateColumns': 'repeat(4, 1fr)'}}>
      {titles.map((title) => (
        <div className="basket-header__item" key={title} >
          {title}
        </div>
      ))}
    </div>
  )
}

export default AdminTableHeader