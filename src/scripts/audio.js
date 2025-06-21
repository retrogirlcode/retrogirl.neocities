const myaudio = document.getElementById("audio");
    const cd = document.getElementById("guitar")

    function pause (){
        if (cd.classList.contains('playing')){   
        myaudio.pause();
        }else{
            myaudio.play();
        }
        cd.classList.toggle('playing')
        
           }