import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { ProductDataType } from '../../interfaces/ProductPage/ProductPageInterfaces'
import { Portal } from '@/ui/productPage/components/Portal/Portal'
import emptyImage from '@/assets/images/empty_image.png'
import sold_out from '@/assets/images/sold_out.png'
import { SeePriceModal } from '../SeePriceModal/SeePriceModal'
import { buyProduct, clearCurrentPrice, fetchCurrentPrice } from '../../store/action'
import { useProductPageWithData } from '../../hooks/useProductPageWithData'
import { modificatedCurrentPrice } from '@/api/api'
import { fetchUserCash } from '@/ui/navigation'
import { UserDataType } from '@/ui/navigation/interfaces/navigationPage/navigationPageInterfaces'

import styles from './ProductPageWithData.module.scss'
import { AuthContext } from '@/context/AuthContext'

type Props = {
  productData: ProductDataType;
  userData: UserDataType[];
};

export const ProductPageWithData: React.VFC<Props> = ({ productData, userData }) => {
  const dispatch = useDispatch(),
    token = useContext(AuthContext),
    { currentPrice } = useProductPageWithData(),
    [openModal, setOpenModal] = useState<boolean>(false),
    [showSeePriceModal, setShowSeePriceModal] = useState<boolean>(false),
    [seePricePeriod, setSeePricePeriod] = useState<boolean>(false),
    [timerSeconds, setTimerSeconds] = useState<string>(''),
    [loader, setLoader] = useState<boolean>(false)

  useEffect(() => {
    if (currentPrice !== '') {
      setLoader(false)
      showCurrentPrice()
    }
  }, [currentPrice])

  const closeSeePriceModal = () => {
      setShowSeePriceModal(false)
    },
    openSeePriceModal = () => {
      setShowSeePriceModal(true)
    },
    photoHandler = () => {
      setOpenModal(true)
    },
    closeModal = () => {
      setOpenModal(false)
    },
    timer = (t: number) => {
      setTimerSeconds(String(t))
      let seconds = t
      const interval = setInterval(() => {
        if (seconds <= 0) {
          setTimerSeconds('')
          clearInterval(interval)
        } else {
          setTimerSeconds(`${Math.trunc(seconds - 1)}`)
        }
        --seconds
      }, 1000)
    },
    openCurrentPrice = async () => {
      await modificatedCurrentPrice(
        productData.auctionId,
        productData.priceStep,
        productData.seePrice
      )
      dispatch(fetchCurrentPrice(productData.auctionId))
      dispatch(fetchUserCash(userData[0].email, token))
      setLoader(true)
    },
    showCurrentPrice = () => {
      timer(Number(productData.stepTime))
      setSeePricePeriod(true)
      setTimeout(() => {
        setSeePricePeriod(false)

        dispatch(clearCurrentPrice())
      }, Number(productData.stepTime) * 1000)
    },
    buyThisProduct = () => {
      if (currentPrice !== '') {
        dispatch(buyProduct(currentPrice, productData, userData[0], token))
      }
    }

  return (
    <div className={styles.container}>
      {!productData.isInStock && <img src={sold_out} className={styles.isInStock} />}
      <div className={styles.photoBlock}>
        {openModal && (
          <div>
            <Portal
              openModal={openModal}
              closeModal={closeModal}
              photo={productData.photoUrlsData[0]}
            />
          </div>
        )}
        {productData.photoUrlsData[0] ? (
          <img
            className={!productData.isInStock ? `${styles.image} ${styles.soldOut}` : styles.image}
            onClick={() => photoHandler()}
            src={productData.photoUrlsData[0]}
            alt={productData.productName}
          />
        ) : (
          <img className={styles.image} src={emptyImage} alt={'emptyImage'} />
        )}
      </div>
      <div className={styles.contentBlock}>
        <div className={styles.productTitle}>{productData.productName}</div>
        <div className="mt-3 mb-3">
          <div className={styles.stringContainer}>
            <div className={styles.stringContainer__name}>Категория</div>
            <div className={styles.stringContainer__content}>{productData.category}</div>
          </div>
          <div className={styles.stringContainer}>
            <div className={styles.stringContainer__name}>Автор</div>
            <div className={styles.stringContainer__content}>{productData.userEmail}</div>
          </div>
        </div>
        <div className={styles.stringContainer}>
          <div className={styles.stringContainer__name}>Стоимость просмотра цены</div>
          <div className={styles.stringContainer__content}>{productData.seePrice} $</div>
        </div>
        <div className={styles.stringContainer}>
          <div className={styles.stringContainer__name}>Стартовая цена</div>
          <div className={styles.stringContainer__content}>{productData.startPrice} $</div>
        </div>
        <div className={styles.stringContainer}>
          <div className={styles.stringContainer__name}>Шаг цены</div>
          <div className={styles.stringContainer__content}>{productData.priceStep} $</div>
        </div>
        <div className={styles.stringContainer}>
          <div className={styles.stringContainer__name}>Шаг времени</div>
          <div className={styles.stringContainer__content}>{productData.stepTime} сек</div>
        </div>
        <div
          className={
            productData.isInStock
              ? styles.buttonPriceBlock
              : `${styles.buttonPriceBlock} ${styles.hide}`
          }
        >
          <div className={styles.currentPriceBlock}>
            <div className={styles.currentPriceBlock__title}>
              <div className="mt-1">Текущая цена</div>
            </div>
            <div className={styles.currentPriceBlock__price}>
              {seePricePeriod ? (
                <div className="mt-1">{currentPrice}</div>
              ) : (
                <>
                  {loader ? (
                    <div className="pt-2">
                      <Spinner animation="grow" variant="secondary" size="sm" />
                    </div>
                  ) : (
                    <div className="mt-1">хххх</div>
                  )}
                </>
              )}
            </div>
            <div className={styles.currentPriceBlock__timeStep}>
              {seePricePeriod ? (
                <div className="mt-1">{timerSeconds} сек</div>
              ) : (
                <>
                  {loader ? (
                    <div className="pt-2">
                      <Spinner animation="grow" variant="secondary" size="sm" />
                    </div>
                  ) : (
                    <div className="mt-1">{productData.stepTime} сек</div>
                  )}
                </>
              )}
            </div>
          </div>
          {seePricePeriod ? (
            <div onClick={buyThisProduct} className={styles.buttonBlock}>
              Купить
            </div>
          ) : (
            <div onClick={openSeePriceModal} className={styles.buttonBlock}>
              Посмотреть цену
            </div>
          )}
        </div>
        <div className={styles.descriptionBlock}>
          <div className={styles.descriptionBlock__title}>Описание:</div>
          <div className={styles.descriptionBlock__content}>{productData.description}</div>
        </div>
      </div>
      {showSeePriceModal && (
        <SeePriceModal
          seePrice={productData.seePrice}
          showSeePriceModal={showSeePriceModal}
          closeSeePriceModal={closeSeePriceModal}
          openCurrentPrice={openCurrentPrice}
        />
      )}
    </div>
  )
}
