var ls = document.querySelectorAll("button");
var lsLength = ls.length;
var audioSrc = ["crash","kick-bass", "snare" , "tom-1", "tom-2", "tom-3", "tom-4"]
for(var i = 0 ; i < lsLength ; ++ i ){
    ls[i].para = audioSrc[i];
    ls[i].addEventListener("click", function (vec) {
        var audio = new Audio("./sounds/" + vec.currentTarget.para + ".mp3");
        audio.play();
    })
}
document.addEventListener("keydown",function (e) {
    switch(e.key){
        case 'w':
            var audio_w = new Audio("./sounds/crash.mp3");
            audio_w.play();
            break;
        case 'a':
            var audio_a = new Audio("./sounds/kick-bass.mp3");
            audio_a.play();
            break;
        case 's':
            var audio_s = new Audio("./sounds/snare.mp3");
            audio_s.play();
            break;
        case 'd':
            var audio_d = new Audio("./sounds/tom-1.mp3");
            audio_d.play();
            break;
        case 'j':
            var audio_j = new Audio("./sounds/tom-2.mp3");
            audio_j.play();
            break;
        case 'k':
            var audio_k = new Audio("./sounds/tom-3.mp3");
            audio_k.play();
            break;
        case 'l':
            var audio_l = new Audio("./sounds/tom-4.mp3");
            audio_l.play();
            break;
    }
})