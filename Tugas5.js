// **Data Produk**
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Tablet", harga: 7000000 },
  { id: 4, nama: "Headset", harga: 800000 },
  { id: 5, nama: "Keyboard", harga: 350000 }
];

// minimal 5 kode

// nama fungsi bebas
const eventHandler = {
};

// **Menambahkan Produk dengan Spread Operator**
function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
  console.log(`Produk ${nama} berhasil ditambahkan.`);
}

// **Menghapus Produk dengan Rest Parameter**
function hapusProduk(...id) {
  id.forEach((hapusId) => {
    produkList = produkList.filter((produk) => produk.id !== hapusId);
    console.log(`Produk dengan ID ${hapusId} berhasil dihapus.`);
  });
}

// **Menampilkan Produk dengan Destructuring**
function tampilkanProduk() {
  console.log("=== Daftar Produk Toko ===");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga}`);
  });
  console.log("\n");
}

tampilkanProduk();
// contoh penambahan data
tambahProduk(6, "Printer", 2500000);
tampilkanProduk();
hapusProduk(2);
tampilkanProduk();