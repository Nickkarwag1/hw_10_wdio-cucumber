import { Then, When } from "@wdio/cucumber-framework";
import BasePage from "../pageObject/base.page";
import { SELECTORS } from "../../constants/selectors";

const { MEDIA, TEXT_MEDIA } = SELECTORS;

When(/^I'm on the home page and click the button media$/, async () => {
    await BasePage.click(MEDIA);
});
Then(/^I will see opened media page$/, async () => {
    const textMedia = await BasePage.isOpened(TEXT_MEDIA);
    expect(textMedia).toBeDisplayed();
});
