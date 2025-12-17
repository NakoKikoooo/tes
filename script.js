<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KIKO JOKI GENSHIN | Terintegrasi Script.js</title>
    <style>
        body { font-family: 'Poppins', sans-serif; background-color: #f0f2f5; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .service-item { border: 1px solid #ddd; padding: 15px; border-radius: 10px; margin-bottom: 10px; cursor: pointer; display: flex; align-items: center; gap: 15px; transition: 0.3s; }
        .service-item:hover { background-color: #f8f9fa; }
        .service-icon { width: 50px; height: 50px; }
        .highlighted { border: 2px solid #25d366; }
        
        /* Tabel Harga */
        .harga-layanan-detail { display: none; margin-top: 10px; padding: 10px; background: #fafafa; border-radius: 8px; border: 1px solid #eee; }
        .harga-table-detail { width: 100%; border-collapse: collapse; }
        .harga-table-detail th, .harga-table-detail td { border: 1px solid #ddd; padding: 8px; text-align: left; font-size: 14px; }
        .harga-table-detail th { background-color: #3498db; color: white; }

        /* Form */
        #kontak { margin-top: 30px; padding: 20px; background: #eef2f7; border-radius: 10px; }
        .form-group { margin-bottom: 15px; }
        input, select, textarea { width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box; }
        .btn-kirim { background: #25d366; color: white; border: none; padding: 15px; width: 100%; border-radius: 8px; font-weight: bold; cursor: pointer; }
    </style>
</head>
<body>

<div class="container">
    <h2 style="text-align: center;">Layanan Kami (Klik Ikon untuk Lihat Harga)</h2>

    <div id="service-list">
        <div class="service-item" data-service-id="spyrall">
            <img src="amber-icon.png" class="service-icon">
            <div><strong>Joki Spyrall Abyss, Stygiant Onslaught, IT</strong><br><small>Penyelesaian Full Star atau sesuai permintaan.</small></div>
        </div>
        <div class="harga-layanan-detail" id="harga-spyrall">
            <table class="harga-table-detail"><thead><tr><th>Nama</th><th>Deskripsi</th><th>Harga</th></tr></thead><tbody class="harga-body-detail"></tbody></table>
        </div>

        <div class="service-item" data-service-id="eksplorasi">
            <img src="ganyu-icon.png" class="service-icon">
            <div><strong>Joki Eksplorasi Map</strong><br><small>Mondstad hingga Natlan (Full Chest/Seelie).</small></div>
        </div>
        <div class="harga-layanan-detail" id="harga-eksplorasi">
            <table class="harga-table-detail"><thead><tr><th>Nama</th><th>Deskripsi</th><th>Harga</th></tr></thead><tbody class="harga-body-detail"></tbody></table>
        </div>

        <div class="service-item" data-service-id="daily">
            <img src="xiao-icon.png" class="service-icon">
            <div><strong>Joki Daily Commision Harian</strong><br><small>Rawat akun harian, mingguan, atau bulanan.</small></div>
        </div>
        <div class="harga-layanan-detail" id="harga-daily">
            <table class="harga-table-detail"><thead><tr><th>Nama</th><th>Deskripsi</th><th>Harga</th></tr></thead><tbody class="harga-body-detail"></tbody></table>
        </div>

        <div class="service-item" data-service-id="jokiquest">
            <img src="hutao-icon.png" class="service-icon">
            <div><strong>Joki Quest (Story/Event/Luna)</strong><br><small>Archon, World Quest, Luna, dan Kisah Kesukuan.</small></div>
        </div>
        <div class="harga-layanan-detail" id="harga-jokiquest">
            <table class="harga-table-detail"><thead><tr><th>Nama</th><th>Deskripsi</th><th>Harga</th></tr></thead><tbody class="harga-body-detail"></tbody></table>
        </div>

        <div class="service-item" data-service-id="farming">
            <img src="aether-icon.png" class="service-icon">
            <div><strong>Joki Farming Material</strong><br><small>Material Ascending, Bebatuan, dan Mancing.</small></div>
        </div>
        <div class="harga-layanan-detail" id="harga-farming">
            <table class="harga-table-detail"><thead><tr><th>Nama</th><th>Deskripsi</th><th>Harga</th></tr></thead><tbody class="harga-body-detail"></tbody></table>
        </div>
    </div>

    <section id="kontak">
        <h3 style="text-align: center;">HUBUNGI SAYA JIKA ANDA MAU ORDER JOKI</h3>
        <form id="joki-form">
            <div class="form-group"><input type="text" id="nama" placeholder="Nama Lengkap" required></div>
            <div class="form-group">
                <label><input type="radio" name="metode_kontak" value="whatsapp" checked> WhatsApp</label>
                <label><input type="radio" name="metode_kontak" value="discord"> Discord</label>
            </div>
            <div id="input-wa" class="form-group"><input type="text" id="whatsapp" placeholder="Nomor WhatsApp"></div>
            <div id="input-discord" class="form-group" style="display:none;"><input type="text" id="discord" placeholder="Username Discord"></div>
            <div class="form-group"><input type="text" id="layanan-jasa" placeholder="Layanan yang dipilih" required></div>
            <button type="submit" class="btn-kirim">KIRIM PESANAN KE WHATSAPP</button>
        </form>
    </section>
</div>

<script>
// DATA DARI SCRIPT.JS ANDA
const servicePrices = {
    spyrall: [
        { name: "Spyrall Abyss", desc: "Penyelesaian Tergantung Spek Akun.", price: "Gratis" },
        { name: "Stygiant Onslaught", desc: "Penyelesaian Tergantung Spek Akun.", price: "Gratis" },
        { name: "Imaginarium Theater", desc: "Penyelesaian Tergantung Spek Akun.", price: "Gratis" }
    ],
    eksplorasi: [
        { name: "Mondstad", desc: "Full Chest/Seelie", price: "Rp8.000" },
        { name: "Liyue", desc: "Full Chest/Seelie", price: "Rp20.000" },
        { name: "Sumeru", desc: "Full Chest/Seelie", price: "Rp35.000" },
        { name: "Natlan", desc: "Full Chest/Seelie", price: "Rp20.000" }
    ],
    daily: [
        { name: "Rawat Akun (1 Bulan)", desc: "Perawatan akun penuh selama 1 bulan.", price: "Rp20.000" },
        { name: "Rawat Akun (1 Minggu)", desc: "Perawatan akun penuh selama 1 minggu.", price: "Rp10.000" },
        { name: "Rawat Akun (1 Hari)", desc: "Perawatan akun penuh selama 1 hari.", price: "Rp2.000" }
    ],
    jokiquest: [
        { name: "Archon Quest", desc: "Penyelesaian Archon Quest.", price: "Rp10.000" },
        { name: "Quest Luna", desc: "Pengerjaan Quest Luna.", price: "Rp20.000" },
        { name: "Quest Aranyaka", desc: "Per Jurnal petualangan hutan.", price: "Rp20.000" },
        { name: "Kisah Kesukuan", desc: "Quest Suku Tirai Daun.", price: "Rp20.000" },
        { name: "Kisah Kesukuan", desc: "Quest Suku Putra-Putri Gema.", price: "Rp25.000" },
        { name: "Kisah Kesukuan", desc: "Quest Suku Bunga Bersayap.", price: "Rp25.000" },
        { name: "Kisah Kesukuan", desc: "Quest Suku Penguasa Angin Malam.", price: "Rp25.000" },
        { name: "Kisah Kesukuan", desc: "Quest Suku Berlimpah Jaya.", price: "Rp25.000" }
    ],
    farming: [
        { name: "Material Ascending (50pcs)", desc: "Farming material ascending hingga 50 buah.", price: "Rp2.000" },
        { name: "Bebatuan (50pcs)", desc: "Farming Bebatuan (ore) hingga 50 buah.", price: "Rp2.000" }
    ]
};

// LOGIKA KLIK IKON
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
        const id = this.getAttribute('data-service-id');
        const detail = document.getElementById('harga-' + id);
        const body = detail.querySelector('.harga-body-detail');
        
        // Toggle Tampilan
        const isVisible = detail.style.display === 'block';
        document.querySelectorAll('.harga-layanan-detail').forEach(d => d.style.display = 'none');
        document.querySelectorAll('.service-item').forEach(i => i.classList.remove('highlighted'));

        if (!isVisible) {
            detail.style.display = 'block';
            this.classList.add('highlighted');
            
            // Isi data sesuai script.js
            body.innerHTML = '';
            servicePrices[id].forEach(p => {
                const row = body.insertRow();
                row.insertCell().textContent = p.name;
                row.insertCell().textContent = p.desc;
                row.insertCell().textContent = p.price;
            });
        }
    });
});

// LOGIKA METODE KONTAK
document.querySelectorAll('input[name="metode_kontak"]').forEach(radio => {
    radio.addEventListener('change', function() {
        document.getElementById('input-wa').style.display = this.value === 'whatsapp' ? 'block' : 'none';
        document.getElementById('input-discord').style.display = this.value === 'discord' ? 'block' : 'none';
    });
});

// REDIRECT WHATSAPP
document.getElementById('joki-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const layanan = document.getElementById('layanan-jasa').value;
    const text = `Halo Kiko Joki! Pesanan Baru:%0ANama: ${nama}%0ALayanan: ${layanan}`;
    window.open(`https://wa.me/6282230412413?text=${text}`, '_blank');
});
</script>

</body>
</html>
