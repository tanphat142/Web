function isValidInput(inputId, errorId) {
    let txtValue = document.getElementById(inputId).value;
    let errorElement = document.getElementById(errorId);

    switch (inputId) {
        case 'txtDN':
            let regexTenDangNhap = /^[A-Za-z][A-Za-z0-9]*$/;
            if (txtValue === "") {
                errorElement.textContent = "Không được bỏ trống trường này.";
                return false;
            } else if (!regexTenDangNhap.test(txtValue)) {
                errorElement.textContent = "Tên đăng nhập không hợp lệ.";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }

        case 'txtMK':
            let regexMK = /(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}/;
            if (txtValue === "") {
                errorElement.textContent = "Không được bỏ trống trường này.";
                return false;
            } else if (!regexMK.test(txtValue)) {
                errorElement.textContent = "Mật khẩu cần ít nhất 1 chữ hoa, 1 số, 1 ký tự đặc biệt, và ít nhất 8 ký tự.";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }

        case 'txtMK2':
            let mk = document.getElementById('txtMK').value;
            if (txtValue !== mk) {
                errorElement.textContent = "Mật khẩu không khớp";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }

        case 'txtHoTen':
            let regexHoTen = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
            if (txtValue === "") {
                errorElement.textContent = "Không được bỏ trống trường này.";
                return false;
            } else if (!regexHoTen.test(txtValue)) {
                errorElement.textContent = "Tên sai định dạng";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }

        case 'ngaySinh':
            let ngayHomNay = new Date();
            let ngaySinh = new Date(txtValue);
            if (isNaN(ngaySinh.getTime()) || ngaySinh >= ngayHomNay) {
                errorElement.textContent = "Ngày sinh không hợp lệ";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }

        case 'txtDiaChi':
            if (txtValue === "") {
                errorElement.textContent = "Không được để trống trường này.";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }

        case 'txtSdt':
            let regexSDT = /^(0[345679])[0-9]{8}$/;
            if (txtValue === "") {
                errorElement.textContent = "Không được để trống trường này.";
                return false;
            } else if (!regexSDT.test(txtValue)) {
                errorElement.textContent = "Sai định dạng số điện thoại";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }

        case 'txtEmail':
            let regexEmail = /^[A-Za-z][A-Za-z0-9]*@gmail\.com$/;
            if (txtValue === "") {
                errorElement.textContent = "Không được để trống trường này.";
                return false;
            } else if (!regexEmail.test(txtValue)) {
                errorElement.textContent = "Sai định dạng email, yêu cầu xxxxxxx@gmail.com";
                return false;
            } else {
                errorElement.textContent = "";
                return true;
            }

        default:
            return false;
    }
}

function submit() {
    let isValid = true;
    isValid = isValidInput('txtDN', 'errTenDN') && isValid;
    isValid = isValidInput('txtMK', 'errMK') && isValid;
    isValid = isValidInput('txtMK2', 'errMK2') && isValid;
    isValid = isValidInput('txtHoTen', 'errHoTen') && isValid;
    isValid = isValidInput('ngaySinh', 'errNgaySinh') && isValid;
    isValid = isValidInput('txtDiaChi', 'errDiaChi') && isValid;
    isValid = isValidInput('txtSdt', 'errSdt') && isValid;
    isValid = isValidInput('txtEmail', 'errEmail') && isValid;

    if (isValid) {
        alert('ĐĂNG KÝ THÀNH CÔNG');
    }
}

function clearForm() {
    document.getElementById('myForm').reset();
}
