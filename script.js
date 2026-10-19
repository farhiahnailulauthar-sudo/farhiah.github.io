// ==================================================
// VALIDASI FORM LOGIN
// File ini digunakan untuk memeriksa email dan password.
// ==================================================

// Menunggu sampai seluruh HTML selesai dimuat.
document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen form dan input dari HTML.
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const alertBox = document.getElementById("loginAlert");

  // Menjalankan validasi ketika form dikirim.
  form.addEventListener("submit", function (event) {
    // Mencegah halaman melakukan reload saat form dikirim.
    event.preventDefault();

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    let valid = true;

    email.classList.remove("is-invalid", "is-valid");
    password.classList.remove("is-invalid", "is-valid");
    alertBox.innerHTML = "";

    // Memeriksa apakah email kosong atau formatnya tidak valid.
    if (emailValue === "" || !email.checkValidity()) {
      email.classList.add("is-invalid");
      valid = false;
    } else {
      email.classList.add("is-valid");
    }

    // Password harus memiliki minimal 6 karakter.
    if (passwordValue.length < 6) {
      password.classList.add("is-invalid");
      valid = false;
    } else {
      password.classList.add("is-valid");
    }

    // Jika ada input yang salah, tampilkan pesan gagal.
    if (!valid) {
      alertBox.innerHTML = '<div class="alert alert-danger" role="alert">Login gagal. Periksa kembali email dan password kamu.</div>';
      return;
    }

    // Jika semua input benar, tampilkan pesan berhasil.
    alertBox.innerHTML = '<div class="alert alert-success" role="alert">Validasi berhasil! Form login sudah memenuhi ketentuan.</div>';
  });
});