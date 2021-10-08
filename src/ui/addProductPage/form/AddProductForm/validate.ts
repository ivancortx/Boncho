import * as Yup from 'yup'

const numberOnly: RegExp = /^[0-9]*$/;


export const validate = Yup.object({
  productName: Yup.string()
    .min(4, 'Должно быть не менее 4 символов')
    .max(15, 'Должно быть не более 15 символов')
    .required('Поле не должно быть пустым'),
  category: Yup.string()
    .max(50, 'Должно быть не более 50 символов')
    .required('Выберите одну из категорий'),
  description: Yup.string()
    .min(10, 'Должно быть не менее 10 символов')
    .max(300, 'Описание может содержать максимум 300 символов')
    .required('Поле не должно быть пустым'),
  startPrice: Yup.string()
    .max(15, 'Описание может содержать максимум 20 символов')
    .required('Required'),
  priceStep: Yup.string()
    .matches(numberOnly, 'Шаг цены может быть только числовым значением')
    .max(10, 'Шаг цены ограничен 10 символами')
    .required('Поле не должно быть пустым'),
  seePrice: Yup.string()
    .max(15, 'Описание может содержать максимум 20 символов')
    .required('Required'),
  stepTime: Yup.string()
    .max(15, 'Описание может содержать максимум 20 символов')
    .required('Required'),
  percentTimeStep: Yup.string()
    .max(2, 'Значение процента должно быть от 0 до 99')
    .required('Поле не должно быть пустым'),


})