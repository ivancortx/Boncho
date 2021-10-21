import React from 'react'
import { registerLocale } from 'react-datepicker'
import es from 'date-fns/locale/es'

import { Category } from 'ui/products'

type Props = {
  categoriesData: Category[]
}

export const SetCategoryField: React.VFC<Props> = ({ categoriesData }) => {
  registerLocale('es', es)
  return (
    <>
      <option value='' label='...'/>
      {categoriesData.map(cat => (
        <option key={cat.id} value={cat.name}>{cat.name}</option>
      ))
      }
    </>
  )
}