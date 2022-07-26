import { element } from "../../utils/element";

class BasePage {
    public async click(selector: string) {
        await new element(selector).clickElement();
    }

    public async getText(selector: string) {
        await new element(selector).getElementText();
    }

    public async isOpened(selector: string) {
        return await new element(selector).elementIsDisplayed();
    }

    public async searchInput(selector: string, value: string) {
        await new element(selector).addValue(value);
    }

    public async scrollAndClick(selector: string) {
        const elem = await new element(selector);
        await elem.scrollToElement();
        await elem.clickElement();
    }
}

export default new BasePage();
