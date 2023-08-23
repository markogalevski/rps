const result = {
	WIN: 0,
	LOSS: 1,
	DRAW: 2
}

let user_score = 0, computer_score = 0;

const rock = document.querySelector('#rock');
rock.addEventListener('click', play_rock);
const paper = document.querySelector('#paper');
paper.addEventListener('click', play_paper);
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', play_scissors);

function play_rock(_e) {
	 one_round('rock')
}
function play_paper(_e) {
	 one_round('paper')
}
function play_scissors(_e) {
	 one_round('scissors')
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

function evaluate_round(user_choice, computer_choice) {
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
			return result.DRAW;
	}
	
}

function one_round(user_choice) {
	console.log(user_choice);
	let computer_choice = get_computer_choice();
	switch (evaluate_round(user_choice, computer_choice))
	{			
		case result.LOSS: 
			computer_score++;
			break;
		case result.WIN:
			user_score++;
			break;
		default:
			break;
	}
}

function main() {
	let i = 0;
	while (i < 1) {
		one_round();
		if (my_score === 3 || computer_score === 3) {
			break;
		}
		i++;
	}
	let winner = (user_score > computer_score) ? "you" : (my_score === computer_score) ? "nobody" : "the computer";
	alert(`game's over! The winner is ${winner}, with a score of ${my_score} : ${computer_score}`);
}

// main()