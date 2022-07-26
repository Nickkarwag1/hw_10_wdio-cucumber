import { Then, When } from "@wdio/cucumber-framework";
import BasePage from "../pageObject/base.page";
import { SELECTORS } from "../../constants/selectors";

const { SEARCH, TEXT_SEARCH, SEARCH_BUTTON } = SELECTORS;

When(/^I'm on the home page and adding (\w+) movie$/, async (nameMovies) => {
    await BasePage.searchInput(SEARCH, nameMovies);
    await BasePage.click(SEARCH_BUTTON);
});
Then(/^I will see opened (\w+) movie$/, async (nameMovies) => {
    const textMovies = await BasePage.getText(TEXT_SEARCH);
    expect(textMovies).toHaveTextContaining(nameMovies);
});
