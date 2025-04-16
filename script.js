// Clock function
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clock = document.querySelector('.clock');
    clock.innerHTML = `${hours}<span class="clock-colon">:</span>${minutes}`;
}

// Simplified custom cursor function
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor.site-wide');
    
    // Create mouse glow effect
    const mouseGlow = document.createElement('div');
    mouseGlow.className = 'mouse-glow';
    document.body.appendChild(mouseGlow);
    
    // Show cursor when page loads
    cursor.style.display = 'block';
    cursor.style.opacity = '0.7';
    
    // Track cursor position - exactly centered on mouse
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
        
        // Update glow - use fixed positioning relative to viewport
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

// Initialize everything when DOM is loaded
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
    // Only close if the click was directly on the overlay background
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
        { title: 'Aphex Twin - Xtal', src: 'Music/Aphex Twin-Xtal.mp3' },
        { title: 'Underworld - Born Slippy', src: 'Music/Born Slippy (Nuxx).mp3' },
        { title: 'Stekker - U Kno 92', src: 'Music/U Kno 92.mp3' },
        { title: 'Travis Scott - Stop Trying To Be God', src: 'Music/Travis Scott - STTBG(Audio).mp3' },
        { title: 'Skepta - Track 2', src: 'Music/Skepta - Blacklisted - Track 2.mp3' },
        { title: 'Frank Ocean - Songs for Women', src: 'Music/Songs for Women.mp3' },
        { title: 'King Krule - Foreign 2', src: 'Music/Foreign 2.mp3' },
        { title: 'Loyle Carner - Ottolenghi', src: 'Music/Ottolenghi.mp3' },
        { title: 'Blue Iverson - Coy Boy', src: 'Music/Coy Boy.mp3' },
        { title: 'CartierGod - LondonNights', src: 'Music/LondonNights.mp3' },
        { title: 'Robert Hood - A System Of Mirrors', src: 'Music/Robert Hood - A System Of Mirrors.mp3' },
        { title: 'Bicep - Glue', src: 'Music/Bicep .mp3' },
        { title: 'Helly larson - Glimmer of Hope', src: 'Music/Helly Larson - Glimmer of hope.mp3' },
    ];
    
    let currentTrackIndex = Math.floor(Math.random() * playlist.length);
    let isPlaying = false;
    
    // Initialize the first track
    loadTrack(currentTrackIndex);
    
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
    });
    
    // Next button click event
    nextButton.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) {
            audioElement.play();
        }
    });
    
    // Load track function
    function loadTrack(index) {
        const track = playlist[index];
        const trackName = document.getElementById('track-name');
        const nextButton = document.getElementById('nextButton');
        
        // Disable next button during typing
        nextButton.setAttribute('disabled', 'disabled');
        
        // Clear the current text and reset width
        trackName.textContent = '';
        trackName.style.width = '0';
        
        // Set the new track source
        audioElement.src = track.src;
        
        // Start the typing animation
        let i = 0;
        const text = track.title;
        const speed =30; // typing speed in ms
        
        function typeWriter() {
            if (i < text.length) {
                trackName.textContent += text.charAt(i);
                // Calculate the width based on the current text length
                const currentWidth = trackName.scrollWidth;
                trackName.style.width = `${currentWidth}px`;
                i++;
                setTimeout(typeWriter, speed);
            } else {
                // Enable next button after typing is done
                nextButton.removeAttribute('disabled');
            }
        }
        
        // Start the typing animation
        typeWriter();
    }
    
    // Event when track ends - play next track
    audioElement.addEventListener('ended', () => {
        isPlaying = false;
        playButton.classList.remove('playing');
        document.querySelector('.now-playing').classList.remove('blink');
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) {
            audioElement.play();
        }
    });
}