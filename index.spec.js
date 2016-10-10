describe('index.htmlのテスト', () => {

    before(() => {
        browser.url('http://localhost:8080/index.html');
    });

    it('タイトル確認', () => {
        const title = browser.getTitle();
        assert(title === 'WebdriverIO はじめの一歩');
    });

    it('テキストボックス初期値確認', () => {
        const val = browser.getValue('#text');
        assert(val === 'textbox');
    });

});
