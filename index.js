const x = document.getElementById('en');
const y = document.getElementById('re');
const z = document.getElementById('nn');
const f = document.getElementById('ene');

z.addEventListener("click", () => {
    x.focus();
    
    if (!x.checkValidity()) {
        y.innerHTML = x.validationMessage;
    } else {
        y.innerHTML = ""; // 清空错误信息，当输入有效时
    }
});

f.addEventListener("input", () => {
    f.focus();
    
    if (!f.checkValidity()) {
        y.innerHTML = f.validationMessage;
    } else {
        y.innerHTML = ""; // 清空错误信息，当输入有效时
    }
});


