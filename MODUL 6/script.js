// Fungsi validasi instan untuk Nama (Required)
function validateNama() {
    var nama = document.getElementById("nama").value.trim();
    var errorNama = document.getElementById("errorNama");
    
    if (nama === "") {
        errorNama.innerText = "Nama wajib diisi.";
        return false;
    } else {
        errorNama.innerText = "";
        return true;
    }
}

// Fungsi validasi instan untuk Format Email
function validateEmailField() {
    var email = document.getElementById("email").value.trim();
    var errorEmail = document.getElementById("errorEmail");
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        errorEmail.innerText = "Email wajib diisi.";
        return false;
    } else if (!email.match(emailPattern)) {
        errorEmail.innerText = "Format email tidak valid (contoh: user@mail.com).";
        return false;
    } else {
        errorEmail.innerText = "";
        return true;
    }
}

// Fungsi validasi instan untuk Umur (Angka antara 1 sampai 100)
function validateUmur() {
    var umur = document.getElementById("umur").value.trim();
    var errorUmur = document.getElementById("errorUmur");
    
    if (umur === "" || isNaN(umur)) {
        errorUmur.innerText = "Umur harus diisi dengan angka.";
        return false;
    } 
    
    var angkaUmur = Number(umur);
    if (angkaUmur < 1 || angkaUmur > 100) {
        errorUmur.innerText = "Umur harus berada di antara 1 sampai 100.";
        return false;
    } else {
        errorUmur.innerText = "";
        return true;
    }
}

// Fungsi utama saat form disubmit
function validateForm() {
    var isNamaValid = validateNama();
    var isEmailValid = validateEmailField();
    var isUmurValid = validateUmur();

    if (isNamaValid && isEmailValid && isUmurValid) {
        alert("Form berhasil disubmit!");
        return true;
    } else {
        alert("Mohon perbaiki kesalahan pada form sebelum mengirim.");
        return false;
    }
}