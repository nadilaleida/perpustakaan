'use strict';

module.exports = (sequelize, DataTypes) => {
  const Buku = sequelize.define('Buku', {
    judul: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    jenis: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    tahun_terbit: DataTypes.INTEGER,
  }, {});
  Buku.associate = function(models) {
    // associations can be defined here
    Buku.belongsToMany(models.Anggota, {
      through: 'Pinjams',
      as: 'anggota',
      foreignKey: 'BukuId',
      otherKey: 'AggotaId'
    });
    // Buku.belongsTo(models.Pinjam)
  };
  return Buku;
};