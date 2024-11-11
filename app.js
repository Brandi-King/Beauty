
   var source = new EventSource("sse.php");
    source.onmessage = function(event) {
        document.getElementById("result").innerHTML += event.data + "<br>";
    };

    document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";


