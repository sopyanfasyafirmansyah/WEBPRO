// 1. Pesan selamat datang saat halaman dimuat
window.addEventListener("load", function () {
    alert("Selamat datang di WEB KAKANG IYAN!");
});

// 2. Animasi pada saat hover menu navigasi (efek perubahan ukuran font & warna)
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("mouseover", function () {
        link.style.fontSize = "1.2em";
    });
    link.addEventListener("mouseout", function () {
        link.style.fontSize = "1em";
    });
});

// 3. Validasi form kontak
document.getElementById("formKontak").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    
    // Validasi input nama, email, dan pesan agar tidak kosong
    ["nama", "email", "pesan"].forEach(function (id) {
        const inputElem = document.getElementById(id);
        const isi = inputElem.value.trim();
        const err = document.getElementById("err" + id.charAt(0).toUpperCase() + id.slice(1));
        
        if (isi === "") {
            err.textContent = id + " tidak boleh kosong.";
            valid = false;
        } else {
            err.textContent = "";
        }
    });
    
    if (valid) {
        alert("Pesan berhasil dikirim!");
        this.reset();
    }
});