// Projects Page JavaScript

// Project data - you can expand this with your actual projects
const projects = {
    project1: {
        title: "Link",
        date: "Autumn 2025 - ",
        links: {
            github: "",
            demo: "",
            figma: ""
        },
        tech: ["Figma", "UI/UX Processes", "Case studies", "Human centered design"],
        team: ["Manu Williams"],
        logo: "assets/images/Link.png",
        heroImage: "assets/images/Appheader.jpg",
        process: "assets/images/Wireframes.jpg",
        overview: "Link is a comprehensive public transport app UI/UX design project that reimagines how commuters navigate urban transportation systems. This Figma-based design solution addresses the usability issues of existing transport apps through user-centered design principles, creating an intuitive interface that ensures users can plan their journeys with confidence.",
        problem: "After experiencing the frustrations of existing public transport apps, I realized there was a significant gap in the market for a truly user-centered transportation solution. Carrying on from a university project, I identified issues with public transport systems in New Zealand. Time spent in Denmark inspired me to implement similar forms of public transport navigation, catered towards real users and accounting for all kinds of groups - elderly, regular commuters, and accessible users among others. Traditional apps often prioritize features over usability, leading to confusion and missed connections for commuters who need reliable journey planning.",
        features: [
            {
                title: "Real-time Journey Planning",
                description: "Designed an intelligent route optimization interface that clearly displays real-time delays, traffic conditions, and user preferences to suggest the best possible routes with intuitive visual feedback."
            },
            {
                title: "Interactive Map Interface",
                description: "Created an intuitive map view design with clear visual hierarchy, displaying transport routes, stops, and real-time vehicle locations using color-coded lines for different transport modes."
            },
            {
                title: "Accessibility Features",
                description: "Designed comprehensive accessibility features including voice navigation interfaces, high contrast mode designs, and step-free route options with clear visual indicators for users with different needs."
            }
        ],
        building: [
            {
                title: "User Research & Design",
                description: "Conducted user research and created user personas to understand pain points of common user groups. Analysed user journeys and used these personas to drive the design direction.<br><br>The main User Personas:"
            },
            {
                title: "Figma Prototyping & Iteration",
                description: "Built comprehensive wireframes and high-fidelity prototypes in Figma, focusing on intuitive navigation and clear information hierarchy. Created interactive prototypes for user testing and iterated based on feedback to ensure optimal usability."
            }
        ],
        designConsiderations: [
            {
                title: "Information Architecture",
                description: "After wireframing, the focus was creating a clear information hierarchy that prioritises the most important actions. The main navigation was designed to be accessible, with secondary features organised with easy access."
            },
            {
                title: "Interaction Design",
                description: "Micro-interactions and feedback mechanisms were designed to provide users with clear confirmation of their actions. This includes visual transitions, app feedback, and loading states that maintain user confidence throughout the journey."
            }
        ],
        typography: {
            heading: "Inter",
            body: "Inter",
            description: "Inter was selected for its excellent readability across different screen sizes and its modern, clean aesthetic. The type scale ensures consistent hierarchy while maintaining accessibility standards for users with visual impairments."
        },
        components: "assets/images/Main components.jpg",
        liveNotifications: "assets/images/Live Notifications.jpg",
        colorPalette: "assets/images/Colour Pallette.jpg",
        demoImage: "assets/images/Designs PT1.jpg",
        demoImage2: "assets/images/Designs PT2.jpg",
        results: "This project taught important principles on the complete UX/UI design process from research to final deliverables. The User focused approach resulted in a comprehensive design that addresses real user pain points and allows for room to expand. This project is also available on Figma and is fully interactable"
    },
    project2: {
        title: "",
        date: "",
        links: {
            github: "",
            demo: ""
        },
        tech: ["In Development"],
        team: ["Manu Williams"],
        heroImage: "assets/images/prjctimage.png",
        building: [
            {
                title: "In Progress",
                description: "This project is currently in development."
            }
        ],
        results: "More details coming soon."
    },
    project3: {
        title: "Coming Soon",
        date: "2025",
        links: {
            github: "",
            demo: ""
        },
        tech: ["In Development"],
        team: ["Manu Williams"],
        heroImage: "assets/images/White.png",
        overview: "This project is currently in development.",
        features: [
            {
                title: "Coming Soon",
                description: "Details will be available once the project is complete."
            }
        ],
        building: [
            {
                title: "In Progress",
                description: "This project is currently in development."
            }
        ],
        results: "More details coming soon."
    }
};

// Function to open individual project page
function openProject(projectId) {
    const project = projects[projectId];
    if (!project) return;

    // Create the project detail page HTML
    const projectHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${project.title} - Manu Williams</title>
            <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
            <link rel="manifest" href="site.webmanifest">
            <link rel="stylesheet" href="src/styles.css">
            <link rel="stylesheet" href="src/projects.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
        </head>
        <body class="project-detail-page">
            <div class="custom-cursor site-wide">[CLICK]</div>
            
            <div class="project-detail">
                <a href="projects.html" class="back-button">← Go back</a>
                
                <div class="project-header">
                    <div class="title-logo-container">
                        ${project.logo ? `
                        <div class="project-logo">
                            <img src="${project.logo}" alt="${project.title} Logo" class="logo-image">
                        </div>
                        ` : ''}
                        <h1 class="project-title">${project.title}</h1>
                    </div>
                    <div class="project-meta">
                        <span>${project.date}</span>
                        <span>${project.tech.join(', ')}</span>
                    </div>
                    <div class="project-links">
                        <a href="${project.links.figma}" target="_blank">Figma</a>
                        <a href="${project.links.demo}" target="_blank">Demo</a>
                    </div>
                </div>

                ${project.impact ? `<div class="project-impact">${project.impact}</div>` : ''}

                ${project.overview ? `
                <div class="project-overview">
                    <h2>Overview</h2>
                    <p>${project.overview}</p>
                </div>
                ` : ''}

                ${project.heroImage ? `
                <!-- Custom Hero Image -->
                <div class="project-hero-image">
                    <img src="${project.heroImage}" alt="${project.title}" class="hero-image">
                </div>
                ` : `
                <!-- Hero Image Placeholder -->
                <div class="project-hero-image">
                    <div class="image-placeholder">Hero Image Placeholder</div>
                </div>
                `}

                ${project.problem ? `
                <div class="project-problem">
                    <h2>The Problem</h2>
                    <p>${project.problem}</p>
                </div>
                ` : ''}



                ${project.features && project.features.length > 0 ? `
                <div class="features-grid">
                    ${project.features.map(feature => `
                        <div class="feature-card">
                            <h3>${feature.title}</h3>
                            <p>${feature.description}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}

                ${project.building && project.building.length > 0 ? `
                <div class="project-section">
                    <h3>Building ${project.title}</h3>
                    ${project.building.map((section, index) => `
                        <div class="building-section">
                            <h4>${section.title}</h4>
                            <p>${section.description}</p>
                            ${index === 0 ? `
                            <!-- User Personas Stack -->
                            <div class="personas-stack">
                                <div class="persona-item" onclick="togglePersona(this)">
                                    <div class="persona-title">
                                        <h4>Daily Commuters</h4>
                                        <span class="toggle-icon">+</span>
                                    </div>
                                    <div class="persona-details">
                                        <p>Our primary user base consists of regular commuters who rely on public transportation for daily travel. These users prioritise reliability, real-time updates, and efficient route planning. Understanding their commuting patterns and pain points was essential for creating an intuitive navigation experience that improves journey confidence.</p>
                                    </div>
                                </div>
                                <div class="persona-item" onclick="togglePersona(this)">
                                    <div class="persona-title">
                                        <h4>Elderly and Accessibility Users</h4>
                                        <span class="toggle-icon">+</span>
                                    </div>
                                    <div class="persona-details">
                                        <p>Accessibility was a core design principle, addressing the needs of elderly users and those with disabilities. Research showed that older adults navigate interfaces more effectively with larger touch targets, high contrast text, and clear navigation patterns. The design incorporates labeled icons, step-free route options, and voice navigation features to ensure inclusivity for all users, including parents traveling with young children.</p>
                                    </div>
                                </div>
                                <div class="persona-item" onclick="togglePersona(this)">
                                    <div class="persona-title">
                                        <h4>Students</h4>
                                        <span class="toggle-icon">+</span>
                                    </div>
                                    <div class="persona-details">
                                        <p>Students represent a key demographic with unique needs: budget-conscious travel, flexible schedules, and early technology adoption patterns. This persona informed features like cost optimisation, flexible departure times, and modern interface design. Targeting students ensures strong market adoption and establishes the app as a go-to solution for younger demographics.</p>
                                    </div>
                                </div>
                                <div class="persona-item" onclick="togglePersona(this)">
                                    <div class="persona-title">
                                        <h4>Occasional Riders & Tourists</h4>
                                        <span class="toggle-icon">+</span>
                                    </div>
                                    <div class="persona-details">
                                        <p>International visitors and occasional users require intuitive navigation regardless of language barriers or local knowledge. This persona drove the inclusion of multi-language support, visual navigation cues, and simplified interface flows. Given New Zealand's significant tourism industry, these features are crucial for providing accessible transportation solutions to international visitors.</p>
                                    </div>
                                </div>
                                <div class="persona-item" onclick="togglePersona(this)">
                                    <div class="persona-title">
                                        <h4>Transit System Operators</h4>
                                        <span class="toggle-icon">+</span>
                                    </div>
                                    <div class="persona-details">
                                        <p>While not direct app users, transit operators and drivers are key stakeholders whose needs influence service quality. Understanding their requirements for flexibility, real-time communication, and operational insights had to be considered. This stakeholder consideration ensures the app supports both user needs and operational efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            ` : index === 1 && project.process ? `
                            <!-- Process Image from project data -->
                            <div class="process-image">
                                <img src="${project.process}" alt="Process" class="process-image">
                            </div>
                            ` : section.image ? `
                            <!-- Custom Process Image -->
                            <div class="process-image">
                                <img src="${section.image}" alt="${section.title}" class="process-image">
                            </div>
                            ` : `
                            <!-- Process Image Placeholder ${index + 1} -->
                            <div class="process-image">
                                <div class="image-placeholder">Process Image ${index + 1} Placeholder</div>
                            </div>
                            `}
                        </div>
                    `).join('')}
                </div>
                ` : ''}

                ${project.designConsiderations && project.designConsiderations.length > 0 ? `
                <div class="project-section">
                    <h3>Design Considerations</h3>
                    ${project.designConsiderations.map(consideration => `
                        <div class="design-consideration">
                            <h4>${consideration.title}</h4>
                            <p>${consideration.description}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}

                ${project.colorPalette ? `
                <!-- Color Palette Image -->
                <div class="project-color-palette">
                    <h3>Color Palette</h3>
                    <div class="color-palette-image">
                        <img src="${project.colorPalette}" alt="Color Palette" class="color-palette-img">
                    </div>
                </div>
                ` : ''}

                ${project.components ? `
                <!-- Components Image -->
                <div class="project-components">
                    <h3>Main Components</h3>
                    <div class="components-image">
                        <img src="${project.components}" alt="Components" class="components-img">
                    </div>
                </div>
                ` : ''}


                ${project.demoImage ? `
                <!-- Custom Demo Images -->
                <div class="project-demo">
                    <h3>Final Designs</h3>
                    <div class="demo-image">
                        <img src="${project.demoImage}" alt="Demo" class="demo-image">
                    </div>
                    ${project.demoImage2 ? `
                    <div class="demo-image">
                        <img src="${project.demoImage2}" alt="Demo Part 2" class="demo-image">
                    </div>
                    ` : ''}
                </div>
                ` : `
                <!-- Demo/Showcase Image Placeholder -->
                <div class="project-demo">
                    <h3>Designs</h3>
                    <div class="demo-image">
                        <div class="image-placeholder">Demo Image Placeholder</div>
                    </div>
                </div>
                `}


                ${project.liveNotifications ? `
                <!-- Live Notifications Image -->
                <div class="project-notifications">
                    <div class="notifications-image">
                        <img src="${project.liveNotifications}" alt="Live Notifications" class="notifications-img">
                    </div>
                </div>
                ` : ''}

                ${project.results ? `
                <div class="project-section">
                    <h3>Final</h3>
                    <p>${project.results}</p>
                </div>
                ` : ''}
                
                <div class="back-to-projects">
                    <a href="projects.html" class="back-to-projects-btn">← Back to Projects</a>
                </div>
            </div>

            <div class="clock"></div>
            <div class="audio-player">
                <div class="audio-controls">
                    <div class="audio-control play-btn" id="playButton">
                        <div class="icon-container">
                            <div class="play-icon"></div>
                            <div class="pause-icon">
                                <div class="pause-line"></div>
                                <div class="pause-line"></div>
                            </div>
                        </div>
                    </div>
                    <div class="audio-control next-btn" id="nextButton">>></div>
                    <div class="track-info">
                        <span class="now-playing">Now Playing:</span>
                        <span id="track-name"></span>
                    </div>
                </div>
                <audio id="audio-element" src="path-to-your-audio-file.mp3"></audio>
            </div>

            <script src="src/script.js"></script>
            <footer class="copyright">
                © Manu Williams 2025
            </footer>
        </body>
        </html>
    `;

    // Replace the current page with the project detail
    document.open();
    document.write(projectHTML);
    document.close();
}

// Function to toggle persona expansion
function togglePersona(element) {
    const details = element.querySelector('.persona-details');
    const icon = element.querySelector('.toggle-icon');
    
    if (element.classList.contains('expanded')) {
        // Collapse
        element.classList.remove('expanded');
        icon.textContent = '+';
    } else {
        // Expand
        element.classList.add('expanded');
        icon.textContent = '×';
    }
} 