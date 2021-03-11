const {Anggota} = require('../models')
const { Buku } = require('../models/')
const {Pinjam} = require('../models')

class Controller {
  static listAnggota (req, res) {
    Anggota.findAll()
    .then(data => {
      res.render('list/list_anggota', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static detailAnggota (req, res) {

  }

  static tambahAnggotaForm (req, res) {
    res.render('form/tambah_anggota')
  }

  static tambahAnggota (req, res) {
    var {nama, alamat, pekerjaan} = req.body
    Anggota.create({
      nama: nama,
      alamat: alamat,
      pekerjaan: pekerjaan,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(data =>{
      res.redirect(`/anggota`)
    })
    .catch(err => {
      res.render(err)
    })
  }

  static ubahAnggotaForm (req, res) {
    var id = req.params.id
    Anggota.findByPk(id)
    .then(data => {
      res.render('form/ubah_anggota', {data})
    })
    .catch(err => {
      res.render(err)
    })
  }

  static ubahAnggota (req, res) {
    var id = req.params.id
    var {nama, alamat, pekerjaan} = req.body

    Anggota.update({
      nama: nama,
      alamat: alamat,
      pekerjaan: pekerjaan,
      updatedAt: new Date()
    }, { where: { id } })
    .then(data => {
      res.redirect('/anggota')
    })
    .catch(err => {
      res.render(err)
    })
  }

  static hapusAnggota (req, res) {
    var id = req.params.id
    Anggota.destroy({where: {id} })
    .then(data => {
      res.redirect('/anggota')
    })
    .catch(err => {
      res.render(err)
    })
  }

  // BUKU Controller
  static listBuku (req, res) {
    Buku.findAll()
    .then(data => {
      res.render('list/list_buku', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static detailBuku (req, res) {
    var id = req.params.id
    Buku.findByPk(id)
    .then(data => {
      res.render('detail/detail_buku', data)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static tambahBukuForm (req, res) {
    res.render('form/tambah_buku')
  }

  static tambahBuku (req, res) {
    var {judul, jenis, pengarang, penerbit, tahun_terbit} = req.body
    Buku.create({
      judul: judul,
      jenis: jenis,
      pengarang: pengarang,
      penerbit: penerbit,
      tahun_terbit: tahun_terbit,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(data =>{
      res.redirect(`/buku`)
    })
    .catch(err => {
      res.render(err)
    })
  }

  static ubahBukuForm (req, res) {
    var id = req.params.id
    Buku.findByPk(id)
    .then(data => {
      res.render('form/ubah_buku', {data})
    })
    .catch(err => {
      res.render(err)
    })
  }

  static ubahBuku (req, res) {
    var id = req.params.id
    var {judul, jenis, pengarang, penerbit, tahun_terbit} = req.body

    Buku.update({
      judul: judul,
      jenis: jenis,
      pengarang: pengarang,
      penerbit: penerbit,
      tahun_terbit: tahun_terbit,
      updatedAt: new Date()
    }, { where: { id } })
    .then(data => {
      res.redirect('/buku')
    })
    .catch(err => {
      res.render(err)
    })
  }

  static hapusBuku (req, res) {
    var id = req.params.id
    Buku.destroy({where: {id} })
    .then(data => {
      res.redirect('/buku')
    })
    .catch(err => {
      res.render(err)
    })
  }

  // Pinjam Controller
  static listPinjam (req, res) {
    // Pinjam.findAll()
    Anggota.findAll({

      include: [{
        model: Buku,
        as: 'bukus',
        required: false,
        attributes: ['id', 'judul', 'jenis','pengarang', 'penerbit', 'tahun_terbit'],
        through: {
          model: Pinjam,
          as: 'pinjam',
          attributes: ['id','tgl_pinjam', 'tgl_kembali'],
        }
      }]
    })
    .then(data => {
      res.render('list/list_pinjam', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static detailPinjam (req, res) {
    var idPinjam = req.params.id
    // Pinjam.findByPk(id)
    Anggota.findAll({

      include: [{
        model: Buku,
        as: 'bukus',
        required: false,
        attributes: ['id', 'judul', 'jenis','pengarang', 'penerbit', 'tahun_terbit'],
        through: {
          model: Pinjam,
          as: 'pinjam',
          attributes: ['id','tgl_pinjam', 'tgl_kembali'],
          where: { 'id': idPinjam }
        }
      }]
    })
    .then(data => {
      res.render('detail/detail_pinjam', {data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static tambahPinjamForm (req, res) {
    var anggota, buku
    Anggota.findAll()
    .then(data => {
      anggota = data
      return Buku.findAll()
    })
    .then(dataBuku => {
      buku = dataBuku
      res.render('form/tambah_pinjam', {buku, anggota})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static tambahPinjam (req, res) {
    var {BukuId, AnggotaId, tgl_pinjam} = req.body
    Pinjam.create({
      BukuId: BukuId,
      AnggotaId: AnggotaId,
      tgl_pinjam: tgl_pinjam,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(data =>{
      res.redirect(`/`)
    })
    .catch(err => {
      res.render(err)
    })
  }

  static ubahPinjamForm (req, res) {
    var pinjam, buku, anggota
    var id = req.params.id
    Pinjam.findByPk(id)
    .then(dataPinjam => {
      pinjam = dataPinjam
      return Buku.findAll()
    })
    .then(dataBuku => {
      buku = dataBuku
      return Anggota.findAll()
    })
    .then(dataAnggota => {
      anggota = dataAnggota
      res.render('form/ubah_pinjam', {pinjam, buku, anggota})
    })
    .catch(err => {
      res.render(err)
    })
  }

  static ubahPinjam (req, res) {
    var id = req.params.id
    var {BukuId, AnggotaId, tgl_pinjam, tgl_kembali} = req.body

    Pinjam.update({
      BukuId: BukuId,
      AnggotaId: AnggotaId,
      tgl_pinjam: tgl_pinjam,
      tgl_kembali: tgl_kembali,
      updatedAt: new Date()
    }, { where: { id } })
    .then(data => {
      res.redirect('/')
    })
    .catch(err => {
      res.render(err)
    })
  }

  static hapusPinjam (req, res) {
    var id = req.params.id
    Pinjam.destroy({where: {id} })
    .then(data => {
      res.redirect('/')
    })
    .catch(err => {
      res.render(err)
    })
  }

}

module.exports = Controller