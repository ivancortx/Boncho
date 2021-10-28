import * as Yup from 'yup'

export const validate = Yup.object({
  cash: Yup.string()
    .min(1, 'Должно быть не менее 6 символов')
    .max(10, 'Должно быть не более 15 символов'),
})