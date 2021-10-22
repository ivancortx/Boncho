import React, { useState } from 'react'

import styles from "./ProfilePageForm.module.scss"
import { Form, Formik } from 'formik'
import { validate } from './validate'
import { TextField } from './TextField/TextField'
import { Spinner } from 'react-bootstrap'
import emptyPhoto from 'assets/images/empty_image.png'
import firebaseApp from '../../../firebase/firebase'
import { UserDataType } from '../../navigation/interfaces/navigationPage/navigationPageInterfaces'
import { useDispatch } from 'react-redux'
import { addProfile } from '../store/action'
import { ProfileDataType } from '../interfaces/PrfilePageInterfaces'

type Props = {
  setIsUploaded: (x: boolean) => void
  setFilePath: (x: string) => void
  isUploaded: boolean
  filePath: string
  userData: UserDataType[]
  userProfile: ProfileDataType[]
}

export const ProfilePageForm: React.VFC<Props> = ({ ...props }) => {
  const dispatch = useDispatch()
  const { setFilePath, setIsUploaded, isUploaded, filePath, userData, userProfile  } = props

  const saveFile = async (e: any) => {
    setIsUploaded(false)
    const file = e.target.files[0]
    const storageRef = firebaseApp.storage().ref()
    const pathPhoto = `assets/images/usersProfiles/${userData[0].email}/${file.name}`
    const fileRef = storageRef.child(pathPhoto)
    const metadata = { contentType: 'image/jpeg' }
    await fileRef.put(file, metadata)
    // dispatch(writePhotoUrl(await fileRef.getDownloadURL()))
    setFilePath(await fileRef.getDownloadURL())

    if (await fileRef.getDownloadURL()) {
      setIsUploaded(true)
    }
  }
  console.log(userProfile)

  return (
    <div>
      <Formik
        initialValues={{
          login: '',
          name: '',
          secondName: ''
        }}
        validationSchema={validate}
        onSubmit={(values) => {

          dispatch(addProfile(values, userData[0].email, filePath, userProfile))

        }}>
        <div className={styles.container}>
          <Form>
            <div className={styles.auctionHeader}><h3>Ваш профайл</h3></div>

            <div className={styles.form}>
              <div className={styles.photoContainer}>
                {filePath !== '' ? <div>
                    <img src={filePath} alt={'photo'}/>
                  </div>
                  :
                  <div>
                    <img src={emptyPhoto} alt={'photo'}/>
                  </div>}

                <div className={styles.loadImageButtonContainer}>
                  <label className={styles.loadImageButton} onChange={saveFile}>
                    <input type='file' className={styles.input}/>
                    Загрузить
                  </label>
                  <div className={styles.spinner}>{!isUploaded &&
                  <Spinner animation="border" size="sm" variant="secondary"/>}</div>
                  <div className={styles.deleteImageButton}>Удалить</div>
                </div>
              </div>
              <div className={styles.profileInformationContainer}>
                <TextField label={'Email'} name={'email'} type={'input'}/>
                <TextField label={'Логин'} name={'login'} type={'input'}/>
                <TextField label={'Имя'} name={'name'} type={'input'}/>
                <TextField label={'Фамилия'} name={'secondName'} type={'input'}/>
                <label className={styles.loadImageButton} onChange={saveFile}>
                  <input type='submit' className={styles.input}/>
                  Сохранить
                </label>
              </div>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  )
}