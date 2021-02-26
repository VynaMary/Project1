function validate() {
    let name = document.getElementById("name")

    if (name.value == "") {
        alert(" name field cant be  s empty")
        name.focus() //IT APPEARS N BLUE COLR BOX
        return false
    }
    let email = document.getElementById("email")

    if (email.value == "") {
        alert(" email field cant be  s empty")
        email.focus() //IT APPEARS N BLUE COLR BOX
        return false
    }

    if (isNaN(mobile.value) || mobile.value.length!= 10) {
        alert("mobile number is invalid")
        mobile.focus()
        return false
    }



}