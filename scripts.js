"use strict";

const TECH_STACK = [
    { name: "Python", icon: "https://skillicons.dev/icons?i=py", tags: ["Lenguaje", "Backend"] },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js", tags: ["Lenguaje", "Frontend", "Backend"] },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts", tags: ["Lenguaje", "Frontend", "Backend"] },
    { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql", tags: ["Lenguaje", "Base de Datos"] },
    { name: "C#", icon: "https://skillicons.dev/icons?i=cs", tags: ["Lenguaje", "Backend"] },
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html", tags: ["Lenguaje", "Frontend"] },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", tags: ["Base de Datos"] },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres", tags: ["Base de Datos"] },
    { name: "React", icon: "https://skillicons.dev/icons?i=react", tags: ["Frontend"] },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs", tags: ["Backend"] },
    { name: "Express.js", icon: "https://skillicons.dev/icons?i=express", tags: ["Backend"] },
    { name: "ASP.NET Core", icon: "https://skillicons.dev/icons?i=dotnet", tags: ["Backend"] },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git", tags: ["Herramientas"] },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github", tags: ["Herramientas"] },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker", tags: ["Herramientas"] },
    { name: "Azure", icon: "https://skillicons.dev/icons?i=azure", tags: ["Cloud"] },
    { name: "GitHub Actions", icon: "https://skillicons.dev/icons?i=githubactions", tags: ["CI/CD"] },
    { name: "Terraform", icon: "https://skillicons.dev/icons?i=terraform", tags: ["IaC", "Cloud"] },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux", tags: ["OS", "Herramientas"] }
];

const PORTFOLIO_DATA = {
    "sobre-mi": {
        title: "Sobre mi",
        icon: '<i data-lucide="user"></i>',
        content: `Soy Sebastián Arteaga, <strong>Desarrollador de software junior</strong>, con experiencia en arquitectura y diseño de software en la nube e inteligencia artificial. He construido sistemas web (React, TypeScript), sistemas backend APIs RESTful con Express.js y ASP.NET Core, y procesos ETL para análisis de datos. Manejo avanzado de bases de datos relacionales en SQL Server y PostgreSQL.
        <br><br>
        <strong>Mi Stack Tecnológico:</strong>
        <div class="tech-filters" id="tech-filters">
            <button class="tech-filter-btn active" data-filter="all">Todos</button>
            <button class="tech-filter-btn tech-badge-lenguaje" data-filter="Lenguaje">Lenguajes</button>
            <button class="tech-filter-btn tech-badge-backend" data-filter="Backend">Backend</button>
            <button class="tech-filter-btn tech-badge-frontend" data-filter="Frontend">Frontend</button>
            <button class="tech-filter-btn tech-badge-base-de-datos" data-filter="Base de Datos">Base de Datos</button>
            <button class="tech-filter-btn tech-badge-herramientas" data-filter="Herramientas">Herramientas</button>
            <button class="tech-filter-btn tech-badge-cloud" data-filter="Cloud">Cloud</button>
            <button class="tech-filter-btn tech-badge-ci-cd" data-filter="CI/CD">CI/CD</button>
            <button class="tech-filter-btn tech-badge-iac" data-filter="IaC">IaC</button>
            <button class="tech-filter-btn tech-badge-os" data-filter="OS">OS</button>
        </div>
        <div class="tech-grid" id="tech-grid">
            <!-- Tech items will be injected here -->
        </div>
        `
    },
    "proyectos": {
        title: "Proyectos",
        icon: '<i data-lucide="briefcase"></i>',
        content: `
        <div class="project-header">
            <h3 style="margin-top: 0; margin-bottom: 5px;">Mis proyectos son:</h3>
            <div class="project-tags-nav">
                <button class="tech-filter-btn" data-target="proj-bodegabox">BodegaBox</button>
                <button class="tech-filter-btn" data-target="proj-pipeline">...</button>
            </div>
        </div>
        
        <div id="proj-bodegabox" class="project-section hidden" style="padding-top: 20px;">
            <h3 style="margin-bottom: 5px; border-bottom: 2px solid #000;">BodegaBox - Sistema de Gestión de Inventario</h3>
            <div style="font-size: 13px; color: #555; margin-bottom: 15px;">SaaS corporativo con arquitectura multicapa y seguridad de nivel empresarial</div>
            
            <p>BodegaBox es una plataforma para bodegas diseñada para la logística de almacenes de POS (Puntos de Venta moviles como por ejemplo de mercado libre o GETNET), el control de inventarios en tiempo real, gestión operativa de instalaciónes de equipos. El sistema fue diseñado desde cero para solucionar problemas de concurrencia y trazabilidad en múltiples bodegas físicas.</p>
            
            <h4 style="margin-bottom: 5px; border-bottom: 1px solid #000; display: inline-block;">Arquitectura y Stack Tecnológico</h4>
            <ul style="margin-top: 10px;">
                <li><strong>Backend (.NET 10 & C#):</strong> Construido sobre una API RESTful con ASP.NET Core. Implementa conceptos fundamentales de <strong>Clean Architecture</strong>, con <strong>MVC</strong> encontrando un equilibrio entre estos dos enfoques de diseño de código de software separando claramente las responsabilidades en controladores, servicios y constructores (Builders). Utiliza <strong>DTOs (Data Transfer Objects)</strong> como contratos estrictos para proteger las entidades de dominio y optimizar el tráfico de red.</li>
                <li><strong>Frontend (React & TypeScript):</strong> Cliente SPA altamente interactivo construido con Vite y Tailwind CSS, aplicando el patrón <strong>MVC (Model-View-Controller)</strong> en la lógica del cliente para separar el estado, la UI y el acceso a datos.</li>
                <li><strong>Persistencia de Datos:</strong> Capa de abstracción mediante Entity Framework Core sobre <strong>SQL Server</strong> (Azure SQL en producción / contenedores Docker en desarrollo). Schema de base de datos canónico mantenido mediante scripts SQL para control absoluto del rendimiento.</li>
                <li><strong>Seguridad y Autenticación:</strong> Integración robusta de <strong>OAuth 2.0 y OpenID Connect</strong> delegado a <strong>Microsoft Entra ID</strong> (Azure AD) mediante una <strong>capa de abstracción </strong> de código para poder cambiar de proveedor de identidad según las necesidades del negocio asegurando flexibilidad y escalabilidad.
                Implementa control de acceso basado en roles (RBAC) estricto, protegiendo operaciones críticas según perfiles (Admin de Sistema, Supervisor y Bodeguero).</li>
            </ul>

            <h4 style="margin-bottom: 5px; border-bottom: 1px solid #000; display: inline-block;">Arquitectura Cloud Azure</h4>
            <div style="margin-top: 10px; margin-bottom: 20px;">
                <p>El flujo operativo y de seguridad en la nube se estructura de la siguiente manera:</p>
                <ol style="margin-top: 10px; margin-bottom: 15px; padding-left: 20px;">
                    <li><strong>Autenticación Delegada:</strong> El usuario accede al cliente web, el cual delega la emisión y validación del token al Proveedor de Identidad (Microsoft Entra ID).</li>
                    <li><strong>Peticiones Seguras:</strong> El cliente web adjunta el token de acceso en cada solicitud enviada al Backend.</li>
                    <li><strong>Autorización Backend:</strong> La API RESTful verifica la validez del token y evalúa los permisos internos del usuario según sus roles.</li>
                    <li><strong>Persistencia Segura:</strong> La API interactúa con la base de datos (MS SQL Server) utilizando una Identidad Administrada (MI), y se integra con servicios de comunicación (ACS), todo contenido dentro de un grupo de recursos (rg-bodega).</li>
                </ol>
            </div>

            <h4 style="margin-bottom: 5px; border-bottom: 1px solid #000; display: inline-block;">Galería del Sistema</h4>
            <div class="project-gallery">
                <div class="project-img-card">
                    <img src="assets/bodegabox/arquitectura.png" alt="Diagrama de Arquitectura de Seguridad y Flujo" class="zoomable-img">
                    <div class="project-img-caption">Arquitectura de Seguridad y Flujo</div>
                </div>
                <div class="project-img-card">
                    <img src="assets/bodegabox/inicio_sesion.png" alt="Login con Entra ID" class="zoomable-img">
                    <div class="project-img-caption">Autenticación Microsoft Entra ID</div>
                </div>
                <div class="project-img-card">
                    <img src="assets/bodegabox/dashboard.png" alt="Dashboard en tiempo real" class="zoomable-img">
                    <div class="project-img-caption">Dashboard Analítico en Tiempo Real</div>
                </div>
                <div class="project-img-card">
                    <img src="assets/bodegabox/insumos.png" alt="Módulo de Insumos" class="zoomable-img">
                    <div class="project-img-caption">Gestión de Insumos</div>
                </div>
                <div class="project-img-card">
                    <img src="assets/bodegabox/tickets.png" alt="Tickets Operativos" class="zoomable-img">
                    <div class="project-img-caption">Asignación de Tickets Operativos</div>
                </div>
                <div class="project-img-card">
                    <img src="assets/bodegabox/importar.png" alt="Proceso ETL" class="zoomable-img">
                    <div class="project-img-caption">Proceso ETL: Importación Masiva vía Plantillas Excel</div>
                </div>
            </div>
        </div>

        <div id="proj-pipeline" class="project-section hidden" style="padding-top: 20px;">
            <h3 style="margin-bottom: 10px; border-bottom: 2px solid #000;">...</h3>
            <p>... .</p>
        </div>
        `
    },
    "certificaciones": {
        title: "Certificaciones y Cursos",
        icon: '<i data-lucide="award"></i>',
        content: `
        <h3 style="margin-bottom: 15px; border-bottom: 2px solid #000;">Certificaciones y Cursos</h3>
        <div class="project-gallery">
            <div class="project-img-card">
                <img src="assets/scrum_udemy.jpg" alt="Scrum - Udemy" class="zoomable-img">
                <div class="project-img-caption">
                    Scrum - Udemy<br>
                    <a href="https://www.udemy.com/certificate/UC-29062571-e0cd-4a33-b410-29d99e3f5985/" target="_blank" class="contact-link-text">Ver Certificado</a>
                </div>
            </div>
            <div class="project-img-card">
                <img src="assets/knowhub.jpg" alt="Knowhub" class="zoomable-img">
                <div class="project-img-caption">Knowhub</div>
            </div>
            <div class="project-img-card">
                <img src="assets/efset.jpg" alt="EFSET" class="zoomable-img">
                <div class="project-img-caption">
                    EFSET<br>
                    <a href="https://cert.efset.org/en/AhUYFw" target="_blank" class="contact-link-text">Ver Certificado</a>
                </div>
            </div>
            <div class="project-img-card">
                <img src="https://placehold.co/600x400/FFFBF0/000000?text=Oracle+Next+Education%0AAlura" alt="Oracle Next Education" class="zoomable-img">
                <div class="project-img-caption">
                    Oracle Next Education F2 T6 Back-end<br>
                    <a href="https://app.aluracursos.com/program/certificate/317be09e-a197-4d3f-a56f-f1c658611c86" target="_blank" class="contact-link-text">Ver Certificado</a>
                </div>
            </div>
        </div>
        `
    },
    "curriculum": {
        title: "Curriculum",
        icon: '<i data-lucide="file-text"></i>',
        content: `<iframe src="assets/CV_Sebastian_Arteaga_Profesional_Informatica.pdf#navpanes=0&view=FitH" width="100%" height="1150px" style="border: none; display: block;"></iframe>`
    }
};

const CONTACT_INFO = {
    title: "Contacto",
    icon: '<i data-lucide="contact"></i>',
    links: [
        { label: "Email", val: "sebastian.arteaga.0001@gmail.com", url: "mailto:sebastian.arteaga.0001@gmail.com", logo: "assets/correo.png" },
        { label: "LinkedIn", val: "linkedin.com/in/sarteaga-garcia", url: "https://linkedin.com/in/sarteaga-garcia", logo: "assets/linkedin.png" },
        { label: "GitHub", val: "github.com/sebas7468", url: "https://github.com/sebas7468", logo: "assets/github.png" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const entryScreen = document.getElementById("entry-screen");
    const categoryList = document.getElementById("category-list");
    const activeWindow = document.getElementById("active-window");
    const windowTitleBar = document.getElementById("window-title-bar");
    const windowContentArea = document.getElementById("window-content-area");
    const sidebarContact = document.getElementById("sidebar-contact");
    const enterBtn = document.getElementById("enter-btn");
    const mainContent = document.getElementById("main-content");
    const windowTitle = document.getElementById("window-title-bar");
    const windowBody = document.getElementById("window-content-area");

    // Logic for hiding entry screen
    enterBtn.addEventListener("click", () => {
        const audio = new Audio("assets/startup.mp3");
        audio.play().catch(e => console.log("Audio play failed:", e));

        entryScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

        sessionStorage.setItem("introSeen", "true");
    });

    // Verificar si ya ingresó en esta sesión
    if (sessionStorage.getItem("introSeen") === "true" || sessionStorage.getItem("introPlayed") === "true") {
        entryScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
    }

    // Renderizar categorías
    Object.keys(PORTFOLIO_DATA).forEach(key => {
        const item = PORTFOLIO_DATA[key];
        const anchor = document.createElement("a");
        anchor.href = "#";
        anchor.className = "category-item";
        anchor.dataset.key = key; // Guardar la llave
        anchor.innerHTML = `
            <span><span class="category-icon">${item.icon}</span> ${item.title}</span>
            <span>&rarr;</span>
        `;
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            updateWindow(key, e.currentTarget);
        });
        categoryList.appendChild(anchor);
    });

    // Renderizar Contacto permanente y botón CV
    const contactContainer = document.getElementById("sidebar-contact");
    if (contactContainer) {
        contactContainer.innerHTML = `
            <div class="sidebar-header-row">
                <div class="sidebar-section-title">${CONTACT_INFO.icon} ${CONTACT_INFO.title}</div>
                <a href="assets/CV_Sebastian_Arteaga_Profesional_Informatica.pdf" download class="btn-download-cv" title="Descargar CV">[ Descargar mi CV &#x2B07; ]</a>
            </div>
            <ul class="sidebar-contact-list">
                ${CONTACT_INFO.links.map(link => `
                    <li class="contact-item-row" onclick="window.open('${link.url}', '_blank')">
                        <img src="${link.logo}" class="contact-logo" alt="${link.label}">
                        <div class="contact-text">
                            <strong>${link.label}:</strong> <br> 
                            <span class="contact-link-text">${link.val}</span>
                        </div>
                    </li>
                `).join('')}
            </ul>
        `;
    }

    if (window.lucide) {
        lucide.createIcons();
    }

    function updateWindow(key, clickedElement = null) {
        const data = PORTFOLIO_DATA[key];
        if (!data) return;

        // Actualizar estado visual de los botones
        document.querySelectorAll(".category-item").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.key === key);
        });

        // Reiniciar animación con origen dinámico (Genie Effect)
        const activeWindow = document.getElementById("active-window");

        if (clickedElement) {
            const rect = clickedElement.getBoundingClientRect();
            const windowRect = activeWindow.getBoundingClientRect();
            // Calcular posición relativa para el transform-origin
            const originX = -20; // Un poco a la izquierda del inicio de la ventana
            const originY = (rect.top + rect.height / 2) - windowRect.top;
            activeWindow.style.transformOrigin = `${originX}px ${originY}px`;
        } else {
            activeWindow.style.transformOrigin = "left center";
        }

        activeWindow.classList.remove("window-animate");
        void activeWindow.offsetWidth; // Force reflow
        activeWindow.classList.add("window-animate");

        windowTitle.innerHTML = `<span style="font-weight: normal;">${data.icon}</span> ${data.title}`;
        windowBody.innerHTML = data.content;

        if (window.lucide) {
            lucide.createIcons();
        }

        if (key === "sobre-mi") {
            const grid = document.getElementById("tech-grid");
            const filterBtns = document.querySelectorAll(".tech-filter-btn");

            const renderGrid = (filter) => {
                grid.innerHTML = TECH_STACK.filter(tech => filter === "all" || tech.tags.includes(filter))
                    .map(tech => `
                        <div class="tech-card">
                            <img src="${tech.icon}" alt="${tech.name}" class="tech-icon">
                            <div class="tech-name">${tech.name}</div>
                            <div class="tech-tags">${tech.tags.map(t => `<span class="tech-badge tech-badge-${t.toLowerCase().replace(/[^a-z0-9]/g, '-')}">${t}</span>`).join('')}</div>
                        </div>
                    `).join('');
            };

            renderGrid("all");

            filterBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    filterBtns.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    renderGrid(btn.dataset.filter);
                });
            });
        }

        if (key === "proyectos") {
            // Lógica de pestañas de proyectos
            const projectBtns = document.querySelectorAll('#active-window .tech-filter-btn');
            const projectSections = document.querySelectorAll('.project-section');

            const showProject = (projectId, doScroll = false) => {
                projectSections.forEach(sec => sec.classList.add('hidden'));
                const activeSec = document.getElementById(projectId);
                if (activeSec) {
                    activeSec.classList.remove('hidden');
                    if (doScroll) {
                        activeSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }

                projectBtns.forEach(btn => btn.classList.remove('active'));
                const activeBtn = document.querySelector(`[data-target="${projectId}"]`);
                if (activeBtn) activeBtn.classList.add('active');

                sessionStorage.setItem("activeProject", projectId);
            };

            const savedProject = sessionStorage.getItem("activeProject") || "proj-bodegabox";
            if (document.getElementById(savedProject)) {
                showProject(savedProject, false);
            } else {
                showProject("proj-bodegabox", false);
            }

            projectBtns.forEach(btn => {
                btn.addEventListener('click', () => showProject(btn.dataset.target, true));
            });

        }

        // Lógica de galería modal con flechas
        const zoomableImages = Array.from(document.querySelectorAll('.zoomable-img'));
        zoomableImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                let currentIndex = index;

                // Identify the active title for context
                let projectTitle = "Vista de Imagen";
                if (key === "proyectos") {
                    const activeProjectId = sessionStorage.getItem("activeProject") || "proj-bodegabox";
                    const projectTitleEl = document.querySelector(`#${activeProjectId} h3`);
                    if (projectTitleEl) projectTitle = projectTitleEl.innerText;
                } else {
                    projectTitle = data.title;
                }

                const modal = document.createElement('div');
                modal.className = 'image-modal';
                modal.innerHTML = `
                    <div class="image-modal-content">
                        <div class="modal-header">
                            <span class="modal-title">${projectTitle}</span>
                            <span class="close-modal">[ X ] Cerrar</span>
                        </div>
                        <div class="modal-gallery-container">
                            <button class="modal-nav prev-btn">&#9664;</button>
                            <img src="${img.src}" alt="${img.alt}" id="modal-img" />
                            <button class="modal-nav next-btn">&#9654;</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);

                const modalImg = modal.querySelector('#modal-img');
                const galleryContainer = modal.querySelector('.modal-gallery-container');

                const updateImage = (newIndex) => {
                    currentIndex = newIndex;
                    if (currentIndex < 0) currentIndex = zoomableImages.length - 1;
                    if (currentIndex >= zoomableImages.length) currentIndex = 0;

                    const newImgSource = zoomableImages[currentIndex];
                    modalImg.src = newImgSource.src;
                    modalImg.alt = newImgSource.alt;

                    if (newImgSource.naturalWidth < 500) {
                        galleryContainer.style.backgroundColor = '#000';
                    } else {
                        galleryContainer.style.backgroundColor = '#FFFBF0';
                    }
                };

                // Asegurarse de aplicar el fondo correcto a la primera imagen al abrir el modal
                if (img.naturalWidth < 500) {
                    galleryContainer.style.backgroundColor = '#000';
                }

                const handleKeyDown = (e) => {
                    if (e.key === "ArrowLeft") updateImage(currentIndex - 1);
                    else if (e.key === "ArrowRight") updateImage(currentIndex + 1);
                    else if (e.key === "Escape") closeModal();
                };
                document.addEventListener("keydown", handleKeyDown);

                modal.querySelector('.prev-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    updateImage(currentIndex - 1);
                });

                modal.querySelector('.next-btn').addEventListener('click', (e) => {
                    e.stopPropagation();
                    updateImage(currentIndex + 1);
                });

                const closeModal = () => {
                    document.removeEventListener("keydown", handleKeyDown);
                    modal.remove();
                };
                modal.querySelector('.close-modal').addEventListener('click', closeModal);
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal();
                });
            });
        });

        // Guardar pestaña activa
        sessionStorage.setItem("activeTab", key);
    }

    // Carga inicial (Restaurar o por defecto)
    const savedTab = sessionStorage.getItem("activeTab") || "sobre-mi";
    updateWindow(savedTab);

    let globalIntroAudio = null;

    enterBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("introPlayed") !== "true") {
            globalIntroAudio = new Audio("assets/intro.mp3"); // fix ruta
            globalIntroAudio.volume = 0.22;
            globalIntroAudio.playbackRate = 1.1;
            globalIntroAudio.play().catch(err => console.error("Audio error:", err));
            sessionStorage.setItem("introPlayed", "true");

            globalIntroAudio.addEventListener("ended", () => {
                const floatingCatBtn = document.getElementById("floating-cat-btn");
                if (floatingCatBtn && !mainContent.classList.contains("hidden")) {
                    floatingCatBtn.classList.add("visible");
                }
            });

            // Pre-cargar PDF para que esté en cache cuando abran Curriculum
            const prefetch = document.createElement("link");
            prefetch.rel = "prefetch";
            prefetch.href = "CV_Sebastian_Arteaga_Profesional_Informatica.pdf";
            document.head.appendChild(prefetch);
        } else {
            const floatingCatBtn = document.getElementById("floating-cat-btn");
            if (floatingCatBtn && (!globalIntroAudio || globalIntroAudio.ended)) {
                floatingCatBtn.classList.add("visible");
            }
        }
        entryScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
    });

    const floatingCatBtn = document.getElementById("floating-cat-btn");
    if (floatingCatBtn) {
        floatingCatBtn.addEventListener("click", () => {
            globalIntroAudio = new Audio("assets/intro.mp3");
            globalIntroAudio.volume = 0.25;
            globalIntroAudio.playbackRate = 1.1;
            globalIntroAudio.play().catch(err => console.error("Audio error:", err));

            globalIntroAudio.addEventListener("ended", () => {
                if (!mainContent.classList.contains("hidden")) {
                    floatingCatBtn.classList.add("visible");
                }
            });

            floatingCatBtn.classList.remove("visible");
            mainContent.classList.add("hidden");
            entryScreen.classList.remove("hidden");
        });
    }
});