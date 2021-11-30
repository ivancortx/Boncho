import React from 'react'

import styles from './LoadingImageInForm.module.scss'

type Props = {
  photoUrlsData: string[]
}

export const LoadingImageInForm: React.VFC<Props> = ({ photoUrlsData }) => {
  return (
    <div className={styles.container}>
      {photoUrlsData.map((photo) => (
        <div key={photo} className={styles.item}>
          <img className={styles.image} src={photo} alt="loadImage" />
        </div>
      ))}
    </div>
  )
}
