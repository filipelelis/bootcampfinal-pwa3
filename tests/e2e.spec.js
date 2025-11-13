// tests/e2e.spec.js
import { test, expect } from '@playwright/test';

// Aponta para o seu PWA que o Docker vai subir
const E2E_URL = 'http://localhost:8080/';

test.describe('Teste E2E do PWA de Saudação', () => {

  test('Deve carregar o PWA e mostrar o CSS', async ({ page }) => {
    await page.goto(E2E_URL);

    // Verifica se o título está correto
    await expect(page).toHaveTitle('PWA de Saudação');

    // Verifica se o CSS carregou (procurando o botão azul)
    const botao = page.locator('#btnCumprimentar');
    await expect(botao).toHaveCSS('background-color', 'rgb(0, 120, 215)'); // O código RGB de #0078d7
  });

  test('Deve conectar na API e mostrar a saudação correta', async ({ page }) => {
    await page.goto(E2E_URL);

    // Preenche o nome
    await page.locator('#nome').fill('Teste E2E');

    // Clica no botão
    await page.locator('#btnCumprimentar').click();

    // Procura o 'data-testid' que definimos no popup.js
    const saida = page.locator('[data-testid="saida-api"]');

    // Verifica se o texto da API apareceu (usando regex)
    // /Bom dia|Boa tarde|Boa noite/
    await expect(saida).toHaveText(/^(Bom dia|Boa tarde|Boa noite), Teste E2E! Seja bem-vindo ao PWA\.$/);
  });
});