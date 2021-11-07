import * as Yup from 'yup'

const emailReg: RegExp = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm

export const validate = Yup.object({
  email: Yup.string()
    .matches(emailReg, 'Email должен иметь вид: xxx@zzz.cc')
    .required('Email не может быть пустым'),
  password: Yup.string()
    .required('Введите пароль'),
})