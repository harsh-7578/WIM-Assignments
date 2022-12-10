function blinker()
  {
    if(document.getElementById("blink"))
    {
        var d = document.getElementById("blink") ;
        d.style.color= (d.style.color=='blue'?'white':'blue');
        setTimeout('blinker()', 900);
    }
}