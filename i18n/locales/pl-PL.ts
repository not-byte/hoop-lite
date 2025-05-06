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
        }
    }
} satisfies Locale;
