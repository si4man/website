function getVideo() {
    const array = ["r3EgaL_mzHE","hld4uaO1MDE","R2tdKNRinNg","K-Vr2bSMU7o","cIAcdiX02l0","EsPMpFKvZIA"];

    let getNumber = parseInt(Math.random() * array.length);

    let iFrame = document.getElementById('iframe');

    iFrame.src = `https://www.youtube.com/embed/${array[getNumber]}`;
}


getVideo();