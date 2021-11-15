import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useCategoriesPage } from '../../hooks/useCategoriesPage'
import { fetchCategories } from '../../'

import styles from './CategoriesPage.module.scss'
import { fetchProductsByCategory } from '../../store/action'
import { Products } from '../../components/Products/Products'

export const CategoriesPage: React.VFC = () => {
  const { categoriesData } = useCategoriesPage(),
    dispatch = useDispatch(),
    [activeCategory, setActiveCategory] = useState<string>('all')

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const fetchProducts = (category: string) => {
    dispatch(fetchProductsByCategory(category))
  }

  useEffect(() => {
    dispatch(fetchProductsByCategory('all'))
  }, [])

  return (
    <div className={styles.container}>
      <div>
        {categoriesData !== [] && (
          <div className={styles.categoryes}>
            <div
              className={activeCategory === 'all' ? styles.activeItem : styles.item}
              onClick={() => {
                fetchProducts('all')
                setActiveCategory('all')
              }}
            >
              <span>Все</span>
            </div>
            {categoriesData.map((category) => (
              <div
                className={category.name === activeCategory ? styles.activeItem : styles.item}
                key={category.id}
                onClick={() => {
                  fetchProducts(category.name)
                  setActiveCategory(category.name)
                }}
              >
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <Products />
      </div>
    </div>
  )
}
