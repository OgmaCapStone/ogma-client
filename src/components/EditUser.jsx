import React from 'react'
import styles from '@styles/EditUser.module.scss'

const EditUser = ({ hideEdit }) =>
(
  <section className={styles.modal_bg}>
    <section className={styles.edit_container}>
      <section className={styles.edit_header}>
        <h1>Edit your profile</h1>
        <hr />
      </section>
      <section className={styles.edit_body}>
        <form className={styles.form_group}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="profile_pic">Upload your profile picture:</label>
          <input
            type="url"
            id="profile_pic"
            name="profile_pic"
          />
        </form>
      </section>
      <section className={styles.edit_footer}>
        <button className={styles.cancel_btn} type="button" onClick={() => hideEdit(false)}>Cancel</button>
        <button className={styles.submit_btn} type="submit">Save Changes</button>
      </section>
    </section>
  </section>
)

export default EditUser