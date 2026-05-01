// Project Data
const PROJECTS = [
    {
        title: "University Portal System",
        type: "Full-Stack Project",
        status: "Institution Review",
        description: "Enterprise-grade educational management platform designed to digitize academic workflows and student services.",
        longDescription: "A comprehensive solution aimed at improving digital access to academic services. The platform includes modular features for user management, real-time information access, and complex administrative workflows. Built with architectural scalability in mind.",
        tech: ["JavaScript", "Node.js", "TailwindCSS", "Express"],
        icon: "database",
        role: "Core Developer"
    },
    {
        title: "Smart Coffee Machine",
        type: "IoT/Engineering",
        status: "Prototype",
        description: "Conceptual exploration of automated consumer hardware, integrating embedded logic with user convenience.",
        longDescription: "A hardware-software integration project focusing on the real-world application of engineering concepts. Developed the conceptual design of an automated system that prioritizes user convenience through embedded sensors and logic protocols.",
        tech: ["Embedded Logic", "Automation", "IoT Design"],
        icon: "cpu",
        role: "Concept Architect"
    },
    {
        title: "Smartwatch Ecosystem",
        type: "Simulation",
        status: "Phase 1",
        description: "Software-level simulation of wearable device logic, focusing on resource management and notification handling.",
        longDescription: "Simulation of core smartwatch features prior to hardware implementation. This project involved writing high-performance code to simulate battery management, notification buffering, and real-time sensor data simulation.",
        tech: ["C-Logic", "System Architecture", "Simulation"],
        icon: "monitor",
        role: "Systems Engineer"
    },
    {
        title: "Young Engineers Org",
        type: "Social Impact",
        status: "Active",
        description: "Founded a student-led initiative to empower over 100+ learners through hands-on technical workshops.",
        longDescription: "A leadership initiative focused on promoting practical engineering and technology skills. We educate and empower young learners through workshops and digital solution development for real-world problems.",
        tech: ["Leadership", "Community", "Strategy"],
        icon: "sparkles",
        role: "Founder"
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progress-bar');
const projectsContainer = document.getElementById('projects-container');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');
const scrollTopBtn = document.getElementById('scroll-top');

// Navbar & Progress Bar
window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll progress progress bar
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Render Projects
function renderProjects() {
    projectsContainer.innerHTML = PROJECTS.map((project, index) => `
        <div class="project-card glass-card" onclick="openModal(${index})">
            <div class="project-inner">
                <div class="project-sidebar">
                    <div class="project-meta">
                        <div class="project-icon">
                            <i data-lucide="${project.icon}"></i>
                        </div>
                        <div>
                            <p class="project-type">${project.type}</p>
                            <p class="project-status">${project.status}</p>
                        </div>
                    </div>
                    <h3>${project.title}</h3>
                    <div class="project-tags">
                        ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="project-main">
                    <p class="project-desc">${project.description}</p>
                    <div class="project-footer">
                        <div class="role-info">
                            <div class="avatar-circle">R</div>
                            <span class="role-text">${project.role}</span>
                        </div>
                        <div class="btn-details">
                            Project Details <i data-lucide="arrow-up-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Refresh icons after injection
    lucide.createIcons();
}

// Modal Handling
window.openModal = function(index) {
    const project = PROJECTS[index];
    modalBody.innerHTML = `
        <div class="modal-header" style="display: flex; align-items: center; gap: 24px; margin-bottom: 40px; padding-top: 20px;">
            <div class="project-icon" style="flex-shrink: 0; transform: scale(1.5);">
                <i data-lucide="${project.icon}"></i>
            </div>
            <div>
                <p class="project-type" style="margin-bottom: 8px;">${project.type}</p>
                <h3 style="font-size: 3rem;">${project.title}</h3>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 48px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 48px;">
            <div>
                <h6 style="color: white; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 24px;">Project Overview</h6>
                <p style="font-size: 1.25rem; font-weight: 300; color: #9ca3af; line-height: 1.8;">${project.longDescription}</p>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 48px; padding: 32px 0; border-top: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <div>
                        <h6 style="color: #444; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">My Role</h6>
                        <p style="color: white; font-style: italic;">${project.role}</p>
                    </div>
                    <div>
                        <h6 style="color: #444; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 8px;">Status</h6>
                        <p style="color: white;">${project.status}</p>
                    </div>
                </div>
            </div>
            
            <div>
                <h6 style="color: white; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 24px;">Stack</h6>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${project.tech.map(t => `<span class="tag" style="background: rgba(255,255,255,0.03); color: #888; border-color: rgba(255,255,255,0.05); padding: 8px 16px;">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
};

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Scroll Top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Reveal
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, revealOptions);

// Mobile Menu
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileBtn = document.getElementById('close-menu');

mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMobileBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Extra CSS for Mobile Menu and Reveal
const extraCSS = `
    #progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 2px;
        background: var(--accent);
        z-index: 1001;
        transition: width 0.1s;
    }
    
    #mobile-menu {
        position: fixed;
        inset: 0;
        background: #000;
        z-index: 1500;
        display: none;
        padding: 48px;
        flex-direction: column;
        justify-content: center;
    }
    
    #mobile-menu.active {
        display: flex;
    }
    
    .mobile-links {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    
    .mobile-links a {
        font-size: 3rem;
        font-family: var(--font-display);
        color: white;
        text-decoration: none;
        font-weight: 700;
    }
    
    #close-menu {
        position: absolute;
        top: 32px;
        right: 32px;
        background: none;
        border: none;
        color: white;
    }
    
    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = extraCSS;
document.head.appendChild(styleSheet);

// Form handling (Mock)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    btn.innerText = 'Transmission Sent';
    btn.style.background = '#059669';
    contactForm.reset();
});

// Initialize
window.addEventListener('load', () => {
    renderProjects();
    
    document.querySelectorAll('section, .glass-card').forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
});
