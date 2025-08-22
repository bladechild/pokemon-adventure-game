// Game state management
let gameState = {
    currentScreen: 'main-menu',
    selectedType: null,
    currentPokemonIndex: 0,
    learnedPokemon: [],
    quizQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    answeredQuestions: []
};

// DOM elements
const screens = {
    mainMenu: document.getElementById('main-menu'),
    typeIntro: document.getElementById('type-intro'),
    pokemonLearning: document.getElementById('pokemon-learning'),
    quiz: document.getElementById('quiz'),
    results: document.getElementById('results')
};

// Initialize game
document.addEventListener('DOMContentLoaded', function() {
    console.log('Pokemon Adventure Game Started!');
    setupEventListeners();
    showScreen('main-menu');
});

// Set up event listeners
function setupEventListeners() {
    // Type selection buttons
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.target.dataset.type;
            selectType(type);
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', goBack);
    });
    
    // Start learning button
    document.getElementById('start-learning').addEventListener('click', startLearning);
    
    // Next pokemon button
    document.getElementById('next-pokemon').addEventListener('click', nextPokemon);
    
    // Play again button
    document.getElementById('play-again').addEventListener('click', resetGame);
}

// Screen management
function showScreen(screenName) {
    // Hide all screens
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenName);
    if (targetScreen) {
        targetScreen.classList.add('active');
        gameState.currentScreen = screenName;
    }
    
    // Add entrance animation
    setTimeout(() => {
        if (targetScreen) targetScreen.style.transform = 'translateY(0)';
    }, 50);
}

// Type selection
function selectType(type) {
    console.log(`Selected type: ${type}`);
    gameState.selectedType = type;
    displayTypeIntroduction(type);
    showScreen('type-intro');
}

// Display type introduction
function displayTypeIntroduction(type) {
    const typeData = pokemonData.types[type];
    if (!typeData) return;
    
    // Set title and description
    document.getElementById('type-title').textContent = `🌟 ${typeData.name} 🌟`;
    document.getElementById('type-description').innerHTML = `
        <p>${typeData.description}</p>
    `;
    
    // Display sample Pokemon
    const sampleContainer = document.getElementById('sample-pokemon');
    sampleContainer.innerHTML = '';
    
    typeData.samples.forEach(pokemon => {
        const pokemonDiv = document.createElement('div');
        pokemonDiv.className = 'sample-pokemon';
        pokemonDiv.innerHTML = `
            <img src="${getPokemonSpriteUrl(pokemon.id, false)}" alt="${pokemon.display}" 
                 onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png'">
            <h4>${pokemon.display}</h4>
        `;
        sampleContainer.appendChild(pokemonDiv);
    });
}

// Start learning phase
function startLearning() {
    console.log('Starting learning phase');
    gameState.currentPokemonIndex = 0;
    gameState.learnedPokemon = getRandomPokemon(gameState.selectedType, 10);
    
    if (gameState.learnedPokemon.length === 0) {
        alert('Sorry, no Pokemon data available for this type!');
        return;
    }
    
    console.log('Learning Pokemon:', gameState.learnedPokemon);
    displayCurrentPokemon();
    showScreen('pokemon-learning');
}

// Display current Pokemon
function displayCurrentPokemon() {
    const pokemon = gameState.learnedPokemon[gameState.currentPokemonIndex];
    if (!pokemon) return;
    
    // Update title
    const typeData = pokemonData.types[gameState.selectedType];
    document.getElementById('learning-title').textContent = `Learning ${typeData.name} Pokémon!`;
    
    // Update progress bar
    const progress = ((gameState.currentPokemonIndex + 1) / gameState.learnedPokemon.length) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    document.querySelector('.progress-text').textContent = 
        `${gameState.currentPokemonIndex + 1} / ${gameState.learnedPokemon.length}`;
    
    // Update Pokemon display
    const pokemonImg = document.getElementById('pokemon-gif');
    pokemonImg.src = getPokemonSpriteUrl(pokemon.id, true);
    pokemonImg.alt = pokemon.display;
    pokemonImg.onerror = function() {
        // Fallback to static sprite if GIF fails
        this.src = getPokemonSpriteUrl(pokemon.id, false);
    };
    
    document.getElementById('pokemon-name').textContent = pokemon.display;
    
    // Update moves list with interactive move buttons
    const movesList = document.getElementById('moves-list');
    movesList.innerHTML = '';
    pokemon.moves.forEach(move => {
        const li = document.createElement('li');
        li.className = 'move-item';
        li.innerHTML = `
            <button class="move-btn" data-move="${move}">
                ${move} ⚡
            </button>
        `;
        movesList.appendChild(li);
    });
    
    // Add move click event listeners
    document.querySelectorAll('.move-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const moveName = e.target.dataset.move;
            showMoveAnimation(moveName);
        });
    });
    
    // Update next button text
    const nextBtn = document.getElementById('next-pokemon');
    if (gameState.currentPokemonIndex === gameState.learnedPokemon.length - 1) {
        nextBtn.textContent = 'Start Quiz!';
        nextBtn.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    } else {
        nextBtn.textContent = 'Next Pokémon!';
        nextBtn.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
    }
}

// Move to next Pokemon or start quiz
function nextPokemon() {
    if (gameState.currentPokemonIndex < gameState.learnedPokemon.length - 1) {
        gameState.currentPokemonIndex++;
        displayCurrentPokemon();
    } else {
        startQuiz();
    }
}

// Start quiz
function startQuiz() {
    console.log('Starting quiz');
    gameState.quizQuestions = generateQuizQuestions(gameState.learnedPokemon, gameState.selectedType);
    gameState.currentQuestionIndex = 0;
    gameState.score = 0;
    gameState.answeredQuestions = [];
    
    console.log('Quiz questions:', gameState.quizQuestions);
    displayCurrentQuestion();
    showScreen('quiz');
}

// Display current question
function displayCurrentQuestion() {
    const question = gameState.quizQuestions[gameState.currentQuestionIndex];
    if (!question) return;
    
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('quiz-progress-text').textContent = 
        `Question ${gameState.currentQuestionIndex + 1} of ${gameState.quizQuestions.length}`;
    
    // Create option buttons
    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(option, question.correct));
        optionsContainer.appendChild(button);
    });
    
    // Add image if available
    if (question.image) {
        const img = document.createElement('img');
        img.src = question.image;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.margin = '10px auto';
        img.style.display = 'block';
        img.style.borderRadius = '10px';
        document.getElementById('question-text').appendChild(img);
    }
}

// Handle answer selection
function selectAnswer(selectedAnswer, correctAnswer) {
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.disabled = true;
        
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedAnswer && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Update score
    if (isCorrect) {
        gameState.score++;
        showFeedback('Correct! Great job! 🎉', 'success');
    } else {
        showFeedback(`Oops! The correct answer is: ${correctAnswer}`, 'error');
    }
    
    gameState.answeredQuestions.push({
        question: gameState.quizQuestions[gameState.currentQuestionIndex].question,
        selectedAnswer,
        correctAnswer,
        isCorrect
    });
    
    // Move to next question after delay
    setTimeout(() => {
        if (gameState.currentQuestionIndex < gameState.quizQuestions.length - 1) {
            gameState.currentQuestionIndex++;
            displayCurrentQuestion();
        } else {
            showResults();
        }
    }, 2000);
}

// Show feedback message
function showFeedback(message, type) {
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback ${type}`;
    feedbackDiv.innerHTML = `<p>${message}</p>`;
    feedbackDiv.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
        color: white;
        padding: 15px 25px;
        border-radius: 15px;
        font-weight: bold;
        font-size: 1.1rem;
        z-index: 1000;
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(feedbackDiv);
    
    setTimeout(() => {
        feedbackDiv.remove();
    }, 1800);
}

// Show results
function showResults() {
    console.log('Showing results');
    const percentage = (gameState.score / gameState.quizQuestions.length) * 100;
    
    document.getElementById('final-score').textContent = gameState.score;
    document.querySelector('.score-total').textContent = `/ ${gameState.quizQuestions.length}`;
    
    let message = '';
    if (percentage >= 80) {
        message = '🌟 Outstanding! You\'re a Pokémon expert! You remembered almost everything about ' + 
                 pokemonData.types[gameState.selectedType].name + ' Pokémon!';
    } else if (percentage >= 60) {
        message = '👏 Great job! You learned a lot about ' + 
                 pokemonData.types[gameState.selectedType].name + ' Pokémon! Keep practicing!';
    } else if (percentage >= 40) {
        message = '🙂 Good try! You\'re learning about ' + 
                 pokemonData.types[gameState.selectedType].name + ' Pokémon! Play again to learn more!';
    } else {
        message = '💪 Keep trying! Learning about Pokémon takes practice. Play again and you\'ll do better!';
    }
    
    document.getElementById('result-message').innerHTML = `<p>${message}</p>`;
    
    showScreen('results');
}

// Go back to previous screen
function goBack() {
    switch (gameState.currentScreen) {
        case 'type-intro':
            showScreen('main-menu');
            break;
        case 'pokemon-learning':
            showScreen('type-intro');
            break;
        default:
            showScreen('main-menu');
    }
}

// Reset game
function resetGame() {
    console.log('Resetting game');
    gameState = {
        currentScreen: 'main-menu',
        selectedType: null,
        currentPokemonIndex: 0,
        learnedPokemon: [],
        quizQuestions: [],
        currentQuestionIndex: 0,
        score: 0,
        answeredQuestions: []
    };
    
    showScreen('main-menu');
}

// Add some fun animations and sound effects (visual feedback)
function addSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.cssText = `
        position: absolute;
        font-size: 2rem;
        animation: sparkle 1s ease-out forwards;
        pointer-events: none;
        z-index: 1000;
    `;
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
    sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
}

// Add CSS for sparkle animation
const sparkleCSS = document.createElement('style');
sparkleCSS.textContent = `
    @keyframes sparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
    }
    
    @keyframes slideDown {
        from { transform: translate(-50%, -100%); opacity: 0; }
        to { transform: translate(-50%, 0); opacity: 1; }
    }
    
    .feedback {
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
    
    .option-btn:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    
    .option-btn.correct {
        transform: scale(1.05);
    }
    
    .option-btn.incorrect {
        transform: scale(0.95);
    }
`;

document.head.appendChild(sparkleCSS);

// Show move animation - now opens Tenor search in new tab with Pokemon name
function showMoveAnimation(moveName) {
    console.log(`Opening Tenor search for move: ${moveName}`);
    
    // Get current Pokemon name for more specific search
    const currentPokemon = gameState.learnedPokemon[gameState.currentPokemonIndex];
    const pokemonName = currentPokemon ? currentPokemon.name : '';
    
    // Get Tenor search URL with Pokemon name
    const tenorUrl = getTenorSearchUrl(moveName, pokemonName);
    
    console.log(`Search URL: ${tenorUrl}`);
    
    // Show confirmation modal for kids
    showMoveConfirmation(moveName, tenorUrl, pokemonName);
}

// Show confirmation modal before opening Tenor
function showMoveConfirmation(moveName, tenorUrl, pokemonName = '') {
    // Create or update move confirmation modal
    let moveModal = document.getElementById('move-confirmation-modal');
    if (!moveModal) {
        moveModal = document.createElement('div');
        moveModal.id = 'move-confirmation-modal';
        moveModal.className = 'move-modal';
        document.body.appendChild(moveModal);
    }
    
    // Create display name for the search
    const displayName = pokemonName ? 
        `${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}'s ${moveName}` : 
        moveName;
    
    // Create modal content
    moveModal.innerHTML = `
        <div class="move-modal-content">
            <div class="move-modal-header">
                <h3>✨ ${displayName} GIFs ✨</h3>
                <button class="close-move-modal">&times;</button>
            </div>
            <div class="move-confirmation-container">
                <div class="move-placeholder">
                    <div class="move-placeholder-icon">🎬</div>
                    <div class="move-placeholder-name">${displayName}</div>
                    <div class="move-placeholder-text">Ready to see awesome ${pokemonName ? pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1) + ' using ' : ''}${moveName} GIFs?</div>
                </div>
                <div class="move-buttons">
                    <button class="view-gifs-btn" data-url="${tenorUrl}">
                        🚀 View ${displayName} GIFs!
                    </button>
                    <button class="cancel-btn" onclick="closeMoveModal()">
                        Maybe Later
                    </button>
                </div>
            </div>
            <div class="move-description">
                <p>This will open a new page with lots of cool ${displayName} animations from Tenor!</p>
                <small>✨ Perfect for seeing how ${pokemonName ? pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1) + ' uses ' : 'this move works with '}${moveName}! ✨</small>
            </div>
        </div>
    `;
    
    // Show modal
    moveModal.style.display = 'flex';
    setTimeout(() => moveModal.classList.add('show'), 10);
    
    // Add event listeners
    const closeBtn = moveModal.querySelector('.close-move-modal');
    closeBtn.addEventListener('click', closeMoveModal);
    
    const viewBtn = moveModal.querySelector('.view-gifs-btn');
    viewBtn.addEventListener('click', (e) => {
        const url = e.target.dataset.url;
        window.open(url, '_blank', 'noopener,noreferrer');
        closeMoveModal();
        const feedbackMessage = pokemonName ? 
            `Opening ${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}'s ${moveName} GIFs! 🎬` :
            `Opening ${moveName} GIFs! 🎬`;
        showFeedback(feedbackMessage, 'success');
    });
    
    // Add click outside to close
    moveModal.addEventListener('click', (e) => {
        if (e.target === moveModal) {
            closeMoveModal();
        }
    });
    
    // Auto close after 8 seconds (more time to read)
    setTimeout(() => {
        if (moveModal && moveModal.classList.contains('show')) {
            closeMoveModal();
        }
    }, 8000);
    
    // Add sparkle effect
    addSparkleEffect(viewBtn);
}

// Close move modal (works for both old and new modal IDs)
function closeMoveModal() {
    const moveModal = document.getElementById('move-animation-modal') || 
                      document.getElementById('move-confirmation-modal');
    if (moveModal) {
        moveModal.classList.remove('show');
        setTimeout(() => {
            moveModal.style.display = 'none';
        }, 300);
    }
}

// Add click sparkle effect to interactive elements
document.addEventListener('click', (e) => {
    if (e.target.matches('button:not(:disabled)')) {
        addSparkleEffect(e.target);
    }
});

// Handle image loading errors gracefully
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // You could add a placeholder image here if needed
    }
}, true);

console.log('Pokemon Adventure Game Initialized Successfully!');
