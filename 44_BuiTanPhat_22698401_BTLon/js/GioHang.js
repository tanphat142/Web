


function capNhatTien() {
    var tien = document.getElementsByClassName('tien');
    var soluong = document.getElementsByClassName('soluong');

    var tongTien = 0;

    for (var i = 0; i < tien.length; i++) {
        // Trích xuất số từ chuỗi mô tả giá tiền
        var giaTienText = tien[i].innerText;
        var giaTien = parseFloat(giaTienText.split('đ')[0].replace(/\./g, '').trim());

        // Lấy số lượng từ input và chuyển đổi sang số nguyên
        var soLuong = parseInt(soluong[i].value);
        // Tính tổng tiền của sản phẩm này
        tongTien += giaTien * soLuong;
    }

    var tongTienSanPham = document.getElementById('tongTienSanPham');
    // Hiển thị tổng tiền sản phẩm
    tongTienSanPham.innerHTML = tongTien.toLocaleString('vi-VN') + " đ";

    var tongTienThanhToan = tongTien + 50000;
    // Hiển thị tổng tiền thanh toán
    document.getElementById('othanhtien').innerHTML = tongTienThanhToan.toLocaleString('vi-VN') + " đ";
}


var soluong = document.getElementsByClassName('soluong');


function tru1() {

    if (soluong[0].value > 1) {
        soluong[0].value = parseInt(soluong[0].value) - 1;
        capNhatTien();
    }




}

function cong1() {
    soluong[0].value = parseInt(soluong[0].value) + 1;

    capNhatTien();
}

function tru2() {

    if (soluong[1].value > 1) {
        soluong[1].value = parseInt(soluong[1].value) - 1;
        capNhatTien();
    }



}

function cong2() {
    soluong[1].value = parseInt(soluong[1].value) + 1;

    capNhatTien();
}


function tru3() {

    if (soluong[2].value > 1) {
        soluong[2].value = parseInt(soluong[2].value) - 1;

        capNhatTien();
    }

}

function cong3() {
    soluong[2].value = parseInt(soluong[2].value) + 1;

    capNhatTien();
}


capNhatTien();

