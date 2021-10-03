import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { useDispatch } from "react-redux";

import { validate } from './validate'

import styles from './AddProductForm.module.scss'
import { useAddProductForm } from '../../hooks/useAddProductForm'
import { fetchCategories } from '../../../products'
import firebaseApp from '../../../../firebase/firebase'
import shortid from 'shortid'
import { writePhotoUrl } from '../../store/action'
import { LoadingImageInForm } from '../../components/LoadingImageInForm/LoadingImageInForm'

export const AddProductForm: React.VFC = () => {
  const dispatch = useDispatch()
  const { categoriesData, photoUrlsData } = useAddProductForm()
  const [auctionId, setAuctionId] = useState<string>('')
  const [filePath, setFilePath] = useState<string>('')
  const [isUploaded, setIsUploaded] = useState<boolean>(false)

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
        category: '',
        password: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values)
      }}>
      <div className={styles.container}>
        <Form className={styles.form}>

          <div className={styles.fieldName}>Выберите категорию</div>
          <div className={styles.fieldInput}>
            <Field component="select" className="form-control" id="category" name="category"
                   placeholder="Выберите категорию товара">
              {categoriesData !== [] &&
              <>
                <option value='' label='...'/>
                {categoriesData.map(cat => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))
                }
              </>
              }
            </Field>
          </div>

          <div className={styles.fieldName}>Введите пароль</div>
          <div className={styles.fieldInput}>
            <Field onChange={saveFile} component="input" type="file" className="form-control" id="photo" name="photo"/>
            <LoadingImageInForm photoUrlsData={photoUrlsData}/>
          </div>

          <button type='submit' className="btn btn-success">Войти</button>
        </Form>
      </div>
    </Formik>
  )
}