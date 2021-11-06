import React from 'react'
import { Modal } from 'react-bootstrap'

import { LoginForm } from '../../forms/LoginForm/LoginForm'
import background from 'assets/images/blue_background.jpg'

import styles from './LoginModal.module.scss'

type Props = {
  showModal: boolean
  closeModal: () => void
}

export const LoginModal: React.VFC<Props> = ({ showModal, closeModal }) => {
  return (
    <>
      <Modal
        className={styles.container}
        show={showModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className={styles.header}>
          <div>Вход</div>
        </Modal.Header>
        <Modal.Body className={styles.lolo}>
          <LoginForm closeModal={closeModal}/>
        </Modal.Body>
      </Modal>
    </>
  )
}