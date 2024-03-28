export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      routes: {
        index: {
          name: "Streetball",
          description:
            "Do you remember the first edition of the Knurowski Streetball tournament? We do too and we want to share some good news with you 🥳 On May 25th, we are organizing another installment of our basketball event for YOU.",
        },
        dashboard: {
          name: "",
          description: "",
        },
      },
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
      routes: {
        index: {
          name: "Koszykówka uliczna",
          description:
            "Pamiętacie pierwszą edycję turnieju Knurowski Streetball? My tak samo i chcemy wam przekazać dobrą wiadomość 🥳 Już 25 maja organizujemy dla WAS kolejną odsłona naszego koszykarskiego eventu.",
        },
        dashboard: {
          name: "",
          description: "",
        },
      },
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
