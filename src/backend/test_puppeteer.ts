const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://blog.leanstack.com/dont-start-with-an-mvp/');
	await page.screenshot({ path: 'example.png' });

	await browser.close();
})();
