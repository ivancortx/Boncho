import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { validate } from './validate'
import { TextField } from './TextField/TextField'
import emptyPhoto from '@/assets/images/empty_image.png'
import firebaseApp from 'src/firebase/firebase'
import { UserDataType } from '../../navigation/interfaces/navigationPage/navigationPageInterfaces'
import { addPhotoToProfile, addProfile } from '../store/action'
import { ProfileDataType } from '../interfaces/PrfilePageInterfaces'

import styles from './ProfilePageForm.module.scss'

type Props = {
  setIsUploaded: (x: boolean) => void
  setFilePath: (x: string) => void
  isUploaded: boolean
  filePath: string
  userData: UserDataType[]
  userProfile: ProfileDataType[]
};

export const ProfilePageForm: React.VFC<Props> = ({ ...props }) => {
  const dispatch = useDispatch(),
    { setFilePath, setIsUploaded, isUploaded, filePath, userData, userProfile } = props,
    [photoUrl, setPhotoUrl] = useState<string>(''),
    saveFile = async (e: any) => {
      setIsUploaded(false)
      const file = e.target.files[0],
        storageRef = firebaseApp.storage().ref(),
        pathPhoto = `assets/images/usersProfiles/${userData[0].email}/${file.name}`,
        fileRef = storageRef.child(pathPhoto),
        metadata = { contentType: 'image/jpeg' }
      await fileRef.put(file, metadata)
      setPhotoUrl(await fileRef.getDownloadURL())

      if (await fileRef.getDownloadURL()) {
        setIsUploaded(true)
      }
    }
  useEffect(() => {
    if (photoUrl !== '') {
      setFilePath(photoUrl)
      dispatch(addPhotoToProfile(userData[0].email, photoUrl, userProfile))
    }
  }, [photoUrl])

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
        }}
      >
        <div className={styles.container}>
          <Form>
            <div className={styles.auctionHeader}>
              <h3>Ваш профайл</h3>
            </div>

            <div className={styles.form}>
              <div className={styles.photoContainer}>
                {userProfile[0] !== undefined && userProfile[0].photoUrl !== '' ? (
                  <div>
                    <img src={userProfile[0].photoUrl} alt={'photo'}/>
                  </div>
                ) : (
                  <div>
                    <img src={emptyPhoto} alt={'photo'}/>
                  </div>
                )}

                <div className={styles.loadImageButtonContainer}>
                  <label className={styles.loadImageButton} onChange={saveFile}>
                    <input type="file" className={styles.input}/>
                    Загрузить
                  </label>
                  <div className={styles.spinner}>
                    {!isUploaded && <Spinner animation="border" size="sm" variant="secondary"/>}
                  </div>
                  <div className={styles.deleteImageButton}>Удалить</div>
                </div>
              </div>
              <div className={styles.profileInformationContainer}>
                <div className={styles.emailContainer}>
                  <div>Email</div>
                  {userData[0] !== undefined && (
                    <div className={styles.emailValue}>{userData[0].email}</div>
                  )}
                </div>
                <TextField
                  label={'Логин'}
                  name={'login'}
                  type={'input'}
                  userProfile={userProfile[0]?.login}
                />
                <TextField
                  label={'Имя'}
                  name={'name'}
                  type={'input'}
                  userProfile={userProfile[0]?.name}
                />
                <TextField
                  label={'Фамилия'}
                  name={'secondName'}
                  type={'input'}
                  userProfile={userProfile[0]?.secondName}
                />
                <label className={styles.loadImageButton} onChange={saveFile}>
                  <input type="submit" className={styles.input}/>
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
