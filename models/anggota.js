'use strict';

module.exports = (sequelize, DataTypes) => {
  const Anggota = sequelize.define('Anggota', {
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    pekerjaan: DataTypes.STRING
  }, {});
  Anggota.associate = function(models) {
    // associations can be defined here
    Anggota.belongsToMany(models.Buku, {
      through: 'Pinjams',
      as: 'bukus',
      foreignKey: 'AnggotaId',
      otherKey: 'BukuId'
    });
    // Anggota.belongsTo(models.Pinjam)
  };
  return Anggota;
};