import { WaggonerHouseWebPage } from './app.po';

describe('waggoner-house-web App', function() {
  let page: WaggonerHouseWebPage;

  beforeEach(() => {
    page = new WaggonerHouseWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
