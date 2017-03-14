import { AdminlteProjPage } from './app.po';

describe('adminlte-proj App', () => {
  let page: AdminlteProjPage;

  beforeEach(() => {
    page = new AdminlteProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
