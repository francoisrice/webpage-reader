const textToSpeech = require('@google-cloud/text-to-speech');

const fs = require('fs');
const util = require('util');
const client = new textToSpeech.TextToSpeechClient();

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
	console.log('Written to output.mp3');
}
quickStart();
