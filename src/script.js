// Clock 
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clock = document.querySelector('.clock');
    clock.innerHTML = `${hours}<span class="clock-colon">:</span>${minutes}`;
}

// cursor function
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor.site-wide');
    
    // mouse glow effect
    const mouseGlow = document.createElement('div');
    mouseGlow.className = 'mouse-glow';
    document.body.appendChild(mouseGlow);
    
    // Show cursor when page loads
    cursor.style.display = 'block';
    cursor.style.opacity = '0.7';
    
    document.addEventListener('mousemove', (e) => {
        // Get scroll position
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        
        // Calculate positions including scroll
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Update cursor
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
        
        // Update glow - use positioning relative to viewport
        requestAnimationFrame(() => {
            mouseGlow.style.left = `${mouseX}px`;
            mouseGlow.style.top = `${mouseY}px`;
        });
    });
    
    // Only change cursor opacity when clicking
    document.addEventListener('mousedown', () => {
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.opacity = '0.7';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
    initCustomCursor();
    initAudioPlayer();
});

// Function to open the overlay
function openOverlay() {
    const overlay = document.getElementById('infoOverlay');
    overlay.classList.add('active');
    
    // Prevent scrolling on the body while overlay is open
    document.body.style.overflow = 'hidden';
}

// close the overlay
function closeOverlay() {
    const overlay = document.getElementById('infoOverlay');
    overlay.classList.remove('active');
    
    // Re-enable scrolling on the body
    document.body.style.overflow = '';
}

// Close overlay when ESC key is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeOverlay();
    }
});

// Allow clicking outside the content to close the overlay
document.getElementById('infoOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeOverlay();
    }
});

function initAudioPlayer() {
    const audioElement = document.getElementById('audio-element');
    const playButton = document.getElementById('playButton');
    const nextButton = document.getElementById('nextButton');
    const trackName = document.getElementById('track-name');

    //track playlist
    const playlist = [
        { title: 'Aphex Twin - Xtal', src: 'assets/music/Aphex Twin-Xtal.mp3' },
        { title: 'Underworld - Born Slippy', src: 'assets/music/Born Slippy (Nuxx).mp3' },
        { title: 'Stekker - U Kno 92', src: 'assets/music/U Kno 92.mp3' },
        { title: 'Southstar - East', src: 'assets/music/Southstar - East.mp3'},
        { title: 'Skepta - Track 2', src: 'assets/music/Skepta - Blacklisted - Track 2.mp3' },
        { title: 'King Krule - Foreign 2', src: 'assets/music/Foreign 2.mp3' },
        { title: 'Lolyle Carner - Sun Of Jean', src: 'assets/music/Loyle Carner - Sun Of Jean.mp3' },
        { title: 'CartierGod - LondonNights', src: 'assets/music/LondonNights.mp3' },
        { title: 'Bicep - Glue', src: 'assets/music/Bicep .mp3' },
        { title: 'Robert Hood - A System Of Mirrors', src: 'assets/music/Robert Hood - A System Of Mirrors.mp3' },
        { title: 'DJ Metatron - Chemical Procceses', src: 'assets/music/DJ Metatron - chemical process.mp3' },
        { title: 'Helly larson - Glimmer of Hope', src: 'assets/music/Helly Larson - Glimmer of hope.mp3' },
        { title: 'Vegyn - The Path Less Travelled', src: 'assets/music/The Path Less Travelled.mp3' },
        { title: 'Portishead - Glory Box', src: 'assets/music/glory box-portishead.mp3' }
    ];
    
    // Load state from localStorage or with random track
    let currentTrackIndex = localStorage.getItem('currentTrackIndex');
    if (currentTrackIndex === null) {
        currentTrackIndex = Math.floor(Math.random() * playlist.length);
    } else {
        currentTrackIndex = parseInt(currentTrackIndex);
    }
    
    let isPlaying = localStorage.getItem('isPlaying') === 'true';
    let currentTime = parseFloat(localStorage.getItem('currentTime')) || 0;
    
    // Initialize track
    loadTrack(currentTrackIndex);
    
    // saved playback position
    audioElement.currentTime = currentTime;
    
    if (isPlaying) {
        audioElement.play();
        playButton.classList.add('playing');
        document.querySelector('.now-playing').classList.add('blink');
    }
    
    // Play button click event
    playButton.addEventListener('click', () => {
        if (!isPlaying) {
            audioElement.play();
            isPlaying = true;
            playButton.classList.add('playing');
            document.querySelector('.now-playing').classList.add('blink');
        } else {
            audioElement.pause();
            isPlaying = false;
            playButton.classList.remove('playing');
            document.querySelector('.now-playing').classList.remove('blink');
        }
        localStorage.setItem('isPlaying', isPlaying);
    });

    //pause and play with space button 
    document.addEventListener('keydown', function(e){
        if (e.code === 'Space' || e.keyCode === 32) {
           //stop annoying auto scroll
            e.preventDefault();

            if (!isPlaying){
                audioElement.play();
                isPlaying = true;
                playButton.classList.add('playing');
                document.querySelector('.now-playing').classList.add('blink');
            } else {
                audioElement.pause();
                isPlaying = false;
                playButton.classList.remove('playing');
                document.querySelector('.now-playing').classList.remove('blink');
            }

            localStorage.setItem('isplaying', isPlaying);
        }

    });
    
    // Next button click event
    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) {
            audioElement.play();
        }
        localStorage.setItem('currentTrackIndex', currentTrackIndex);
    });
    
    function loadTrack(index) {
        const track = playlist[index];
        const trackName = document.getElementById('track-name');
        const nextButton = document.getElementById('nextButton');
        nextButton.setAttribute('disabled', 'disabled');
        
        trackName.textContent = '';
        trackName.style.width = '0';
        
        audioElement.src = track.src;
        
        //typing
        let i = 0;
        const text = track.title;
        const speed = 30; // typing speed in ms
        
        function typeWriter() {
            if (i < text.length) {
                trackName.textContent += text.charAt(i);
                // width based on current text length
                const currentWidth = trackName.scrollWidth;
                trackName.style.width = `${currentWidth}px`;
                i++;
                setTimeout(typeWriter, speed);
            } else {
                nextButton.removeAttribute('disabled');
            }
        }
        
        typeWriter();
    }
    
    //play next track upon track end
    audioElement.addEventListener('ended', () => {
        isPlaying = false;
        playButton.classList.remove('playing');
        document.querySelector('.now-playing').classList.remove('blink');
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        if (!isPlaying) {
            audioElement.play();
            isPlaying = true;
            playButton.classList.add('playing');
            document.querySelector('.now-playing').classList.add('blink');
        }
        localStorage.setItem('currentTrackIndex', currentTrackIndex);
    });

    setInterval(() => {
        if (!audioElement.paused) {
            localStorage.setItem('currentTime', audioElement.currentTime);
        }
    }, 1000);

    // Save state when leaving page
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('currentTime', audioElement.currentTime);
        localStorage.setItem('isPlaying', isPlaying);
        localStorage.setItem('currentTrackIndex', currentTrackIndex);
    });
}