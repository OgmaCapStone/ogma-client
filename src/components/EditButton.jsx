import React, { useState } from 'react'
import Tooltip from '@components/Tooltip'
import EditUser from '@components/EditUser'
import styles from '@styles/EditButton.module.scss'
import { EditIcon } from '@icons'

const EditButton = () => {
  const [showEdit, setShowEdit] = useState(false);

  const closeModal = () => {
    setShowEdit(false)
  }

  return (
    <div>
      <button className={styles.edit_btn} type="button" onClick={() => setShowEdit(true)}>
        <Tooltip content="Edit profile">
          <EditIcon size={14} color="#FFF" />
        </Tooltip>
      </button>
      {showEdit && <EditUser hideEdit={setShowEdit} onClose={closeModal} />}
    </div>
  )
}

export default EditButton
