import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from "react-redux";

import "react-datepicker/dist/react-datepicker.css";

import { validate } from './validate'

import styles from './AddProductForm.module.scss'
import { useAddProductForm } from '../../hooks/useAddProductForm'
import { fetchCategories } from '../../../products'
import firebaseApp from '../../../../firebase/firebase'
import shortid from 'shortid'
import { addAuction, writePhotoUrl } from '../../store/action'
import { LoadingImageInForm } from '../../components/LoadingImageInForm/LoadingImageInForm'
import { DatepickerBlock } from '../../components/Datepicker/Datepicker'
import { InputGroup } from 'react-bootstrap'
import { SetCategoryField } from '../../components/SetCategoryField/SetCategoryField'

export const AddProductForm: React.VFC = () => {
  const dispatch = useDispatch()
  const { categoriesData, photoUrlsData, userData } = useAddProductForm()
  const [auctionId, setAuctionId] = useState<string>('')
  const [filePath, setFilePath] = useState<string>('')
  const [isUploaded, setIsUploaded] = useState<boolean>(false)
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());

  useEffect(() => {
    dispatch(fetchCategories())
    setAuctionId(shortid.generate())
  }, [])

  const saveFile = async (e: any) => {
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
        dispatch(addAuction(values, startDate, finishDate, photoUrlsData, auctionId, userData))

      }}>
      <div className={styles.container}>
        <Form className={styles.form}>
          <div className={styles.auctionHeader}><h3>Создание аукциона</h3></div>
          <div className={styles.generalCharacteristic}>
            <div className={styles.fieldName}>Введите название продукта</div>
            <Field component="input" className="form-control" id='productName' name="productName" placeholder=""/>
            <div className={styles.fieldName}>Выберите категорию</div>
            <div className={styles.fieldInput}>
              <Field component="select" className="form-control" id="category" name="category"
                     placeholder="Выберите категорию товара">
                {categoriesData !== [] &&
                  <SetCategoryField categoriesData={categoriesData} />
                }
              </Field>
            </div>

            <div className={styles.fieldName}>Загрузить фото</div>
            <div className={styles.fieldInput}>
              <Field onChange={saveFile} component="input" type="file" className="form-control" id="photo"
                     name="photo"/>
              <LoadingImageInForm photoUrlsData={photoUrlsData}/>
            </div>
            <div>
              <div className={styles.fieldName}>Описание продукта</div>
              <Field component="textarea" className="form-control" id='description' name="description" placeholder=""/>
            </div>
          </div>

          <div className={styles.auctionParametersLine}><h3>Параметры аукциона</h3></div>
          <div className={styles.priceParameters}>
            <div>
              <div className={styles.fieldName}>Стартовая цена</div>
              <InputGroup>
                <Field component="input" className="form-control" id='startPrice' name="startPrice" placeholder=""/>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              <div className={styles.fieldName}>Шаг цены</div>
              <InputGroup>
                <Field component="input" className="form-control" id='priceStep' name="priceStep" placeholder=""/>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              <div className={styles.fieldName}>Стоимость просмотра цены</div>
              <InputGroup>
                <Field component="input" className="form-control" id='seePrice' name="seePrice" placeholder=""/>
                <InputGroup.Text>$</InputGroup.Text>
              </InputGroup>
            </div>
          </div>
          <div className={styles.stepTimeParameters}>
            <div>
              <div className={styles.fieldName}>Время шага</div>
              <InputGroup>
                <Field component="input" className="form-control" id='stepTime' name="stepTime" placeholder=""/>
                <InputGroup.Text>сек</InputGroup.Text>
              </InputGroup>
            </div>
            <div>
              <div className={styles.fieldName}>Проценты временного шага</div>
              <Field component="input" className="form-control" id='percentTimeStep' name="percentTimeStep"
                     placeholder=""/>
            </div>
          </div>

          <DatepickerBlock startDate={startDate} finishDate={finishDate}
                           setStartDate={setStartDate} setFinishDate={setFinishDate}/>

          <div className={styles.btn}>
            <button type='submit' className="btn btn-success">Опубликовать</button>
          </div>
        </Form>
      </div>
    </Formik>
  )
}