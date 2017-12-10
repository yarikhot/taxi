var driver={};
driver.name=[];
driver.phone=[];
driver.city=[];

var lName= driver.name.length;
var lPhone= driver.name.length;
var lCity= driver.name.length;

$("#mail-link").click(function () {

    var newName=$("#formdriver-name").val();
    var newPhone=$("#formdriver-phone").val();
    var newCity=$("#formdriver-city").val();


    lName = driver.name.push(newName);
    lPhone = driver.name.push(newPhone);
    lCity = driver.name.push(newCity);

    alert('Имя:' + newName +'  '+ 'Город:'+ newCity + '  '+'Телефон:+380' + newPhone);

    // for (var key in driver){
    //     console.log( driver[key] );
    //     alert( Object.keys( driver ) );
    // }
});


var drivers={};
drivers.n=[];
drivers.p=[];
drivers.c=[];
drivers.s=[];

var lN= drivers.n.length;
var lP= drivers.p.length;
var lC= drivers.c.length;
var lS= drivers.s.length;

$("#mail2").click(function () {

    var nN=$("#addres").val();
    var nP=$("#city").val();
    var nC=$("#toun").val();
    var nS=$("#telephone").val();


    lN = drivers.n.push(nN);
    lP = drivers.p.push(nP);
    lC = drivers.c.push(nC);
    lS = drivers.s.push(nS);

    alert('Имя:' + nN +'  '+ 'Город:'+ nC + '  '+'Телефон:+380' + nP + 'Улица' +nS);

});

