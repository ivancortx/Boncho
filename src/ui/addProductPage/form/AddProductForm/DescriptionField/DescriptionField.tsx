import React from 'react'
import { ErrorMessage, useField } from 'formik'

import styles from './DescriptionField.module.scss'

type Props = {
  label: string,
  name: string,
  type: string
}

export const DescriptionField: React.VFC<Props> = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={styles.label}>
      <label htmlFor={field.name}>{props.label}</label>
      <textarea
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete='off'
      />
      <ErrorMessage component={'div'} name={field.name} className={styles.error}/>
    </div>


  )
}