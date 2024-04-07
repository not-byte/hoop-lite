export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      routes: {
        index: {
          name: "3x3 Basketball",
          description:
            "Do you remember the first edition of the Knurowski Streetball tournament? We do too and we want to share some good news with you 🥳 On May 25th, we are organizing another installment of our basketball event for YOU.",
          content: {
            header: {
              title: "Registration for the 3x3 tournament is currently closed!",
              description:
                "Visiting this website, you probably already know about Knury and the street basketball tournament organized by them. Soon, more information about Knurowski Streetball will appear on our social media profiles!",
            },
          },
        },
        dashboard: {
          name: "",
          description: "",
          content: "",
        },
        auth: {
          name: "",
          description: "",
          content: "",
          child: {
            login: {
              name: "Login",
              description: "",
              content: {
                header: {
                  title: "Login",
                  description: "Enter your credentials",
                },
                form: {
                  email: "E-mail address",
                  password: "Secret password",
                  submit: "Login",
                  forgot: "Forgot your",
                  reset: "password?",
                },
                aside: {
                  title: "Don't have an account?",
                  description: "Create one!",
                },
              },
            },
            register: {
              name: "Register",
              description: "",
              content: {
                header: {
                  title: "Register",
                  description: "Enter your credentials",
                },
                form: {
                  first_name: "First name",
                  last_name: "Last name",
                  email: "E-mail address",
                  password: "Secret password",
                  repeated_password: "Repeat your password",
                  submit: "Register",
                },
                aside: {
                  title: "Already have an account?",
                  description: "Log in!",
                },
              },
            },
            verify: {
              name: "",
              description: "",
              content: "",
            },
          },
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
          name: "Koszykówka 3x3",
          description:
            "Pamiętacie pierwszą edycję turnieju Knurowski Streetball? My tak samo i chcemy wam przekazać dobrą wiadomość 🥳 Już 25 maja organizujemy dla WAS kolejną odsłona naszego koszykarskiego eventu.",
          content: {
            header: {
              title: "Rejestracja na turniej 3x3 jest aktualnie zamknięta!",
              description:
                "Odwiedzając tą stronę prawdopodobnie znasz już Knury i organizowanym przez nie turniej koszykówki ulicznej. Wkrótce pojawi się więcej informacji o Knurowskim Streetballu na naszych profilach społecznościowych!",
            },
          },
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
