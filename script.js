 window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('splash').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('splash').style.display = 'none';
                }, 500);
            }, 1500);
        });

   
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navLinkItems = document.querySelectorAll('.nav-link');

        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinkItems.forEach(item => {
            item.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                
                // Update active link
                navLinkItems.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

      
        const scrollElements = document.querySelectorAll('.fade-in, .slide-up, .slide-down, .slide-left, .slide-right');

        const elementInView = (el, dividend = 1) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
            );
        };

        const elementOutofView = (el) => {
            const elementTop = el.getBoundingClientRect().top;
            return (
                elementTop > (window.innerHeight || document.documentElement.clientHeight)
            );
        };

        const displayScrollElement = (element) => {
            element.classList.add('fade-in');
        };

        const hideScrollElement = (element) => {
            element.classList.remove('fade-in');
        };

        const handleScrollAnimation = () => {
            scrollElements.forEach((el) => {
                if (elementInView(el, 1.25)) {
                    displayScrollElement(el);
                } else if (elementOutofView(el)) {
                    hideScrollElement(el)
                }
            })
        }

        window.addEventListener('scroll', () => {
            handleScrollAnimation();
        });

        
        document.addEventListener('DOMContentLoaded', function() {
            handleScrollAnimation();
        });

        // Header Scroll Effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll To Top Button
        const scrollTopBtn = document.querySelector('.scroll-top');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        
            
           

        // Portfolio Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                filterBtns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Set active nav link based on scroll position
        const sections = document.querySelectorAll('section');

        window.addEventListener('scroll', function() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinkItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
    const cube = document.querySelector('.cube');
    const rotateLeftBtn = document.getElementById('rotate-left');
    const rotateRightBtn = document.getElementById('rotate-right');
    const rotateUpBtn = document.getElementById('rotate-up');
    const rotateDownBtn = document.getElementById('rotate-down');
    const resetBtn = document.getElementById('reset');
    
    let currentRotation = { x: 0, y: 0 };
    
    function rotateCube() {
        cube.style.transform = `rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;
    }
    
    rotateLeftBtn.addEventListener('click', function() {
        currentRotation.y -= 90;
        rotateCube();
    });
    
    rotateRightBtn.addEventListener('click', function() {
        currentRotation.y += 90;
        rotateCube();
    });
    
    rotateUpBtn.addEventListener('click', function() {
        currentRotation.x -= 90;
        rotateCube();
    });
    
    rotateDownBtn.addEventListener('click', function() {
        currentRotation.x += 90;
        rotateCube();
    });
    
    resetBtn.addEventListener('click', function() {
        currentRotation = { x: 0, y: 0 };
        rotateCube();
    });
    
    // Optional: Add mouse drag rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    cube.addEventListener('mousedown', function(e) {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        
        currentRotation.y += deltaX * 0.5;
        currentRotation.x -= deltaY * 0.5;
        
        rotateCube();
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
    });
});