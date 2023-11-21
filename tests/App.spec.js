const { test, expect } = require("@playwright/test");
const user = require('../user.js');

test("Успешная авторизация", async ({ page }) => {
    // Go to https://netology.ru/?modal=sign_in
    await page.goto("https://netology.ru/?modal=sign_in");
  // Click [placeholder="Email"]
    await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
    await page.locator('[placeholder="Email"]').fill(user.email);
  // Click [placeholder="Пароль"]
    await page.locator('[placeholder="Пароль"]').click();
  // Fill [placeholder="Пароль"]
    await page.locator('[placeholder="Пароль"]').fill(user.password);
  // Click [data-testid="login-submit-btn"]
    await page.locator('[data-testid="login-submit-btn"]').click();
    await page.screenshot({ path: "screenshot.png" });
  
    await expect(page).toHaveURL('https://netology.ru/profile');
    
    await expect(page.locator('h2')).toHaveText('Мои курсы и профессии');
  
  });
  
  test("Неуспешная авторизация", async ({ page }) => {
    // Go to https://netology.ru/?modal=sign_in
    await page.goto("https://netology.ru/?modal=sign_in");
  // Click [placeholder="Email"]
    await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
    await page.locator('[placeholder="Email"]').fill(user.wrongEmail);
  // Click [placeholder="Пароль"]
    await page.locator('[placeholder="Пароль"]').click();
  // Fill [placeholder="Пароль"]
    await page.locator('[placeholder="Пароль"]').fill(user.wrongPassword);
  // Click [data-testid="login-submit-btn"]
    await page.locator('[data-testid="login-submit-btn"]').click();
    
    await expect(page.locator('[data-testid="login-error-hint"]')).toHaveText('Вы ввели неправильно логин или пароль');
    await page.screenshot({ path: "screenshotError.png" });
  });