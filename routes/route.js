const router = require('express').Router()
const controller = require('../controllers/controller')


router.get('/anggota', controller.listAnggota)
router.get('/anggota/detail/:id', controller.detailAnggota)
router.get('/anggota/tambah', controller.tambahAnggotaForm)
router.post('/anggota/tambah', controller.tambahAnggota)
router.get('/anggota/ubah/:id', controller.ubahAnggotaForm)
router.post('/anggota/ubah/:id', controller.ubahAnggota)
router.get('/anggota/hapus/:id', controller.hapusAnggota)

router.get('/buku', controller.listBuku)
router.get('/buku/detail/:id', controller.detailBuku)
router.get('/buku/tambah', controller.tambahBukuForm)
router.post('/buku/tambah', controller.tambahBuku)
router.get('/buku/ubah/:id', controller.ubahBukuForm)
router.post('/buku/ubah/:id', controller.ubahBuku)
router.get('/buku/hapus/:id', controller.hapusBuku)

router.get('/', controller.listPinjam)
router.get('/pinjam/detail/:id', controller.detailPinjam)
router.get('/pinjam/tambah', controller.tambahPinjamForm)
router.post('/pinjam/tambah', controller.tambahPinjam)
router.get('/pinjam/ubah/:id', controller.ubahPinjamForm)
router.post('/pinjam/ubah/:id', controller.ubahPinjam)
router.get('/pinjam/hapus/:id', controller.hapusPinjam)

module.exports = router