var element = document.getElementById('left');

function home() {
    element.scrollTop = 0;
}

function project() {
    element.scrollTop = 600;
}

function experience() {
    element.scrollTop = 600 + 600;
}

function awards() {
    var height = document.getElementById('project').offsetHeight;
    element.scrollTop = 600 + 600 + 125 + height;
}

function phome() {
    if (element.scrollHeight > element.clientHeight) {
        element.scrollTop = element.scrollHeight;
    }
}