document.addEventListener("DOMContentLoaded", function () {
    // Animação de revelação ao rolar a página (mais eficiente)
    const elements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Para de observar o elemento já revelado
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));

    // Animação dos itens do portfólio e carregamento de vídeos preguiçosos
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const lazyVideos = document.querySelectorAll("iframe[data-src]");

    function checkScroll() {
        const windowHeight = window.innerHeight;

        portfolioItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - 50) {
                item.classList.add("show");
            }
        });

        lazyVideos.forEach(iframe => {
            const iframeTop = iframe.getBoundingClientRect().top;
            if (iframeTop < windowHeight) {
                iframe.setAttribute("src", iframe.getAttribute("data-src"));
                iframe.removeAttribute("data-src");
            }
        });
    }

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll(); // Verifica ao carregar a página
});
