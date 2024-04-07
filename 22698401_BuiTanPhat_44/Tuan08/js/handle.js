function checkMaHv(){
    var regex = /[0-9]{9}$/;
    if(mauKT.test($("#maHvTxt").val() == true)){
        alert("Mã học viên đúng.")
    }else{
        alert("Mã học viên sai.")
    }
}
$("#maHvTxt").blur(checkMaHv);