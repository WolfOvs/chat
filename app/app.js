document.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {
        alert('send was pressed');
    }
});

function load_home() {
    document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
}

load_home();