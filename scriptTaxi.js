$(document).ready(function () {
    $('.send-form').on("click",function(){
        var send_form = document.getElementById("form-driver");
        if (send_form.checkValidity() === false) {
            alert("Заполните все поля!");
            return;
        }
        doApp($('#formdriver-name').val(), $('#formdriver-phone').val(), $('#formdriver-city').val());
    });

    $('.send-faq').on("click",function(){
        var send_form = document.getElementById("form-faq");
        if (send_form.checkValidity() === false) {
            alert("Заполните все поля!");
            return;
        }
        doApp2($('#formfaq-name').val(), $('#formfaq-phone').val(), $('#formfaq-city').val(), $('#question').val());
    });
});


function doApp(name, phone, city) {
    var urlStr = window.location.href;
    //var urlStrDecode = alert(decodeURIComponent(urlStr));
    $.ajax({
        method: 'POST',
        contentType:"application/x-www-form-urlencoded; charset=utf-8",
        url: 'GoogleDoc/php/online_activation.php',
        data: { 'name' : name, 'phone' : phone, 'city' : city, 'urlStr' : urlStr },
        success: function(data) {
            alert("Добавлено!");
        },
        error: function (data) {
            alert(data);
        }
    });
}

function doApp2(name, phone, city, comment) {
    var urlStr = window.location.href;
    $.ajax({
        method: 'POST', // or GET
        contentType:"application/x-www-form-urlencoded; charset=utf-8",
        url: 'GoogleDoc/php/faq.php',
        data: { 'name' : name, 'phone' : phone, 'city' : city, 'comment' : comment, 'urlStr' : urlStr },
        success: function(data) {
            alert("Добавлено!");
        },
        error: function (data) {
            alert(data);
        }
    });
}