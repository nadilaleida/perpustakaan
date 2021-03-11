const { urlencoded } = require('express')
const express = require('express')
const PORT = 3000
const app = express()
const routes = require('./routes/route')

app.set('view engine', 'ejs')
app.use(urlencoded({extended: true}))
app.use('/', routes)

app.listen(PORT, () => {
  console.log('Listening on PORT' + PORT);
})