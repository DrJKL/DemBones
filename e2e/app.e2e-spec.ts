import { DemBonesPage } from './app.po';

describe('dem-bones App', () => {
  let page: DemBonesPage;

  beforeEach(() => {
    page = new DemBonesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
