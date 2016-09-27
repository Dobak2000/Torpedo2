var tdClick = false;
var shooting = false;
var enemyBoat;
var enemyBoatId;
var playing = false;
var myBoat;
var compGuesses = [];
var myGuesses = [];
var myPoints = 0;
var compPoints = 0;

function start() {
	if (document.getElementById("noInfoCheckbox").checked) {
		step1();
	} else {
		document.getElementById("textBox").innerHTML = '<p>Kezdjük el!</p><p>Ha készen állsz, kattints a \'Tovább\' gombra!</p>';
		document.getElementById("mainButton").innerHTML = '<button class="btn btn-success btn-s" onclick="step1()">Tovább</button>';
	}

	enemyBoat = Math.floor(Math.random() * (125 - 101 + 1)) + 101;
	enemyBoatId = enemyBoat.toString();

	compGuesses = [];
	myGuesses = [];
}

function step1() {
	document.getElementById("textBox").innerHTML = '<p>Helyezd el a hajódat!</p><p>Kattints a kiválasztott mezőre az 1. táblán!</p>';

	tdClick = true;

	document.getElementById("mainButton").children[0].disabled = "disabled";
}

function placeBoat(id) {
	if (tdClick) {
		document.getElementById(id).innerHTML = '<span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span>';
		tdClick = false;

		myBoat = id;
		console.log(myBoat);
		console.log(enemyBoat);

		if (document.getElementById("noInfoCheckbox").checked) {
			step2();
		} else {
			document.getElementById("textBox").innerHTML = '<p>Elhelyezted a hajódat.</p><p>Kezdődjön a lövöldözés! Ha készen állsz, kattints a \'Tovább\' gombra!</p>';
			document.getElementById("mainButton").innerHTML = '<button class="btn btn-success btn-s" onclick="step2()">Tovább</button>';
		}
	}
}

function step2() {
	document.getElementById("textBox").innerHTML = '<p>Tippelj, hol lehet az ellenfél hajója! Kattints arra a mezőre a 2. táblán!</p>';
	document.getElementById(enemyBoatId).setAttribute("class", "cell enemyBoat");
	document.getElementById("mainButton").children[0].disabled = "disabled";

	shooting = true;
	playing = true;
}

function shootBoat(id) {
	if (shooting) {
		if (id == enemyBoatId) {
			document.getElementById(id).innerHTML = '<span class="glyphicon glyphicon-fire" aria-hidden="true"></span>';
			document.getElementById("textBox").innerHTML = '<p>Vége a játéknak!</p><p>Te nyertél!</p>';
			document.getElementById("mainButton").innerHTML = '<button class="btn btn-success btn-s" onclick="newGame()">Új játék</button>';
			myPoints++;
			document.getElementById("result").innerHTML = '<p>Eredmény: ' + myPoints + ' - ' + compPoints + '</p>';

			playing = false;
			shooting = false;
		} else if (myGuesses.indexOf(id) > -1) {
			console.log("hey");
		} else {
			document.getElementById(id).innerHTML = '<span class="glyphicon glyphicon-tint" aria-hidden="true"></span>';
			playing = true;
			shooting = false;
			gameGoing1();
			myGuesses.push(id);
		}

	}
}

function gameGoing1() {
	var time = Math.random() * 300 + 100;
	setTimeout(gameGoing, time);
}

function gameGoing() {
	while (playing) {
		shooting = true;
		var compGuessWrong = true;
		var compGuessId;
		var compGuess;

		while (compGuessWrong) {
			compGuess = Math.floor(Math.random() * 25) + 1;
			compGuessId = compGuess.toString();

			if (compGuesses.indexOf(compGuess) == -1) {
				compGuessWrong = false;
			}
		}

		compGuesses.push(compGuess);

		if (compGuess == myBoat) {
			playing = false;
			shooting = false;
			document.getElementById(compGuessId).innerHTML = '<span class="glyphicon glyphicon-fire" aria-hidden="true"></span>';
			document.getElementById("textBox").innerHTML = '<p>Vége a játéknak!</p><p>A gép nyert.</p>';
			document.getElementById("mainButton").innerHTML = '<button class="btn btn-success btn-s" onclick="newGame()">Új játék</button>';
			compPoints++;
			document.getElementById("result").innerHTML = '<p>Eredmény: ' + myPoints + ' - ' + compPoints + '</p>';
		} else {
			document.getElementById(compGuessId).innerHTML = '<span class="glyphicon glyphicon-tint" aria-hidden="true"></span>';
		}

		playing = false;
	}
}

function newGame() {
	document.getElementById("textBoxDiv").innerHTML = '<div class="col-md-4" id="textBox">';
	document.getElementById("table1").innerHTML = '<tr> \
								<td class="cell" id="1" onclick="placeBoat(\'1\')"></td> \
								<td class="cell" id="2" onclick="placeBoat(\'2\')"></td> \
								<td class="cell" id="3" onclick="placeBoat(\'3\')"></td> \
								<td class="cell" id="4" onclick="placeBoat(\'4\')"></td> \
								<td class="cell" id="5" onclick="placeBoat(\'5\')"></td> \
							</tr> \
							<tr> \
								<td class="cell" id="6" onclick="placeBoat(\'6\')"></td> \
								<td class="cell" id="7" onclick="placeBoat(\'7\')"></td> \
								<td class="cell" id="8" onclick="placeBoat(\'8\')"></td> \
								<td class="cell" id="9" onclick="placeBoat(\'9\')"></td> \
								<td class="cell" id="10" onclick="placeBoat(\'10\')"></td> \
							</tr> \
							<tr> \
								<td class="cell" id="11" onclick="placeBoat(\'11\')"></td> \
								<td class="cell" id="12" onclick="placeBoat(\'12\')"></td> \
								<td class="cell" id="13" onclick="placeBoat(\'13\')"></td> \
								<td class="cell" id="14" onclick="placeBoat(\'14\')"></td> \
								<td class="cell" id="15" onclick="placeBoat(\'15\')"></td> \
							</tr> \
							<tr> \
								<td class="cell" id="16" onclick="placeBoat(\'16\')"></td> \
								<td class="cell" id="17" onclick="placeBoat(\'17\')"></td> \
								<td class="cell" id="18" onclick="placeBoat(\'18\')"></td> \
								<td class="cell" id="19" onclick="placeBoat(\'19\')"></td> \
								<td class="cell" id="20" onclick="placeBoat(\'20\')"></td> \
							</tr> \
							<tr> \
								<td class="cell" id="21" onclick="placeBoat(\'21\')"></td> \
								<td class="cell" id="22" onclick="placeBoat(\'22\')"></td> \
								<td class="cell" id="23" onclick="placeBoat(\'23\')"></td> \
								<td class="cell" id="24" onclick="placeBoat(\'24\')"></td> \
								<td class="cell" id="25" onclick="placeBoat(\'25\')"></td> \
							</tr>';

	document.getElementById("table2").innerHTML = '<tr> \
								<td class="cell" id="101" onclick="shootBoat(\'101\')"></td> \
								<td class="cell" id="102" onclick="shootBoat(\'102\')"></td> \
								<td class="cell" id="103" onclick="shootBoat(\'103\')"></td> \
								<td class="cell" id="104" onclick="shootBoat(\'104\')"></td> \
								<td class="cell" id="105" onclick="shootBoat(\'105\')"></td> \
							</tr> \
							<tr> \
								<td class="cell" id="106" onclick="shootBoat(\'106\')"></td> \
								<td class="cell" id="107" onclick="shootBoat(\'107\')"></td> \
								<td class="cell" id="108" onclick="shootBoat(\'108\')"></td> \
								<td class="cell" id="109" onclick="shootBoat(\'109\')"></td> \
								<td class="cell" id="110" onclick="shootBoat(\'110\')"></td> \
							</tr> \
							<tr> \
								<td class="cell" id="111" onclick="shootBoat(\'111\')"></td> \
								<td class="cell" id="112" onclick="shootBoat(\'112\')"></td> \
								<td class="cell" id="113" onclick="shootBoat(\'113\')"></td> \
								<td class="cell" id="114" onclick="shootBoat(\'114\')"></td> \
								<td class="cell" id="115" onclick="shootBoat(\'115\')"></td> \
							</tr> \
							<tr> \
								<td class="cell" id="116" onclick="shootBoat(\'116\')"></td> \
								<td class="cell" id="117" onclick="shootBoat(\'117\')"></td> \
								<td class="cell" id="118" onclick="shootBoat(\'118\')"></td> \
								<td class="cell" id="119" onclick="shootBoat(\'119\')"></td> \
								<td class="cell" id="120" onclick="shootBoat(\'120\')"></td> \
							</tr> \
							<tr> \
								<td class="cell" id="121" onclick="shootBoat(\'121\')"></td> \
								<td class="cell" id="122" onclick="shootBoat(\'122\')"></td> \
								<td class="cell" id="123" onclick="shootBoat(\'123\')"></td> \
								<td class="cell" id="124" onclick="shootBoat(\'124\')"></td> \
								<td class="cell" id="125" onclick="shootBoat(\'125\')"></td> \
							</tr>';

	if (document.getElementById("noInfoCheckbox").checked) {
		start();
		document.getElementById("mainButton").innerHTML = '<button class="btn btn-success btn-s" disabled="disabled">Tovább</button>';
	} else {
		document.getElementById("mainButton").innerHTML = '<button class="btn btn-success btn-s" onclick="start()">Kezdés</button>';
	}

	document.getElementById("result").innerHTML = '<p>Eredmény: ' + myPoints + ' - ' + compPoints + '</p>';
}