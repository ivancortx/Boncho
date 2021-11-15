import React from 'react'
import { ErrorMessage, useField } from 'formik'

import styles from './TextField.module.scss'

type Props = {
  label: string;
  name: string;
  type: string;
  userProfile: string;
};

export const TextField: React.VFC<Props> = ({ userProfile, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className={styles.label}>
      <div>
        <label htmlFor={field.name}>{props.label}</label>
      </div>
      <div>
        <input
          className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          {...field}
          {...props}
          autoComplete="off"
          placeholder={userProfile}
        />
        <ErrorMessage component={'div'} name={field.name} className={styles.error} />
      </div>
    </div>
  )
}
