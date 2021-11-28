import * as Yup from 'yup'

export const validate = Yup.object({
  orderDescription: Yup.string().required('Поле не может быть пустым'),
})
