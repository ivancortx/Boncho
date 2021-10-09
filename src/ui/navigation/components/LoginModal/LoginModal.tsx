import React from 'react'
import { Modal } from 'react-bootstrap'

import { LoginForm } from '../../forms/LoginForm/LoginForm'

import styles from './LoginModal.module.scss'

type Props = {
  showModal: boolean
  closeModal: () => void
}

export const LoginModal: React.VFC<Props> = ({ showModal, closeModal }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div>Вход</div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.bodyContainer}>
            <LoginForm closeModal={closeModal}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}