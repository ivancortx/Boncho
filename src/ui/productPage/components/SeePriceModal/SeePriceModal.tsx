import React from 'react'
import { Button, Modal } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './SeePriceModal.module.scss'

type Props = {
  showSeePriceModal: boolean
  closeSeePriceModal: () => void
  openCurrentPrice: () => void
  seePrice: string
};

export const SeePriceModal: React.VFC<Props> = ({
  showSeePriceModal,
  closeSeePriceModal,
  openCurrentPrice,
  seePrice,
}) => {
  const startSeePriceProcess = () => {
    openCurrentPrice()
    closeSeePriceModal()
  }

  return (
    <>
      <Modal
        show={showSeePriceModal}
        onHide={closeSeePriceModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div className={styles.warning}>
            Стоимость просмотра цены {seePrice} $, Вы точно желаете прододжить?
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.bodyContainer}>
            <div>
              <Button
                onClick={startSeePriceProcess}
                className={styles.btn}
                variant="outline-success"
              >
                Да
              </Button>
            </div>
            <div>
              <Button onClick={closeSeePriceModal} className={styles.btn} variant="outline-danger">
                Нет
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
