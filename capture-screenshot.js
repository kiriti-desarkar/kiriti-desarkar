const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Adjust the viewport size if necessary
  await page.setViewport({ width: 1280, height: 800 });
  
  // Navigate to your LeetCode profile
  await page.goto('https://leetcode.com/kiritidesarkar');
  
  // Wait for the profile page to load
  await page.waitForSelector('.profile-panel');
  
  // Capture the screenshot of the profile section
  const elementHandle = await page.$('.profile-panel');
  await elementHandle.screenshot({ path: 'leetcode-profile.png' });
  
  await browser.close();
})();