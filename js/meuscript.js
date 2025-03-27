// Função para abrir e fechar o menu hambúrguer
function menuOnClick() {
    document.getElementById("menuBar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menuBg").classList.toggle("changeBg");
}

// Seleciona todos os links do menu
const navLinks = document.querySelectorAll("#nav a");
const nav = document.getElementById("nav");
const menuBar = document.getElementById("menuBar");
const menuBg = document.getElementById("menuBg");

// Adiciona evento de clique para fechar o menu
navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        // Previna o comportamento padrão para que o menu só feche depois da navegação
        event.preventDefault();

        // Navega até a seção desejada
        const targetId = link.getAttribute("href"); // Obtém o ID da seção alvo (ex: "#sobre")
        const targetElement = document.querySelector(targetId); // Seleciona o elemento da seção

        // Navega suavemente até a seção
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });

        // Fecha o menu após a navegação
        setTimeout(() => {
            menuBar.classList.remove("change");  // Fecha o ícone do menu
            nav.classList.remove("change");      // Fecha o menu principal
            menuBg.classList.remove("changeBg"); // Remove o fundo do menu
        }, 50);  // Delay de 500ms para garantir que a navegação ocorra antes do fechamento - Feito isso, pois estava ocorrendo um bug e não fechava o menu, e, quando fechava, não navegava corretamente até a seção alvo. 
    });
});

// Fecha o menu quando a página for rolada
window.addEventListener("scroll", () => {
    const menuBar = document.getElementById("menuBar");
    const nav = document.getElementById("nav");
    const menuBg = document.getElementById("menuBg");

    if (nav.classList.contains("change")) {
        menuBar.classList.remove("change");
        nav.classList.remove("change");
        menuBg.classList.remove("changeBg");
        
        // Aguarda um pequeno tempo para remover o display (evita bugs na reabertura)
        setTimeout(() => {
            menuBg.style.display = "none";
        }, 400);
    }
});

// Ajuste na função para abrir e fechar o menu hambúrguer
function menuOnClick() {
    const menuBar = document.getElementById("menuBar");
    const nav = document.getElementById("nav");
    const menuBg = document.getElementById("menuBg");

    menuBar.classList.toggle("change");
    nav.classList.toggle("change");
    menuBg.classList.toggle("changeBg");

    // Se o menu está sendo aberto, mostra o fundo novamente
    if (menuBg.classList.contains("changeBg")) {
        menuBg.style.display = "block";
    }
}

//portfolio
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'left', 'right', 'prev-left', 'next-right');
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('right');
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('left');
        } else if (index === (currentIndex + 2) % cards.length) {
            card.classList.add('next-right');
        } else if (index === (currentIndex - 2 + cards.length) % cards.length) {
            card.classList.add('prev-left');
        }
    });
}

function rotateCards() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}

updateCards();
setInterval(rotateCards, 4000);


// preloader

// var loader = document.getElementById("preloader");
// window.addEventListener("load", function () {
//     loader.style.display = "none"
// });



// back To Top Button

// Obtém o botão de voltar ao topo
const backToTopButton = document.getElementById("backToTopButton");

// Mostra ou esconde o botão conforme a rolagem da página
window.addEventListener("scroll", () => {
    // Verifica se o usuário rolou 60% da altura da página
    if (document.documentElement.scrollTop > document.documentElement.scrollHeight * 0.6) {
        backToTopButton.style.display = "block"; // Exibe o botão
    } else {
        backToTopButton.style.display = "none"; // Esconde o botão
    }
});

// Quando o botão for clicado, volta ao topo
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Rolagem suave até o topo
    });
});


// Seleciona todos os botões de abas "servicos"

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.servicos-tab');
    const tabContents = document.querySelectorAll('.servicos-item');
    const servicosNav = document.querySelector('.servicos-nav');

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Impede a propagação do clique para o document
            event.stopPropagation();

            // Verifica se a aba já está ativa
            const isActive = tab.classList.contains('active');

            // Remover a classe 'active' de todos os botões de tab
            tabs.forEach(t => t.classList.remove('active'));

            // Remover a classe 'active' de todos os conteúdos das abas
            tabContents.forEach(content => content.classList.remove('active'));

            // Se a aba não estava ativa, adiciona 'active' ao botão clicado e ao conteúdo
            if (!isActive) {
                tab.classList.add('active');
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            }
        });
    });

    // Fechar os conteúdos quando clicar fora da área de serviços
    document.addEventListener('click', (event) => {
        if (!servicosNav.contains(event.target)) {
            tabContents.forEach(content => content.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));
        }
    });
});


// Seleciona todos os botões de abas

document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll('.tab-buttons button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe active de todos os botões
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Adiciona a classe active ao botão clicado
            button.classList.add('active');

            // Exibe o conteúdo da aba correspondente
            const targetTab = document.querySelector(`#${button.dataset.tab}`);
            targetTab.classList.add('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const tabContent = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            const content = document.getElementById(tabId);

            // Se a aba já estiver ativa, remover a classe e fechar o conteúdo
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
                content.classList.remove('active');
            } else {
                // Remover a classe 'active' de todas as abas e conteúdos
                tabs.forEach(t => t.classList.remove('active'));
                tabContent.forEach(c => c.classList.remove('active'));

                // Ativar a aba e o conteúdo correspondente
                tab.classList.add('active');
                content.classList.add('active');
            }
        });
    });
});

