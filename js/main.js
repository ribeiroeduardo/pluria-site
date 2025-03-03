// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Debug video
    const heroVideo = document.querySelector('#heroVideo');
    if (heroVideo) {
        console.log('Video element found');
        
        // Log the complete video element
        console.log('Video element:', heroVideo);
        
        // Check source elements
        const sources = heroVideo.getElementsByTagName('source');
        console.log('Source elements:', sources);
        for (let source of sources) {
            console.log('Source src:', source.src);
            console.log('Source type:', source.type);
        }
        
        heroVideo.addEventListener('loadstart', () => {
            console.log('Video load started');
        });
        
        heroVideo.addEventListener('loadeddata', () => {
            console.log('Video loaded successfully');
        });
        
        heroVideo.addEventListener('canplay', () => {
            console.log('Video can play');
        });
        
        heroVideo.addEventListener('playing', () => {
            console.log('Video is playing');
        });
        
        heroVideo.addEventListener('error', (e) => {
            console.error('Error loading video:', e);
            console.error('Error code:', heroVideo.error ? heroVideo.error.code : 'No error code');
            console.error('Error message:', heroVideo.error ? heroVideo.error.message : 'No error message');
        });
        
        // Log video element properties
        console.log('Video properties:', {
            src: heroVideo.currentSrc,
            paused: heroVideo.paused,
            muted: heroVideo.muted,
            readyState: heroVideo.readyState,
            networkState: heroVideo.networkState,
            error: heroVideo.error,
            baseURI: heroVideo.baseURI
        });
        
        // Force load attempt
        heroVideo.load();
    } else {
        console.error('Video element not found');
    }

    // Video background handling
    const bgVideo = document.getElementById('bgVideo');
    
    if (bgVideo) {
        console.log('Video element found');
        
        // Force load and play the video
        bgVideo.load();
        
        // Play the video (with error handling)
        const playPromise = bgVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Video playback started successfully');
            }).catch(error => {
                console.error('Error playing video:', error);
                // Try playing again after user interaction
                document.body.addEventListener('click', () => {
                    bgVideo.play();
                }, { once: true });
            });
        }
    } else {
        console.error('Video element not found');
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        });
    }

    // Form validation
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;
            
            if (!email.value.trim()) {
                isValid = false;
                alert('Please enter your email');
            }
            
            if (!message.value.trim()) {
                isValid = false;
                alert('Please enter your message');
            }
            
            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // Initialize gallery lightbox (simple version)
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            
            // Create lightbox elements
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            const lightboxContent = document.createElement('div');
            lightboxContent.className = 'lightbox-content';
            
            const lightboxImg = document.createElement('img');
            lightboxImg.src = imgSrc;
            
            const closeBtn = document.createElement('span');
            closeBtn.className = 'lightbox-close';
            closeBtn.innerHTML = '&times;';
            
            // Append elements
            lightboxContent.appendChild(lightboxImg);
            lightboxContent.appendChild(closeBtn);
            lightbox.appendChild(lightboxContent);
            document.body.appendChild(lightbox);
            
            // Prevent scrolling when lightbox is open
            document.body.style.overflow = 'hidden';
            
            // Close lightbox when clicking on close button or outside the image
            lightbox.addEventListener('click', function(e) {
                if (e.target === lightbox || e.target === closeBtn) {
                    document.body.removeChild(lightbox);
                    document.body.style.overflow = '';
                }
            });
        });
  });
}); 