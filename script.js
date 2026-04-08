// script.js

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.preview-video');

    videos.forEach(video => {
        // Find the nearest parent project-link
        const card = video.closest('.project-link');

        if (card) {
            card.addEventListener('mouseenter', () => {
                const playPromise = video.play();
                
                // Handling the promise prevents errors in some browsers
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Playback interrupted:", error);
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                // Optional: video.currentTime = 0; // Resets to poster frame
            });
        }
    });
});

// Select all video elements with our custom class
    const videos = document.querySelectorAll('.preview-video');

    videos.forEach(video => {
        // Find the parent link or container to trigger the hover
        const card = video.closest('.project-link');

        card.addEventListener('mouseenter', () => {
            // Play the video when the mouse enters the card
            video.play().catch(error => {
                console.log("Autoplay prevented or video not loaded:", error);
            });
        });

        card.addEventListener('mouseleave', () => {
            // Pause and reset the video when the mouse leaves
            video.pause();
            // Optional: video.currentTime = 0; // Uncomment if you want it to restart every time
        });
    });