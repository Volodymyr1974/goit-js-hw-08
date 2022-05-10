import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
 
const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe);

const dataTime = localStorage.getItem(STORAGE_KEY);

if (dataTime){
    player.setCurrentTime(dataTime).
    then(function (seconds) {
        seconds = 0;
    })
        .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                 break;

            default:
                 break;
        }
    });
};

 player.on('timeupdate', throttle(onTimeupdate, 1000) );
    
        function onTimeupdate(event) {
            localStorage.setItem(STORAGE_KEY, event.seconds);
                     
        }