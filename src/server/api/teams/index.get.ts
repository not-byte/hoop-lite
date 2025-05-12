export default defineEventHandler(async (event) => {
    setResponseHeader(event, "content-type", "application/json");
    return `[
  {
    "team": {
      "name": "Falcons",
      "category": 1,
      "email": "falcons@league.com",
      "phone": "282-719-7141"
    },
    "players": [
      {
        "first_name": "Tom",
        "last_name": "Evans",
        "age": 30
      },
      {
        "first_name": "Jack",
        "last_name": "Irwin",
        "age": 29
      },
      {
        "first_name": "Quinn",
        "last_name": "Carter",
        "age": 21
      },
      {
        "first_name": "David",
        "last_name": "Hill",
        "age": 19
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Lions",
      "category": 1,
      "email": "lions@league.com",
      "phone": "227-853-7252"
    },
    "players": [
      {
        "first_name": "Ethan",
        "last_name": "Parker",
        "age": 33
      },
      {
        "first_name": "David",
        "last_name": "Nelson",
        "age": 21
      },
      {
        "first_name": "Ryan",
        "last_name": "Evans",
        "age": 20
      },
      {
        "first_name": "Ryan",
        "last_name": "Carter",
        "age": 23
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Tigers",
      "category": 1,
      "email": "tigers@league.com",
      "phone": "127-238-6286"
    },
    "players": [
      {
        "first_name": "Quinn",
        "last_name": "Garcia",
        "age": 29
      },
      {
        "first_name": "Ian",
        "last_name": "Smith",
        "age": 30
      },
      {
        "first_name": "Alex",
        "last_name": "Irwin",
        "age": 30
      },
      {
        "first_name": "Liam",
        "last_name": "Quincy",
        "age": 29
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Panthers",
      "category": 1,
      "email": "panthers@league.com",
      "phone": "430-153-8615"
    },
    "players": [
      {
        "first_name": "Finn",
        "last_name": "Hill",
        "age": 24
      },
      {
        "first_name": "Finn",
        "last_name": "Owens",
        "age": 23
      },
      {
        "first_name": "Paul",
        "last_name": "Quincy",
        "age": 26
      },
      {
        "first_name": "Tom",
        "last_name": "Nelson",
        "age": 23
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Sharks",
      "category": 1,
      "email": "sharks@league.com",
      "phone": "569-534-8249"
    },
    "players": [
      {
        "first_name": "Sam",
        "last_name": "Davis",
        "age": 31
      },
      {
        "first_name": "Alex",
        "last_name": "Foster",
        "age": 24
      },
      {
        "first_name": "Kevin",
        "last_name": "Davis",
        "age": 24
      },
      {
        "first_name": "Kevin",
        "last_name": "Lewis",
        "age": 19
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Eagles",
      "category": 1,
      "email": "eagles@league.com",
      "phone": "579-951-6667"
    },
    "players": [
      {
        "first_name": "Owen",
        "last_name": "Lewis",
        "age": 24
      },
      {
        "first_name": "Mason",
        "last_name": "Quincy",
        "age": 33
      },
      {
        "first_name": "Liam",
        "last_name": "Lewis",
        "age": 34
      },
      {
        "first_name": "Ian",
        "last_name": "Parker",
        "age": 21
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Wolves",
      "category": 1,
      "email": "wolves@league.com",
      "phone": "775-179-8799"
    },
    "players": [
      {
        "first_name": "Finn",
        "last_name": "Brown",
        "age": 31
      },
      {
        "first_name": "Ian",
        "last_name": "Moore",
        "age": 20
      },
      {
        "first_name": "David",
        "last_name": "Nelson",
        "age": 23
      },
      {
        "first_name": "Owen",
        "last_name": "Roberts",
        "age": 28
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Rhinos",
      "category": 1,
      "email": "rhinos@league.com",
      "phone": "585-795-8796"
    },
    "players": [
      {
        "first_name": "Ian",
        "last_name": "Evans",
        "age": 33
      },
      {
        "first_name": "David",
        "last_name": "Hill",
        "age": 33
      },
      {
        "first_name": "Liam",
        "last_name": "Davis",
        "age": 31
      },
      {
        "first_name": "Liam",
        "last_name": "Quincy",
        "age": 20
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Dragons",
      "category": 1,
      "email": "dragons@league.com",
      "phone": "942-906-8174"
    },
    "players": [
      {
        "first_name": "Paul",
        "last_name": "Nelson",
        "age": 29
      },
      {
        "first_name": "Ryan",
        "last_name": "Evans",
        "age": 24
      },
      {
        "first_name": "Kevin",
        "last_name": "Moore",
        "age": 27
      },
      {
        "first_name": "David",
        "last_name": "Taylor",
        "age": 22
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Bulls",
      "category": 1,
      "email": "bulls@league.com",
      "phone": "319-672-3243"
    },
    "players": [
      {
        "first_name": "David",
        "last_name": "Smith",
        "age": 19
      },
      {
        "first_name": "Paul",
        "last_name": "Foster",
        "age": 23
      },
      {
        "first_name": "Owen",
        "last_name": "Garcia",
        "age": 22
      },
      {
        "first_name": "Alex",
        "last_name": "Johnson",
        "age": 25
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Hawks",
      "category": 1,
      "email": "hawks@league.com",
      "phone": "497-221-9858"
    },
    "players": [
      {
        "first_name": "Charlie",
        "last_name": "Carter",
        "age": 32
      },
      {
        "first_name": "Quinn",
        "last_name": "Garcia",
        "age": 31
      },
      {
        "first_name": "Ian",
        "last_name": "Lewis",
        "age": 19
      },
      {
        "first_name": "Owen",
        "last_name": "Smith",
        "age": 23
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Cougars",
      "category": 1,
      "email": "cougars@league.com",
      "phone": "981-979-1181"
    },
    "players": [
      {
        "first_name": "David",
        "last_name": "Davis",
        "age": 22
      },
      {
        "first_name": "Jack",
        "last_name": "Nelson",
        "age": 33
      },
      {
        "first_name": "Liam",
        "last_name": "Garcia",
        "age": 19
      },
      {
        "first_name": "Ryan",
        "last_name": "Foster",
        "age": 31
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Vikings",
      "category": 2,
      "email": "vikings@league.com",
      "phone": "298-856-5212"
    },
    "players": [
      {
        "first_name": "Kevin",
        "last_name": "Johnson",
        "age": 31
      },
      {
        "first_name": "Finn",
        "last_name": "Evans",
        "age": 34
      },
      {
        "first_name": "David",
        "last_name": "Moore",
        "age": 20
      },
      {
        "first_name": "Owen",
        "last_name": "King",
        "age": 20
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Knights",
      "category": 2,
      "email": "knights@league.com",
      "phone": "548-286-3835"
    },
    "players": [
      {
        "first_name": "Owen",
        "last_name": "Garcia",
        "age": 19
      },
      {
        "first_name": "Charlie",
        "last_name": "Foster",
        "age": 31
      },
      {
        "first_name": "Henry",
        "last_name": "Parker",
        "age": 24
      },
      {
        "first_name": "Mason",
        "last_name": "Evans",
        "age": 34
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Warriors",
      "category": 2,
      "email": "warriors@league.com",
      "phone": "989-467-7567"
    },
    "players": [
      {
        "first_name": "Nate",
        "last_name": "Anderson",
        "age": 22
      },
      {
        "first_name": "David",
        "last_name": "Smith",
        "age": 20
      },
      {
        "first_name": "Ben",
        "last_name": "Carter",
        "age": 27
      },
      {
        "first_name": "Kevin",
        "last_name": "Garcia",
        "age": 34
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Giants",
      "category": 2,
      "email": "giants@league.com",
      "phone": "589-933-7509"
    },
    "players": [
      {
        "first_name": "Henry",
        "last_name": "Parker",
        "age": 28
      },
      {
        "first_name": "Paul",
        "last_name": "Davis",
        "age": 32
      },
      {
        "first_name": "Kevin",
        "last_name": "Nelson",
        "age": 28
      },
      {
        "first_name": "Ethan",
        "last_name": "Nelson",
        "age": 35
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Rangers",
      "category": 2,
      "email": "rangers@league.com",
      "phone": "878-730-4103"
    },
    "players": [
      {
        "first_name": "Alex",
        "last_name": "Hill",
        "age": 33
      },
      {
        "first_name": "Finn",
        "last_name": "Evans",
        "age": 25
      },
      {
        "first_name": "Kevin",
        "last_name": "Hill",
        "age": 23
      },
      {
        "first_name": "Mason",
        "last_name": "Garcia",
        "age": 23
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Pirates",
      "category": 2,
      "email": "pirates@league.com",
      "phone": "517-867-5779"
    },
    "players": [
      {
        "first_name": "David",
        "last_name": "Brown",
        "age": 31
      },
      {
        "first_name": "Ethan",
        "last_name": "Johnson",
        "age": 19
      },
      {
        "first_name": "Ben",
        "last_name": "Foster",
        "age": 19
      },
      {
        "first_name": "Charlie",
        "last_name": "Lewis",
        "age": 22
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Jets",
      "category": 2,
      "email": "jets@league.com",
      "phone": "932-912-3433"
    },
    "players": [
      {
        "first_name": "Gabe",
        "last_name": "King",
        "age": 28
      },
      {
        "first_name": "Liam",
        "last_name": "Johnson",
        "age": 26
      },
      {
        "first_name": "Ryan",
        "last_name": "Lewis",
        "age": 23
      },
      {
        "first_name": "Ian",
        "last_name": "Garcia",
        "age": 34
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Spartans",
      "category": 2,
      "email": "spartans@league.com",
      "phone": "723-556-2477"
    },
    "players": [
      {
        "first_name": "Alex",
        "last_name": "Smith",
        "age": 33
      },
      {
        "first_name": "Quinn",
        "last_name": "Nelson",
        "age": 29
      },
      {
        "first_name": "Paul",
        "last_name": "Owens",
        "age": 20
      },
      {
        "first_name": "Kevin",
        "last_name": "Garcia",
        "age": 21
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Titans",
      "category": 2,
      "email": "titans@league.com",
      "phone": "488-788-4593"
    },
    "players": [
      {
        "first_name": "Henry",
        "last_name": "Irwin",
        "age": 26
      },
      {
        "first_name": "Tom",
        "last_name": "Carter",
        "age": 21
      },
      {
        "first_name": "Jack",
        "last_name": "King",
        "age": 34
      },
      {
        "first_name": "Ryan",
        "last_name": "King",
        "age": 25
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Storm",
      "category": 2,
      "email": "storm@league.com",
      "phone": "660-849-7599"
    },
    "players": [
      {
        "first_name": "Ryan",
        "last_name": "Quincy",
        "age": 26
      },
      {
        "first_name": "Finn",
        "last_name": "King",
        "age": 22
      },
      {
        "first_name": "Ethan",
        "last_name": "Hill",
        "age": 23
      },
      {
        "first_name": "David",
        "last_name": "Roberts",
        "age": 35
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Coyotes",
      "category": 2,
      "email": "coyotes@league.com",
      "phone": "298-995-7003"
    },
    "players": [
      {
        "first_name": "Kevin",
        "last_name": "Foster",
        "age": 24
      },
      {
        "first_name": "Paul",
        "last_name": "Brown",
        "age": 30
      },
      {
        "first_name": "Nate",
        "last_name": "Nelson",
        "age": 32
      },
      {
        "first_name": "Henry",
        "last_name": "Irwin",
        "age": 25
      }
    ],
    "accepted": true
  },
  {
    "team": {
      "name": "Grizzlies",
      "category": 2,
      "email": "grizzlies@league.com",
      "phone": "238-956-3372"
    },
    "players": [
      {
        "first_name": "Liam",
        "last_name": "Nelson",
        "age": 18
      },
      {
        "first_name": "Henry",
        "last_name": "Garcia",
        "age": 30
      },
      {
        "first_name": "Tom",
        "last_name": "Davis",
        "age": 30
      },
      {
        "first_name": "Kevin",
        "last_name": "Parker",
        "age": 28
      }
    ],
    "accepted": true
  }
]`;
});
