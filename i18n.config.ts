<script setup lang="ts">
class Team {
  name: string;
  players: Player[];
  statistics: TeamStatistics;

  constructor(name: string) {
    this.name = name;
    this.players = [
      new Player("Firstname1", "Lastname1", 11),
      new Player("Firstname2", "Lastname2", 22),
      new Player("Firstname3", "Lastname3", 33),
      new Player("Firstname4", "Lastname4", 44),
    ];
    this.statistics = new TeamStatistics(this);
  }

  setName(name: string): Team {
    this.name = name;
    return this;
  }

  getName(): string {
    return this.name;
  }

  getPlayers(): Player[] {
    return this.players;
  }

  getStatistics(): TeamStatistics {
    return this.statistics;
  }
}

class Player {
  first_name: string;
  last_name: string;
  number: number;
  statistics: PlayerStatistics;
  selected: boolean;

  constructor(first_name: string, last_name: string, number: number) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.number = number;
    this.statistics = new PlayerStatistics();
    this.selected = false;
  }

  setFirstName(first_name: string): Player {
    this.first_name = first_name;
    return this;
  }

  setLastName(last_name: string): Player {
    this.last_name = last_name;
    return this;
  }

  setNumber(number: number): Player {
    this.number = number;
    return this;
  }

  getFullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  getNumber(): number {
    return this.number;
  }

  getStatistics(): PlayerStatistics {
    return this.statistics;
  }
}

class Statistics {
  minutes: number;
  inside_fga: number;
  inside_fgm: number;
  outside_fga: number;
  outside_fgm: number;
  offensive_reb: number;
  defensive_reb: number;
  assists: number;
  blocks: number;
  steals: number;
  turnovers: number;
  fouls: number;

  constructor() {
    this.minutes = 0;
    this.inside_fga = 0;
    this.inside_fgm = 0;
    this.outside_fga = 0;
    this.outside_fgm = 0;
    this.offensive_reb = 0;
    this.defensive_reb = 0;
    this.assists = 0;
    this.blocks = 0;
    this.steals = 0;
    this.turnovers = 0;
    this.fouls = 0;
  }

  addMinute() {
    this.minutes++;
  }

  attemptInside() {
    this.inside_fga++;
  }

  madeInside() {
    this.inside_fgm++;
  }
  
  getMinutes(): number {
    return this.minutes;
  }

  getPoints(): number {
    return this.inside_fgm + 2 * this.outside_fgm;
  }

  getOffensiveRebounds(): number {
    return this.offensive_reb;
  }

  getDefensiveRebounds(): number {
    return this.defensive_reb;
  }

  getRebounds(): number {
    return this.offensive_reb + this.defensive_reb;
  }

  getAssists(): number {
    return this.assists;
  }

  getBlocks(): number {
    return this.blocks;
  }

  getSteals(): number {
    return this.steals;
  }

  getTurnovers(): number {
    return this.turnovers;
  }

  getFouls(): number {
    return this.fouls;
  }

  getPlusMinus(): number {
    return 0;
  }
}

class TeamStatistics {
  team: Team

  constructor(team: Team) {
    this.team = team;
  }

  getMinutes(): number {
    let minutes = 0;

    this.team.getPlayers().forEach(player => minutes += player.getStatistics().getMintes());

    return minutes;
  }

  getPoints(): number {
    let points = 0;

    this.team.getPlayers().forEach(player => points += player.getStatistics().getPoints());
  
    return points;
  }
}

class PlayerStatistics extends Statistics {}

class StatisticsHandler {
  scoreInside(player: Player, made?: boolean) {
    player.getStatistics().attemptInside();

    if (!made) return;

    player.getStatistics().madeInside();
  }
}

const handler = ref<StatisticsHandler>(new StatisticsHandler())

const teams = ref<Team[]>([
  new Team("LA Lakers"),
  new Team("GS Warriors"),
]);
</script>

<template>
  <section class="flex flex-col">
    <h1>
    {{ useRoute().params?.match }}
    </h1>

    <h2>
      Wynik {{ teams[0].getStatistics().getPoints() }} - {{ teams[1].getStatistics().getPoints() }}
    </h2>


    <section class="grid grid-rows-2 gap-4">
      <aside v-for="team in teams" class="w-full h-full">
        <h2>
          {{ team.getName() }}
        </h2>
        <aside class="flex">
          <ul>
            <li class="border-1 border-white flex-grow">
              Imię i nazwisko
            </li>
            <li v-for="player in team.getPlayers()" class="border-1 border-white">
                {{ player.getFullName() }}
            </li>
          </ul>
          <ul class="grid grid-cols-12">
            <li class="border-1 border-white">
              MIN
            </li>
            <li class="border-1 border-white">
              PTS
            </li>
            <li class="border-1 border-white">
              2P
            </li>
            <li class="border-1 border-white">
              3P
            </li>
            <li class="border-1 border-white">
              OZ
            </li>
            <li class="border-1 border-white">
              DZ
            </li>
            <li class="border-1 border-white">
              SZ
            </li>
            <li class="border-1 border-white">
              A
            </li>
            <li class="border-1 border-white">
              B
            </li>
            <li class="border-1 border-white">
              P
            </li>
            <li class="border-1 border-white">
              S
            </li>
            <li class="border-1 border-white">
              F
            </li>
            <template v-for="player in team.getPlayers()">
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
              <li class="border-1 border-white">
                <ButtonBase @click="handler.scoreInside(player, true)">
                  +
                </ButtonBase>
                {{ player.getStatistics().getPoints() }}
              </li>
            </template>
          </ul>
        </aside>
      </aside>
    </section>
  </section>
</template>