<script setup lang="ts">
const config = useRuntimeConfig();
const routeName = getPath();
const accepted = ref<boolean>(false);

useHeadSafe({
  title: "3X3",
  htmlAttrs: {
    lang: "pl",
  },
  meta: [
    {
      name: "description",
      content:
        "Pamiętacie pierwszą edycję Knurowskiego Streetballa w 2023? Ogłaszamy że specjalnie dla WAS, że uruchomiliśmy rejestrację na drugą edycję turnieju, do zobaczenia!",
    },
  ],
});

useSeoMeta({
  ogTitle: `3X3 · ${config.public.name}`,
  ogDescription:
    "Pamiętacie pierwszą edycję Knurowskiego Streetballa w 2023? Ogłaszamy że specjalnie dla WAS, że uruchomiliśmy rejestrację na drugą edycję turnieju, do zobaczenia!",
});

enum Category {
  OPEN = 1,
  SCHOOL = 2,
}

enum Stage {
  START,
  TEAM,
  PLAYERS,
  SUMMARY,
  SENT,
}

class StageManager {
  private stage: Stage;

  constructor(stage?: Stage) {
    this.stage = stage ? stage : Stage.START;
  }

  previous() {
    this.stage > 0 ? this.stage-- : this.stage;
  }

  next() {
    this.stage < Object.keys(Stage).length ? this.stage++ : this.stage;
  }

  isStart(): boolean {
    return this.stage === Stage.START;
  }

  isTeam(): boolean {
    return this.stage === Stage.TEAM;
  }

  isPlayers(): boolean {
    return this.stage === Stage.PLAYERS;
  }

  isSummary(): boolean {
    return this.stage === Stage.SUMMARY;
  }

  isSent(): boolean {
    return this.stage === Stage.SENT;
  }

  setStart() {
    this.stage = Stage.START;
  }

  setTeam() {
    this.stage = Stage.TEAM;
  }

  setPlayers() {
    this.stage = Stage.PLAYERS;
  }

  setSummary() {
    this.stage = Stage.SUMMARY;
  }

  setSent() {
    this.stage = Stage.SENT;
  }

  get(): Stage {
    return this.stage;
  }
}

const categories = ["Open", "Szkolna"];
const stage = ref<StageManager>(new StageManager());
const data = ref<FormPayload>({
  name: "",
  email: "",
  players: [
    {
      first_name: "",
      last_name: "",
    },
    {
      first_name: "",
      last_name: "",
    },
    {
      first_name: "",
      last_name: "",
    },
    {
      first_name: "",
      last_name: "",
    },
  ],
});

const onTyping = (key: string, value: any) => {
  return (data.value[key as keyof Object] = value);
};

const register = async () => {
  if (!data.value.name || data.value.category === undefined || !data.value.email) return;

  const response = await $fetch("/api/form", {
    method: "POST",
    body: data.value,
  });

  if (response.status === 401) return;

  stage.value.setSent();
};

import nodemailer from "nodemailer";

const mail = `<!doctype html>
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>🐷 Potwierdzenie rejestracji - Knurowski Streetball 2024</title>
      <style media="all" type="text/css">

      body {
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        line-height: 1.3;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      table {
        border-collapse: separate;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        width: 100%;
      }

      table td {
        font-size: 16px;
        vertical-align: top;
      }

      svg {
          width: 100%;
      }

      h1 {
          width: 100%;
          color: white;
          text-align: center;
          font-weight: bold;
      }

      body {
        background-color: rgba(30,30,30,1.00);
        margin: 0;
        padding: 0;
      }

      .body {
        background-color: rgba(30,30,30,1.00);
        width: 100%;
      }

      .container {
        margin: 0 auto !important;
        max-width: 600px;
        padding: 0;
        padding-top: 24px;
        width: 600px;
      }

      .content {
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
        max-width: 600px;
        padding: 0;
      }

      .main {
        width: 100%;
      }

      .wrapper {
        box-sizing: border-box;
        padding: 24px;
      }

      .footer {
        clear: both;
        padding-top: 24px;
        text-align: center;
        width: 100%;
      }

      .footer td,
      .footer p,
      .footer span,
      .footer a {
        color: #9a9ea6;
        font-size: 16px;
        text-align: center;
      }

      p {
        color: rgba(125,125,125,1.00);
        font-size: 16px;
        font-weight: normal;
        margin: 0;
        margin-bottom: 16px;
      }

      a {
        color: rgba(242,53,53,1.00);
        text-decoration: underline;
      }

      .btn {
        box-sizing: border-box;
        min-width: 100% !important;
        width: 100%;
      }

      .btn > tbody > tr > td {
        padding-bottom: 16px;
      }

      .btn table {
        width: auto;
      }

      .btn table td {
        background-color: #ffffff;
        border-radius: 4px;
        text-align: center;
      }

      .btn a {
        background-color: #ffffff;
        border: solid 2px rgba(242,53,53,1.00);
        border-radius: 4px;
        box-sizing: border-box;
        color: rgba(242,53,53,1.00);
        cursor: pointer;
        display: inline-block;
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        padding: 0.75rem 1.5rem;
        text-align: center;
        text-decoration: none;
      }

      .btn-primary table td {
        background-color: rgba(242,53,53,1.00);
      }

      .btn-primary a {
        background-color: rgba(242,53,53,1.00);
        color: #ffffff;
      }

      .last {
        margin-bottom: 0;
      }

      .first {
        margin-top: 0;
      }

      .align-center {
        text-align: center;
      }

      .align-right {
        text-align: right;
      }

      .align-left {
        text-align: left;
      }

      .text-link {
        color: #0867ec !important;
        text-decoration: underline !important;
      }

      .clear {
        clear: both;
      }

      .mt0 {
        margin-top: 0;
      }

      .mb0 {
        margin-bottom: 0;
      }

      @media only screen and (max-width: 640px) {
        .main p,
        .main td,
        .main span {
          font-size: 16px !important;
        }
        .wrapper {
          padding: 8px !important;
        }
        .content {
          padding: 0 !important;
        }
        .container {
          padding: 0 !important;
          padding-top: 8px !important;
          width: 100% !important;
        }
        .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }
        .btn table {
          max-width: 100% !important;
          width: 100% !important;
        }
        .btn a {
          font-size: 16px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      }

      @media all {
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
      }
      </style>
    </head>
    <body>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
          <td>&nbsp;</td>
          <td class="container">
            <div class="content">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main">
                <tr>
                    <td class="m_pad" style="width:100%;padding-right:0;padding-left:0">
                        <div class="m_alignment" align="center" style="line-height:10px">
                          <img
                            src="https://i.imgur.com/CMmpfIb.png"
                            class="m_big"
                            style="display:block;height:auto;border:0;width:200px;max-width:100%"
                            width="200"
                            alt="Logo Knury Knurów"
                            title="Logo Knury Knurów">
                        </div>
                    </td>
                </tr>
                <tr>
                  <td class="wrapper">
                    <h1>Potwierdzenie rejestracji</h1>
                    <p>Dziękujemy! Jeśli widzisz tą wiadomość, to udało ci się zarejestrować na nasz turniej! Widzimy się już
                      <span style="color: rgba(242,53,53,1.00); text-decoration: underline;">
                        25 Maja przed 9:00.
                      </span>
                    </p>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                      <tbody>
                        <tr>
                          <td align="left">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                              <tbody>
                                <tr style="width: 100%; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                                  <td>
                                      <a href="https://docs.google.com/document/d/1vrdedsYvmEmL90KNvQ-AFux41rrgNRvQBvbsvgIJFY4/edit?usp=sharing" target="_blank">Zapoznaj się z regulaminem</a>
                                   </td>
                                   <td>
                                      <a href="https://docs.google.com/document/d/16GRSGETppsOS_atuOv7r8kFEsf3aJARncbpASCWMy5s/edit?usp=sharing" target="_blank">Pobierz zgodę na udział</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                </table>
            </div>
          </td>
          <td>&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>`;

const message = {
  from: `Dump · Knury Knurów <dump@knuryknurow.pl>`,
  to: "botprzemek <info@botprzemek.pl>",
  subject: "🐷 Potwierdzenie rejestracji - Knurowski Streetball 2024",
  html: mail,
};

const confirmation = {
  from: `Dump · Knury Knurów <dump@knuryknurow.pl>`,
  to: "botprzemek <info@botprzemek.pl>",
  subject: `Dump mail from info@botprzemek.pl`,
  text: JSON.stringify(data),
};

const transporter = nodemailer.createTransport(config.mailUrl);

transporter.verify((error: any) => {
  if (error) {
    console.log(error);
  }
});

await transporter.sendMail(message);
await transporter.sendMail(confirmation);
</script>

<template>
  <section class="grid place-content-center">
    <form
      @submit.prevent="register()"
      class="w-screen sm:w-[75vw] lg:w-[25vw] flex flex-col gap-4 px-3 mt-4 sm:mt-24 mb-24"
    >
      <slot v-if="stage.isStart()">
        <aside class="w-full h-fit grid place-content-center">
          <IconLogo />
        </aside>
        <h1 class="text-center">Rejestracja drużyny</h1>
        <p class="text-justify">
          Turniej odbędzie się 25 Maja 2024 na Kompleksie Boisk "Orlik" przy ulicy Ułanów 8 w Knurowie. Aby zapisać swoją drużynę na turniej koszykówki ulicznej Knurowski Streetball Kapitan musi wypełnienić formularz, a następnie potwierdzić go drogą e-mail. 
          <span>
            Wymogiem rejestracji jest akceptacja
            <NuxtLink
              external
              target="_blank"
              rel="noreferrer"
              to="https://docs.google.com/document/d/1vrdedsYvmEmL90KNvQ-AFux41rrgNRvQBvbsvgIJFY4/edit?usp=sharing"
              class="text-blood underline"
            >
              regulaminu.
            </NuxtLink>
          </span>
        </p>

        <aside class="w-full grid grid-flow-col gap-4">
          <ButtonBase @click="stage.next()" type="button"> Rozpocznij </ButtonBase>
        </aside>
      </slot>

      <slot v-if="stage.isTeam()">
        <h2 class="text-center">{{ `${stage.get()}/3` }} Dane drużyny</h2>

        <input
          v-model="data.name"
          name="name"
          type="text"
          :placeholder="$t(`routes.${routeName}.content.form.name`)"
          required
          class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
        />
        <aside class="w-full h-12 rounded-lg py-2 px-4 border-1 border-mid placeholder:text-mid">
          <select required v-model="data.category" class="bg-transparent w-full h-full outline-none">
            <option disabled :value="undefined">Kategoria</option>
            <option :value="Category.OPEN">Open (Bez limitu wieku)</option>
            <option :value="Category.SCHOOL">Szkolna (Roczniki 07+)</option>
          </select>
        </aside>
        <input
          v-model="data.email"
          name="email"
          type="email"
          :placeholder="$t(`routes.${routeName}.content.form.email`)"
          required
          class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
        />
        <input
          v-model="data.phone"
          name="phone"
          type="tel"
          :placeholder="$t(`routes.${routeName}.content.form.phone`)"
          min="99999999"
          max="999999999"
          required
          class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
        />

        <aside class="w-full grid grid-cols-2 gap-4">
          <ButtonBase @click="stage.previous()" type="button"> Cofnij </ButtonBase>
          <ButtonBase @click="stage.next()" type="button"> Dalej </ButtonBase>
        </aside>
      </slot>

      <slot v-if="stage.isPlayers()">
        <h2 class="text-center">{{ `${stage.get()}/3` }} Dane zawodników</h2>

        <fieldset v-for="number in 3" :key="number" class="w-full flex flex-col gap-4">
          <label>Dane Zawodnika {{ number }}</label>
          <input
            v-model="data.players[number - 1].first_name"
            name="first_name"
            :type="`${getInputType('first_name')}`"
            :placeholder="$t(`routes.${routeName}.content.form.first_name`)"
            required
            class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
          />
          <input
            v-model="data.players[number - 1].last_name"
            name="last_name"
            :type="`${getInputType('last_name')}`"
            :placeholder="$t(`routes.${routeName}.content.form.last_name`)"
            required
            class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
          />
          <input
            v-model="data.players[number - 1].age"
            name="age"
            :type="`${getInputType('age')}`"
            :placeholder="$t(`routes.${routeName}.content.form.age`)"
            min="13"
            max="99"
            required
            class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
          />
        </fieldset>

        <fieldset class="w-full flex flex-col gap-4">
          <label>Dane Zawodnika 4</label>
          <input
            v-model="data.players[3].first_name"
            name="first_name"
            :type="`${getInputType('first_name')}`"
            :placeholder="$t(`routes.${routeName}.content.form.first_name`)"
            class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
          />
          <input
            v-model="data.players[3].last_name"
            name="last_name"
            :type="`${getInputType('last_name')}`"
            :placeholder="$t(`routes.${routeName}.content.form.last_name`)"
            class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
          />
          <input
            v-model="data.players[3].age"
            name="age"
            :type="`${getInputType('age')}`"
            :placeholder="$t(`routes.${routeName}.content.form.age`)"
            min="13"
            max="99"
            class="w-full h-12 bg-transparent rounded-lg py-2 px-4 outline-none border-1 border-mid placeholder:text-mid focus:border-blood focus:text-blood focus:placeholder:text-blood"
          />
        </fieldset>

        <aside class="w-full grid grid-cols-2 gap-4">
          <ButtonBase @click="stage.previous()" type="button"> Cofnij </ButtonBase>
          <ButtonBase @click="stage.next()" type="button"> Dalej </ButtonBase>
        </aside>
      </slot>

      <slot v-if="stage.isSummary()">
        <h2 class="text-center">{{ `${stage.get()}/3` }} Podsumowanie</h2>

        <p>
          Sprawdź poprawność podanych danych przed wysłaniem formularza, pamiętaj o zapoznaniu się z regulaminem i
          potwierdzeniem formularza na podanym adresie e-mail! Jeśli napotkałeś problem skontakuj się z nami na
          <NuxtLink
            external
            target="_blank"
            rel="noreferrer"
            to="https://www.facebook.com/knury.knurow"
            class="text-blood underline"
          >
            Messengerze
          </NuxtLink>
          lub
          <NuxtLink
            external
            target="_blank"
            rel="noreferrer"
            to="https://www.instagram.com/knury.knurow"
            class="text-blood underline"
          >
            Instagramie!
          </NuxtLink>
        </p>

        <aside>
          <h3>Drużyna</h3>
          <ul>
            <li>
              <p class="flex justify-between">
                1.1 Nazwa
                <span @click="stage.setTeam()" class="text-blood underline hover:cursor-pointer">
                  {{ data.name ? data.name : "Uzupełnij" }}
                </span>
              </p>
            </li>
            <li>
              <p class="flex justify-between">
                1.2 Kategoria
                <span @click="stage.setTeam()" class="text-blood underline hover:cursor-pointer">
                  {{ !data.category ? "Uzupełnij" : categories[data.category - 1] }}
                </span>
              </p>
            </li>
            <li>
              <p class="flex justify-between">
                1.3 Adres e-mail
                <span @click="stage.setTeam()" class="text-blood underline hover:cursor-pointer">
                  {{ data.email ? data.email : "Uzupełnij" }}
                </span>
              </p>
            </li>
            <li>
              <p class="flex justify-between">
                1.4 Numer telefonu
                <span @click="stage.setTeam()" class="text-blood underline hover:cursor-pointer">
                  {{ data.phone ? data.phone : "Uzupełnij" }}
                </span>
              </p>
            </li>
          </ul>
        </aside>

        <aside>
          <h3>Zawodnicy</h3>
          <ul>
            <li>
              <p v-for="(player, number) in data.players" class="flex justify-between">
                2.{{ number + 1 }}
                {{ player.first_name ? player.first_name : "Imię" }}
                {{ player.last_name ? player.last_name : "Nazwisko" }}
                <span @click="stage.setPlayers()" class="text-blood underline hover:cursor-pointer">
                  {{ player.age !== undefined ? player.age : "Uzupełnij" }}
                </span>
              </p>
            </li>
          </ul>
        </aside>

        <label class="flex gap-2 items-center justify-end">
          <input v-model="accepted" type="checkbox" required class="accent-blood" />
          <span class="text-high text-sm text-right">
            Zatwierdzając akceptujesz
            <NuxtLink
              external
              target="_blank"
              rel="noreferrer"
              to="https://docs.google.com/document/d/1vrdedsYvmEmL90KNvQ-AFux41rrgNRvQBvbsvgIJFY4/edit?usp=sharing"
              class="text-blood underline"
            >
              regulamin
            </NuxtLink>
          </span>
        </label>

        <aside class="w-full grid grid-cols-2 gap-4">
          <ButtonBase @click="stage.previous()" type="button"> Cofnij </ButtonBase>
          <ButtonBase> Zatwierdź </ButtonBase>
        </aside>
      </slot>

      <slot v-if="stage.isSent()">
        <h3>Dziękujemy!</h3>
        <p>
          Wygląda na to, że poprawnie wypełniliście formularz swojej drużyny, sprawdź dokładnie swoją pocztę e-mail
          <span class="text-blood underline"> (SPAM również) </span>, powodzenia na turnieju już 25 Maja o 9:00!
        </p>
      </slot>
    </form>
  </section>
</template>
