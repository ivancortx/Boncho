import * as Yup from 'yup'

const numberOnlyReg: RegExp = /^[0-9]*$/

export const validate = Yup.object({
  cash: Yup.string()
    .matches(numberOnlyReg, 'Сумму нужно указать числом')
    .min(1, 'Должно быть не менее 1 символа')
    .max(10, 'Должно быть не более 10 символов')
    .required('Поле не может быть пустым')
})