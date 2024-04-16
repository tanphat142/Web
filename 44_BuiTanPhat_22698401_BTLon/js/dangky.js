function luuThongTinTaiKhoan() {
    // Lấy thông tin từ các trường input
    var username = document.getElementById("sodienthoai").value;
    var password = document.getElementById("matkhau").value;

    // Tạo một đối tượng lưu thông tin tài khoản
    var taiKhoan = {
        username: username,
        password: password
        // Các thông tin khác bạn muốn lưu
    };

    // Chuyển đối tượng thành chuỗi JSON
    var taiKhoanJSON = JSON.stringify(taiKhoan);

    // Lưu chuỗi JSON vào localStorage
    localStorage.setItem("taiKhoan", taiKhoanJSON);
}

// Các hàm kiểm tra thông tin đăng ký đã được giữ nguyên

function ktraHoTen(){
    var hoten = document.getElementById("hoten").value;
    var regexHoten = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    if(regexHoten.test(hoten) == false){
        document.getElementById("er1").innerHTML = "(*) Họ tên không hợp lệ (viết hoa chữ cái đầu mỗi từ)";
        return false;
    } else {
        document.getElementById("er1").innerHTML = "";
        return true;
    }
}

function ktraSDT(){
    var sodienthoai = document.getElementById("sodienthoai").value;
    var regexsdt = /^0\d{9,10}$/;

    if(regexsdt.test(sodienthoai) == false){
        document.getElementById("er2").innerHTML = "(*) Số điện thoại không hợp lệ";
        return false;
    } else {
        document.getElementById("er2").innerHTML = "";
        return true;
    }
}

function ktraEmail(){
    var email = document.getElementById("email").value;
    var regexemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(regexemail.test(email) == false){
        document.getElementById("er3").innerHTML = "(*) Email không hợp lệ";
        return false;
    } else {
        document.getElementById("er3").innerHTML = "";
        return true;
    }
}

function ktraMatKhau(){
    var matkhau = document.getElementById("matkhau").value;
    var regexmatkhau = /^\w{8,16}$/;

    if(regexmatkhau.test(matkhau) == false){
        document.getElementById("er4").innerHTML = "(*) Mật khẩu không hợp lệ (8-16 ký tự)";
        return false;
    } else {
        document.getElementById("er4").innerHTML = "";
        return true;
    }
}

function xacnhanMatKhau(){
    var confirm = document.getElementById("xacnhanmatkhau").value;
    var matkhau = document.getElementById("matkhau").value;

    if(ktraMatKhau()){
        if(confirm === matkhau){
            document.getElementById("er5").innerHTML = "";
            return true;
        } else {
            document.getElementById("er5").innerHTML = "Mật khẩu xác nhận không khớp";
            return false;
        }
    }
}

function kiemTraNgaySinh() {
    var ngayHienTai = new Date();
    var ngaySinh = new Date(document.getElementById("ngaysinh").value);

    // Tính số tuổi của người dùng
    var age = ngayHienTai.getFullYear() - ngaySinh.getFullYear();
    var thangHienTai = ngayHienTai.getMonth();
    var thangSinh = ngaySinh.getMonth();

    // Kiểm tra xem người dùng đã đủ 18 tuổi chưa
    if (thangHienTai < thangSinh || (thangHienTai === thangSinh && ngayHienTai.getDate() < ngaySinh.getDate())) {
        age--;
    }

    if (age < 18) {
        document.getElementById("er6").innerHTML = "(*) Bạn phải đủ 18 tuổi trở lên để đăng ký";
        return false;
    } else {
        document.getElementById("er6").innerHTML = "";
        return true;
    }
}


function hienThiDuLieu() {
    var thongtin = document.forms['formThongTin'];

    // Kiểm tra điều kiện để hiển thị thông báo
    if (!thongtin.hoten.value || !thongtin.sdt.value || !thongtin.email.value || !thongtin.matkhau.value || !thongtin.xacnhanmatkhau.value || !thongtin.gioitinh.value || !thongtin.ngaysinh.value) {
        alert("Vui lòng nhập đầy đủ thông tin đăng ký !");
        return;
    }

    // Kiểm tra các điều kiện regex và hiển thị thông báo tạo tài khoản thành công
    if (ktraMatKhau() && ktraSDT() && ktraEmail() && ktraHoTen() && kiemTraNgaySinh()) {
        // Gọi hàm lưu thông tin tài khoản
        luuThongTinTaiKhoan();
        alert("Tạo tài khoản thành công!");
        window.location.href = "dangnhap.html";
    } else {
        alert("Vui lòng kiểm tra lại thông tin nhập vào !");
    }
}
