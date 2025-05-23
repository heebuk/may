// Personal Branding Website - Vibe Cording Main Script
// Sensual and trendy functionality for the ultimate vibe experience
// Author: 강주희 (Vibe Cording Developer)
// Version: 2.0

(function() {
    'use strict';

    // Vibe Cording Configuration
    const VIBE_CONFIG = {
        transitions: {
            fast: 300,
            normal: 600,
            slow: 1000
        },
        breakpoints: {
            mobile: 768,
            tablet: 1024
        },
        colors: {
            primary: '#7F5AF0',
            secondary: '#2CB67D',
            accent: '#FFD23F'
        }
    };

    // DOM Elements Cache
    const elements = {
        navbar: document.getElementById('navbar'),
        navMenu: document.getElementById('nav-menu'),
        hamburger: document.getElementById('hamburger'),
        navLinks: document.querySelectorAll('.nav-link'),
        scrollIndicator: document.getElementById('scroll-indicator'),
        body: document.body,
        html: document.documentElement
    };

    // Application State
    const state = {
        isMenuOpen: false,
        isScrolled: false,
        currentSection: 'home',
        scrollDirection: 'down',
        lastScrollTop: 0,
        isMobile: window.innerWidth <= VIBE_CONFIG.breakpoints.mobile
    };

    // Initialize Vibe Cording Experience
    function initVibeExperience() {
        console.log('🎨 Initializing Vibe Cording experience...');
        
        setupEventListeners();
        handleActiveNavigation();
        setupScrollIndicator();
        setupSmoothScrolling();
        setupFormValidation();
        setupVibeInteractions();
        setupResponsiveHandling();
        setupAccessibilityFeatures();
        
        console.log('✨ Vibe Cording experience ready!');
    }

    // Event Listeners Setup
    function setupEventListeners() {
        // Navigation toggle
        if (elements.hamburger) {
            elements.hamburger.addEventListener('click', toggleMobileMenu);
        }

        // Close mobile menu when clicking nav links
        elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    closeMobileMenu();
                    handleSmoothNavigation(e);
                }
            });
        });

        // Enhanced scroll events
        window.addEventListener('scroll', throttle(handleScroll, 8), { passive: true });
        window.addEventListener('scroll', throttle(updateActiveNavigation, 100), { passive: true });
        window.addEventListener('scroll', throttle(handleScrollDirection, 50), { passive: true });

        // Resize events
        window.addEventListener('resize', debounce(handleResize, 250));

        // Close mobile menu when clicking outside
        document.addEventListener('click', handleOutsideClick);

        // Enhanced keyboard navigation
        document.addEventListener('keydown', handleKeyboardNavigation);

        // Page visibility changes
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Page load events
        window.addEventListener('load', handlePageLoad);

        // Touch events for mobile
        if ('ontouchstart' in window) {
            setupTouchEvents();
        }
    }

    // Enhanced Mobile Menu Toggle
    function toggleMobileMenu() {
        state.isMenuOpen = !state.isMenuOpen;
        
        elements.hamburger.classList.toggle('active');
        elements.navMenu.classList.toggle('active');
        elements.body.style.overflow = state.isMenuOpen ? 'hidden' : '';

        // Accessibility
        elements.hamburger.setAttribute('aria-expanded', state.isMenuOpen);
        elements.navMenu.setAttribute('aria-hidden', !state.isMenuOpen);

        // Add vibe animation
        if (state.isMenuOpen) {
            elements.navMenu.style.opacity = '0';
            elements.navMenu.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                elements.navMenu.style.transition = 'opacity 400ms ease, transform 400ms ease';
                elements.navMenu.style.opacity = '1';
                elements.navMenu.style.transform = 'translateY(0)';
            }, 50);
            
            // Stagger nav link animations
            elements.navLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(-30px)';
                
                setTimeout(() => {
                    link.style.transition = 'opacity 300ms ease, transform 300ms ease';
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, 150 + (index * 100));
            });
        } else {
            elements.navMenu.style.transition = 'opacity 300ms ease, transform 300ms ease';
            elements.navMenu.style.opacity = '0';
            elements.navMenu.style.transform = 'translateY(-20px)';
        }

        console.log(`🎭 Mobile menu ${state.isMenuOpen ? 'opened' : 'closed'}`);
    }

    function closeMobileMenu() {
        if (state.isMenuOpen) {
            state.isMenuOpen = false;
            elements.hamburger.classList.remove('active');
            elements.navMenu.classList.remove('active');
            elements.body.style.overflow = '';
            
            // Accessibility
            elements.hamburger.setAttribute('aria-expanded', false);
            elements.navMenu.setAttribute('aria-hidden', true);

            console.log('🎭 Mobile menu closed');
        }
    }

    // Enhanced Scroll Handling
    function handleScroll() {
        const scrollTop = window.pageYOffset || elements.html.scrollTop;
        
        // Navbar scroll effect with enhanced styling
        if (scrollTop > 80 && !state.isScrolled) {
            elements.navbar.classList.add('scrolled');
            state.isScrolled = true;
            
            // Add subtle glow effect
            elements.navbar.style.boxShadow = '0 8px 32px rgba(127, 90, 240, 0.15)';
            
        } else if (scrollTop <= 80 && state.isScrolled) {
            elements.navbar.classList.remove('scrolled');
            state.isScrolled = false;
            elements.navbar.style.boxShadow = '';
        }

        // Enhanced scroll indicator visibility
        if (elements.scrollIndicator) {
            if (scrollTop > 150) {
                elements.scrollIndicator.style.opacity = '0';
                elements.scrollIndicator.style.transform = 'translateX(-50%) translateY(20px)';
                elements.scrollIndicator.style.pointerEvents = 'none';
            } else {
                elements.scrollIndicator.style.opacity = '1';
                elements.scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
                elements.scrollIndicator.style.pointerEvents = 'auto';
            }
        }

        // Update scroll position
        state.lastScrollTop = scrollTop;
    }

    // Scroll Direction Detection
    function handleScrollDirection() {
        const scrollTop = window.pageYOffset || elements.html.scrollTop;
        const direction = scrollTop > state.lastScrollTop ? 'down' : 'up';
        
        if (direction !== state.scrollDirection) {
            state.scrollDirection = direction;
            
            // Auto-hide navbar on scroll down (except when menu is open)
            if (!state.isMenuOpen && scrollTop > 200) {
                if (direction === 'down') {
                    elements.navbar.style.transform = 'translateY(-100%)';
                } else {
                    elements.navbar.style.transform = 'translateY(0)';
                }
            }
        }
    }

    // Active Navigation with Enhanced Visual Feedback
    function handleActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        elements.navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === '#home')) {
                setActiveNavLink(link);
            } else {
                link.classList.remove('active');
            }
        });
    }

    function updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + elements.navbar.offsetHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                if (state.currentSection !== sectionId) {
                    state.currentSection = sectionId;
                    
                    elements.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            setActiveNavLink(link);
                        }
                    });
                }
            }
        });
    }

    function setActiveNavLink(activeLink) {
        // Remove active from all links
        elements.navLinks.forEach(link => {
            link.classList.remove('active');
            link.style.transform = '';
            link.style.color = '';
        });
        
        // Set active link with enhanced styling
        activeLink.classList.add('active');
        activeLink.style.color = VIBE_CONFIG.colors.primary;
        activeLink.style.transform = 'translateY(-2px)';
        
        // Add pulse effect
        activeLink.style.animation = 'none';
        setTimeout(() => {
            activeLink.style.animation = 'vibePulse 0.6s ease';
        }, 10);
    }

    // Enhanced Scroll Indicator
    function setupScrollIndicator() {
        if (elements.scrollIndicator) {
            elements.scrollIndicator.addEventListener('click', () => {
                const targetSection = document.getElementById('skills') || document.querySelector('.skills-overview');
                if (targetSection) {
                    smoothScrollTo(targetSection);
                }
            });

            // Add enhanced hover effect
            elements.scrollIndicator.addEventListener('mouseenter', () => {
                elements.scrollIndicator.style.transform = 'translateX(-50%) translateY(-8px) scale(1.1)';
                elements.scrollIndicator.style.color = VIBE_CONFIG.colors.primary;
            });

            elements.scrollIndicator.addEventListener('mouseleave', () => {
                elements.scrollIndicator.style.transform = 'translateX(-50%) translateY(0) scale(1)';
                elements.scrollIndicator.style.color = '';
            });
        }
    }

    // Enhanced Smooth Scrolling
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleSmoothNavigation);
        });
    }

    function handleSmoothNavigation(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            smoothScrollTo(targetElement);
            
            // Update URL without triggering scroll
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }
        }
    }

    function smoothScrollTo(element) {
        const targetPosition = element.offsetTop - elements.navbar.offsetHeight - 20;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = Math.min(Math.abs(distance) * 0.5, 1200); // Dynamic duration
        let start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeInOutCubic = progress < 0.5 
                ? 4 * progress * progress * progress 
                : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
            
            window.scrollTo(0, startPosition + distance * easeInOutCubic);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        requestAnimationFrame(animation);
    }

    // Enhanced Form Validation
    function setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', handleFormSubmit);
            
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('blur', validateField);
                input.addEventListener('input', clearFieldError);
                input.addEventListener('focus', handleFieldFocus);
            });
        });
    }

    function validateField(event) {
        const field = event.target;
        const value = field.value.trim();
        const fieldName = field.name;
        
        clearFieldError(event);
        
        // Enhanced email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, '올바른 이메일 주소를 입력해주세요.');
                return false;
            }
        }
        
        // Phone validation
        if (fieldName === 'phone' && value) {
            const phoneRegex = /^[\+]?[0-9\-\(\)\s]+$/;
            if (!phoneRegex.test(value)) {
                showFieldError(field, '올바른 전화번호를 입력해주세요.');
                return false;
            }
        }
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, '이 필드는 필수입니다.');
            return false;
        }
        
        // Success styling
        field.style.borderColor = VIBE_CONFIG.colors.secondary;
        field.style.boxShadow = `0 0 0 3px rgba(44, 182, 125, 0.1)`;
        
        return true;
    }

    function handleFieldFocus(event) {
        const field = event.target;
        field.style.borderColor = VIBE_CONFIG.colors.primary;
        field.style.boxShadow = `0 0 0 3px rgba(127, 90, 240, 0.1)`;
        field.style.transform = 'translateY(-2px)';
    }

    function clearFieldError(event) {
        const field = event.target;
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
        field.classList.remove('error');
        field.style.borderColor = '';
        field.style.boxShadow = '';
        field.style.transform = '';
    }

    function showFieldError(field, message) {
        field.classList.add('error');
        field.style.borderColor = '#ef4444';
        field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
        field.style.transform = 'translateX(5px)';
        
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: block;
            animation: vibeShake 0.5s ease;
        `;
        
        field.parentNode.appendChild(errorElement);
        
        // Shake animation
        setTimeout(() => {
            field.style.transform = '';
        }, 500);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        // Clear previous errors
        form.querySelectorAll('.field-error').forEach(error => error.remove());
        form.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
        
        // Validate all required fields
        inputs.forEach(input => {
            if (!validateField({ target: input })) {
                isValid = false;
            }
        });
        
        if (isValid) {
            showFormSuccess(form);
        }
    }

    function showFormSuccess(form) {
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <div style="
                color: ${VIBE_CONFIG.colors.secondary};
                font-weight: 600;
                text-align: center;
                padding: 1.5rem;
                background: linear-gradient(135deg, rgba(44, 182, 125, 0.1), rgba(127, 90, 240, 0.05));
                border: 2px solid ${VIBE_CONFIG.colors.secondary};
                border-radius: 12px;
                margin-top: 1rem;
                animation: vibeSuccessSlide 0.6s ease;
            ">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">✨</div>
                <p>메시지가 성공적으로 전송되었습니다!</p>
                <p style="font-size: 0.9rem; opacity: 0.8; margin-top: 0.5rem;">곧 연락드리겠습니다.</p>
            </div>
        `;
        
        form.appendChild(successMessage);
        form.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.style.opacity = '0';
            successMessage.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                successMessage.remove();
            }, 300);
        }, 5000);
    }

    // Vibe Interactions
    function setupVibeInteractions() {
        // Enhanced button interactions
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.filter = 'brightness(1.1) saturate(1.2)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.filter = '';
            });
            
            button.addEventListener('click', (e) => {
                createVibeRipple(e);
            });
        });

        // Skill card interactions
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.addEventListener('click', () => {
                // Pulse effect on click
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'vibePulse 0.6s ease';
                }, 10);
            });
        });
    }

    function createVibeRipple(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.cssText = `
            position: absolute;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 1000;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        // Animate ripple
        ripple.style.animation = 'vibeRipple 0.6s ease-out';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Responsive Handling
    function setupResponsiveHandling() {
        handleResize(); // Initial call
    }

    function handleResize() {
        const wasMobile = state.isMobile;
        state.isMobile = window.innerWidth <= VIBE_CONFIG.breakpoints.mobile;
        
        // Close mobile menu if switching to desktop
        if (wasMobile && !state.isMobile && state.isMenuOpen) {
            closeMobileMenu();
        }
        
        // Reset navbar transform on resize
        elements.navbar.style.transform = '';
        
        console.log(`📱 Responsive mode: ${state.isMobile ? 'Mobile' : 'Desktop'}`);
    }

    // Accessibility Features
    function setupAccessibilityFeatures() {
        // Skip to content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = '메인 콘텐츠로 건너뛰기';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: ${VIBE_CONFIG.colors.primary};
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10001;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Enhance focus visibility
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = `2px solid ${VIBE_CONFIG.colors.primary}`;
                element.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', () => {
                element.style.outline = '';
                element.style.outlineOffset = '';
            });
        });
    }

    // Touch Events
    function setupTouchEvents() {
        let touchStartY = 0;
        let touchEndY = 0;
        
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeDistance = touchStartY - touchEndY;
            const minSwipeDistance = 100;
            
            if (Math.abs(swipeDistance) > minSwipeDistance) {
                if (swipeDistance > 0) {
                    // Swipe up - scroll to next section
                    scrollToNextSection();
                } else {
                    // Swipe down - scroll to previous section
                    scrollToPrevSection();
                }
            }
        }
    }

    function scrollToNextSection() {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentIndex = sections.findIndex(section => section.id === state.currentSection);
        
        if (currentIndex < sections.length - 1) {
            smoothScrollTo(sections[currentIndex + 1]);
        }
    }

    function scrollToPrevSection() {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentIndex = sections.findIndex(section => section.id === state.currentSection);
        
        if (currentIndex > 0) {
            smoothScrollTo(sections[currentIndex - 1]);
        }
    }

    // Event Handlers
    function handleOutsideClick(event) {
        if (state.isMenuOpen && 
            !elements.navMenu.contains(event.target) && 
            !elements.hamburger.contains(event.target)) {
            closeMobileMenu();
        }
    }

    function handleKeyboardNavigation(event) {
        // ESC key closes mobile menu
        if (event.key === 'Escape' && state.isMenuOpen) {
            closeMobileMenu();
        }
        
        // Arrow keys for section navigation
        if (event.ctrlKey || event.metaKey) {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                scrollToNextSection();
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                scrollToPrevSection();
            }
        }
    }

    function handleVisibilityChange() {
        if (document.hidden) {
            console.log('👋 User left the vibe...');
        } else {
            console.log('🎉 Welcome back to the vibe!');
        }
    }

    function handlePageLoad() {
        console.log('🚀 Vibe Cording page fully loaded!');
        
        // Animate statistics numbers if present
        animateStats();
        
        // Add loaded class for CSS animations
        elements.body.classList.add('page-loaded');
        
        // Performance monitoring
        if ('performance' in window) {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                console.log(`⚡ Page load time: ${loadTime}ms`);
                
                // Show performance badge if load time is good
                if (loadTime < 1000) {
                    showPerformanceBadge();
                }
            }, 100);
        }
    }

    // Statistics Animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const finalValue = target.textContent;
                        const numericValue = parseInt(finalValue.replace(/\D/g, ''), 10);
                        
                        if (!isNaN(numericValue)) {
                            animateNumber(target, numericValue, finalValue);
                        }
                        
                        observer.unobserve(target);
                    }
                });
            }, { threshold: 0.5 });

            stats.forEach(stat => observer.observe(stat));
        }
    }

    function animateNumber(element, targetNumber, originalText) {
        const duration = 2000;
        const steps = 60;
        const increment = targetNumber / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            current += increment;
            step++;
            
            if (step >= steps) {
                clearInterval(timer);
                element.textContent = originalText;
                
                // Add celebration effect
                element.style.animation = 'vibeGlow 1s ease';
                setTimeout(() => {
                    element.style.animation = '';
                }, 1000);
            } else {
                const displayValue = Math.floor(current);
                if (originalText.includes('+')) {
                    element.textContent = displayValue + '+';
                } else if (originalText.includes('%')) {
                    element.textContent = displayValue + '%';
                } else {
                    element.textContent = displayValue.toString();
                }
            }
        }, duration / steps);
    }

    function showPerformanceBadge() {
        const badge = document.createElement('div');
        badge.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, ${VIBE_CONFIG.colors.secondary}, ${VIBE_CONFIG.colors.primary});
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 10000;
            animation: vibeSlideIn 0.5s ease;
            cursor: pointer;
        `;
        badge.textContent = '⚡ Fast Loading!';
        
        document.body.appendChild(badge);
        
        badge.addEventListener('click', () => {
            badge.remove();
        });
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            if (badge.parentNode) {
                badge.style.animation = 'vibeSlideOut 0.5s ease';
                setTimeout(() => badge.remove(), 500);
            }
        }, 3000);
    }

    // Utility Functions
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

    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Error Handling
    window.addEventListener('error', function(event) {
        console.error('💥 Vibe Cording Error:', event.error);
    });

    window.addEventListener('unhandledrejection', function(event) {
        console.error('💥 Unhandled Promise Rejection:', event.reason);
    });

    // Add Vibe Styles
    function addVibeStyles() {
        if (document.querySelector('#vibe-main-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'vibe-main-styles';
        style.textContent = `
            @keyframes vibePulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
            
            @keyframes vibeShake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
            
            @keyframes vibeSuccessSlide {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
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
                    text-shadow: 0 0 10px rgba(127, 90, 240, 0.5);
                }
                50% {
                    text-shadow: 0 0 20px rgba(127, 90, 240, 0.8), 0 0 30px rgba(44, 182, 125, 0.5);
                }
            }
            
            @keyframes vibeSlideIn {
                from {
                    opacity: 0;
                    transform: translateX(100px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes vibeSlideOut {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            addVibeStyles();
            initVibeExperience();
        });
    } else {
        addVibeStyles();
        initVibeExperience();
    }

    // Expose Vibe Cording functionality
    window.VibeCording = {
        toggleMobileMenu,
        closeMobileMenu,
        validateField,
        smoothScrollTo,
        state,
        config: VIBE_CONFIG
    };

})(); 