      let score = JSON.parse(localStorage.getItem('score'));

      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      }

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }

        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
          score.wins += 1;
        } else if (result === 'You lose.') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }
        
        localStorage.setItem('score', JSON.stringify(score));

        alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
      }


      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        if (!score.counter) {
          score.counter = 0;
        }
        score.counter++;
        localStorage.removeItem('score');

        if (score.counter === 1) {
          document.getElementById("reset message").innerHTML = `Score was reset: ${score.counter} time.`;
        } else {
          document.getElementById("reset message").innerHTML = `Score was reset: ${score.counter} times.`;
        }
      }
