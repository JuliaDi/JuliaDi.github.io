// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Fun section - Space themed interactive elements
const spaceFacts = [
    "A day on Venus is longer than a year on Venus.",
    "Space is completely silent because there is no atmosphere to carry sound.",
    "Neutron stars can spin up to 600 times per second.",
    "The footprints on the Moon will be there for 100 million years.",
    "One million Earths could fit inside the Sun.",
    "The Milky Way galaxy is 100,000 light-years across.",
    "Astronauts can grow up to 2 inches taller in space due to lack of gravity.",
    "The International Space Station travels at 17,500 mph.",
    "There are more stars in the universe than grains of sand on Earth.",
    "Saturn's rings are made mostly of ice and rock.",
    "The Sun accounts for 99.86% of the mass in our solar system.",
    "A Mars day is 24 hours and 37 minutes long.",
    "The Great Red Spot on Jupiter is a storm that has been raging for over 400 years.",
    "Space smells like seared steak and hot metal according to astronauts.",
    "The first animal in space was a dog named Laika in 1957."
];

function getSpaceFact() {
    const today = new Date().getDate();
    const factIndex = today % spaceFacts.length;
    return spaceFacts[factIndex];
}

function getMoonPhase() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const c = Math.floor(365.25 * year);
    const e = Math.floor(30.6 * month);
    const jd = c + e + day - 694039.09;
    const phase = jd / 29.53;
    const phaseInt = Math.floor(phase);
    const phaseFraction = phase - phaseInt;
    
    const phases = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
    const phaseIndex = Math.floor(phaseFraction * 8);
    
    return phases[phaseIndex];
}

function getLaunchCountdown() {
    // Simulated countdown to a fictional "next big launch"
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + Math.floor(Math.random() * 30) + 1);
    const diff = targetDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `T-${days}d ${hours}h ${minutes}m`;
}

function getUFOCount() {
    // Fun random number that changes daily
    const today = new Date().getDate();
    const baseCount = 42;
    const dailyVariation = (today * 7) % 100;
    return baseCount + dailyVariation;
}

// Initialize fun section
function initFunSection() {
    const spaceFactEl = document.getElementById('spaceFact');
    const moonPhaseEl = document.getElementById('moonPhase');
    const launchCountdownEl = document.getElementById('launchCountdown');
    const ufoCountEl = document.getElementById('ufoCount');
    
    if (spaceFactEl) spaceFactEl.textContent = getSpaceFact();
    if (moonPhaseEl) moonPhaseEl.textContent = getMoonPhase();
    if (launchCountdownEl) launchCountdownEl.textContent = getLaunchCountdown();
    if (ufoCountEl) ufoCountEl.textContent = getUFOCount() + ' reported sightings';
    
    // Update launch countdown every minute
    setInterval(() => {
        if (launchCountdownEl) launchCountdownEl.textContent = getLaunchCountdown();
    }, 60000);
}

// Run when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFunSection);
} else {
    initFunSection();
}
