// Personal Branding Website - Vibe Cording Animations
// Sensual and trendy animations for the ultimate vibe experience
// Author: 강주희 (Vibe Cording Developer)
// Version: 2.0

(function() {
    'use strict';

    // Animation settings for Vibe Cording
    const VIBE_CONFIG = {
        duration: {
            instant: 200,
            fast: 400,
            normal: 800,
            slow: 1200,
            vibe: 1600 // Special vibe timing
        },
        easing: {
            vibe: 'cubic-bezier(0.23, 1, 0.32, 1)',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
        },
        stagger: 150,
        threshold: 0.15,
        colors: {
            primary: '#7F5AF0',
            secondary: '#2CB67D',
            accent: '#FFD23F'
        }
    };

    // Initialize all Vibe Cording animations
    function initVibeAnimations() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            console.log('🎭 Respecting user preference for reduced motion');
            return;
        }

        console.log('🎨 Initializing Vibe Cording animations...');
        
        setupVibeScrollAnimations();
        setupVibeParallax();
        setupVibeHoverEffects();
        setupVibeTextAnimations();
        setupVibeLoadingSequence();
        setupVibeMouseFollower();
        setupVibeScrollProgress();
        setupVibeFloatingElements();
        setupVibeGlowEffects();
    }

    // Enhanced scroll-triggered animations with Vibe styling
    function setupVibeScrollAnimations() {
        if (!window.IntersectionObserver) return;

        // Fade in with stagger for section content
        const fadeElements = document.querySelectorAll('.section-title, .section-subtitle');
        observeElements(fadeElements, (element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(60px)';
            element.style.filter = 'blur(10px)';
            element.style.transition = `
                opacity ${VIBE_CONFIG.duration.normal}ms ${VIBE_CONFIG.easing.vibe} ${index * 200}ms,
                transform ${VIBE_CONFIG.duration.normal}ms ${VIBE_CONFIG.easing.vibe} ${index * 200}ms,
                filter ${VIBE_CONFIG.duration.normal}ms ${VIBE_CONFIG.easing.vibe} ${index * 200}ms
            `;
        }, (element) => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.filter = 'blur(0px)';
        });

        // Enhanced skill cards with rotation and glow
        const skillCards = document.querySelectorAll('.skill-card');
        observeElements(skillCards, (card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(80px) rotateY(25deg)';
            card.style.filter = 'blur(5px)';
            card.style.transition = `
                opacity ${VIBE_CONFIG.duration.slow}ms ${VIBE_CONFIG.easing.bounce} ${index * VIBE_CONFIG.stagger}ms,
                transform ${VIBE_CONFIG.duration.slow}ms ${VIBE_CONFIG.easing.bounce} ${index * VIBE_CONFIG.stagger}ms,
                filter ${VIBE_CONFIG.duration.slow}ms ${VIBE_CONFIG.easing.vibe} ${index * VIBE_CONFIG.stagger}ms
            `;
        }, (card) => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateY(0deg)';
            card.style.filter = 'blur(0px)';
            
            // Add vibe glow effect
            setTimeout(() => {
                card.style.boxShadow = `0 20px 80px rgba(127, 90, 240, 0.3)`;
            }, 600);
        });

        // Portfolio cards with 3D flip effect
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        observeElements(portfolioCards, (card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'perspective(1000px) rotateX(45deg) translateY(100px)';
            card.style.transformOrigin = 'center bottom';
            card.style.transition = `
                opacity ${VIBE_CONFIG.duration.vibe}ms ${VIBE_CONFIG.easing.bounce} ${index * 200}ms,
                transform ${VIBE_CONFIG.duration.vibe}ms ${VIBE_CONFIG.easing.bounce} ${index * 200}ms
            `;
        }, (card) => {
            card.style.opacity = '1';
            card.style.transform = 'perspective(1000px) rotateX(0deg) translateY(0)';
        });

        // Stats animation with counter
        const stats = document.querySelectorAll('.stat');
        observeElements(stats, (stat, index) => {
            stat.style.opacity = '0';
            stat.style.transform = 'scale(0.3) rotateZ(180deg)';
            stat.style.transition = `
                opacity ${VIBE_CONFIG.duration.slow}ms ${VIBE_CONFIG.easing.bounce} ${index * 100}ms,
                transform ${VIBE_CONFIG.duration.slow}ms ${VIBE_CONFIG.easing.bounce} ${index * 100}ms
            `;
        }, (stat, index) => {
            stat.style.opacity = '1';
            stat.style.transform = 'scale(1) rotateZ(0deg)';
            
            // Animate the number
            setTimeout(() => {
                animateStatNumber(stat, index);
            }, 500 + (index * 100));
        });
    }

    // Enhanced parallax with multiple layers
    function setupVibeParallax() {
        const parallaxElements = [
            { selector: '.hero-visual', speed: -0.3 },
            { selector: '.code-animation', speed: -0.2 },
            { selector: '.floating-particle', speed: -0.1 }
        ];

        function updateVibeParallax() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(({ selector, speed }) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    const rate = scrolled * speed;
                    element.style.transform = `translate3d(0, ${rate}px, 0)`;
                });
            });
        }

        window.addEventListener('scroll', throttle(updateVibeParallax, 8)); // 120fps
    }

    // Enhanced hover effects with Vibe styling
    function setupVibeHoverEffects() {
        // Buttons with magnetic effect
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            let isHovering = false;
            
            button.addEventListener('mouseenter', (e) => {
                isHovering = true;
                button.style.transform = 'translateY(-8px) scale(1.05)';
                button.style.boxShadow = '0 25px 80px rgba(127, 90, 240, 0.4)';
                
                // Add ripple effect
                createRippleEffect(e);
            });
            
            button.addEventListener('mouseleave', () => {
                isHovering = false;
                button.style.transform = 'translateY(0) scale(1)';
                button.style.boxShadow = 'var(--shadow-soft)';
            });
            
            button.addEventListener('mousemove', (e) => {
                if (!isHovering) return;
                
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translateY(-8px) scale(1.05) translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
        });

        // Skill cards with tilt effect
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    translateY(-10px) 
                    scale(1.02)
                `;
                card.style.boxShadow = '0 25px 80px rgba(127, 90, 240, 0.3)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
                card.style.boxShadow = 'var(--shadow-soft)';
            });
        });

        // Portfolio cards with intensity
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        portfolioCards.forEach(card => {
            const image = card.querySelector('.portfolio-image img');
            
            card.addEventListener('mouseenter', () => {
                if (image) {
                    image.style.transform = 'scale(1.15) rotate(2deg)';
                    image.style.filter = 'brightness(1.1) saturate(1.2)';
                }
                card.style.transform = 'translateY(-15px) rotateZ(1deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                if (image) {
                    image.style.transform = 'scale(1) rotate(0deg)';
                    image.style.filter = 'brightness(1) saturate(1)';
                }
                card.style.transform = 'translateY(0) rotateZ(0deg)';
            });
        });
    }

    // Enhanced typewriter with multiple effects
    function setupVibeTextAnimations() {
        const heroName = document.querySelector('.hero-title .name');
        if (!heroName) return;

        const text = heroName.textContent;
        heroName.textContent = '';
        heroName.style.opacity = '1';
        
        // Create spans for each character
        const chars = text.split('').map(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.opacity = '0';
            span.style.transform = 'translateY(50px) rotateZ(45deg)';
            span.style.filter = 'blur(10px)';
            span.style.display = 'inline-block';
            span.style.transition = `
                opacity 0.6s ${VIBE_CONFIG.easing.bounce},
                transform 0.8s ${VIBE_CONFIG.easing.bounce},
                filter 0.6s ${VIBE_CONFIG.easing.vibe}
            `;
            return span;
        });
        
        chars.forEach(span => heroName.appendChild(span));
        
        // Animate characters one by one
        let delay = 1000;
        chars.forEach((span, index) => {
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0) rotateZ(0deg)';
                span.style.filter = 'blur(0px)';
                
                // Add color transition
                setTimeout(() => {
                    span.style.background = 'var(--bg-gradient-primary)';
                    span.style.backgroundClip = 'text';
                    span.style.webkitBackgroundClip = 'text';
                    span.style.color = 'transparent';
                }, 200);
            }, delay + (index * 80));
        });
        
        // Add blinking cursor
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.opacity = '0';
        cursor.style.animation = 'vibesBlink 1s infinite';
        cursor.style.color = 'var(--primary-color)';
        cursor.style.fontSize = '1.1em';
        
        setTimeout(() => {
            heroName.appendChild(cursor);
            cursor.style.opacity = '1';
            
            // Remove cursor after animation
            setTimeout(() => {
                cursor.style.opacity = '0';
                setTimeout(() => {
                    if (cursor.parentNode) {
                        cursor.parentNode.removeChild(cursor);
                    }
                }, 1000);
            }, 3000);
        }, delay + (chars.length * 80) + 500);
        
        // Add CSS animation for cursor
        addVibeStyles();
    }

    // Enhanced loading sequence
    function setupVibeLoadingSequence() {
        window.addEventListener('load', () => {
            // Navbar slide down with bounce
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.style.transform = 'translateY(-120%)';
                navbar.style.opacity = '0';
                navbar.style.transition = `
                    transform ${VIBE_CONFIG.duration.slow}ms ${VIBE_CONFIG.easing.bounce} 200ms,
                    opacity ${VIBE_CONFIG.duration.normal}ms ${VIBE_CONFIG.easing.vibe} 200ms
                `;
                
                setTimeout(() => {
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.opacity = '1';
                }, 100);
            }

            // Hero content cascade animation
            const heroElements = document.querySelectorAll('.hero-content > *');
            heroElements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateX(-80px) rotateY(25deg)';
                element.style.filter = 'blur(5px)';
                element.style.transition = `
                    opacity ${VIBE_CONFIG.duration.slow}ms ${VIBE_CONFIG.easing.bounce},
                    transform ${VIBE_CONFIG.duration.slow}ms ${VIBE_CONFIG.easing.bounce},
                    filter ${VIBE_CONFIG.duration.normal}ms ${VIBE_CONFIG.easing.vibe}
                `;
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateX(0) rotateY(0deg)';
                    element.style.filter = 'blur(0px)';
                }, 600 + (index * 150));
            });

            // Hero visual animation
            const heroVisual = document.querySelector('.hero-visual');
            if (heroVisual) {
                heroVisual.style.opacity = '0';
                heroVisual.style.transform = 'translateX(100px) scale(0.8) rotateY(-25deg)';
                heroVisual.style.transition = `
                    opacity ${VIBE_CONFIG.duration.vibe}ms ${VIBE_CONFIG.easing.bounce} 800ms,
                    transform ${VIBE_CONFIG.duration.vibe}ms ${VIBE_CONFIG.easing.bounce} 800ms
                `;
                
                setTimeout(() => {
                    heroVisual.style.opacity = '1';
                    heroVisual.style.transform = 'translateX(0) scale(1) rotateY(0deg)';
                }, 100);
            }
        });
    }

    // Enhanced mouse follower with trail
    function setupVibeMouseFollower() {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const follower = document.createElement('div');
        follower.className = 'vibe-mouse-follower';
        follower.style.cssText = `
            position: fixed;
            width: 30px;
            height: 30px;
            background: radial-gradient(circle, rgba(127, 90, 240, 0.8), rgba(44, 182, 125, 0.6));
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease-out;
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
            mix-blend-mode: screen;
            filter: blur(1px);
        `;
        document.body.appendChild(follower);

        // Create trail particles
        const trailParticles = [];
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: ${8 - i}px;
                height: ${8 - i}px;
                background: rgba(127, 90, 240, ${0.6 - i * 0.07});
                border-radius: 50%;
                pointer-events: none;
                z-index: 9998;
                transition: transform 0.1s ease-out;
                transform: translate(-50%, -50%);
                opacity: 0;
            `;
            document.body.appendChild(particle);
            trailParticles.push({ element: particle, x: 0, y: 0 });
        }

        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            follower.style.opacity = '1';
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        document.addEventListener('mouseleave', () => {
            follower.style.opacity = '0';
            follower.style.transform = 'translate(-50%, -50%) scale(0)';
            trailParticles.forEach(particle => {
                particle.element.style.opacity = '0';
            });
        });

        function animateFollower() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';
            
            // Update trail
            trailParticles.forEach((particle, index) => {
                const delay = (index + 1) * 0.05;
                particle.x += (followerX - particle.x) * (0.1 - delay);
                particle.y += (followerY - particle.y) * (0.1 - delay);
                
                particle.element.style.left = particle.x + 'px';
                particle.element.style.top = particle.y + 'px';
                particle.element.style.opacity = follower.style.opacity === '1' ? (0.6 - index * 0.07) : '0';
            });
            
            requestAnimationFrame(animateFollower);
        }
        animateFollower();

        // Enhanced hover effects
        const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .skill-card, .portfolio-card');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                follower.style.transform = 'translate(-50%, -50%) scale(2)';
                follower.style.background = 'radial-gradient(circle, rgba(255, 210, 63, 0.8), rgba(127, 90, 240, 0.6))';
                follower.style.filter = 'blur(0px)';
            });
            
            element.addEventListener('mouseleave', () => {
                follower.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.background = 'radial-gradient(circle, rgba(127, 90, 240, 0.8), rgba(44, 182, 125, 0.6))';
                follower.style.filter = 'blur(1px)';
            });
        });
    }

    // Enhanced scroll progress with gradient
    function setupVibeScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'vibe-scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #7F5AF0, #2CB67D, #FFD23F);
            z-index: 10000;
            transition: width 0.1s ease;
            box-shadow: 0 0 20px rgba(127, 90, 240, 0.5);
        `;
        document.body.appendChild(progressBar);

        function updateProgress() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
            progressBar.style.width = scrollPercent + '%';
            
            // Dynamic glow based on progress
            const glowIntensity = scrollPercent / 100;
            progressBar.style.boxShadow = `0 0 ${20 + glowIntensity * 30}px rgba(127, 90, 240, ${0.3 + glowIntensity * 0.4})`;
        }

        window.addEventListener('scroll', throttle(updateProgress, 8));
    }

    // Floating particles with Vibe colors
    function setupVibeFloatingElements() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'vibe-particles-container';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        document.body.appendChild(particlesContainer);

        const colors = ['#7F5AF0', '#2CB67D', '#FFD23F'];
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            const size = Math.random() * 8 + 3;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const opacity = Math.random() * 0.3 + 0.1;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: ${opacity};
                animation: vibeFloat ${Math.random() * 15 + 20}s infinite linear;
                filter: blur(${Math.random() * 2}px);
            `;
            particlesContainer.appendChild(particle);
        }
    }

    // Glow effects for interactive elements
    function setupVibeGlowEffects() {
        const glowElements = document.querySelectorAll('.btn-primary, .skill-card, .portfolio-card');
        
        glowElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.filter = 'drop-shadow(0 0 30px rgba(127, 90, 240, 0.6))';
            });
            
            element.addEventListener('mouseleave', () => {
                element.style.filter = 'none';
            });
        });
    }

    // Utility functions
    function observeElements(elements, setupFn, animateFn) {
        if (!window.IntersectionObserver) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(elements).indexOf(entry.target);
                    animateFn(entry.target, index);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: VIBE_CONFIG.threshold, rootMargin: '50px' });

        elements.forEach((element, index) => {
            setupFn(element, index);
            observer.observe(element);
        });
    }

    function animateStatNumber(stat, statIndex) {
        const numberElement = stat.querySelector('.stat-number');
        if (!numberElement) return;

        const finalValue = numberElement.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ''), 10);
        
        if (isNaN(numericValue)) return;

        const duration = 2500;
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            current += increment;
            step++;
            
            if (step >= steps) {
                clearInterval(timer);
                numberElement.textContent = finalValue;
                // Add final glow effect
                numberElement.style.textShadow = '0 0 20px rgba(127, 90, 240, 0.8)';
                setTimeout(() => {
                    numberElement.style.textShadow = 'none';
                }, 1000);
            } else {
                const displayValue = Math.floor(current);
                if (finalValue.includes('+')) {
                    numberElement.textContent = displayValue + '+';
                } else if (finalValue.includes('%')) {
                    numberElement.textContent = displayValue + '%';
                } else {
                    numberElement.textContent = displayValue.toString();
                }
            }
        }, duration / steps);
    }

    function createRippleEffect(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: vibeRipple 0.6s ease-out;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    function addVibeStyles() {
        if (document.querySelector('#vibe-animations-style')) return;
        
        const style = document.createElement('style');
        style.id = 'vibe-animations-style';
        style.textContent = `
            @keyframes vibesBlink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
            
            @keyframes vibeFloat {
                0% {
                    transform: translateY(100vh) rotate(0deg) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                    transform: translateY(90vh) rotate(45deg) scale(1);
                }
                90% {
                    opacity: 1;
                    transform: translateY(10vh) rotate(315deg) scale(1);
                }
                100% {
                    transform: translateY(-10vh) rotate(360deg) scale(0);
                    opacity: 0;
                }
            }
            
            @keyframes vibeRipple {
                to {
                    transform: translate(-50%, -50%) scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes vibeGlow {
                0%, 100% {
                    box-shadow: 0 0 20px rgba(127, 90, 240, 0.3);
                }
                50% {
                    box-shadow: 0 0 40px rgba(127, 90, 240, 0.6), 0 0 60px rgba(44, 182, 125, 0.4);
                }
            }
        `;
        document.head.appendChild(style);
    }

    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(initVibeAnimations, 150);
        });
    } else {
        setTimeout(initVibeAnimations, 150);
    }

    // Expose Vibe Cording animation functions
    window.VibeCordingAnimations = {
        init: initVibeAnimations,
        setupScrollAnimations: setupVibeScrollAnimations,
        setupParallax: setupVibeParallax,
        config: VIBE_CONFIG
    };

    console.log('🎨✨ Vibe Cording animations loaded successfully!');

})(); 