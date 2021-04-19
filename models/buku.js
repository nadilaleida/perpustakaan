'use strict';

module.exports = (sequelize, DataTypes) => {
  const Buku = sequelize.define('Buku', {
    judul: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    gambar: DataTypes.STRING,
  }, {});
  Buku.associate = function(models) {
    // associations can be defined here
  };
  return Buku;
};