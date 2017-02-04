import { OwnSitePage } from './app.po';

describe('own-site App', function() {
  let page: OwnSitePage;

  beforeEach(() => {
    page = new OwnSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
