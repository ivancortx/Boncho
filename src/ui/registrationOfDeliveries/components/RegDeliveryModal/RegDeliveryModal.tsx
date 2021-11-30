import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { WaitingDeliveryDataType } from
    '@/ui/registrationOfDeliveries/interfaces/RegistrationOfDeliveriesPageInterfaces'
import { DeliveryParametersForm } from
    '@/ui/registrationOfDeliveries/forms/DeliveryParametersForm/DeliveryParametersForm'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './RegDeliveryModal.module.scss'

type Props = {
  showModal: boolean
  closeModal: () => void
  productData: WaitingDeliveryDataType
}

export const RegDeliveryModal: React.VFC<Props> = ({ showModal, closeModal, productData }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false)

  return (
    <>
      <Modal
        size="lg"
        show={showModal}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div className={styles.header}>Оформление доставки</div>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.itemContent}>
            <div className={styles.image}>
              <img src={productData.productImages[0]} alt={'product'}/>
            </div>
            <div className={styles.itemName}>
              {productData.productName}
            </div>
          </div>
          <DeliveryParametersForm closeModal={closeModal}
                                  productData={productData}
                                  setShowMessage={setShowMessage}/>
          {showMessage && <div className={styles.message}>
            Сохранено
          </div>}
        </Modal.Body>
      </Modal>
    </>
  )
}