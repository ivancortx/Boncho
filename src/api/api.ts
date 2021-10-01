import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }
})

// export const loadPhotos = (title: string) => {
//   return instance.get(`api/fetch-photo/${title}`)
// }
//
// export const sendPhoto = (title: string, data: object, token: string) => {
//   return instance.post(`api/add-photo`, {
//       title,
//       data
//     },
//     {
//       headers: {
//         'Token': token
//       }
//     })
// }
//
// export const loadVideos = (title: string) => {
//   return instance.get(`api/fetch-video/${title}`)
// }
//
// export const sendVideo = (title: string, data: object, token: string) => {
//   return instance.post(`api/add-video`, {
//       title,
//       data
//     },
//     {
//       headers: {
//         'Token': token
//       }
//     })
// }

export const loadCategories = async () => {
  return instance.get(`api/fetch-categories`, {
    withCredentials: false
  })
}

export const sendUserData = async (token: string) => {
  return instance.post('api/save-user')
}

// export const loadReviews = () => {
//   return instance.get(`api/fetch-reviews`)
// }
//
// export const sendReview = (data: object, token: string) => {
//   return instance.post(`api/add-review`, {
//     data
//   },
//     {
//       headers: {
//         'Token': token
//       }
//     })
// }