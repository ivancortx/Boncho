import * as Yup from 'yup'

export const validate = Yup.object({
  login: Yup.string()
    .min(6, 'Должно быть не менее 6 символов')
    .max(15, 'Должно быть не более 15 символов'),
  name: Yup.string()
    .min(6, 'Должно быть не менее 6 символов')
    .max(20, 'Должно быть не более 20 символов'),
  secondName: Yup.string()
    .min(6, 'Должно быть не менее 6 символов')
    .max(20, 'Должно быть не более 20 символов'),
})