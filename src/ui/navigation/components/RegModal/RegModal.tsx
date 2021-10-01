import React from 'react'
import { Modal } from 'react-bootstrap'
import {RegForm} from "../../forms/RegForm/RegForm";

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
          <div>Регистрация</div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.bodyContainer}>
            <RegForm/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}