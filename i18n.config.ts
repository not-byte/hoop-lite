export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      button: {
        login: "Log in",
        logout: "Log out",
      },
      navigation: {
        routes: {
          home: "Home",
          standings: "Standings",
          leaderboard: "Leaderboard",
          live: "Live scores",
          schedule: "Schedule",
          teams: "Teams",
        },
        profile: "Your profile",
        support: "Support",
      },
    },
    pl: {
      button: {
        login: "Zaloguj się",
        logout: "Wyloguj się",
      },
      navigation: {
        routes: {
          home: "Panel",
          standings: "Ranking",
          leaderboard: "Tabela wyników",
          live: "Na żywo",
          schedule: "Terminarz",
          teams: "Drużyny",
        },
        profile: "Twój profil",
        support: "Wsparcie",
      },
    },
  },
}));
