import { AngularJS2FirebasePage } from './app.po';

describe('angular-js2-firebase App', function() {
  let page: AngularJS2FirebasePage;

  beforeEach(() => {
    page = new AngularJS2FirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
