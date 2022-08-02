import { Then, When } from "@wdio/cucumber-framework";
import BasePage from "../pageObject/base.page";
import { SELECTORS } from "../../constants/selectors";
import { logger } from "../../logger/configLogger";

const { SERIES, TOP_250, TEXT_TOP_250 } = SELECTORS;

When(/^I'm on the home page and click the button series$/, async () => {
    logger.debug("I'm on the home page and click the button series");
    logger.error("I'm on the home page and click the button series");
    await BasePage.click(SERIES);
});
When(/^I click on the button top 250 series$/, async () => {
    logger.debug("I click on the button top 250 series");
    logger.error("I click on the button top 250 series");
    await BasePage.click(TOP_250);
});
Then(/^I will see opened top 250 series$/, async () => {
    logger.debug("I will see opened top 250 series");
    logger.error("I will see opened top 250 series");
    const textTopSeries = await BasePage.isOpened(TEXT_TOP_250);
    expect(textTopSeries).toBeDisplayed();
});
