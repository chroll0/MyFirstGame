var player = document.getElementById('player');
var Score = document.getElementById('score');
var Timer = document.getElementById('timer');
var RealScore = 0;
var RealTimer = 20;
var IntervalCounter = 700;
var TimeLineSound = new Audio();
    TimeLineSound.src = 'timeline.wav';

var TouchCubeSound = new Audio();
TouchCubeSound.src = 'clicksound.wav';

document.body.addEventListener('click', function() {
    TimeLineSound.play();
})

var interval = setInterval(StartTimer, IntervalCounter);

player.addEventListener('click', function() {
    TouchCubeSound.play()
    RealScore ++;
    Score.textContent = 'Score' + ' ' + RealScore;
    RealTimer += 1;
    Timer.textContent = 'Timer' + ' ' + RealTimer;

    var RandomPosX = Math.floor(Math.random() * 500);
    var RandomPosY = Math.floor(Math.random() * 500);
    var RandomScale = Math.floor(Math.random() * 100);

    if (RandomScale < 20) {
        RandomScale = 35;
        player.style.width = RandomScale + 'px';
        player.style.height = RandomScale + 'px';
    }
    player.style.marginLeft = RandomPosX + 'px';
    player.style.marginTop = RandomPosY + 'px';
    player.style.marginRight = RandomPosY + 'px';
    player.style.marginBottom = RandomPosX + 'px';
    player.style.width = RandomScale + 'px';
    player.style.height = RandomScale + 'px';
});

function StartTimer() {
    RealTimer--;
    Timer.textContent = 'Timer' + ' ' + RealTimer;
        if (RealTimer < 1){
        Endgame ();
        }
        if (RealTimer <1) { TimeLineSound.pause();
        }
}

function StopTimer () {

}
function Endgame () {
    Swal.fire('Try again!',
    'Your score' + ' ' + RealScore);
    clearInterval (interval);
}