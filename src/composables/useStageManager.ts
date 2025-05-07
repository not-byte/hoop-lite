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

const stage = ref<Stage>(Stage.START);
const data = ref<Partial<Data>>({
    category: 0,
    players: Array.from({ length: 4 }, () => ({}))
});

export const useStageManager = () => {
    function previous(): void {
        switch (stage.value) {
            case (Stage.START, Stage.SENT):
                break;
            default: {
                stage.value--;
                break;
            }
        }
    }

    function next(): void {
        switch (stage.value) {
            case Stage.SUMMARY: {
                $fetch("/api/form", {
                    method: "POST"
                    // body: data.value
                })
                    .then(() => stage.value++)
                    .catch(console.error);

                break;
            }
            case Stage.SENT:
                break;
            default: {
                stage.value++;
                break;
            }
        }
    }

    function set(value: Stage): void {
        stage.value = value;
    }

    return {
        Category,
        Stage,
        stage,
        data,
        previous,
        next,
        set
    };
};

export default useStageManager;
