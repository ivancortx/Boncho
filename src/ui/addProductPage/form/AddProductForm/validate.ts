import * as Yup from 'yup'

const numberOnlyReg = /^[0-9]*$/

export const validate = Yup.object({
  productName: Yup.string()
    .min(4, 'Должно быть не менее 4 символов')
    .max(35, 'Должно быть не более 35 символов')
    .required('Поле не должно быть пустым'),
  category: Yup.string()
    .max(50, 'Должно быть не более 50 символов')
    .required('Выберите одну из категорий'),
  description: Yup.string()
    .min(10, 'Должно быть не менее 10 символов')
    .max(300, 'Описание может содержать максимум 300 символов')
    .required('Поле не должно быть пустым'),
  startPrice: Yup.string()
    .matches(numberOnlyReg, 'Цена может быть только числовым значением')
    .max(11, 'Цена может быть не более 999,999,999')
    .required('Поле не должно быть пустым'),
  priceStep: Yup.string()
    .matches(numberOnlyReg, 'Шаг цены может быть только числовым значением')
    .max(10, 'Шаг цены ограничен 10 символами')
    .required('Поле не должно быть пустым'),
  seePrice: Yup.string()
    .matches(numberOnlyReg, 'Цена может быть только числовым значением')
    .max(15, 'Описание может содержать максимум 20 символов')
    .required('Поле не должно быть пустым'),
  stepTime: Yup.string()
    .matches(numberOnlyReg, 'Время в секундах можно указывать только в виде числовых значений')
    .max(10, 'Максимальное количество символов: 10')
    .required('Поле не должно быть пустым'),
  percentTimeStep: Yup.string()
    .matches(numberOnlyReg, 'Допускаються только числовые значения')
    .max(2, 'Значение процента должно быть от 0 до 99')
    .required('Поле не должно быть пустым'),
})
