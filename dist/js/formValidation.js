function validateForm() {
    let x1 = document.forms["myForm"]["username"].value;
    let x2 = document.forms["myForm"]["phoneNumber"].value;
    let x3 = document.forms["myForm"]["msgTitle"].value;
    let x4 = document.forms["myForm"]["msgDesc"].value;
    if (x1 == "") {
        alert("ادخل اسم صحيح");
        return false;
    } else if (x2 == "") {
        alert("ادخل رقم جوال صحيح");
        return false;
    } else if (x3 == "") {
        alert("ادخل عنوان رسالة صحيح");
        return false;
    } else if (x4 == "") {
        alert("ادخل صحيحة");
        return false;
    }
}