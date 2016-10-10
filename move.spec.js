describe('画面遷移のテスト', () => {

    before(() => {
        browser.url('http://localhost:8080/index.html');
    });

    it('move.htmlへ遷移するテスト', () => {
        browser.click('#button');
        const txt = browser.getText('#move');
        assert(txt === 'Moved!');
    });

});
