import React, { useEffect } from 'react'

import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../store/action'
import { useProductPage } from '../../hooks/useProductPage'
import { ProductPageWithData } from '../../components/ProductPageWithData/ProductPageWithData'

export const ProductPage: React.VFC = () => {
  const { auctionId } = useParams<{ auctionId: string }>()
  const dispatch = useDispatch()
  const { productData } = useProductPage()

  useEffect(() => {
    dispatch(fetchProduct(auctionId))
  }, [auctionId, dispatch])

  return (
    <>
      {productData !== undefined &&
        <ProductPageWithData productData={productData} />
      }
    </>
  )
}