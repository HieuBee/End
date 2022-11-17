var hello = document.getElementById("hello");
hello.addEventListener("mouseover", mouseover);
hello.addEventListener("mouseout", mouseout);
hello.addEventListener("click", onclick);
function mouseover() {
    document.getElementById("hello").style.color="white";
    document.getElementById("hello").style.background="black";
}
function mouseout() {
    document.getElementById("hello").style.color="black";
    document.getElementById("hello").style.background="white";
}

var count = false;
function onclick() {
    count = !count;
    var first;
    if (count) {
        first = "~~_~~";
    }else {
        first = "Hé lòooo!";
    }
    document.getElementById("hello").innerHTML = first;
}

function onclick() {
    var click = "Hiiiiii!";
    document.getElementById("hello").innerHTML = click;
}

function ws() {
    document.getElementById("ws").innerHTML = "Hiiii!";
}

var on = document.getElementById("on");
document.addEventListener("click", onl);
function onl() {
    document.getElementById("img").src="https://media.istockphoto.com/id/1239755990/vi/vec-to/b%E1%BA%A5t-b%C3%ACnh-%C4%91%E1%BA%B3ng-v%C3%A0-b%E1%BA%A5t-c%C3%B4ng-c%E1%BB%A7a-con-ng%C6%B0%E1%BB%9Di-ph%C3%A2n-bi%E1%BB%87t-%C4%91%E1%BB%91i-x%E1%BB%AD-v%C3%A0-ph%C3%A2n-bi%E1%BB%87t-ch%E1%BB%A7ng-t%E1%BB%99c-nh%C6%B0-kh%C3%A1i.jpg?s=612x612&w=0&k=20&c=Mj6kbKXisjdY1EsRpk4HjG0ibrnGCNZl36A9x_eIfAQ=";
}
function off() {
    document.getElementById("img").src="https://media.istockphoto.com/id/1264256853/vi/anh/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-m%C5%A9i-t%C3%AAn-tr%C3%A1i-ng%C6%B0%E1%BB%A3c-tr%C3%AAn-c%C3%A1c-kh%E1%BB%91i-g%E1%BB%97-di-chuy%E1%BB%83n-theo-h%C6%B0%E1%BB%9Bng-ng%C6%B0%E1%BB%A3c-l%E1%BA%A1i-c%E1%BA%A1nh-tranh-%C4%91a.jpg?s=612x612&w=0&k=20&c=QmCJlcrjn6abG-n4Pej_D7Pk344hdOHL-rxotI2dixs=";
}

