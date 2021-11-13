function makeForm(){
    let content = document.querySelector('.formContainer');
    content.innerHTML = '<div class="formContainer"><div class="checkoutFormInner"><h2>Ordering details</h2><div class="rect"><form action="#" name="newform" method="post"><div class="formInputs"><div><p class="formText">First Name<span class="red"> *</span></p><input class="inputRounded" type="text"><p class="formText">Last Name<span class="red"> *</span></p><input class="inputRounded" type="text"><p class="formText">Phone number<span class="red"> *</span></p><input class="inputRounded" type="text"></div><div><p class="formText">Estimated delivery date<span class="red"> *</span></p><input class="inputRounded" type="date"><p class="formText">Address<span class="red"> *</span></p><input class="inputRounded" type="text"><p class="info">*Required fields</p><input class="btn checkout" type="button" value="CHECKOUT" onclick="message()"></div></div></div></form></div></div>';
}

function message() {
 alert("Thank you for your purchase!")
 
}