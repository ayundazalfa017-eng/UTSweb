function showContent(menu) {
  const content = document.getElementById("content-area");

  // HOME
  if (menu === "home") {
    content.innerHTML = `
      <h2>Selamat Datang di The BabyBloom </h2>
      <p>
        Kami menyediakan berbagai perlengkapan bayi terbaik 
        dengan kualitas premium dan harga terjangkau.
      </p>
    `;
  }

  // DATA PRIBADI
  else if (menu === "profil") {
    content.innerHTML = `
      <h2>Data Pribadi</h2>
      <p>Nama : Ayunda Zalfa Abdulah</p>
      <p>NIM : 41824110035</p>
      <p>Program Studi : Sistem Informasi</p>

      <img src="profil.jpg" alt="Foto Profil">
    `;
  }

  // PRODUK 0-12 BULAN
  else if (menu === "produk1") {
    content.innerHTML = `
      <h2>Produk Bayi 0-12 Bulan</h2>

      <table>
        <tr>
          <th>Nama Produk</th>
          <th>Foto</th>
          <th>Harga</th>
          <th>Deskripsi</th>
        </tr>

        <tr>
          <td>Susu Bayi</td>
          <td>
            <img src="susu.jpg" alt="Susu Bayi">
          </td>
          <td>Rp120.000</td>
          <td>Susu bayi sehat dan bergizi.</td>
        </tr>
      </table>
    `;
  }

  // PRODUK 13-24 BULAN
  else if (menu === "produk2") {
    content.innerHTML = `
      <h2>Produk Bayi 13-24 Bulan</h2>

      <table>
        <tr>
          <th>Nama Produk</th>
          <th>Foto</th>
          <th>Harga</th>
          <th>Deskripsi</th>
        </tr>

        <tr>
          <td>Mainan Edukasi</td>
          <td>
            <img src="mainan.jpg" alt="Mainan Edukasi">
          </td>
          <td>Rp95.000</td>
          <td>Mainan edukasi aman untuk balita.</td>
        </tr>
      </table>
    `;
  }

  // KONTAK
  else if (menu === "kontak") {
    content.innerHTML = `
      <h2>Kontak Penjual</h2>

      <p>No HP : 081234567890</p>
      <p>Email : thebabybloom@gmail.com</p>
      <p>Alamat : Jakarta Barat</p>
    `;
  }

  // FAQ
  else if (menu === "faq") {
    content.innerHTML = `
      <h2>FAQ</h2>

      <p><b>Q :</b> Apakah produk aman untuk bayi?</p>
      <p><b>A :</b> Ya, semua produk aman dan berkualitas.</p>

      <p><b>Q :</b> Apakah tersedia COD?</p>
      <p><b>A :</b> Ya, tersedia pembayaran COD.</p>
    `;
  }
}