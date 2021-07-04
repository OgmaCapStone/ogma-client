import React, { useState, useContext } from 'react'
import { store } from '@context'
import { updateUser } from '@database/users'
import styles from '@styles/EditUser.module.scss'

const EditUser = ({ hideEdit, onClose }) => {
  const [editName, setEditName] = useState("");
  const [editPic, setEditPic] = useState("");
  const { state } = useContext(store)

  function handleSubmit(e) {
    e.preventDefault();

    updateUser({
      name: editName,
      username: state.user.username,
      profile_pic: editPic,
    })
      .then(() => onClose())
  }

  return (
    <section className={styles.modal_bg}>
      <section className={styles.edit_container}>
        <section className={styles.edit_header}>
          <h1>Edit your profile</h1>
          <hr />
        </section>
        <section className={styles.edit_body}>
          <form className={styles.form_group} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
            <label htmlFor="profile_pic">Upload your profile picture</label>
            <input
              id="profile_pic"
              name="profile_pic"
              type="url"
              value={editPic}
              onChange={(e) => setEditPic(e.target.value)}
            />
            <section className={styles.edit_footer}>
              <button className={styles.cancel_btn} type="button" onClick={() => hideEdit(false)}>Cancel</button>
              <button className={styles.submit_btn} type="submit">Save Changes</button>
            </section>
          </form>
        </section>
      </section>
    </section>
  )
}
export default EditUser