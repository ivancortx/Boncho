import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'

import { fetchProduct } from '../../store/action'
import { useProductPage } from '../../hooks/useProductPage'
import { ProductPageWithData } from '../../components/ProductPageWithData/ProductPageWithData'
import { useNavigationPage } from '@/ui/navigation'

export const ProductPage: React.VFC = () => {
  const { auctionId } = useParams<{ auctionId: string }>(),
    dispatch = useDispatch(),
    { productData } = useProductPage(),
    { userData } = useNavigationPage()

  useEffect(() => {
    dispatch(fetchProduct(auctionId))
  }, [auctionId, dispatch])

  return (
    <>
      {productData !== undefined && (
        <ProductPageWithData productData={productData} userData={userData} />
      )}
    </>
  )
}
