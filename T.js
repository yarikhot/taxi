function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 13
    });

    var infoWindow = new google.maps.InfoWindow({map: map});

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            // var marker = new google.maps.Marker({
            //     position: pos,
            //     map: map
            // });

            marker = new google.maps.Marker({
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: pos
            });


            infoWindow.setPosition(pos);
            infoWindow.setContent('Ваше місцезнаходження.');
             map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });

    } else {

        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}



$(document).ready(function () {
    $('#mail-link').on("click",function(){
        var send_form = document.getElementById("form-driver");
        if (send_form.checkValidity() === false) {
            alert("Заполните все поля!");
            return;
        }
        doApp($('#formdriver-name').val(), $('#formdriver-phone').val(), $('#formdriver-city').val());
    });

    $('#mail-link').on("click",function(){
        var send_form = document.getElementById("form-faq");
        if (send_form.checkValidity() === false) {
            alert("Заполните все поля!");
            return;
        }
        doApp2($('#formfaq-name').val(), $('#formfaq-phone').val(), $('#formfaq-city').val(), $('#question').val());
    });
});



$(document).ready(function () {
    $('#mail2').on("click",function(){
        var send_form = document.getElementById("form-driver");
        if (send_form.checkValidity() === false) {
            alert("Заполните все поля!");
            return;
        }
        doApp($('#addres').val(), $('#city').val(), $('#toun').val(), $('#telephone').val());
    });

    $('#mail2').on("click",function(){
        var send_form = document.getElementById("form-faq");
        if (send_form.checkValidity() === false) {
            alert("Заполните все поля!");
            return;
        }
        doApp2($('#addres').val(), $('#city').val(), $('#toun').val(), $('#telephone').val(), $('#question').val());
    });
});



$(document).ready(function () {
    $("#form-driver").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});





$(document).ready(function () {
    $("#form-users").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'mail2.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
});











