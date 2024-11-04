const x = document.getElementById('en');
const y = document.getElementById('re');
const z = document.getElementById('nn')

z.addEventListener("click", () => {
    x.focus();
    
    if (!x.checkValidity()) {
        y.innerHTML = x.validationMessage;
    } else {
        y.innerHTML = ""; // 清空错误信息，当输入有效时
    }
});