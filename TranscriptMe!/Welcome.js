$('#Signin').click(function(){
    location.href='Studentslogin.html'
});

$('#Create').click(function(){
    location.href='Teacherslogin.html'
});

function autoResizeDiv()
        {
            document.getElementById('main').style.height = window.innerHeight +'px';
        }
        window.onresize = autoResizeDiv;
        autoResizeDiv();