export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      navigation: {
        routes: {
          home: "Home",
          ladder: "Ladder",
          leaderboard: "Leaderboard",
          live: "Live scores",
          schedule: "Schedule",
          teams: "Teams",
        },
        profile: "Your profile",
        support: "Support",
        logout: "Log out",
      },
    },
    pl: {
      navigation: {
        routes: {
          home: "Panel",
          ladder: "Drabinka",
          leaderboard: "Tabela wyników",
          live: "Na żywo",
          schedule: "Terminarz",
          teams: "Drużyny",
        },
        profile: "Twój profil",
        support: "Wsparcie",
        logout: "Wyloguj się",
      },
    },
  },
}));
