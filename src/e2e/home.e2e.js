import Nightmare from 'nightmare';

describe('Homepage', () => {
  it('it should have logo text', async () => {
    const page = Nightmare().goto('http://localhost:8000');
    const text = await page.evaluate(() => document.body.innerHTML).end();
    expect(text).toContain('<h1>绛门科技-物联网管理平台</h1>');
  });
});
