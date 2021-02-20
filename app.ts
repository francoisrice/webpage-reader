const textToSpeech = require('@google-cloud/text-to-speech');
const play = require('audio-play');
const load = require('audio-loader');

const fs = require('fs');
const util = require('util');
const client = new textToSpeech.TextToSpeechClient();

function whatToDoAtEnd() {
	console.log("That's the end!");
}

async function quickStart() {
	const text = 'This is a test';

	const request = {
		input: { text: text },
		voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
		audioConfig: { audioEncoding: 'MP3' },
	};

	const [response] = await client.synthesizeSpeech(request);
	const writeFile = util.promisify(fs.writeFile);
	await writeFile('output.mp3', response.audioContent, 'binary');
	// let playback = play(
	// 	response.audioContent,
	// 	{
	// 		start: 0,
	// 		ebd: response.audioContent.duration,
	// 		loop: false,
	// 		rate: 1,
	// 		detune: 0,
	// 		volume: 1,
	// 		autoplay: true,
	// 	},
	// 	whatToDoAtEnd,
	// );
	// playback.play();
	console.log('Written to output.mp3');
}
quickStart();

load('output.mp3').then((buffer) => play(buffer));
