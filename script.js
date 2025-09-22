// Upload functionality (non-functional as requested)
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');

    // Click to upload
    uploadArea.addEventListener('click', function() {
        fileInput.click();
    });

    // Drag and drop functionality
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            // Simulate file processing (non-functional)
            showUploadMessage('File uploaded successfully! (Demo mode)');
        }
    });

    // File input change
    fileInput.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            // Simulate file processing (non-functional)
            showUploadMessage('File uploaded successfully! (Demo mode)');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Button click handlers (non-functional as requested)
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default form submission
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // Show demo message based on button content
            const buttonText = this.textContent.trim();
            if (buttonText.includes('Track Package')) {
                window.location.href = 'https://ayurvedic-herb-traceability-1htl.vercel.app/login';
            } else if (buttonText.includes('Scan QR Code')) {
                showDemoMessage('QR Code scanning will be implemented soon!');
            } else if (buttonText.includes('Scan Barcode')) {
                showDemoMessage('Barcode scanning will be implemented soon!');
            }
        });
    });

    // Tracking field functionality
    const trackingField = document.querySelector('.tracking-field');
    if (trackingField) {
        trackingField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const trackButton = document.querySelector('.tracking-container .btn-primary');
                if (trackButton) {
                    trackButton.click();
                }
            }
        });
    }
});

// Helper function to show upload messages
function showUploadMessage(message) {
    const uploadArea = document.getElementById('uploadArea');
    const originalContent = uploadArea.innerHTML;
    
    uploadArea.innerHTML = `
        <div class="upload-content">
            <i class="fas fa-check-circle" style="color: #4ade80;"></i>
            <p>${message}</p>
            <span class="upload-hint">Click to upload another image</span>
        </div>
    `;
    
    setTimeout(() => {
        uploadArea.innerHTML = originalContent;
    }, 3000);
}

// Helper function to show demo messages
function showDemoMessage(message) {
    // Create a temporary notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-weight: 500;
        max-width: 300px;
        animation: slideIn 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(notification);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Remove conflicting hover effects - let CSS handle the hover animations
    // The CSS already has proper hover effects defined
    
    // Add subtle parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection && scrolled < window.innerHeight) {
            heroSection.style.transform = `translateY(${scrolled * 0.05}px)`;
        }
    });

    // Dark/Light mode toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    
    // Update toggle icon based on current theme
    updateThemeIcon(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-moon';
                }
            }
        }
    }
});
