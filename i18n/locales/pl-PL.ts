export default {
    nuxtSiteConfig: {
        name: "Rejestracja 3X3",
        description:
            "Już 1 czerwca organizujemy dla was kolejną edycję Knurowskiego Streetballa! Jak co roku zobaczymy się na kompleksie sportowym ORLIK ul. Ułanów 8 w Knurowie. Aby zapisać swoją drużynę na turniej koszykówki ulicznej Knurowski Streetball 2025 kapitan musi wypełnienić poniższy formularz."
    },
    components: {
        button: {
            start: "Rozpocznij",
            next: "Dalej",
            previous: "Cofnij",
            submit: "Zatwierdź"
        },
        input: {
            fill: "Uzupełnij",
            submit: "Zatwierdzając akceptujesz {regulations}",
            team: {
                name: "Nazwa drużyny",
                email: "Adres e-mail",
                phone: "Numer telefonu"
            },
            player: {
                label: "Dane zawodnika",
                first_name: "Imię",
                last_name: "Nazwisko",
                age: "Wiek"
            }
        },
        select: {
            category: {
                "0": "Kategoria rozgrywek",
                "1": "Amatorska",
                "2": "Profesjonalna"
            }
        }
    },
    pages: {
        index: {
            title: "Rejestracja 3X3",
            description:
                "Już 1 Czerwca organizujemy dla was kolejną edycję Knurowskiego Streetballa! Jak co roku zobaczymy się na kompleksie sportowym ORLIK ul. Ułanów 8 w Knurowie. Aby zapisać swoją drużynę na turniej koszykówki ulicznej Knurowski Streetball 2025 kapitan musi wypełnienić poniższy formularz.",
            content: {
                form: {
                    start: {
                        title: "Rejestracja 3X3",
                        description:
                            "Aby zapisać swoją drużynę na turniej koszykówki ulicznej 3X3 Knurowski Streetball 2025 kapitan zespołu musi zaakceptować {regulations} oraz wypełnienić poniższy formularz! Więcej szczegółów o imprezie znajdziecie {link}",
                        regulations: "regulamin uczestnictwa",
                        link: "tutaj."
                    },
                    team: {
                        title: "Dane drużyny"
                    },
                    players: {
                        title: "Dane zawodników"
                    },
                    summary: {
                        title: "Podsumowanie",
                        description:
                            " Sprawdź poprawność podanych danych przed wysłaniem formularza, pamiętaj o zapoznaniu się z regulaminem i potwierdzeniem formularza na podanym adresie e-mail! Jeśli napotkałeś problem skontakuj się z nami na {messenger} lub {instagram}",
                        messenger: "Messengerze",
                        instagram: "Instagramie!",
                        subtitle: {
                            team: "Drużyna",
                            players: "Zawodnicy"
                        }
                    },
                    sent: {
                        title: "Zgłoszenie wysłane!",
                        description:
                            "Wygląda na to, że poprawnie wypełniliście formularz swojej drużyny, wkrótce poinformujemy o potwierdzeniu danych {additional_info}, widzimy się na turnieju już 1 czerwca! Więcej szczegółów o imprezie znajdziecie {link}",
                        additional_info:
                            "(UWAGA! Nie oznacza to zapewnionego miejsca na turnieju, sprawdźcie również SPAM poczty)"
                    }
                }
            }
        },
        admin: {
            title: "Lista drużyn",
            description:
                "Pozwala na zarządzanie zapisanymi drużynami, dodawanie zatwierdzień lub usuwanie.",
            content: {}
        },
        about: {
            title:"O Turnieju",
            description: "Już od godziny {hour} zapraszamy wszystkich miłośników koszykówki ulicznej na wyjątkowe sportowe wydarzenie – {eventname} Turniej rozpocznie się uroczystą przemową {president}, która oficjalnie otworzy zmagania na boisku.",
            hour: "9:00",
            eventname: "KNUROWSKI STREETBALL",
            president: "Prezydenta Miasta Knurowa – Tomasza Rzepy",
            content: {
                
                p1:{
                    title:"FAZA ZASADNICZNA TURNIEJU (mecze w grupach",
                    content:
                        "Około {hour} ruszy faza zasadnicza turnieju. Na uczestników czekają zacięte mecze rozgrywane w duchu sportowej rywalizacji. Emocje, zaangażowanie i widowiskowe zagrania gwarantowane!",
                        hour: "9:30",
                },
                    
                p2: {
                    title: "DODATKOWE ATRAKCJE",
                    list: {
                      item1: {
                        label: "Dunk Contest",
                        description: "{label} pokaz wsadów do kosza, który rozgrzeje publiczność!"
                      },
                      item2: {
                        label: "Konkurs rzutów za 3 punkty",
                        description: "{label} prawdzenie celności i precyzji najlepszych strzelców"
                      },
                      item3: {
                        label: "Występ taneczny grupy EXTERIA",
                        description: "{label} energiczny pokaz w wykonaniu lokalnej grupy tanecznej"
                      }
                    }
                  },
                  
                p3: {
                    title: "ZBIÓRKA CHARYTATYWNA",
                    content: "Podczas wydarzenia prowadzona będzie zbiórka na rzecz podopiecznego {organization}. Zachęcamy wszystkich uczestników do wsparcia tej inicjatywy – każda złotówka ma znaczenie.",
                    organization: "Stowarzyszenia Cała Naprzód"
                  },
                  p4: {
                    title: "STREFA GASTRO – WSZYSTKO ZA dobrowolną wrzutkę do puszki",
                    beforeList: "Na terenie wydarzenia będzie funkcjonować {zone}, w której w zamian za {donation} będzie można otrzymać:",
                    zone: "strefa gastronomiczna",
                    donation: "dobrowolną wpłatę",
                    list: {
                      item1: "dania z grilla",
                      item2: "świeżo parzoną kawę i herbatę",
                      item3: "orzeźwiającą lemoniadę",
                      item4: "domowe ciasta"
                    },
                    afterList: "Całkowity dochód ze zbiórki zasili {goal} – wsparcie podopiecznego Stowarzyszenia Cała Naprzód.",
                    goal: "cel charytatywny"
                  },
                  p5: {
                    title: "STREFA DLA DZIECI",
                    content: "Dla najmłodszych przygotowaliśmy specjalną {zone}, gdzie pod okiem animatora najmłodsi uczestnicy będą mogli aktywnie i bezpiecznie spędzić czas.",
                    zone: "strefę dziecięcą"
                  },
                  p6: {
                    title: "BEZPIECZEŃSTWO",
                    content: "Nad bezpieczeństwem wszystkich obecnych będzie czuwać {group}, zapewniająca pełną opiekę medyczną podczas całego wydarzenia.",
                    group: "Grupa Ratownicza SAFETY Gliwice"
                  },
                  p7: {
                    title: "NAGRODY",
                    content: "Dla zwycięzców turnieju przewidziane są {prizes}.",
                    prizes: "nagrody"
                  },
                  p8: {
                    title: "DLA UCZESTNIKÓW",
                    content: "Każdy zawodnik otrzyma {water}, aby zadbać o odpowiednie nawodnienie w trakcie rozgrywek.",
                    water: "wodę mineralną"
                  },
                  p9: {
                    title: "DOKUMENTACJA WYDARZENIA",
                    content: "Całe wydarzenie będzie {photo}, aby każdy mógł odnaleźć swoje sportowe chwile.",
                    photo: "profesjonalnie dokumentowane przez fotografów"
                  },
                  p10: {
                    title: "ZAKOŃCZENIE",
                    content: "Zakończenie wydarzenia przewidziane jest na godzinę {hour}.",
                    hour: "około 17:00"
                  },
                  p11: {
                    content: "{eventname} to nie tylko sportowa rywalizacja, ale także dzień pełen dobrej zabawy, pozytywnych emocji i integracji społeczności lokalnej. Zapraszamy wszystkich – zawodników, kibiców, rodziny i przyjaciół – do wspólnego świętowania pasji do koszykówki.",
                    eventname: "KNUROWSKI STREETBALL"
                  }
                  
            }
        }
    }
} satisfies Locale;
