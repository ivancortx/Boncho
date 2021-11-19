import * as Yup from 'yup'

export const validate = Yup.object({
  name: Yup.string().required('Укажите Ваше имя'),
  surname: Yup.string().required('Укажите Вашу фамилию'),
  tel: Yup.string().required('Укажите Ваш телефон'),
  region: Yup.string().required('Укажите область'),
  city: Yup.string().required('Укажите Ваш город'),
})
