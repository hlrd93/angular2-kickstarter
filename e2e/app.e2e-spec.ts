import { HandsPage } from './app.po';

describe('hands App', function() {
  let page: HandsPage;

  beforeEach(() => {
    page = new HandsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
