import React, { useState } from 'react'

import styles from './ProfilePage.module.scss'
import { Field, Form, Formik } from 'formik'
import { validate } from '../../../addProductPage/form/AddProductForm/validate'
import { addAuction, writePhotoUrl } from '../../../addProductPage/store/action'
import { TextField } from '../../../addProductPage/form/AddProductForm/TextField/TextField'
import { SelectCategoryField } from '../../../addProductPage/form/AddProductForm/SelectCategoryField/SelectCategoryField'
import { Spinner } from 'react-bootstrap'
import { LoadingImageInForm } from '../../../addProductPage/form/AddProductForm/LoadingImageInForm/LoadingImageInForm'
import { DescriptionField } from '../../../addProductPage/form/AddProductForm/DescriptionField/DescriptionField'
import { SettingAuctionField } from '../../../addProductPage/form/AddProductForm/SettingAuctionField/SettingAuctionField'
import { DatepickerBlock } from '../../../addProductPage/form/AddProductForm/Datepicker/Datepicker'
import firebaseApp from '../../../../firebase/firebase'
import { useNavigationPage } from 'ui/navigation'
import emptyPhoto from 'assets/images/empty_image.png'

export const ProfilePage: React.VFC = () => {
  const [isUploaded, setIsUploaded] = useState<boolean>(true)
  const [filePath, setFilePath] = useState<string>('')
  const {userData} = useNavigationPage()

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

  return (
      <div className={styles.container}>
        <Formik
          initialValues={{
            productName: '',
            category: '',
            description: '',
            startPrice: '',
            priceStep: '',
            seePrice: '',
            stepTime: '',
            percentTimeStep: ''
          }}
          validationSchema={validate}
          onSubmit={(values) => {

            console.log(values)

          }}>
          <div className={styles.container}>
            <Form className={styles.form}>
              <div className={styles.auctionHeader}><h3>Ваш профайл</h3></div>
              <div className={styles.generalCharacteristic}>
                <div className={styles.fieldName}>Загрузить фото</div>
                <div className={styles.fieldInput}>
                  <div className={styles.loadImageContainer}>
                    <Field onChange={saveFile} component="input" type="file" className="form-control" id="photo"
                           name="photo"/>
                    <div className={styles.spinner}>{!isUploaded && <Spinner animation="border" size="sm"/>}</div>
                  </div>
                  {filePath !== ''? <div>
                    <img src={filePath} alt={'photo'}/>
                  </div>
                  :
                  <div>
                    <img src={emptyPhoto} alt={'photo'}/>
                  </div>}
                </div>
              </div>
              {/*<div className={styles.auctionParametersLine}><h3>Параметры аукциона</h3></div>*/}
              {/*<div className={styles.priceParameters}>*/}
              {/*  <SettingAuctionField label={'Стартовая цена'} name={'startPrice'} type={'input'} triggerText={'$'}/>*/}
              {/*  <SettingAuctionField label={'Шаг цены'} name={'priceStep'} type={'input'} triggerText={'$'}/>*/}
              {/*  <SettingAuctionField label={'Стоимость просмотра цены'} name={'seePrice'} type={'input'} triggerText={'$'}/>*/}
              {/*</div>*/}
              {/*<div className={styles.stepTimeParameters}>*/}
              {/*  <SettingAuctionField label={'Время шага'} name={'stepTime'} type={'input'} triggerText={'сек'}/>*/}
              {/*  <TextField label={'Проценты временного шага'} name={'percentTimeStep'} type={'input'}/>*/}
              {/*</div>*/}
              {/*<DatepickerBlock startDate={startDate} finishDate={finishDate}*/}
              {/*                 setStartDate={setStartDate} setFinishDate={setFinishDate}/>*/}
              {/*<div className={styles.btn}>*/}
              {/*  <button type='submit' className="btn btn-success">Опубликовать</button>*/}
              {/*</div>*/}
            </Form>
          </div>
        </Formik>
      </div>
  )
}