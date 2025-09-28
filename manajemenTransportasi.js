// Class Kendaraan (sebagai superclass)
class Kendaraan {
  constructor(nama, tipe) {
    this.nama = nama;
    this.tipe = tipe;
  }

  infoKendaraan() {
    return `${this.tipe} - ${this.nama}`;
  }
}

// Subclass Mobil
class Mobil extends Kendaraan {
  constructor(nama, jumlahKursi) {
    super(nama, "Mobil");
    this.jumlahKursi = jumlahKursi;
  }
}

// Subclass Motor
class Motor extends Kendaraan {
  constructor(nama, cc) {
    super(nama, "Motor");
    this.cc = cc;
  }
}

// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  // Method untuk mencatat transaksi sewa
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(
      `${this.nama} menyewa ${kendaraan.infoKendaraan()} (No. Telp: ${this.nomorTelepon})`
    );
  }
}

// Array untuk daftar pelanggan
let daftarPelanggan = [];

// Fungsi untuk menampilkan daftar pelanggan yang sedang menyewa kendaraan
function tampilkanDaftarPelanggan() {
  console.log("\n=== Daftar Pelanggan yang Sedang Menyewa ===");
  if (daftarPelanggan.length === 0) {
    console.log("Belum ada pelanggan yang menyewa kendaraan.");
  } else {
    daftarPelanggan.forEach((pelanggan, index) => {
      console.log(
        `${index + 1}. Nama: ${pelanggan.nama}, Telp: ${
          pelanggan.nomorTelepon
        }, Kendaraan: ${pelanggan.kendaraanDisewa.infoKendaraan()}`
      );
    });
  }
}

// ==== Contoh Penggunaan ====

// Buat beberapa kendaraan
let mobil1 = new Mobil("Toyota Avanza", 7);
let motor1 = new Motor("Yamaha NMAX", 155);

// Buat pelanggan
let pelanggan1 = new Pelanggan("Andi", "081234567890");
let pelanggan2 = new Pelanggan("Siti", "089876543210");

// Catat transaksi sewa
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);

// Masukkan ke daftar pelanggan
daftarPelanggan.push(pelanggan1, pelanggan2);

// Tampilkan daftar pelanggan
tampilkanDaftarPelanggan();