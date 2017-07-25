import { GrowTogetherPage } from './app.po';

describe('grow-together App', () => {
  let page: GrowTogetherPage;

  beforeEach(() => {
    page = new GrowTogetherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
