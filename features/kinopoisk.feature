Feature: Visit url https://www.kinopoisk.ru/
  Go to the movies tab and select the top 250 movies
  Go to the series tab and select the top 250 series
  Enter a few movies in the search bar
  Enter a few movies in the advanced search
  Go to the media tab


  @Movies
  Scenario: Go to the movies tab and select the top 250 movies
    When I'm on the home page and click the button movies
    When I click on the button top 250 movies
    Then I will see opened top 250 movies

  @Series
  Scenario: Go to the series tab and select the top 250 series
    When I'm on the home page and click the button series
    When I click on the button top 250 series
    Then I will see opened top 250 series

  @Search
  Scenario Outline: Enter a few movies in the search bar
    When I'm on the home page and adding <nameMovies> movie
    Then I will see opened <nameMovies> movie

    Examples:
      | nameMovies   |
      | Interstellar |
      | Tenet        |

  @AdvancedSearch
  Scenario Outline: Enter a few movies in the advanced search
    When I'm on the home page and click on the button advanced search
    When I enter film <nameFilm>
    Then I will see opened film <nameFilm>

    Examples:
      | nameFilm           |
      | Back to the future |
      | The Maze Runner    |

  @Media
  Scenario: Go to the media tab
    When I'm on the home page and click the button media
    Then I will see opened media page