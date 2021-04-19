const {Anggota} = require('../models')
const { Buku } = require('../models/')
const {Pinjam} = require('../models')

class Controller {

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
    let id = req.params.id
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
    if (!req.files){
      return res.status(400).send('No files were uploaded.');
    }

    let file = req.files.gambar;
    let nama_gambar=file.name;
    console.log(nama_gambar)

    // Memindahkan file gambar ke public/images
    file.mv('public/images/'+file.name, function(err) {
      if (err) {
        return res.status(500).send(err);
      }

      // Insert ke database
      let {judul, pengarang, penerbit} = req.body
      Buku.create({
        judul: judul,
        pengarang: pengarang,
        penerbit: penerbit,
        gambar:nama_gambar,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then(data =>{
        res.redirect(`/buku`)
      })
      .catch(err => {
        res.render(err)
      })                
    });

  }

  static ubahBukuForm (req, res) {
    let id = req.params.id
    Buku.findByPk(id)
    .then(data => {
      res.render('form/ubah_buku', {data})
    })
    .catch(err => {
      res.render(err)
    })
  }

  static ubahBuku (req, res) {
    let id = req.params.id
    let {judul, pengarang, penerbit} = req.body

    Buku.update({
      judul: judul,
      pengarang: pengarang,
      penerbit: penerbit,
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
    let id = req.params.id
    Buku.destroy({where: {id} })
    .then(data => {
      res.redirect('/buku')
    })
    .catch(err => {
      res.render(err)
    })
  }

  static home(req, res) {
    res.render("home")
  }

}

module.exports = Controller