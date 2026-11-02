// 1. Pesan selamat datang saat halaman dimuat
window.addEventListener("load", function () {
    alert("Selamat datang di Sudut Kopi! Tempat terbaik untuk nugas dan bersantai.");
});

// 2. Animasi pada saat hover menu navigasi (membesarkan ukuran font saat kursor menyentuh)
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("mouseover", function () {
        link.style.fontSize = "1.15em";
    });
    link.addEventListener("mouseout", function () {
        link.style.fontSize = "1em";
    });
});

// 3. Validasi form pemesanan
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    // Daftar field yang ingin divalidasi secara dinamis
    ["nama", "jumlah"].forEach(function (id) {
        const inputElem = document.getElementById(id);
        const isi = inputElem.value.trim();
        const err = document.getElementById("err" + id.charAt(0).toUpperCase() + id.slice(1));

        if (isi === "") {
            err.textContent = id.charAt(0).toUpperCase() + id.slice(1) + " tidak boleh kosong.";
            valid = false;
        } else {
            err.textContent = "";
        }
    });

    // Jika seluruh validasi terpenuhi
    if (valid) {
        const nama = document.getElementById("nama").value.trim();
        const menu = document.getElementById("menuPilihan").value;
        const jumlah = document.getElementById("jumlah").value;
        const catatan = document.getElementById("catatan").value;

        alert(`Terima kasih, ${nama}! Pesanan ${jumlah}x ${menu} berhasil dikirim.\nCatatan: ${catatan || '-'}\nSilakan menunggu, pesanan Anda sedang diproses.`);
        this.reset();
    }
});