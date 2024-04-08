export default defineEventHandler(async () => {
  return {
    points: [
      { first_name: "LeBron", last_name: "James", value: 30.1 },
      { first_name: "Kevin", last_name: "Durant", value: 28.2 },
      { first_name: "Stephen", last_name: "Curry", value: 27.3 }
    ],
    rebounds: [
      { first_name: "Giannis", last_name: "Antetokounmpo", value: 13.6 },
      { first_name: "Rudy", last_name: "Gobert", value: 12.9 },
      { first_name: "Nikola", last_name: "Jokic", value: 12.4 }
    ],
    assists: [
      { first_name: "Rajon", last_name: "Rondo", value: 10.5 },
      { first_name: "Chris", last_name: "Paul", value: 9.8 },
      { first_name: "Luka", last_name: "Doncic", value: 9.4 }
    ],
    steals: [
      { first_name: "Jimmy", last_name: "Butler", value: 2.3 },
      { first_name: "Marcus", last_name: "Smart", value: 2.1 },
      { first_name: "Kawhi", last_name: "Leonard", value: 2.0 }
    ],
    blocks: [
      { first_name: "Rudy", last_name: "Gobert", value: 3.1 },
      { first_name: "Anthony", last_name: "Davis", value: 2.7 },
      { first_name: "Myles", last_name: "Turner", value: 2.5 }
    ]
  }
})
