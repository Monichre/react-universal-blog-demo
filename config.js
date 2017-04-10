// config.js
export default {
  site: {
    title: 'Theresa on the Town'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'deploy-demo',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: process.env.COSMIC_READ_KEY || '',
    write_key: process.env.COSMIC_WRITE_KEY || ''
  },
}
