// ============================
// TOGGLE DARK/LIGHT MODE
// ============================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const toggleIcon = document.querySelector('.toggle-icon');

// Verifica a preferência salva ou do sistema
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Se não houver tema salvo, verifica preferência do sistema
    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    } else {
        setTheme(savedTheme);
    }
}

// Função para mudar o tema
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleIcon(theme);
}

// Atualiza o ícone do toggle
function updateToggleIcon(theme) {
    toggleIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Event listener para o botão de toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Detecta mudança de preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

// Inicializa o tema ao carregar a página
initTheme();
