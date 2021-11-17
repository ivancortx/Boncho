import React from 'react'
import { Modal } from 'react-bootstrap'

import { LoginForm } from '../../forms/LoginForm/LoginForm'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './LoginModal.module.scss'
import user_auth from '@/assets/images/user_auth_model.png'


type Props = {
  showModal: boolean;
  closeModal: () => void;
};

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
          <div className={styles.header}>Войти в аккаунт</div>
        </Modal.Header>
        <Modal.Body className={styles.content}>
          <img src={String(user_auth)} className={styles.image} />
          <LoginForm closeModal={closeModal} />
        </Modal.Body>
      </Modal>
    </>
  )
}
