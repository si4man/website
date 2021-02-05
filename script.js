function getVideo() {
    const array = ["r3EgaL_mzHE","hld4uaO1MDE","R2tdKNRinNg","K-Vr2bSMU7o","cIAcdiX02l0","EsPMpFKvZIA"];

    let getNumber = parseInt(Math.random() * array.length);

    let iFrame = document.getElementById('iframe');

    const currentVideo = array[getNumber];

    iFrame.src = `https://www.youtube.com/embed/${currentVideo}`;

    if (currentVideo == "EsPMpFKvZIA") {
        document.getElementsByClassName("container").style.background =  url('https://images7.alphacoders.com/101/thumb-1920-1014075.jpg');
    }

}


getVideo();