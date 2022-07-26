export class element {
    selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    get el() {
        return $(this.selector);
    }

    public async scrollToElement() {
        await this.el.scrollIntoView();
    }

    public async getElementText() {
        return await this.el.getText();
    }

    public async addValue(value: string) {
        await this.el.waitForEnabled();
        await this.el.addValue(value);
    }

    public async clickElement() {
        await this.el.waitForClickable();
        await this.el.click();
    }

    public async elementIsDisplayed() {
        return await this.el.waitForDisplayed();
    }
}
