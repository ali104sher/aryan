document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Custom Cursor Glow
    // ==========================================
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // ==========================================
    // 2. Music Logic
    // ==========================================
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;

    // Music starts when the button is clicked 
    // (Browsers block autoplay, so she has to click the button to hear the song)
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = "🎵 Play Music";
        } else {
            bgMusic.play();
            musicBtn.innerHTML = "⏸ Pause Music";
        }
        isPlaying = !isPlaying;
    });

    // ==========================================
    // 3. Typing Effect
    // ==========================================
    const typingContainer = document.getElementById('typing');
    const textToType = "I know things have been quiet... and maybe we don't listen to the same songs, but I still wanted to tell you this properly. You've always been special to me.";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typingContainer.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeText, 50); // Speed of typing (50ms per letter)
        }
    }
    
    // Start typing 1 second after the website loads
    setTimeout(typeText, 1000);

    // ==========================================
    // 4. Floating Elements (Sparkles)
    // ==========================================
    const heartsContainer = document.getElementById('heartsContainer');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '✨'; 
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 10) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }

    setInterval(createHeart, 2500);

    // ==========================================
    // 5. Scroll Reveal Animations
    // ==========================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 }); 

    document.querySelectorAll('.storyCard, .memoryCard, .timelineItem').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // ==========================================
    // 6. Back To Top Button
    // ==========================================
    const topBtn = document.getElementById('topBtn');
    if (topBtn) {
        topBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});