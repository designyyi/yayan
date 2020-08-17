// 送信

var btnSend = document.getElementById('btnSend');

btnSend.addEventListener('click', function() {
    var inputName = document.getElementById('inputName').value;
    var inputMail = document.getElementById('inputMail').value;
    var inputPhone = document.getElementById('inputPhone').value;
    var inputArea = document.getElementById('inputArea').value;

    window.location.href = "mailto:design.yyi@gmail.com?subject="+ inputName +"從網站來信&body="
     + "姓名：" + inputName + "%0D%0A%0D%0A聯絡電話：" + inputPhone + "%0D%0A%0D%0A電子郵件："+ inputMail +　"%0D%0A%0D%0A來信內容："　+  inputArea
})

// 地圖