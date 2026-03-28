// 1. String ma'lumot olish
let str = prompt("Ixtiyoriy matn kiriting:");

// 2. Number ma'lumot olish va o'tkazish
let num = prompt("Son kiriting:");
let convertedNum = Number(num); // Stringni Numberga o'girish

// 3. Boolean ma'lumot olish (confirm orqali)
let bool = confirm("Boolean qiymatni tasdiqlaysizmi? (OK - true, Cancel - false)");

// Natijalarni turini tekshirib alertda chiqarish
alert(
  "1. Kiritilgan: " + str + " | Turi: " + typeof str + "\n" +
  "2. Kiritilgan: " + convertedNum + " | Turi: " + typeof convertedNum + "\n" +
  "3. Kiritilgan: " + bool + " | Turi: " + typeof bool
);
