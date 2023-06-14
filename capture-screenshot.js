const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

(async () => {
  // Fetch the HTML content of the LeetCode profile page
  const response = await axios.get('https://leetcode.com/kiritidesarkar');
  const html = response.data;

  // Load the HTML content into Cheerio
  const $ = cheerio.load(html);

  // Find the dashboard section using a specific selector
  const dashboardSection = $('.panel.panel-primary').first();

  // Extract the HTML content of the dashboard section
  const dashboardHtml = $.html(dashboardSection);

  // Launch a headless Chrome browser using Puppeteer
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Set the viewport size if necessary
  await page.setViewport({ width: 1280, height: 800 });

  // Set the HTML content of the page to the dashboard section
  await page.setContent(dashboardHtml);

  // Capture a screenshot of the dashboard section
  await page.screenshot({ path: 'leetcode-dashboard.png' });

  // Close the browser
  await browser.close();
})();
