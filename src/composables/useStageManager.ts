enum Category {
    NOT_SELECTED,
    AMATEUR,
    PRO
}

enum Stage {
    START,
    TEAM,
    PLAYERS,
    SUMMARY,
    SENT
}

const stageFactory = (): Stage => Stage.START;

const dataFactory = (): Data => ({
    team: {
        name: "",
        category: Category.NOT_SELECTED,
        email: "",
        phone: undefined
    },
    players: Array.from({ length: 4 }, () => ({
        first_name: "",
        last_name: "",
        age: undefined
    })),
    accepted: false
});

const errorsFactory = (): Errors<Data> => ({
    team: {
        name: false,
        category: false,
        email: false,
        phone: false
    },
    players: Array.from({ length: 4 }, () => ({
        first_name: false,
        last_name: false,
        age: false
    })),
    accepted: true
});

const stage = ref<Stage>(stageFactory());

const data = ref<Data>(dataFactory());

const errors = ref<Errors<Data>>(errorsFactory());

function validate(): boolean {
    let isValid = true;

    switch (stage.value) {
        case Stage.TEAM: {
            const { team } = errors.value;
            const { team: teamData } = data.value;

            team.name = !teamData.name;
            team.category = !teamData.category;
            team.email =
                !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
                    teamData.email
                );
            team.phone = !/^\d{9}$/.test(`${teamData.phone}`);

            return !Object.values(team).includes(true);
        }

        case Stage.PLAYERS: {
            const { players } = errors.value;
            const { players: playerData } = data.value;

            playerData.forEach((player, index) => {
                const isLast = index === 3;
                const isEmpty =
                    !player.first_name && !player.last_name && !player.age;

                if (isLast && isEmpty) {
                    players[index] = {
                        first_name: false,
                        last_name: false,
                        age: false
                    };
                    return;
                }

                const playerErrors = {
                    first_name: !player.first_name.trim(),
                    last_name: !player.last_name.trim(),
                    age: !(
                        typeof player.age === "number" &&
                        player.age >= 10 &&
                        player.age <= 99
                    )
                };

                players[index] = playerErrors;

                if (Object.values(playerErrors).includes(true)) {
                    isValid = false;
                }
            });

            return isValid;
        }

        case Stage.SUMMARY:
            return data.value.accepted;

        default:
            return true;
    }
}

export const useStageManager = () => {
    function previous(): void {
        switch (stage.value) {
            case Stage.START:
            case Stage.SENT: {
                break;
            }
            default: {
                stage.value--;
                break;
            }
        }
    }

    async function next(): Promise<void> {
        switch (stage.value) {
            case Stage.START: {
                stage.value++;
                break;
            }
            case Stage.TEAM:
            case Stage.PLAYERS: {
                if (!validate()) {
                    break;
                }

                stage.value++;

                break;
            }
            case Stage.SUMMARY: {
                if (!validate()) {
                    break;
                }

                const response = await $fetch("/api/form", {
                    method: "POST",
                    body: data.value
                });

                if (!response) {
                    break;
                }

                if (response.status !== 202) {
                    break;
                }

                stage.value++;
                break;
            }
            case Stage.SENT: {
                break;
            }
        }
    }

    function set(value: Stage): void {
        stage.value = value;
    }

    function reset(): void {
        stage.value = stageFactory();
        data.value = dataFactory();
        errors.value = errorsFactory();
    }

    return {
        Category,
        Stage,
        stage,
        data,
        errors,
        previous,
        next,
        set,
        reset
    };
};

export default useStageManager;
