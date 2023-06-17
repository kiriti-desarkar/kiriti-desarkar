const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: '/usr/bin/google-chrome',
  });

  // Open a new page
  const page = await browser.newPage();

  const options = {
    path: 'leetcode-dashboard.png',
    fullPage: true,
    omitBackground: true,
  };

  await page.goto('https://leetcode.com/kiritidesarkar');

  // Delay for 5 seconds (5000 milliseconds)
  await page.waitForTimeout(5000);

  // Capture a screenshot of the page
  await page.screenshot(options);

  // Close the browser
  await browser.close();
})();