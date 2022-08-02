import { Then, When } from "@wdio/cucumber-framework";
import BasePage from "../pageObject/base.page";
import { SELECTORS } from "../../constants/selectors";
import { logger } from "../../logger/configLogger";

const { MEDIA, TEXT_MEDIA } = SELECTORS;

When(/^I'm on the home page and click the button media$/, async () => {
    logger.debug("I'm on the home page and click the button media");
    logger.error("I'm on the home page and click the button media");
    await BasePage.click(MEDIA);
});
Then(/^I will see opened media page$/, async () => {
    logger.error("I will see opened media page");
    const textMedia = await BasePage.isOpened(TEXT_MEDIA);
    expect(textMedia).toBeDisplayed();
});
