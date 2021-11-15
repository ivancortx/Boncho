import React from 'react'
import { ErrorMessage, Field, useField } from 'formik'
import { InputGroup } from 'react-bootstrap'

import styles from './SettingAuctionField.module.scss'

type Props = {
  label: string;
  name: string;
  type: string;
  triggerText: string;
};

export const SettingAuctionField: React.VFC<Props> = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className={styles.label}>
      <label htmlFor={field.name}>{props.label}</label>
      <InputGroup>
        <Field
          component="input"
          className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
          name={props.name}
        />
        <InputGroup.Text>{props.triggerText}</InputGroup.Text>
      </InputGroup>
      <ErrorMessage component={'div'} name={field.name} className={styles.error} />
    </div>
  )
}
