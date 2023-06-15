const puppeteer = require('puppeteer');

(async () => {
	
  // Launch a headless Brave browser using Puppeteer
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
    headless: false,
  });
  
  // Open a new page
  const page = await browser.newPage();
  
  const options = {
	  path: 'leetcode-dashboard.png',
	  fullPage: true,
	  omitBackground: true
  }
  
  page.goto('https://leetcode.com/kiritidesarkar');
  

  // Delay for 5 seconds (5000 milliseconds)
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // Capture a screenshot of the page
  await page.screenshot(options);

  // Close the browser
  await browser.close();
})();