const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Adjust the viewport size if necessary
  await page.setViewport({ width: 1280, height: 800 });

  // Navigate to your LeetCode profile
  await page.goto('https://leetcode.com/kiritidesarkar/', { timeout: 60000 });

  // Wait for the profile page to load
  await page.waitForNavigation();

  // Capture the full-page screenshot
  await page.screenshot({ path: 'leetcode-profile.png', fullPage: true });

  await browser.close();
})();
