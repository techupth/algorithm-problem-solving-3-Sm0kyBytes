function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า Bubble Sort Algorithm
  //จับคู่เปรียบเทียบไปทีละตัว ให้ทั้งหมดภายในสมาชิก
  //ใช้ loop เพื่อเข้าถึงสมาชิกทุกตัว
  for (let i = 0; i < customers.length - 1; i++) {
    //ใช้ loop เพื่อจับคู่แต่ละตัว
    for (let j = 0; j < customers.length - i - 1; j++) {
      //ใช้ if-else เปรียบเทียบเพื่อจัดลำดับ
      if (customers[j] > customers[j + 1]) {
        let moreValue = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = moreValue;
      }
    }
  }
  return customers;
}
console.log(
  sortCustomerName(["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"])
);
// ตอบคำถามตรงนี้จ้า
// Bubble Sort Algorithm มี Big O เป็น n*log n เพราะ  loop ชั้นนอก จะทำงาน  n จำนวน แต่ loop ชั้นใน มีการทำงานลดลงเรื่อย ๆ เมื่อ i เพิ่มขึ้น
