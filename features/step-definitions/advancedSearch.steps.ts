import { Then, When } from "@wdio/cucumber-framework";
import BasePage from "../pageObject/base.page";
import { SELECTORS } from "../../constants/selectors";

const { ADVANCED_SEARCH_BUTTON, ADVANCED_SEARCH_INPUT, ADVANCED_RESULT_BUTTON, TEXT_SEARCH } = SELECTORS;

When(/^I'm on the home page and click on the button advanced search$/, async () => {
    await BasePage.click(ADVANCED_SEARCH_BUTTON);
});
When(/^I enter film (.+)$/, async (nameFilm) => {
    await BasePage.searchInput(ADVANCED_SEARCH_INPUT, nameFilm);
    await BasePage.scrollAndClick(ADVANCED_RESULT_BUTTON);
});
Then(/^I will see opened film (.+)$/, async (nameFilm) => {
    const textMovies = await BasePage.getText(TEXT_SEARCH);
    expect(textMovies).toHaveTextContaining(nameFilm);
});
