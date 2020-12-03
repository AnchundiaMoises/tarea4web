function pagina() {
    window.open("http://127.0.0.1:5500/EMERGENTE.html", "", "width=600,height=400,");
}

function octal1() {

    var M = document.getElementById("resultado");
    var Octal = parseInt(document.getElementById("octal").value);
    var octaldecimal = parseInt(Octal, 8);
    M.innerHTML = "El número Octal es" + Octal + "en decimal es " + octaldecimal;
}

function Cal() {
    //var o = window.alert("resultado2" + sum);
    var num1 = parseInt(document.getElementById("1").value);
    var num2 = parseInt(document.getElementById("2").value);
    window.alert("La suma es igual a: ");
    var sum = window.alert(num1 + num2);
    window.alert("La resta es igual a: ");
    var res = window.alert(num1 - num2);
    window.alert("La multiplicacion es igual a :");
    var mul = window.alert(num1 * num2);
    window.alert("La divicion es igual a :");
    var div = window.alert(num1 / num2);
    ///o.innerHTML = "El número Octal es" + sum;

}


function serrar() {
    window.close();
}