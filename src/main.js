
import './style.css';

// Las pantallas
const profileScreen = document.querySelector('#profile-screen');
const gameScreen = document.querySelector('#game-screen');
const rankingScreen = document.querySelector('#ranking-screen');

// Elementos del perfil
const profileForm = document.querySelector('#profile-form');
const usernameInput = document.querySelector('#username');
const pokemonInput = document.querySelector('#pokemon-search');
const playerGreeting = document.querySelector('#player-greeting');

// Estadísticas del juego
const movesCount = document.querySelector('#moves-count');
const pairsCount = document.querySelector('#pairs-count');
const timer = document.querySelector('#timer');

// Muestra una pantalla y oculta las demás
function showScreen(screenToShow) {
  const screens = [
    profileScreen,
    gameScreen,
    rankingScreen,
  ];

  screens.forEach((screen) => {
    screen.hidden = screen !== screenToShow;
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// La aplicación comienza en la pantalla de creación del perfil
showScreen(profileScreen);

profileForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!profileForm.reportValidity()) {
    return;
  }

  const username = usernameInput.value.trim();
  const pokemon = pokemonInput.value.trim();

  if (username.length < 3 || username.length > 15 || !pokemon) {
    return;
  }

  playerGreeting.textContent = `¡A por todas, ${username}!`;

  // Datos temporales para comprobar el diseño.
  playerGreeting.dataset.pokemon = pokemon;

  showScreen(gameScreen);
});


document.querySelector('#ranking-from-game')
  .addEventListener('click', () => {
    showScreen(rankingScreen);
  });

document.querySelector('#back-to-game')
  .addEventListener('click', () => {
    showScreen(gameScreen);
  });

document.querySelector('#new-profile')
  .addEventListener('click', () => {
    profileForm.reset();
    showScreen(profileScreen);
    usernameInput.focus();
  });
