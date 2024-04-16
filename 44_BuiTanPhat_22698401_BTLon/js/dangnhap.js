$("#odangnhap").mouseenter(function () {
    $("#bangdangnhap").fadeIn();
});

$("#odangnhap").mouseleave(function () {
    $("#bangdangnhap").fadeOut();
});

// Hàm để đăng nhập từ Local Storage
function loginWithLocalStorage() {
    var taiKhoanJSON = localStorage.getItem("taiKhoan");

    if (taiKhoanJSON) {
        var taiKhoan = JSON.parse(taiKhoanJSON);
        var savedUsername = taiKhoan.username;
        var savedPassword = taiKhoan.password;

        var username = document.getElementById("taikhoan").value;
        var password = document.getElementById("matkhau").value;

        if (username === savedUsername && password === savedPassword) {
            alert("Đăng nhập thành công!");
            // Lưu thông tin đăng nhập vào local storage
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("loggedInUsername", savedUsername);
            // Thay đổi nút đăng nhập thành tên người dùng
            $("#nutdangnhap").html(savedUsername);
            $("#nutdangnhap").removeAttr("onclick");
            $("#bangdangnhap").html('<button class="btn btn-outline-warning" onclick="logoutAndReset()"><i class="fas fa-sign-out-alt"></i> Đăng xuất</button>');
            window.location.href = "TrangChu.html";
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
        }
    } else {
        alert("Không có thông tin tài khoản trong local storage!");
    }
}

// Hàm kiểm tra thông tin đăng nhập khi tải trang
function checkLoginStatus() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    var loggedInUsername = localStorage.getItem("loggedInUsername");

    if (isLoggedIn && loggedInUsername) {
        // Hiển thị nút đăng nhập với tên người dùng đã đăng nhập
        $("#nutdangnhap").html(loggedInUsername);
        $("#nutdangnhap").removeAttr("onclick");
        $("#bangdangnhap").html('<button class="btn btn-outline-warning" onclick="logoutAndReset()"><i class="fas fa-sign-out-alt"></i> Đăng xuất</button>');
    }
}

// Hàm để đăng xuất và reset
function logoutAndReset() {
    // Xóa thông tin đăng nhập khỏi local storage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUsername");
    // Đổi lại nút đăng nhập và sự kiện khi click
    $("#nutdangnhap").html('<i class="fas fa-users"></i> Đăng nhập');
    $("#nutdangnhap").attr("onclick", "loginWithLocalStorage()");
    // Ẩn bảng đăng nhập
    $("#bangdangnhap").fadeOut();
    // Đặt lại nội dung của bảng đăng nhập về trạng thái ban đầu
    $("#bangdangnhap").html(`
        <a href="dangnhap.html"><button class="btn btn-warning"><i class="fas fa-users"></i> Đăng nhập</button></a>
        <a href="dangky.html"><button class="btn btn-warning"><i class="fas fa-registered"></i> Tạo tài khoản</button></a>
        <a href="dangnhap.html"><button class="btn btn-primary"><img src="../image/logo/fb.png"> Đăng nhập Facebook</button></a>
        <a href="dangnhap.html"><button class="btn btn-danger"><img src="../image/logo/google.jpg"> Đăng nhập Google </button></a>
    `);
}

