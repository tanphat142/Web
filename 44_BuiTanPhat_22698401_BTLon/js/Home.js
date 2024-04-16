document.addEventListener("DOMContentLoaded", function () {
    const mainMenuItems = document.querySelectorAll('.navbar-nav .nav-item');
    let timer;

    mainMenuItems.forEach(function (menuItem) {
        const submenu = menuItem.querySelector('.submenu');
        if (submenu) {
            menuItem.addEventListener("mouseenter", function () {
                clearTimeout(timer);
                submenu.style.display = "block";
            });
            menuItem.addEventListener("mouseleave", function () {
                timer = setTimeout(function() {
                    submenu.style.display = "none";
                }, 200); // Giữ submenu mở trong khoảng 200ms nếu chuột rời khỏi menuItem
            });
            submenu.addEventListener("mouseenter", function () {
                clearTimeout(timer);
                submenu.style.display = "block";
            });
            submenu.addEventListener("mouseleave", function () {
                timer = setTimeout(function() {
                    submenu.style.display = "none";
                }, 200); // Giữ submenu mở trong khoảng 200ms nếu chuột rời khỏi submenu
            });
        }
    });
});

// Kiểm tra trạng thái đăng nhập khi trang được tải
document.addEventListener("DOMContentLoaded", function() {
    checkLoginStatus();
});

// Kiểm tra trạng thái đăng nhập
function checkLoginStatus() {
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
        // Đã đăng nhập
        showLogoutButton();
    } else {
        // Chưa đăng nhập
        showLoginButton();
    }
}

