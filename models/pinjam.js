'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pinjam = sequelize.define('Pinjam', {
    AnggotaId: DataTypes.INTEGER,
    BukuId: DataTypes.INTEGER,
    tgl_pinjam: DataTypes.DATE,
    tgl_kembali: DataTypes.DATE
  }, {});
  Pinjam.associate = function(models) {
    // associations can be defined here
    // Pinjam.belongsToMany(models.Buku, {
    //   through: 'Pinjams',
    //   as: 'bukus',
    //   foreignKey: 'AnggotaId',
    //   otherKey: 'BukuId'
    // });

    // Pinjam.belongsToMany(models.Anggota, {
    //   through: 'Pinjams',
    //   as: 'anggota',
    //   foreignKey: 'BukuId',
    //   otherKey: 'AggotaId'
    // });
  };
  return Pinjam;
};