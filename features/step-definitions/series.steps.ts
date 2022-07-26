import { Then, When } from "@wdio/cucumber-framework";
import BasePage from "../pageObject/base.page";
import { SELECTORS } from "../../constants/selectors";

const { SERIES, TOP_250, TEXT_TOP_250 } = SELECTORS;

When(/^I'm on the home page and click the button series$/, async () => {
    await BasePage.click(SERIES);
});
When(/^I click on the button top 250 series$/, async () => {
    await BasePage.click(TOP_250);
});
Then(/^I will see opened top 250 series$/, async () => {
    const textTopSeries = await BasePage.isOpened(TEXT_TOP_250);
    expect(textTopSeries).toBeDisplayed();
});
