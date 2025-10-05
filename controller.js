import { users } from "./data.js";

export const index = () => {
  console.log("=== Daftar Users ===");
  users.map((user, i) => {
    console.log(`${i + 1}. ${user.nama} (${user.umur}) - ${user.alamat} - ${user.email}`);
  });
};

export const store = (user) => {
  users.push(user);
  console.log("Data berhasil ditambahkan:", user);
};

export const destroy = () => {
  const removed = users.pop();
  console.log("Data dihapus:", removed);
};