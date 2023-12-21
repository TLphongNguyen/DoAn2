const placeholders = ["Tiện ích, dịch vụ","thông tin mới nhất","hướng dẫn tải app","cùng khám phá VinID","Voucher ăn uống 1 ngàn"]
const inputgwap = document.querySelector('.input-header')
let currentPlaceholderIndex = 0;

function changePlaceholder() {
    inputgwap.placeholder = placeholders[currentPlaceholderIndex];
  currentPlaceholderIndex = (currentPlaceholderIndex + 1) % placeholders.length;
}
// Thay đổi giá trị placeholder mỗi giây
setInterval(changePlaceholder, 4000);