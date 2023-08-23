const result = {
	WIN: 0,
	LOSS: 1,
	DRAW: 2
}

const game_status = {
	RUNNING: 0,
	OVER: 1,
}

let user_score = 0, computer_score = 0;

function play_rock(_e) {
	 one_round('rock')
}
function play_paper(_e) {
	 one_round('paper')
}
function play_scissors(_e) {
	 one_round('scissors')
}

link_methods();

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
	if (update_score() === game_status.OVER) {
		unlink_methods();
		const again = document.createElement('div');
		again.textContent = "AGAIN?";
		again.classList.add('again');
		again.addEventListener('click', restart_game);
		const body = document.querySelector('body');
		body.insertBefore(again, body.firstChild);

	}
}

function update_score() {
	let msg;
	let game_state = game_status.RUNNING;
	const score = document.querySelector('.score');
	if (user_score === 3 || computer_score === 3) {
		msg = (user_score > computer_score) ? "YOU WIN! 🏆" : "THE COMPUTER WINS! 👾";
		game_state = game_status.OVER;
	}
	else {
		score.classList.add('update');
		msg = `${user_score} - ${computer_score}`;
	}
	score.textContent = msg;
	score.style.fontSize = "140px";
  return game_state;
}

function restart_game() {
	link_methods();
	user_score = 0;
	computer_score = 0;
	update_score();
	const again = document.querySelector('div.again');
	const body = document.querySelector('body');
	body.removeChild(again);
}

function unlink_methods() {
const rock = document.querySelector('#rock');
rock.removeEventListener('click', play_rock);
const paper = document.querySelector('#paper');
paper.removeEventListener('click', play_paper);
const scissors = document.querySelector('#scissors');
scissors.removeEventListener('click', play_scissors);
}

function link_methods() {
	const rock = document.querySelector('#rock');
	rock.addEventListener('click', play_rock);
	const paper = document.querySelector('#paper');
	paper.addEventListener('click', play_paper);
	const scissors = document.querySelector('#scissors');
	scissors.addEventListener('click', play_scissors);
	const score = document.querySelector('.score');
	score.addEventListener('transitionend', remove_transition);
}

function remove_transition(e) {
	this.classList.remove('update');
}
