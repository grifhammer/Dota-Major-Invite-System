import { FirstProjPage } from './app.po';

describe('first-proj App', function() {
  let page: FirstProjPage;

  beforeEach(() => {
    page = new FirstProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
