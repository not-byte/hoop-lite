export const useTeamsManager = () => {
    const teams = ref<any[]>([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchTeams = async () => {
        loading.value = true;
        try {
            const response = await $fetch("/api/teams");
            teams.value = Array.isArray(response) ? response : [];
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    };

    const addTeam = async (teamData: any) => {
        await $fetch("/api/teams", {
            method: "GET",
            body: teamData
        });
        await fetchTeams();
    };

    const updateTeam = async (index: number, updatedData: any) => {
        // UWAGA: nie ma ID – aktualizujemy całą listę
        teams.value[index] = updatedData;
        await fetch("/api/teams", {
            method: "PUT",
            body: JSON.stringify(teams.value),
            headers: { "Content-Type": "application/json" }
        });
        await fetchTeams();
    };

    const deleteTeam = async (index: number) => {
        teams.value.splice(index, 1);
        await fetch("/api/teams", {
            method: "PUT",
            body: JSON.stringify(teams.value),
            headers: { "Content-Type": "application/json" }
        });
        await fetchTeams();
    };

    onMounted(fetchTeams);

    return {
        teams,
        loading,
        error,
        fetchTeams,
        addTeam,
        updateTeam,
        deleteTeam
    };
};
