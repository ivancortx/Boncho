import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import { AuctionDataType } from '@/ui/auctions'
import { DeliveryOrderForm } from '@/ui/cart/forms/DeliveryOrderForm/DeliveryOrderForm'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './DeliveryModal.module.scss'

type Props = {
  showModal: boolean
  closeModal: () => void
  productData: AuctionDataType
}

export const DeliveryModal: React.VFC<Props> = ({ showModal, closeModal, productData }) => {
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
              <img src={productData.photoUrlsData[0]} alt={'product'}/>
            </div>
            <div className={styles.itemName}>
              {productData.productName}
            </div>
          </div>
          <DeliveryOrderForm closeModal={closeModal}
                             productData={productData}
                             setShowMessage={setShowMessage}/>
          {showMessage && <div className={styles.message}>
            Товар передан для обработки!
          </div>}
        </Modal.Body>
      </Modal>
    </>
  )
}