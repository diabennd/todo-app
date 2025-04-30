import React from 'react'
import editIcon from '../assets/images/edit.svg'
import deleteIcon from '../assets/images/delete.svg'


const DetailPage = () => {
  return (
    <div>
        <h1>Detail Page</h1>
        <div>
      <button><img src={editIcon} alt="" /></button>
      <button><img src={deleteIcon} alt="" /></button>
    </div>
    </div>
  )
}

export default DetailPage