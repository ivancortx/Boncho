import * as Yup from 'yup'

const emailReg: RegExp = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm

export const validate = Yup.object({
  email: Yup.string()
    .matches(emailReg, 'Есть ошибочка! Email должен иметь вид: xxx@zzz.cc')
    .required('Email не может быть пустым'),
  login: Yup.string()
      .min(4, 'Логин должен быть не менее 4 символов')
      .max(15, 'Логин должен быть не более 15 символов')
      .required('Логин не может быть пустым'),
  password: Yup.string()
    .min(6, 'Пароль должень иметь не менее 6 символов')
    .required('Введите пароль'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
    .required('Повторите пароль')
})