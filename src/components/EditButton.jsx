import React from 'react'
import Tooltip from '@components/Tooltip'
import styles from '@styles/EditButton.module.scss'
import { EditIcon } from '@icons'

const EditButton = () => (
  <button type="button" className={styles.edit_btn}>
    <Tooltip content="Edit profile">
      <EditIcon size={14} color="#FFF" />
    </Tooltip>
  </button>

)

export default EditButton
