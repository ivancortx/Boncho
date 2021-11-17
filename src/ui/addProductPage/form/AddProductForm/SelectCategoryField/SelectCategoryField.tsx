import React from 'react'
import { ErrorMessage, Field, useField } from 'formik'

import { SetCategoryField } from '../SetCategoryField/SetCategoryField'
import { Category } from '@/ui/products'

import styles from './SelectCategoryField.module.scss'

type Props = {
  label: string;
  name: string;
  type: string;
  categoriesData: Category[];
};

export const SelectCategoryField: React.VFC<Props> = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={styles.label}>
      <label htmlFor={field.name}>{props.label}</label>
      <Field
        component="select"
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        id="category"
        name="category"
        placeholder="Выберите категорию товара"
      >
        {props.categoriesData !== [] && <SetCategoryField categoriesData={props.categoriesData} />}
      </Field>
      <ErrorMessage component={'div'} name={field.name} className={styles.error} />
    </div>
  )
}
