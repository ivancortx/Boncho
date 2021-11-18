import React from 'react'
import { Modal } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './DeliveryModal.module.scss'
import { AuctionDataType } from '@/ui/auctions'
import {SendButton} from '@/ui/cart/components/SendButton/SendButton'


type Props = {
  showModal: boolean
  closeModal: () => void
  productData: AuctionDataType
}

export const DeliveryModal: React.VFC<Props> = ({ showModal, closeModal, productData }) => {
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
          <div className={styles.sendButton}>
            <SendButton />
          </div>

          {/*<LoginForm closeModal={closeModal} />*/}
        </Modal.Body>
      </Modal>
    </>
  )
}