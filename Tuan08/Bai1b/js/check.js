function isValidInput(inputId, errorId) {
    let txtValue = document.getElementById(inputId).value;
    let errorElement = document.getElementById(errorId);
    let regexHoTen = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    let regexEmail = /^[A-Za-z][A-Za-z0-9]*@gmail\.com$/;
    let regexMK = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    let currentYear = new Date().getFullYear();

    switch (inputId) {
        case 'txtHo':
        case 'txtTen':
            if (txtValue === "") {
                errorElement.innerHTML = "Trống";
                return false;
            } else if (!regexHoTen.test(txtValue)) {
                errorElement.innerHTML = "Sai định dạng (Ví dụ: John Smith)";
                return false;
            } else {
                errorElement.innerHTML = "";
                return true;
            }
        case 'txtEmail':
            if (txtValue === "") {
                errorElement.innerHTML = "Trống";
                return false;
            } else if (!regexEmail.test(txtValue)) {
                errorElement.innerHTML = "Email không hợp lệ (Ví dụ: example@gmail.com)";
                return false;
            } else {
                errorElement.innerHTML = "";
                return true;
            }
        case 'txtEmail2':
            let txtEmailValue = document.getElementById('txtEmail').value;
            if (txtValue === "") {
                errorElement.innerHTML = "Trống";
                return false;
            } else if (txtValue !== txtEmailValue) {
                errorElement.innerHTML = "Email không khớp";
                return false;
            } else {
                errorElement.innerHTML = "";
                return true;
            }
        case 'txtMatKhau':
            if (txtValue === "") {
                errorElement.innerHTML = "Trống";
                return false;
            } else if (!regexMK.test(txtValue)) {
                errorElement.innerHTML = "Mật khẩu phải có ít nhất 6 ký tự và chứa ít nhất một chữ cái và một số";
                return false;
            } else {
                errorElement.innerHTML = "";
                return true;
            }
        case 'txtNamSinh':
            if (txtValue === "") {
                errorElement.innerHTML = "Trống";
                return false;
            } else if (parseInt(txtValue) >= currentYear) {
                errorElement.innerHTML = "Năm sinh phải nhỏ hơn " + currentYear;
                return false;
            } else {
                errorElement.innerHTML = "";
                return true;
            }
        default:
            return false;
    }
}

function isRegisterSuccessfully() {
    let isValid = true;
    isValid = isValidInput('txtHo', 'errHo') && isValid;
    isValid = isValidInput('txtTen', 'errTen') && isValid;
    isValid = isValidInput('txtEmail', 'errEmail') && isValid;
    isValid = isValidInput('txtEmail2', 'errEmail2') && isValid;
    isValid = isValidInput('txtMatKhau', 'errMatKhau') && isValid;
    isValid = isValidInput('txtNamSinh', 'errNamSinh') && isValid;

    if (isValid) {
        alert('ĐĂNG KÝ THÀNH CÔNG');
    }
}
