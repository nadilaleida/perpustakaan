const { urlencoded } = require('express')
const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')
const PORT = 3000
const app = express()
const routes = require('./routes/route')

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs')
app.use(urlencoded({extended: true}))
app.use(fileUpload());
app.use('/', routes)

app.listen(PORT, () => {
  console.log('Listening on PORT' + PORT);
})