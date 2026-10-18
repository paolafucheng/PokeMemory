
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
