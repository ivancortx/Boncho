import * as Yup from 'yup'

export const validate = Yup.object({
  category: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
})