

const result = {
	WIN: 0,
	LOSS: 1,
	DRAW: 2
}

function get_computer_choice() {
	const rps = ["rock", "paper", "scissors"];
	return rps[parseInt(Math.random()*3)];
}

function beats(computer_choice, win_condition) {
	if (computer_choice === win_condition) {
		return result.WIN;
		}
	else {
			return result.LOSS;
		}
}

function is_round_won(user_choice, computer_choice) {
	if (user_choice === computer_choice) {
		return result.DRAW;
	}
	switch (user_choice) {
		case "rock":
			return beats(computer_choice, "scissors");
	  case "paper": 
			return beats(computer_choice, "rock");
		case "scissors":
			return beats(computer_choice, "paper");
		default:
			return false;
	}
	
}

function one_round() {
	let user_choice = prompt("Rock, paper, or scissors?").toLowerCase();
	let computer_choice = get_computer_choice();
	return is_round_won(user_choice, computer_choice);
	
}
function main() {
	let my_score = 0, computer_score = 0;
	let i = 0;
	while (i < 5) {
		switch (one_round()) {
			case result.LOSS: 
				computer_score++;
				break;
			case result.WIN:
				my_score++;
				break;
			default:
				break;
		}
		if (my_score === 3 || computer_score === 3) {
			break;
		}
		i++;
	}
	let winner = (my_score > computer_score) ? "you" : (my_score === computer_score) ? "nobody" : "the computer";
	alert(`game's over! The winner is ${winner}, with a score of ${my_score} : ${computer_score}`);
}

main()