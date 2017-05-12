import { SupplierPage } from './app.po';

describe('supplier App', function() {
  let page: SupplierPage;

  beforeEach(() => {
    page = new SupplierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
