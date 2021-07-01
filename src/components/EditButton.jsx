import React, { useState } from 'react'
import Tooltip from '@components/Tooltip'
import EditModal from '@components/EditModal'
import styles from '@styles/EditButton.module.scss'
import { EditIcon } from '@icons'

const EditButton = () => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <button className={styles.edit_btn} type="button" onClick={() => setShowEdit(true)}>
      {showEdit && <EditModal hideEdit={setShowEdit} />}
      <Tooltip content="Edit profile">
        <EditIcon size={14} color="#FFF" />
      </Tooltip>
    </button>
  )
}

export default EditButton
