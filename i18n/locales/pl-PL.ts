export default {
    nuxtSiteConfig: {
        name: "Rejestracja",
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
            title: "Rejestracja",
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
            title: "O turnieju",
            description:
                "O {hour} zapraszamy wszystkich miłośników koszykówki ulicznej na wyjątkowe sportowe wydarzenie – {event} w formacie FIBA 3X3 organizowanym na odnowionym  kompleksie sportowym {address} w Knurowie.",
            content: {
                hour: "9:00",
                eventname: "Knurowski Streetball 2025",
                address: "ORLIK, ul. Ułanów 8",
                p1: {
                    title: "Faza zasadnicza (mecze w grupach)",
                    content:
                        "Około {hour} ruszy faza zasadnicza turnieju, zespoły zostaną przydzielone losowo do grup, z których wychodzą dwie zwycięskie.",
                    hour: "9:30"
                },

                p2: {
                    title: "Przewidziane atrakcje",
                    list: {
                        item1: {
                            label: "Dunk Contest",
                            description:
                                "{label} pokaz wsadów do kosza, który rozgrzeje publiczność!"
                        },
                        item2: {
                            label: "Konkurs rzutów za 3 punkty",
                            description:
                                "{label} prawdzenie celności i precyzji najlepszych strzelców"
                        },
                        item3: {
                            label: "Występ taneczny grupy EXTERIA",
                            description:
                                "{label} energiczny pokaz w wykonaniu lokalnej grupy tanecznej"
                        }
                    }
                },

                p3: {
                    title: "Zbiórka charytatywna",
                    content:
                        "Podczas wydarzenia prowadzona będzie zbiórka na rzecz podopiecznego {organization}. Zachęcamy wszystkich uczestników do wsparcia tej inicjatywy – każda złotówka ma znaczenie.",
                    organization: "Stowarzyszenia Cała Naprzód"
                },
                p4: {
                    title: "Strefa gastronomiczna",
                    beforeList:
                        "Na terenie wydarzenia będzie funkcjonować {zone}, w której w zamian za {donation} będzie można otrzymać:",
                    zone: "strefa gastronomiczna",
                    donation: "dobrowolną wpłatę",
                    list: {
                        item1: "dania z grilla",
                        item2: "świeżo parzoną kawę i herbatę",
                        item3: "orzeźwiającą lemoniadę",
                        item4: "domowe ciasta"
                    },
                    afterList:
                        "Całkowity dochód ze zbiórki zasili {goal} – wsparcie podopiecznego Stowarzyszenia Cała Naprzód.",
                    goal: "cel charytatywny"
                },
                p5: {
                    title: "Strefa dla dzieci",
                    content:
                        "Dla najmłodszych przygotowaliśmy specjalną {zone}, gdzie pod okiem animatora najmłodsi uczestnicy będą mogli aktywnie i bezpiecznie spędzić czas.",
                    zone: "strefę dziecięcą"
                },
                p6: {
                    title: "Bezpieczeństwo",
                    content:
                        "Nad bezpieczeństwem wszystkich obecnych będzie czuwać {group}, zapewniająca pełną opiekę medyczną podczas całego wydarzenia.",
                    group: "Grupa Ratownicza SAFETY Gliwice"
                },
                p7: {
                    title: "",
                    content:
                        "Dla zwycięzców turnieju przewidziane są {prizes}.",
                    prizes: "nagrody"
                },
                p8: {
                    title: "Informacje dodatkowe",
                    content:
                        "Każdy zawodnik otrzyma {water}, aby zadbać o odpowiednie nawodnienie w trakcie rozgrywek.",
                    water: "wodę mineralną"
                },
                p9: {
                    content:
                        "Całe wydarzenie będzie {photo}, aby każdy mógł odnaleźć swoje sportowe chwile.",
                    photo: "profesjonalnie dokumentowane przez fotografów"
                },
                p10: {
                    title: "Zakończenie",
                    content:
                        "Zakończenie wydarzenia przewidziane jest na godzinę {hour}.",
                    hour: "około 17:00"
                },
                p11: {
                    content:
                        "{eventname} to nie tylko sportowa rywalizacja, ale także dzień pełen dobrej zabawy, pozytywnych emocji i integracji społeczności lokalnej. Zapraszamy wszystkich – zawodników, kibiców, rodziny i przyjaciół – do wspólnego świętowania pasji do koszykówki.",
                    eventname: "Knurowski Streetball"
                }
            }
        }
    }
} satisfies Locale;
