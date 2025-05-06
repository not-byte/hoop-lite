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
const data = ref<Partial<Payload>>({
    category: 0,
    players: Array.from({ length: 4 }, () => ({}))
});

export const useStageManager = () => {
    function handler(): void {
        if (stage.value === Stage.SENT) {
            // api call
            return;
        }
    }

    function previous(): void {
        if (stage.value <= Stage.START) {
            return;
        }

        stage.value--;
    }

    function next(): void {
        if (stage.value >= Stage.SENT) {
            return;
        }

        stage.value++;

        handler();
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
