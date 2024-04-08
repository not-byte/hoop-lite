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
          name: "Home",
          description: "",
          content: {
            header: {
              title: "Dashboard",
              description: "Hello!",
            },
          },
          children: {
            teams: {
              name: "Teams",
              description: "",
              content: {},
            },
            live: {
              name: "Live",
              description: "",
              content: {},
            },
            standings: {
              name: "Standings",
              description: "",
              content: {},
            },
            schedule: {
              name: "Schedule",
              description: "",
              content: {},
            },
            leaderboard: {
              name: "Leaderboard",
              description: "",
              content: {
                header: {
                  title: "Leaderboard",
                  description: "Check your performance!",
                },
                sections: {
                  points: "Points",
                  rebounds: "Rebounds",
                  assists: "Assists",
                  steals: "Steals",
                  blocks: "Blocks",
                },
              },
            },
          },
        },
        auth: {
          name: "",
          description: "",
          content: "",
          children: {
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
      components: {
        side: {
          buttons: {
            login: "Login",
            logout: "Logout",
          },
        },
      },
    },
  },
}));
