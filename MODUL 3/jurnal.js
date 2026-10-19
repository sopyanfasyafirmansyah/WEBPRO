document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formProfil');

    form.addEventListener('submit', function (event) {
        // Mencegah form dikirim otomatis (refresh halaman)
        event.preventDefault();

        // Ambil elemen input
        const namaInput = document.getElementById('nama');
        const emailInput = document.getElementById('email');
        const alamatInput = document.getElementById('alamat');

        // Ambil elemen pesan error
        const errorNama = document.getElementById('errorNama');
        const errorEmail = document.getElementById('errorEmail');
        const errorAlamat = document.getElementById('errorAlamat');
        const pesanSukses = document.getElementById('pesanSukses');

        // Reset pesan error dan sukses
        errorNama.textContent = '';
        errorEmail.textContent = '';
        errorAlamat.textContent = '';
        pesanSukses.textContent = '';

        let isValid = true;

        // 1. Validasi Nama Lengkap
        if (namaInput.value.trim() === '') {
            errorNama.textContent = 'Nama lengkap wajib diisi!';
            isValid = false;
        }

        // 2. Validasi Email
        if (emailInput.value.trim() === '') {
            errorEmail.textContent = 'Email wajib diisi!';
            isValid = false;
        } else if (!validasiEmailFormat(emailInput.value.trim())) {
            errorEmail.textContent = 'Format email tidak valid!';
            isValid = false;
        }

        // 3. Validasi Alamat
        if (alamatInput.value.trim() === '') {
            errorAlamat.textContent = 'Alamat wajib diisi!';
            isValid = false;
        }

        // Jika semua input valid
        if (isValid) {
            pesanSukses.textContent = 'Form berhasil dikirim! Data profil telah lengkap.';
            // Reset form jika diperlukan:
            // form.reset();
        }
    });

    // Fungsi tambahan untuk mengecek format email (opsional tapi disarankan)
    function validasiEmailFormat(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});