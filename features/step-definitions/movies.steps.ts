import { Then, When } from "@wdio/cucumber-framework";
import BasePage from "../pageObject/base.page";
import { SELECTORS } from "../../constants/selectors";
import { TITLES } from "../../constants/titles";

const { MOVIES, TOP_250, TEXT_TOP_250 } = SELECTORS;

When(/^I'm on the home page and click the button movies$/, async () => {
    await BasePage.click(MOVIES);
});
When(/^I click on the button top 250 movies$/, async () => {
    await BasePage.click(TOP_250);
});
Then(/^I will see opened top 250 movies$/, async () => {
    const textTopMovies = await BasePage.getText(TEXT_TOP_250);
    expect(textTopMovies).toHaveText(TITLES.TOP_MOVIES);
});
