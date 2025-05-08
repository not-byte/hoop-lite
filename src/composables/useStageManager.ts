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

function validate() {
    switch (stage.value) {
        case Stage.TEAM: {
            // errors.value.team.name = !data.value.team.name;
            // errors.value.team.category = !data.value.team.category;
            // errors.value.team.email =
            //     !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
            //         data.value.team.email
            //     );
            // errors.value.team.phone =
            //     !/(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/.test(
            //         `${data.value.team.phone}`
            //     );

            return true;
        }
        case Stage.PLAYERS: {
            // const validate = () => {
            //     data.value.players.forEach((player, index) => {
            //         errors.value[index] = {
            //             first_name: !player.first_name.trim(),
            //             last_name: !player.last_name.trim(),
            //             age: !(
            //                 typeof player.age === "number" &&
            //                 player.age >= 10 &&
            //                 player.age <= 99
            //             )
            //         };
            //     });

            //     return !Object.values(errors.value[index]).includes(false);
            // };

            return true;
        }
        case Stage.SUMMARY: {
            return data.value.accepted;
        }
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
            case Stage.SENT: {
                break;
            }
            case Stage.TEAM:
            case Stage.PLAYERS:
            case Stage.SUMMARY: {
                if (!validate()) {
                    break;
                }
            }
            case Stage.TEAM:
            case Stage.PLAYERS: {
                stage.value++;

                break;
            }
            case Stage.SUMMARY: {
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
