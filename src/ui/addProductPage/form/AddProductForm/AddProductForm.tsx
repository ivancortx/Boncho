import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from "react-redux";
import { Spinner } from 'react-bootstrap'
import firebaseApp from '@/firebase/firebase'
import shortid from 'shortid'

import { validate } from './validate'
import { useAddProductForm } from '../../hooks/useAddProductForm'
import { fetchCategories } from 'src/ui/products'
import { addAuction, writePhotoUrl } from '../../store/action'
import { LoadingImageInForm } from './LoadingImageInForm/LoadingImageInForm'
import { DatepickerBlock } from './Datepicker/Datepicker'
import { TextField } from './TextField/TextField'
import { DescriptionField } from './DescriptionField/DescriptionField'
import { SelectCategoryField } from './SelectCategoryField/SelectCategoryField'
import { SettingAuctionField } from './SettingAuctionField/SettingAuctionField'

import styles from './AddProductForm.module.scss'
import "react-datepicker/dist/react-datepicker.css";

export const AddProductForm: React.VFC = () => {
  const dispatch = useDispatch()
  const { categoriesData, photoUrlsData, userData } = useAddProductForm()
  const [auctionId, setAuctionId] = useState<string>('')
  const [filePath, setFilePath] = useState<string>('')
  const [isUploaded, setIsUploaded] = useState<boolean>(true)
  const [startDate, setStartDate] = useState<Date|null>(null);
  const [finishDate, setFinishDate] = useState<Date|null>(null);
  const [isDownButton, setIsDownButton] = useState<boolean>(false)

  useEffect(() => {
    dispatch(fetchCategories())
    setAuctionId(shortid.generate())
  }, [])

  const saveFile = async (e: any) => {
    setIsUploaded(false)
    const file = e.target.files[0]
    const storageRef = firebaseApp.storage().ref()
    const pathPhoto = `assets/images/auctions/${auctionId}/${file.name}`
    const fileRef = storageRef.child(pathPhoto)
    const metadata = { contentType: 'image/jpeg' }
    await fileRef.put(file, metadata)
    dispatch(writePhotoUrl(await fileRef.getDownloadURL()))
    setFilePath(pathPhoto)

    if (await fileRef.getDownloadURL()) {
      setIsUploaded(true)
    }
  }

  return (
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
        if (startDate !== null && finishDate !== null) {
          dispatch(addAuction(values, startDate, finishDate, photoUrlsData, auctionId, userData))
          setIsDownButton(true)
        }
      }}>
      <div className={styles.container}>
        <Form className={styles.form}>
          <div className={styles.auctionHeader}><h3>Создание аукциона</h3></div>
          <div className={styles.infoBlock}>
            <div className={styles.header}><h4>Торги на понижение со скрытой ценой</h4></div>
            <div className={styles.text}>Тип аукциона, в котором объявленная продавцом высокая цена на лот постепенно снижается до той, на которую согласится первый покупатель. Этот покупатель и становится победителем аукциона и обладателем лота. Просмотр текущей цены является платным</div>
          </div>
          <div className={styles.generalCharacteristic}>
            <TextField label={'Название продукта'} name={'productName'} type={'input'}/>
            <SelectCategoryField categoriesData={categoriesData} label={'Выберите категорию продукта'} name={'category'} type={'input'}/>
            <div className={styles.fieldName}>Загрузить фото</div>
            <div className={styles.fieldInput}>
              <div className={styles.loadImageContainer}>
                <Field onChange={saveFile} component="input" type="file" className="form-control" id="photo"
                       name="photo"/>
                <div className={styles.spinner}>{!isUploaded && <Spinner animation="border" size="sm"/>}</div>
              </div>
              <LoadingImageInForm photoUrlsData={photoUrlsData}/>
            </div>
            <DescriptionField label={'Описание продукта'} name={'description'} type={'input'}/>
          </div>
          <div className={styles.auctionParametersLine}><h3>Параметры аукциона</h3></div>
          <div className={styles.priceParameters}>
            <SettingAuctionField label={'Стартовая цена'} name={'startPrice'} type={'input'} triggerText={'$'}/>
            <SettingAuctionField label={'Шаг цены'} name={'priceStep'} type={'input'} triggerText={'$'}/>
            <SettingAuctionField label={'Стоимость просмотра цены'} name={'seePrice'} type={'input'} triggerText={'$'}/>
          </div>
          <div className={styles.stepTimeParameters}>
            <SettingAuctionField label={'Время шага'} name={'stepTime'} type={'input'} triggerText={'сек'}/>
            <TextField label={'Проценты временного шага'} name={'percentTimeStep'} type={'input'}/>
          </div>
          <DatepickerBlock startDate={startDate} finishDate={finishDate}
                           setStartDate={setStartDate} setFinishDate={setFinishDate}/>
          <div className={styles.btn}>
            <button type='submit' className="btn btn-success">Опубликовать</button>
            <div className={styles.messageAddProduct}>{isDownButton && <span>Товар успешно добавлен!</span>}</div>
          </div>
        </Form>
      </div>
    </Formik>
  )
}