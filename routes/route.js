const router = require('express').Router()
const controller = require('../controllers/controller')



router.get('/buku', controller.listBuku)
router.get('/buku/detail/:id', controller.detailBuku)
router.get('/buku/tambah', controller.tambahBukuForm)
router.post('/buku/tambah', controller.tambahBuku)
router.get('/buku/ubah/:id', controller.ubahBukuForm)
router.post('/buku/ubah/:id', controller.ubahBuku)
router.get('/buku/hapus/:id', controller.hapusBuku)

router.get('/', (req,res) => {
  res.redirect('/buku')
})

module.exports = router