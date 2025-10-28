const { Presensi } = require("../models");
const { Op } = require("sequelize"); // 1. Impor Operator

exports.getDailyReport = async (req, res) => {
  try {
    // 2. Ambil query 'nama' dari URL
    const { nama } = req.query;

    // 3. Siapkan options query dasar
    let options = {
      where: {},
      order: [['checkIn', 'DESC']]
    };

    // 4. Jika ada query 'nama', tambahkan filter 'where'
    if (nama) {
      options.where.nama = {
        [Op.like]: `%${nama}%`, // SQL: LIKE '%nama%'
      };
    }

    console.log("Controller: Mengambil data laporan harian...", options);

    // 5. Jalankan query dengan options
    const records = await Presensi.findAll(options);

    res.json({
      reportDate: new Date().toLocaleDateString(),
      data: records,
    });

  } catch (error) {
    res
      .status(500)
      .json({ message: "Gagal mengambil laporan", error: error.message });
  }
};