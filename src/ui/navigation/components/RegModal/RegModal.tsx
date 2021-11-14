import React from 'react'
import { Modal } from 'react-bootstrap'

import {RegForm} from '../../forms/RegForm/RegForm'
import regUser from '@/assets/images/reg_user.png'

import styles from './RegModal.module.scss'

type Props = {
  showModal: boolean
  closeModal: () => void
}

export const RegModal: React.VFC<Props> = ({ showModal, closeModal }) => {
  return (
    <>
      <Modal
        show={showModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div className={styles.header}>Регистрация нового пользователя</div>
        </Modal.Header>
        <Modal.Body className={styles.content}>
          <img src={regUser} className={styles.image}/>
          <div className={styles.bodyContainer}>
            <RegForm closeModal={closeModal}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}