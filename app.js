/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let score, roundScore, activePlayer, isPlaying;
resetGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (isPlaying) {
        let dice = Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    if (dice !== 1) {
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        roundScore = 0;
    }
    }
    
    
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (isPlaying) {
        score[activePlayer] += roundScore;
    roundScore = 0;
    document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-' + activePlayer).textContent = '0';
    if (score[activePlayer] >= 20) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        isPlaying = false;
        
    } else {
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    }
    document.querySelector('.dice').style.display = 'none';

    }
    
})
document.querySelector('.btn-new').addEventListener('click', resetGame);

function resetGame () {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    isPlaying = true;
}

