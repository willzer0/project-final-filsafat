const AboutUs = () => {
  return (
<div>
  <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About Us</h2>
        {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
      </div>
      <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 1*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/1.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Latar Belakang</div>
              <div className="portfolio-caption-subheading text-muted" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 2*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/2.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Persyaratan Penerimaan</div>
              <div className="portfolio-caption-subheading text-muted" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          {/* Portfolio item 3*/}
          <div className="portfolio-item">
            <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
              </div>
              <img className="img-fluid" src="assets/img/portfolio/3.jpg" alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">Program</div>
              <div className="portfolio-caption-subheading text-muted" />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        </div>
      </div>
    </div>
  </section>
  {/* About*/}
  <section className="page-section" id="about">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">History</h2>
        <h3 className="section-subheading text-muted" />
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="subheading">Pada Awalnya</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">
                Tahun 1965 Universitas Klabat (UNKLAB) didirikan dengan nama Perguruan Tinggi Klabat (PTK) yang di bina dan diawasi oleh Gereja Masehi Advent Hari Ketujuh (GMAHK) melalui Yayasan Perguruan Tinggi Klabat. Pada mulanya, Perguruan tinggi ini didirikan untuk menghasilkan pendeta-pendeta dan guru-guru yang akan melayani kebutuhan khusus organisasi GMAHK propinsi-propinsi di Sulawesi, Maluku, dan irian Jaya. Selanjutnya Seiring dengan perkembangan organisasi GMAHK, dirasakan perlu untuk menyediakan tenaga-tenaga sekertaris, akuntan, bahkan tenaga-tenaga sarjana di dalam bidang pertanian, komputer dan keperawatan yang juga diperlukan untuk pembangunan regional dan nasional. Saat didirikan, PTK membuka program studi Diploma Dua Tahun (D2) untuk Teologia dan Pendidikan Sekolah Dasar.
              </p></div>
          </div></li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="subheading">Perubahan PTK</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Ketika pada tahun 1970 PTK dirubah menjadi Sekolah Tinggi Klabat (STK) berdasarkan Surat  Keputusan Mentri Pendidikan dan Kebudayaan Nomor 211/S/DPT/I/1970, maka dikembangkan program Sarjana Muda Empat Tahun untuk program studi Teologia dan Pendidikan Sekolah Menengah dan dibuka program D2 untuk program studi Sekretari dan Business Administration atau Commerce. Selanjutnya program studi Commerce dikembangkan menjadi program sarjana muda yang diikuti dengan program studi sarjana muda Pendidikan Bahasa Inggris dan Pendidikan Agama untuk memperluas pelayanan terhadap kebutuhan masyarakat yang lebih luas. Kemudian pada tahun 1982 terjadi perubahan dari STK menjadi Universitas Klabat melalui Surat Keputusan Mentri Pendidikan dan Kebudayaan No. 0184/0/1982.</p></div>
          </div>
        </li>
        <li>
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="subheading">Penambahan Fakultas</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">Melengkapi fakultas eksakta yang sudah ada, pada tahun 1999 UNKLAB membuka Fakultas llmu Komputer (FIK) dengan program studi Sisim Informasi. Sekarang ini UNKLAB memiliki 1(satu) Program Pascasarjana, 7 (tujuh) fakultas dan 1 (satu) akademi, yaitu; (1) Pascasarjanan Magister Manajemen (2) Fakultas Ekonomi (FEKON), (3) Fakultas Filsafat, (4) Fakultas Keguruan dan Ilmu Pendidikan (FKIP), (5) Fakultas Ilmu Keperawatan (6) Fakultas Ilmu Komputer (FIK) (7) Fakultas Pertanian, dan (8) Akademi Sekretari Klabat</p></div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="subheading">Penyelenggaraan Jenjang S2</h4>
            </div>
            <div className="timeline-body"><p className="text-muted">
                Pada tanggal 7 agustus 2019, telah berlangsung Acara inagurasi Program S2 Teologi
                Universitas Klabat dengan sangat baik. Dan ada sebanyak 37 mahasiswa program magister Teologi
                yang telah terdaftar dan siap mengikuti perkuliahan semester 1, TA 2019/2020.
                Maka dengan pernyataan Tuhan Magister Teologi Unklab telah berlangsung dengan baik hingga saat ini.
              </p></div>
          </div></li>
        <li className="timeline-inverted">
          <div className="timeline-image">
            <h4>
              Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </section>
</div>

  )
}

export default AboutUs