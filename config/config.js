
let baseUrl = ''
let storageUrl = ''

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://www.doodlebluemobile.com/doodleblueweb/update/'
  storageUrl = 'https://www.doodlebluemobile.com/doodleblueweb/update/'
}
else {
  baseUrl = 'http://localhost/doodleblue website/v2/doodlesiteWebpack - Copy/'
  storageUrl = 'http://localhost/doodleblue website/vue/doodlesiteWebpack - Copy/static/images/'
}
export const storagePath = storageUrl
export const apiHost = baseUrl

