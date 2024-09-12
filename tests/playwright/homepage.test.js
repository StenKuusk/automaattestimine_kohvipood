const { test, expect } = require('@playwright/test');

test.describe('HomePage Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Asenda URL oma rakenduse URL-iga
    await page.goto('http://localhost:3000');
  });

  test('should display the correct header', async ({ page }) => {
    await page.waitForSelector('header h1');
    const header = page.locator('header h1');
    await expect(header).toHaveText('Welcome to My Coffee Shop');
  });

  test('should contain navigation links', async ({ page }) => {
    await page.waitForSelector('nav');
    const homeLink = page.locator('nav a[href="/"]');
    const aboutLink = page.locator('nav a[href="/about"]');
    const contactLink = page.locator('nav a[href="/contact"]');

    await expect(homeLink).toHaveText('Home');
    await expect(aboutLink).toHaveText('About');
    await expect(contactLink).toHaveText('Contact');
  });

  test('should display hero section with correct content', async ({ page }) => {
    await page.waitForSelector('.hero-text');
    const heroText = page.locator('.hero-text h2');
    const heroDescription = page.locator('.hero-text p');
    const heroImage = page.locator('.hero-text img');

    await expect(heroText).toHaveText('Discover Your Perfect Brew');
    await expect(heroDescription.nth(0)).toHaveText('We offer a wide range of high-quality coffee, that our customers can sip and enjoy.');
    await expect(heroDescription.nth(1)).toHaveText('We also sell coffee beans that we use to brew that coffee for a fair price.');
    await expect(heroImage).toHaveAttribute('src', '/coffee3.jpg');
  });

  test('should display featured products section with correct images', async ({ page }) => {
    await page.waitForSelector('.product-container img');
    const productImages = page.locator('.product-container img');

    await expect(productImages.nth(0)).toHaveAttribute('src', '/coffee1.jpg');
    await expect(productImages.nth(1)).toHaveAttribute('src', '/coffee2.jpg');
  });

  test('should display footer with correct content', async ({ page }) => {
    await page.waitForSelector('footer');
    const footerText = page.locator('footer p');
    const buyNowButton = page.locator('footer .buy-now-button');

    await expect(footerText).toHaveText('© 2024 My Coffee Shop. All rights reserved.');
    await expect(buyNowButton).toHaveText('Buy now!');
    await expect(buyNowButton).toHaveAttribute('href', '/shop');
  });

});